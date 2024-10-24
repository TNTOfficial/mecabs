import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6),
  name: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const VerificationSchema = z.object({
  token: z.string().min(5, "Verification code is required"),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

const CoordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export const BookingSchema = z.object({
  bookingType: z.enum(["booking", "hourly", "parcel"]),
  bookingMode: z.enum(["now", "later"]),
  status: z.enum(["active", "completed", "cancelled"]).default("active"),
  // Customer details
  passengerName: z.string().min(1, "Passenger name is required"),
  phoneNumber: z.string().min(2, "Valid phone number is required"),
  recipientName: z.string().optional(),
  // Location details
  pickupLocation: z.string().optional(),
  pickupCoordinates: CoordinatesSchema,
  dropoffLocation: z.string().optional(),
  dropoffCoordinates: CoordinatesSchema.optional().nullable(),

  // booking details

  pickupDateTime: z.date().nullable(),
  hours: z.number().min(3).max(24).optional().nullable(),
  vehicleType: z.enum(["sedan", "premium", "maxi", "suv", "wheelchair", ""]),
  babySeat: z.boolean().default(false),
  flightNumber: z.string().optional().nullable(),

  // payment details
  price: z.number().optional().nullable(),
  // fareType: z.enum(["meter", "fixed"]).optional(),
  fareAmount: z.number().optional(),
  promoCode: z.string().optional(),

  // Additional details
  notes: z.string().optional(),
  remarks: z.string().optional(),

  // Return booking
  isReturnBooking: z.boolean().default(false),
  parentBookingId: z.string().optional().nullable(),
});

export type BookingFormData = z.infer<typeof BookingSchema>;
export type Coordinates = z.infer<typeof CoordinatesSchema>;
