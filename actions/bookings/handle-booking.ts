"use server";

import { checkUserAccess } from "@/lib/auth-gaurd";
import { db } from "@/lib/db";
import { BookingStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface handleBookingParams {
  bookingId: string;
  action: "cancel" | "complete" | "dismiss";
  remarks?: string;
}

export const handleBooking = async ({
  bookingId,
  action,
  remarks,
}: handleBookingParams) => {
  try {
    const user = await checkUserAccess();

    //Verifying action permissions based on user role

    if (action !== "cancel" && user.role !== "ADMIN") {
      throw new Error("Permission denied for this action.");
    }
    //finding booking & its return booking
    const where =
      user.role === "ADMIN"
        ? { id: bookingId }
        : { id: bookingId, userId: user.id };

    const booking = await db.booking.findFirst({
      where,
      include: {
        returnBookings: true,
      },
    });

    if (!booking) {
      throw new Error("Booking not found!");
    }

    const statusMap = {
      cancel: BookingStatus.cancelled,
      complete: BookingStatus.completed,
      dismiss: BookingStatus.dismissed,
    };

    const newStatus = statusMap[action];
    let message;
    await db.$transaction(async (tx) => {
      await tx.booking.update({
        where: {
          id: bookingId,
        },
        data: {
          status: newStatus,
          ...(remarks && action !== "dismiss" ? { remarks } : {}),
        },
      });

      //for cancellation , handling return bookings
      if (
        action === "cancel" ||
        (action === "dismiss" && booking.returnBookings.length > 0)
      ) {
        const returnBookingIds = booking.returnBookings.map((rb) => rb.id);
        await tx.booking.updateMany({
          where: {
            id: { in: returnBookingIds },
          },
          data: {
            status: BookingStatus.cancelled,
            ...(remarks ? { remarks } : {}),
          },
        });
        const uncancelledBookings = booking.returnBookings.filter(
          (rb) => rb.status !== BookingStatus.cancelled
        );

        message =
          uncancelledBookings.length > 0
            ? `Booking and associated return bookings ${action}ed successfully`
            : `Booking ${action}ed successfully & its return bookings were already cancelled`;
      } else {
        message = `Booking ${action}ed successfully`;
      }
    });
    revalidatePath("/booking");
    return {
      success: true,
      message,
    };
  } catch (error) {
    console.error(`Error ${action}ing booking:`, error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : `Failed to ${action} booking`,
    };
  }
};
