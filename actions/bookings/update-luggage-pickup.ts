"use server";

import { db } from "@/lib/db"; // Adjust the import path as needed
import { z } from "zod";
import { luggageUpdateSchema } from "@/schemas/schema";

interface UpdateLuggagePickupResult {
  success?: string;
  error?: string;
}

export const updateLuggagePickup = async (
  data: z.infer<typeof luggageUpdateSchema> & { bookingId: string }
): Promise<UpdateLuggagePickupResult> => {
  try {
    // Validate input
    const validatedData = luggageUpdateSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        error: "Invalid input. Please check your data.",
      };
    }

    // Update booking in the database
    await db.booking.update({
      where: { id: data.bookingId },
      data: {
        isLuggagePicked: validatedData.data.isLuggagePicked,
        luggageRemarks: validatedData.data.luggageRemarks || null,
      },
    });

    return {
      success: "Luggage pickup information updated successfully",
    };
  } catch (error) {
    console.error("Error updating luggage pickup:", error);
    return {
      error: "An unexpected error occurred while updating luggage pickup.",
    };
  }
};
