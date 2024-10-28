import { z } from "zod";

export const VehicleType = z.enum([
  "sedan",
  "premium",
  "maxi",
  "suv",
  "wheelchair",
  "",
]);
export type VehicleType = z.infer<typeof VehicleType>;

export const BookingStatus = z.enum([
  "pending",
  "active",
  "completed",
  "cancelled",
]);
export type BookingStatus = z.infer<typeof BookingStatus>;

export interface DashboardMetrics {
  totalBookings: number;
  bookingsChange: number;
  activeRides: number;
  activeRidesChange: number;
  revenue: number;
  revenueChange: number;
  totalUsers: number;
  userChange: number;
}

export interface BookingTrend {
  vehicleType: string;
  _count: number;
}

export interface VehicleDistribution {
  name: string;
  value: number;
}

export interface UserBooking {
  date: Date;
  amount: number | null;
  status: BookingStatus;
  vehicleType: string;
}

export interface UserSpending {
  vehicleType: string;
  amount: number;
}

export interface BaseResponse {
  success: boolean;
  error?: string;
}

export interface AdminDashboardResponse extends BaseResponse {
  metrics: DashboardMetrics;
  bookingTrends: BookingTrend[];
  vehicleDistribution: VehicleDistribution[];
  revenueByMonth: Array<{ month: string; revenue: number }>;
}

export interface UserDashboardResponse extends BaseResponse {
  userBookings: UserBooking[];
  userSpending: UserSpending[];
  totalSpent: number;
  bookingStats: {
    completed: number;
    cancelled: number;
    active: number;
  };
}

export type DashboardResponse = AdminDashboardResponse | UserDashboardResponse;
