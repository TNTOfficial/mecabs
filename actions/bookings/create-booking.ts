"use server";

import { BookingSchema } from "@/schemas/schema";
import { db } from "@/lib/db";
import * as z from "zod";
import { currentUser } from "@/lib/auth";

export const createBooking = async (values: z.infer<typeof BookingSchema>) => {
  try {
    const validatedFields = BookingSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }

    const user = await currentUser();

    if (!user?.id) {
      return { error: "Unauthorized" };
    }

    const booking = await db.booking.create({
      data: {
        userId: user.id,
        ...validatedFields.data,
        status: "active",
        pickupDateTime:
          validatedFields.data.bookingMode === "now"
            ? new Date()
            : validatedFields.data.pickupDateTime!,
      },
    });
 
    // 1. Send confirmation email
    // 2. Send SMS notification
    // 3. Notify nearby drivers
    // 4. Create payment intent if required

    return {
      success: "Booking created successfully!",
      bookingId: booking.id,
    };
  } catch (error) {
    console.error("BOOKING_ERROR", error);
    return { error: "Something went wrong!" };
  }
};
