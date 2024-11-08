import {
  BookingMode,
  BookingStatus,
  BookingTypes,
  VehicleType,
} from "@prisma/client";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Booking {
  id: string;
  userId: string;
  passengerName: string;
  vehicleType: VehicleType;
  bookingMode: BookingMode;
  bookingType: BookingTypes;
  phoneNumber: string;
  pickupDateTime: Date;
  pickupLocation: string;
  dropoffLocation: string | null;
  status: BookingStatus;
  babySeat: boolean;
  hours?: number;
  price: number | null;
  recipientName?: string;
  isReturnBooking: boolean;
  parentBookingId?: string;
  pickupCoordinates?: Coordinates;
  dropoffCoordinates?: Coordinates;
  returnBookings?: ReturnBooking[];
  notes?: string;
  updatedAt: Date;
}

export type ReturnBooking = Omit<Booking, "returnBookings">;

export interface BookingsSuccessResponse {
  success: true;
  bookings: Booking[];
  total: number;
  totalPages: number;
}

export interface BookingsErrorResponse {
  success: false;
  bookings: Booking[];
  total: 0;
  totalPages: 0;
  error: string;
}

export type BookingsResponse = BookingsSuccessResponse | BookingsErrorResponse;

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface BookingFilters {
  search?: string;
  status?: BookingStatus;
  vehicleType?: VehicleType;
  bookingType?: BookingTypes;
  date?: Date;
  dateRange?: DateRange;
}

export type BookingAction = "cancel" | "complete" | "dismiss";

export type NotificationPayload = {
  to: string;
  bookingId: string;
  passengerName: string;
  pickupDateTime: Date;
  pickupLocation: string;
  dropoffLocation?: string;
  status: BookingStatus;
  type: "create" | "update";
};
