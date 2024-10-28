import { BookingStatus, BookingTypes } from "@prisma/client";

export interface Booking {
  id: string;
  userId: string;
  passengerName: string;
  vehicleType: string;
  bookingType: BookingTypes;
  pickupDateTime: Date;
  pickupLocation: string;
  dropoffLocation: string | null;
  status: BookingStatus;
  price: number | null;
  returnBookings?: Booking[];
  notes?: string;
  updatedAt: Date;
}

export interface BookingsSuccessResponse {
  success: true;
  bookings: Booking[];
  total: number;
  totalPages: number;
}

export interface BookingsErrorResponse {
  success: false;
  bookings: never[];
  total: 0;
  totalPages: 0;
  error: string;
}

export type BookingsResponse = BookingsSuccessResponse | BookingsErrorResponse;

export interface BookingFilters {
  search?: string;
  status?: BookingStatus;
  vehicleType?: string;
  bookingType?: BookingTypes;
}
