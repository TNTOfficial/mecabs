"use server";

import { currentUser } from "@/lib/auth";
import { getBookings } from "./get-bookings";
import { BookingTypes } from "@prisma/client";
import {
  BookingsResponse,
  BookingFilters,
} from "@/features/admin/booking/types";

export async function getUserBookings(
  page: number = 1,
  limit: number = 10,
  filters: BookingFilters = { bookingType: BookingTypes.booking }
): Promise<BookingsResponse> {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        bookings: [],
        total: 0,
        totalPages: 0,
        error: "Unauthorized",
      };
    }

    const result = await getBookings({
      page,
      limit,
      filters,
      userId: user.id,
      phoneNumber: user.phoneNumber,
      email: user.email ?? "",
    });

    return result;
  } catch (error) {
    console.error("Error in getUserBookings:", error);
    return {
      success: false,
      bookings: [],
      total: 0,
      totalPages: 0,
      error: "Failed to fetch bookings",
    };
  }
}
