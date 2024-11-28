"use server";

import { BookingSchema } from "@/schemas/schema";
import { db } from "@/lib/db";
import * as z from "zod";
import { currentUser } from "@/lib/auth";
import { getUserByPhone } from "@/utils/user";
import { BookingStatus, Prisma, VehicleType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NotificationPayload } from "@/features/admin/booking/types";
import { sendSMSNotification, sendWhatsAppNotification } from "@/lib/twilio";
import { sendEmailNotification } from "@/lib/mail";

// Updated type to match schema requirements
type CreateBookingData = Omit<
  Prisma.BookingUncheckedCreateInput,
  "id" | "createdAt" | "updatedAt"
>;

export const createBooking = async (values: z.infer<typeof BookingSchema>) => {
  try {
    const validatedFields = BookingSchema.safeParse(values);
    console.log(validatedFields);

    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }

    const user = await currentUser();
    let bookingUserId = user?.id || null;
    let leadId: string | undefined = "";

    //if  unauthenticated user then chceking if entered phone number is linked to any user
    if (!bookingUserId) {
      const existingUser = await getUserByPhone(
        validatedFields.data.phoneNumber
      );
      if (existingUser) {
        bookingUserId = existingUser.id;
      }
    }

    const booking = await db.$transaction(async (tx) => {
      // Updated booking data to include all required fields
      const bookingData: CreateBookingData = {
        userId: bookingUserId,
        status: BookingStatus.active,
        pickupDateTime:
          validatedFields.data.bookingMode === "now"
            ? new Date()
            : validatedFields.data.pickupDateTime!,
        bookingType: validatedFields.data.bookingType,
        isReturnBooking: validatedFields.data.isReturnBooking,
        bookingMode: validatedFields.data.bookingMode,
        passengerName: validatedFields.data.passengerName,
        phoneNumber: validatedFields.data.phoneNumber,
        pickupLocation: validatedFields.data.pickupLocation!,
        dropoffLocation: validatedFields.data.dropoffLocation,
        vehicleType: validatedFields.data.vehicleType as VehicleType,
        // Added required coordinates
        pickupCoordinates: validatedFields.data.pickupCoordinates || {
          lat: 0,
          lng: 0,
        },

        dropoffCoordinates: validatedFields.data.dropoffCoordinates,
        // Optional fields with defaults
        babySeat: validatedFields.data.babySeat || false,
        price: validatedFields.data.price,
        // paymentMethod: validatedFields.data.paymentMethod,
        // paymentStatus: validatedFields.data.paymentStatus,
        // paymentIntentId: validatedFields.data.paymentIntentId,
        flightNumber: validatedFields.data.flightNumber,
        notes: validatedFields.data.notes,
        remarks: validatedFields.data.remarks,
        hours: validatedFields.data.hours,
        recipientName: validatedFields.data.recipientName,
        parentBookingId: validatedFields.data.parentBookingId,
        email: validatedFields.data.email,
        priceMode: validatedFields.data.priceMode,
        code: validatedFields.data.code,
      };

      const booking = await tx.booking.create({
        data: bookingData,
      });

      //if no authenticated or assciated user , checking for existing lead
      if (!bookingUserId) {
        const existingLead = await tx.leads.findFirst({
          where: {
            phoneNumber: validatedFields.data.phoneNumber,
          },
        });
        if (!existingLead) {
          const lead = await tx.leads.create({
            data: {
              phoneNumber: validatedFields.data.phoneNumber,
              assciatedBookingId: booking.id,
            },
          });
          leadId = lead.id;
        } else {
          leadId = "";
        }
      }

      //If user is authenticated & has no phone number ,updating it
      if (user && !user?.phoneNumber) {
        await tx.user.update({
          where: {
            id: user?.id,
          },
          data: {
            phoneNumber: validatedFields.data.phoneNumber,
          },
        });
      }

      // Create audit log for booking creation
      await tx.auditLog.create({
        data: {
          action: "BOOKING_CREATED",
          entityId: booking.id,
          entityType: "booking",
          userId: user?.id || null,
          details: {
            before: booking,
            after: booking,
          },
        },
      });

      return { booking, leadId };
    });

    const phoneNotificationPayload: NotificationPayload = {
      to: validatedFields.data.phoneNumber || (user?.phoneNumber as string),
      bookingId: booking.booking.id,
      passengerName: booking.booking.passengerName,
      pickupDateTime: booking.booking.pickupDateTime,
      pickupLocation: booking.booking.pickupLocation,
      dropoffLocation: booking.booking.dropoffLocation || undefined,
      status: booking.booking.status,
      type: "create",
      link:
        booking.booking.pickupLocation.toLowerCase().includes("airport") &&
        booking.booking.bookingMode === "later"
          ? `http://localhost:3000/manage-bookings`
          : "",
      code:
        booking.booking.pickupLocation.toLowerCase().includes("airport") &&
        booking.booking.bookingMode === "later"
          ? booking.booking.code!
          : "",
    };
    const whatsAppNotificationPayload: NotificationPayload = {
      to: validatedFields.data.phoneNumber || (user?.phoneNumber as string),
      bookingId: booking.booking.id,
      passengerName: booking.booking.passengerName,
      pickupDateTime: booking.booking.pickupDateTime,
      pickupLocation: booking.booking.pickupLocation,
      dropoffLocation: booking.booking.dropoffLocation || undefined,
      status: booking.booking.status,
      type: "create",
      link:
        booking.booking.pickupLocation.toLowerCase().includes("airport") &&
        booking.booking.bookingMode === "later"
          ? `http://localhost:3000/manage-bookings`
          : "",
      code:
        booking.booking.pickupLocation.toLowerCase().includes("airport") &&
        booking.booking.bookingMode === "later"
          ? booking.booking.code!
          : "",
      price: booking.booking.price || undefined,
      vehicleType: booking.booking.vehicleType,
      notes: booking.booking.notes || undefined,
    };

    const emailNotificationPayload: NotificationPayload = {
      to: validatedFields.data.email! || (user?.email as string),
      bookingId: booking.booking.id,
      passengerName: booking.booking.passengerName,
      pickupDateTime: booking.booking.pickupDateTime,
      pickupLocation: booking.booking.pickupLocation,
      dropoffLocation: booking.booking.dropoffLocation || undefined,
      status: booking.booking.status,
      type: "create",
      link:
        booking.booking.pickupLocation.toLowerCase().includes("airport") &&
        booking.booking.bookingMode === "later"
          ? "http://localhost:3000/manage-bookings"
          : "",
      code:
        booking.booking.pickupLocation.toLowerCase().includes("airport") &&
        booking.booking.bookingMode === "later"
          ? booking.booking.code!
          : "",
    };
    await sendWhatsAppNotification(whatsAppNotificationPayload);
    if (booking.booking.phoneNumber.startsWith("+61")) {
      await sendSMSNotification(phoneNotificationPayload);
    } else {
      await sendEmailNotification(emailNotificationPayload);
    }
    revalidatePath("/bookings");

    // Return success with booking ID and lead ID for email prompt
    return {
      success: "Booking created successfully!",
      bookingId: booking.booking.id,
      bookingType: booking.booking.bookingType,
      bookingMode: booking.booking.bookingMode,
      leadId: leadId,
      airportPickup: booking.booking.pickupLocation
        .toLowerCase()
        .includes("airport"),
    };
  } catch (error) {
    console.error("BOOKING_ERROR", error);
    return { error: "Something went wrong!" };
  }
};
