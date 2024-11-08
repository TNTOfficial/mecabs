"use server";

import { checkUserAccess } from "@/lib/auth-gaurd";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const cancelBooking = async (bookingId: string) => {
  try {
    const user = await checkUserAccess();

    // Finding the booking & its return booking
    let where;
    if (user.role === "ADMIN") {
      where = {
        id: bookingId,
      };
    } else {
      where = {
        id: bookingId,
        userId: user.id,
      };
    }
    const booking = await db.booking.findFirst({
      where,
      include: {
        returnBookings: true,
      },
    });

    if (!booking) {
      throw new Error("Booking not found!");
    }

    let message;

    // Start transaction to cancel both main and return bookings
    await db.$transaction(async (tx) => {
      // Cancel the main booking
      await tx.booking.update({
        where: {
          id: bookingId,
        },
        data: {
          status: "cancelled",
        },
      });

      // Cancel any associated return bookings if they exist
      if (booking.returnBookings.length > 0) {
        const returnBookingIds = booking.returnBookings.map((rb) => rb.id);

        // Update only return bookings that are not already cancelled
        await tx.booking.updateMany({
          where: {
            id: {
              in: returnBookingIds,
            },
            status: {
              not: "cancelled",
            },
          },
          data: {
            status: "cancelled",
          },
        });

        // Check if any return bookings were not cancelled initially
        const uncanceledReturnBookings = booking.returnBookings.filter(
          (rb) => rb.status !== "cancelled"
        );

        // Set the message based on the cancellation outcome
        if (uncanceledReturnBookings.length > 0) {
          message =
            "Booking and associated return bookings cancelled successfully";
        } else {
          message =
            "Booking cancelled successfully & its return bookings were already cancelled";
        }
      } else {
        message = "Booking cancelled successfully";
      }
    });

    revalidatePath("/booking");

    return {
      success: true,
      message,
    };
  } catch (error) {
    console.error("Error cancelling booking:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to cancel booking",
    };
  }
};
