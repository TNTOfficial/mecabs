"use server";

import { cache } from "react";
import { endOfMonth, startOfMonth, subMonths, format } from "date-fns";
import { db } from "@/lib/db";
import { checkUserAccess } from "@/lib/auth-gaurd";
import {
  DashboardResponse,
  DashboardMetrics,
  AdminDashboardResponse,
  UserDashboardResponse,
} from "@/features/admin/dashboard/types";

export const getDashboardData = cache(async (): Promise<DashboardResponse> => {
  try {
    const user = await checkUserAccess();
    const now = new Date();
    const monthStart = startOfMonth(now);
    const monthEnd = endOfMonth(now);
    const lastMonthStart = startOfMonth(subMonths(now, 1));

    if (user.role === "ADMIN") {
      const [
        currentMonthBookings,
        lastMonthBookings,
        activeRides,
        lastMonthActiveRides,
        revenue,
        lastMonthRevenue,
        totalUsers,
        lastMonthUsers,
        bookingTrends,
        vehicleDistribution,
        revenueByMonth,
      ] = await Promise.all([
        db.booking.count({
          where: {
            pickupDateTime: { gte: monthStart, lte: monthEnd },
          },
        }),
        db.booking.count({
          where: {
            pickupDateTime: { gte: lastMonthStart, lte: monthStart },
          },
        }),
        db.booking.count({
          where: { status: "active" },
        }),
        db.booking.count({
          where: {
            status: "active",
            pickupDateTime: { gte: lastMonthStart, lte: monthStart },
          },
        }),
        db.booking.aggregate({
          where: {
            pickupDateTime: { gte: monthStart, lte: monthEnd },
            status: "completed",
          },
          _sum: { price: true },
        }),
        db.booking.aggregate({
          where: {
            pickupDateTime: { gte: lastMonthStart, lte: monthStart },
            status: "completed",
          },
          _sum: { price: true },
        }),
        db.user.count(),
        db.user.count({
          where: { createdAt: { lte: monthStart } },
        }),
        db.booking.groupBy({
          by: ["vehicleType"],
          _count: true,
        }),
        db.booking.groupBy({
          by: ["vehicleType"],
          _count: true,
        }),
        db.booking.groupBy({
          by: ["pickupDateTime"],
          where: {
            status: "active",
            pickupDateTime: {
              gte: subMonths(now, 6),
              lte: now,
            },
          },
          _sum: { price: true },
        }),
      ]);

      const calculateChange = (current: number, previous: number): number =>
        previous === 0 ? 0 : ((current - previous) / previous) * 100;

      const metrics: DashboardMetrics = {
        totalBookings: currentMonthBookings,
        bookingsChange: calculateChange(
          currentMonthBookings,
          lastMonthBookings
        ),
        activeRides,
        activeRidesChange: calculateChange(activeRides, lastMonthActiveRides),
        revenue: revenue._sum.price || 0,
        revenueChange: calculateChange(
          revenue._sum.price || 0,
          lastMonthRevenue._sum.price || 0
        ),
        totalUsers,
        userChange: calculateChange(totalUsers, lastMonthUsers),
      };

      const response: AdminDashboardResponse = {
        success: true,
        metrics,
        bookingTrends,
        vehicleDistribution: vehicleDistribution.map((item) => ({
          name: item.vehicleType,
          value: item._count,
        })),
        revenueByMonth: revenueByMonth.map((item) => ({
          month: format(item.pickupDateTime, "MMM yyyy"),
          revenue: item._sum.price || 0,
        })),
      };

      return response;
    } else {
      const [userBookings, userSpending, bookingStats] = await Promise.all([
        db.booking.findMany({
          where: {
            OR: [{ userId: user?.id }, { phoneNumber: user?.phoneNumber }],
            pickupDateTime: { gte: monthStart, lte: monthEnd },
          },
          orderBy: { pickupDateTime: "asc" },
        }),
        db.booking.groupBy({
          by: ["vehicleType"],
          where: {
            userId: user.id,
            status: "completed",
          },
          _sum: { price: true },
        }),
        db.booking.groupBy({
          by: ["status"],
          where: { userId: user.id },
          _count: true,
        }),
      ]);

      const response: UserDashboardResponse = {
        success: true,
        userBookings: userBookings.map((booking) => ({
          date: booking.pickupDateTime,
          amount: booking.price,
          status: booking.status,
          vehicleType: booking.vehicleType,
        })),
        userSpending: userSpending.map((item) => ({
          vehicleType: item.vehicleType,
          amount: item._sum.price || 0,
        })),
        totalSpent: userSpending.reduce(
          (acc, curr) => acc + (curr._sum.price || 0),
          0
        ),
        bookingStats: {
          completed:
            bookingStats.find((stat) => stat.status === "completed")?._count ||
            0,
          cancelled:
            bookingStats.find((stat) => stat.status === "completed")?._count ||
            0,
          active:
            bookingStats.find((stat) => stat.status === "active")?._count || 0,
        },
      };

      return response;
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Failed to fetch dashboard data");
  }
});
