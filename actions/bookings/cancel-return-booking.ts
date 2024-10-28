"use server";

import { checkUserAccess } from "@/lib/auth-gaurd";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const cancelReturnBooking = async (returnBookingId: string) => {
  try {
    const user = await checkUserAccess();
    let where;
    if (user.role === "ADMIN") {
      where = {
        id: returnBookingId,
        isReturnBooking: true,
      };
    } else {
      where = {
        id: returnBookingId,
        isReturnBooking: true,
        userId: user.id,
      };
    }
    const returnBooking = await db.booking.findFirst({
      where,
    });
    if (!returnBooking) {
      throw new Error("Return booking not found!");
    }
    await db.booking.update({
      where: {
        id: returnBookingId,
      },
      data: {
        status: "cancelled",
      },
    });
    revalidatePath("/booking");
    return {
      success: true,
      message: "Return booking cancelled successfully!",
    };
  } catch (error) {
    console.error("Error cancelling return booking:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to cancel return booking",
    };
  }
};
