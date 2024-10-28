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

    // starting transition to cancel both parent & return bookings
    await db.$transaction(async (tx) => {
      //cancelling the main booking
      await tx.booking.update({
        where: {
          id: bookingId,
        },
        data: {
          status: "cancelled",
        },
      });

      //cancelling all the return bookings

      if (booking.returnBookings.length > 0) {
        await tx.booking.updateMany({
          where: {
            id: {
              in: booking.returnBookings.map((rb) => rb.id),
            },
          },
          data: {
            status: "cancelled",
          },
        });
      }
    });

    revalidatePath("/booking");
    return {
      success: true,
      message: "Booking and associated returns cancelled successfully",
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
