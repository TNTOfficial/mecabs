"use server";

import { NotificationPayload } from "@/features/admin/booking/types";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendEmailNotification } from "@/lib/mail";
import { sendSMSNotification, sendWhatsAppNotification } from "@/lib/twilio";
import { BookingSchema } from "@/schemas/schema";
import { Booking } from "@prisma/client";
import { revalidatePath } from "next/cache";
import * as z from "zod";

// Define the updateBooking function
export const updateBooking = async (
  bookingId: string,
  values: z.infer<typeof BookingSchema>
) => {
  try {
    // Validate the incoming data against the schema
    const validatedFields = BookingSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }

    // Get the current user
    const user = await currentUser();
    if (!user) {
      return { error: "Unauthorized" };
    }

    // Try to find the booking either by userId or phoneNumber
    const existingBooking = await db.booking.findFirst({
      where: {
        id: bookingId,
        OR: [{ userId: user.id }, { phoneNumber: user.phoneNumber }],
      },
    });

    if (!existingBooking) {
      return { error: "Booking not found or unauthorized" };
    }

    // Check if the booking is in an editable state
    if (
      ["completed", "cancelled", "dismissed"].includes(existingBooking.status)
    ) {
      return {
        error: "Cannot edit a completed, cancelled, or dismissed booking",
      };
    }

    // Start a transaction to update the booking and create an audit log entry
    const updatedBooking = await db.$transaction(async (tx) => {
      // Update the booking
      const booking = await tx.booking.update({
        where: {
          id: bookingId,
        },
        data: {
          ...validatedFields.data,
          userId: user.id,
          parentBookingId: validatedFields.data.parentBookingId || null,
          pickupDateTime:
            validatedFields.data.bookingMode === "now"
              ? new Date().toISOString()
              : validatedFields.data.pickupDateTime!,
          updatedAt: new Date().toISOString(),
        },
      });

      // Create an audit log entry
      await tx.auditLog.create({
        data: {
          action: "BOOKING_UPDATED",
          entityId: booking.id,
          entityType: "booking",
          userId: user.id,
          details: {
            before: existingBooking,
            after: booking,
            changes: getChangedFields(existingBooking, booking),
          },
        },
      });

      return booking;
    });

    //sending notification
    const phoneNotificationPayload: NotificationPayload = {
      to: validatedFields.data.phoneNumber || (user?.phoneNumber as string),
      bookingId: updatedBooking.id,
      passengerName: updatedBooking.passengerName,
      pickupDateTime: updatedBooking.pickupDateTime,
      pickupLocation: updatedBooking.pickupLocation,
      dropoffLocation: updatedBooking.dropoffLocation || undefined,
      status: updatedBooking.status,
      type: "update",
      // price: updatedBooking.price || undefined,
      // vehicleType: updatedBooking.vehicleType,
      // notes: updatedBooking.notes || undefined,
    };
    const whatsAppNotificationPayload: NotificationPayload = {
      to: validatedFields.data.phoneNumber || (user?.phoneNumber as string),
      bookingId: updatedBooking.id,
      passengerName: updatedBooking.passengerName,
      pickupDateTime: updatedBooking.pickupDateTime,
      pickupLocation: updatedBooking.pickupLocation,
      dropoffLocation: updatedBooking.dropoffLocation || undefined,
      status: updatedBooking.status,
      type: "update",
      price: updatedBooking.price || undefined,
      vehicleType: updatedBooking.vehicleType,
      notes: updatedBooking.notes || undefined,
    };
    const emailNotificationPayload: NotificationPayload = {
      to: validatedFields.data.email! || (user?.email as string),
      bookingId: updatedBooking.id,
      passengerName: updatedBooking.passengerName,
      pickupDateTime: updatedBooking.pickupDateTime,
      pickupLocation: updatedBooking.pickupLocation,
      dropoffLocation: updatedBooking.dropoffLocation || undefined,
      status: updatedBooking.status,
      type: "create",
      link:
        updatedBooking.pickupLocation.toLowerCase().includes("airport") &&
        updatedBooking.bookingMode === "later"
          ? "http://localhost:3000/manage-bookings"
          : "",
      code:
        updatedBooking.pickupLocation.toLowerCase().includes("airport") &&
        updatedBooking.bookingMode === "later"
          ? updatedBooking.code!
          : "",
      // price: updatedBooking.price || undefined,
      // vehicleType: updatedBooking.vehicleType,
      // notes: updatedBooking.notes || undefined,
    };

    await sendWhatsAppNotification(whatsAppNotificationPayload);
    if (updatedBooking.phoneNumber.startsWith("+61")) {
      await sendSMSNotification(phoneNotificationPayload);
    } else {
      await sendEmailNotification(emailNotificationPayload);
    }
    // Revalidate related paths
    revalidatePath("/bookings");
    return {
      success: "Booking updated successfully!",
      bookingId: updatedBooking.id,
    };
  } catch (error) {
    console.error("BOOKING_UPDATE_ERROR", error);
    return { error: "Something went wrong!" };
  }
};

// Helper to compare the changes between the old and new booking
function getChangedFields(oldBooking: Booking, newBooking: Booking) {
  const changes: Record<string, { old: unknown; new: unknown }> = {};

  (Object.keys(newBooking) as Array<keyof Booking>).forEach((key) => {
    if (oldBooking[key] !== newBooking[key]) {
      changes[key] = {
        old: oldBooking[key],
        new: newBooking[key],
      };
    }
  });

  return JSON.stringify(changes);
}
