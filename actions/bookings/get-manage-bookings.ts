"use server";
import { ManageBookingResponse } from "@/features/frontend/manage-bookings/types";
import { db } from "@/lib/db";
import { manageBookingSchema } from "@/schemas/schema";
import * as z from "zod";

export const getManageBookings = async (
  values: z.infer<typeof manageBookingSchema>
): Promise<ManageBookingResponse> => {
  try {
    const validatedFields = manageBookingSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }

    const { bookingId } = validatedFields.data;

    // Build dynamic where clause to handle potential null name

    const booking = await db.booking.findUnique({
      where: {
        id: bookingId,
        pickupLocation: {
          startsWith: "airport",
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        pickupDateTime: true,
        passengerName: true,
        phoneNumber: true,
        pickupLocation: true,
        isLuggagePicked: true,
        luggageRemarks: true,
      },
    });

    if (!booking) {
      return { error: "No matching booking found with the provided details." };
    }

    // Transform the booking to match the ManageBooking interface
    const formattedBooking = {
      id: booking.id,
      passengerName: booking.passengerName,
      pickDateTime: booking.pickupDateTime,
      phoneNumber: booking.phoneNumber,
      // Optional additional fields
      pickupLocation: booking.pickupLocation,
      isLuggagePicked: booking.isLuggagePicked,
      luggageRemarks: booking.luggageRemarks,
    };

    return {
      success: `Booking with ID ${booking.id} found successfully!`,
      booking: formattedBooking,
    };
  } catch (error) {
    console.error("Error fetching booking:", error);
    return {
      error: "An unexpected error occurred while searching for the booking.",
    };
  }
};
