import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import {
  BookingsResponse,
  BookingFilters,
  Booking,
} from "@/features/booking/types";
import { checkUserAccess } from "@/lib/auth-gaurd";
import { Coordinates } from "@/schemas/schema";

interface GetBookingParams {
  page: number;
  limit: number;
  filters: BookingFilters;
  userId?: string;
  phoneNumber: string;
}

export const getBookings = async ({
  page,
  limit,
  filters,
  userId,
  phoneNumber,
}: GetBookingParams): Promise<BookingsResponse> => {
  try {
    const user = await checkUserAccess();

    let dateFilter: Prisma.BookingWhereInput = {};

    if (filters.date) {
      const startOfDay = new Date(filters.date);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(filters.date);
      endOfDay.setHours(23, 59, 59, 999);

      dateFilter = {
        pickupDateTime: {
          gte: startOfDay,
          lte: endOfDay,
        },
      };
    } else if (filters.dateRange?.startDate && filters.dateRange.endDate) {
      const startDate = new Date(filters.dateRange.startDate);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(filters.dateRange.endDate);
      endDate.setHours(23, 59, 59, 999);

      dateFilter = {
        pickupDateTime: {
          gte: startDate,
          lte: endDate,
        },
      };
    }

    const where: Prisma.BookingWhereInput = {
      ...((user.role !== "ADMIN" && { userId }) && { phoneNumber }),
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
      ...dateFilter,
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

    const bookings: Booking[] = bookingsData.map((booking) => ({
      id: booking.id,
      userId: booking.userId ?? "",
      passengerName: booking.passengerName,
      bookingMode: booking.bookingMode,
      phoneNumber: booking.phoneNumber,
      babySeat: booking.babySeat,
      vehicleType: booking.vehicleType,
      bookingType: booking.bookingType,
      pickupDateTime: booking.pickupDateTime,
      pickupLocation: booking.pickupLocation,
      dropoffLocation: booking.dropoffLocation,
      pickupCoordinates: booking.pickupCoordinates as Coordinates,
      dropoffCoordinates: booking.dropoffCoordinates as Coordinates,
      recipientName: booking.recipientName ?? "",
      isReturnBooking: booking.isReturnBooking,
      parentBookingId: booking.parentBookingId ?? undefined,
      status: booking.status,
      hours: booking.hours ?? undefined,
      price: booking.price,
      returnBookings: booking.returnBookings?.map((returnBooking) => ({
        id: returnBooking.id,
        userId: returnBooking.userId ?? "",
        hours: booking.hours ?? undefined,
        passengerName: returnBooking.passengerName,
        bookingMode: returnBooking.bookingMode,
        phoneNumber: returnBooking.phoneNumber,
        babySeat: returnBooking.babySeat,
        recipientName: booking.recipientName ?? "",
        isReturnBooking: booking.isReturnBooking,
        parentBookingId: booking.parentBookingId ?? undefined,
        vehicleType: returnBooking.vehicleType,
        bookingType: returnBooking.bookingType,
        pickupDateTime: returnBooking.pickupDateTime,
        pickupLocation: returnBooking.pickupLocation,
        dropoffLocation: returnBooking.dropoffLocation,
        pickupCoordinates: booking.pickupCoordinates as Coordinates,
        dropoffCoordinates: booking.dropoffCoordinates as Coordinates,
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
