import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { BookingsResponse, BookingFilters } from "@/features/booking/types";
import { checkUserAccess } from "@/lib/auth-gaurd";

interface GetBookingParams {
  page: number;
  limit: number;
  filters: BookingFilters;
  userId?: string;
}

export const getBookings = async ({
  page,
  limit,
  filters,
  userId,
}: GetBookingParams): Promise<BookingsResponse> => {
  try {
    const user = await checkUserAccess();
    const where: Prisma.BookingWhereInput = {
      // only filtering by userId if user is not admin
      ...(user.role !== "ADMIN" && { userId }),
      ...(filters.search && {
        OR: [
          {
            passengerName: {
              contains: filters.search,
              mode: "insensitive",
            },
          },
          {
            pickupLocation: {
              contains: filters.search,
              mode: "insensitive",
            },
          },
          {
            dropoffLocation: {
              contains: filters.search,
              mode: "insensitive",
            },
          },
        ],
      }),
      ...(filters.status && { status: filters.status }),
      ...(filters.vehicleType && { vehicleType: filters.vehicleType }),
      ...(filters.bookingType && { bookingType: filters.bookingType }),
    };

    const [total, bookingsData] = await Promise.all([
      db.booking.count({ where }),
      db.booking.findMany({
        where,
        include: { returnBookings: true },
        orderBy: { pickupDateTime: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    const bookings = bookingsData.map((booking) => ({
      id: booking.id,
      userId: booking.userId,
      passengerName: booking.passengerName,
      vehicleType: booking.vehicleType,
      bookingType: booking.bookingType,
      pickupDateTime: booking.pickupDateTime,
      pickupLocation: booking.pickupLocation,
      dropoffLocation: booking.dropoffLocation,
      status: booking.status,
      price: booking.price,
      returnBookings: booking.returnBookings?.map((returnBooking) => ({
        id: returnBooking.id,
        userId: returnBooking.userId,
        passengerName: returnBooking.passengerName,
        vehicleType: returnBooking.vehicleType,
        bookingType: returnBooking.bookingType,
        pickupDateTime: returnBooking.pickupDateTime,
        pickupLocation: returnBooking.pickupLocation,
        dropoffLocation: returnBooking.dropoffLocation,
        status: returnBooking.status,
        price: returnBooking.price,
        updatedAt: returnBooking.updatedAt,
      })),
      notes: booking.notes ?? undefined,
      updatedAt: booking.updatedAt,
    }));

    return {
      success: true,
      bookings,
      total,
      totalPages: Math.ceil(total / limit),
    };
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return {
      success: false,
      bookings: [],
      total: 0,
      totalPages: 0,
      error: "Failed to fetch bookings",
    };
  }
};
