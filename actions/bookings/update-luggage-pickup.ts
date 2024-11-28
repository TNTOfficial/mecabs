"use server";

import { db } from "@/lib/db"; // Adjust the import path as needed
import { z } from "zod";
import { luggageUpdateSchema } from "@/schemas/schema";
import { ManageBookingResponse } from "@/features/frontend/manage-bookings/types";

export const updateLuggagePickup = async (
  data: z.infer<typeof luggageUpdateSchema> & { bookingId: string }
): Promise<ManageBookingResponse> => {
  try {
    // Validate input
    const validatedData = luggageUpdateSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        error: "Invalid input. Please check your data.",
      };
    }

    // Update booking in the database
    const booking = await db.booking.update({
      where: { id: data.bookingId },
      data: {
        isLuggagePicked: validatedData.data.isLuggagePicked,
        luggageRemarks: validatedData.data.luggageRemarks || null,
      },
    });

    const formattedBooking = {
      id: booking.id,
      passengerName: booking.passengerName,
      pickDateTime: booking.pickupDateTime,
      phoneNumber: booking.phoneNumber,
      pickupLocation: booking.pickupLocation,
      isLuggagePicked: booking.isLuggagePicked,
      luggageRemarks: booking.luggageRemarks,
    };

    return {
      success: "Luggage pickup information updated successfully",
      booking: formattedBooking,
    };
  } catch (error) {
    console.error("Error updating luggage pickup:", error);
    return {
      error: "An unexpected error occurred while updating luggage pickup.",
    };
  }
};
