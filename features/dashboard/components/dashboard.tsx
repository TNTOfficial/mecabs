"use client";

import { Suspense } from "react";
import { AdminDashboardResponse, UserDashboardResponse } from "../types";
import { RoleGuard } from "@/features/auth/guard/role-guard";
import { DashboardMetrics } from "./dashboard-metrics";
import { BookingChart } from "./booking-chart";
import { VehicleDistribution } from "./vehicle-distribution";
import { RevenueChart } from "./revenue-chart";
import { useDashboardData } from "../hooks/use-dashboard-data";
import { UserBookings } from "./user-bookings";
// import { UserSpendingChart } from "./user-spendings-chart";
import { BookingStats } from "./booking-stats";
import { TotalSpendings } from "./total-spending";
export const Dashboard = () => {
  const { data, isLoading, error, refetch } = useDashboardData();
  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error: {error}
        <button
          onClick={refetch}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="grid gap-4 p-4">
        <DashboardMetrics
          data={{
            totalBookings: 0,
            bookingsChange: 0,
            activeRides: 0,
            activeRidesChange: 0,
            revenue: 0,
            revenueChange: 0,
            totalUsers: 0,
            userChange: 0,
          }}
          isLoading={true}
        />
        <VehicleDistribution data={[]} isLoading={true} />
      </div>
    );
  }

  if ("metrics" in data) {
    // Admin dashboard
    const adminData = data as AdminDashboardResponse;
    return (
      <RoleGuard allowedRoles={["ADMIN"]}>
        <Suspense
          fallback={
            <DashboardMetrics data={adminData.metrics} isLoading={true} />
          }
        >
          <DashboardMetrics data={adminData.metrics} isLoading={isLoading} />
        </Suspense>

        <div className="flex justify-between items-stretch flex-wrap gap-5 mb-6">
          <div className="w-full lg:w-[calc(30%_-_10px)] basis-[300px] grow shrink-0">
            <Suspense
              fallback={<VehicleDistribution data={[]} isLoading={true} />}
            >
              <VehicleDistribution
                data={adminData.vehicleDistribution}
                isLoading={isLoading}
              />
            </Suspense>

          </div>
          <div className="w-full lg:w-[calc(70%_-_10px)] basis-[300px] grow-[4] shrink-0">
            <Suspense fallback={<BookingChart data={[]} isLoading={true} />}>
              <BookingChart
                data={adminData.bookingTrends}
                isLoading={isLoading}
              />
            </Suspense>
          </div>


        </div>

        <Suspense fallback={<RevenueChart data={[]} isLoading={true} />}>
          <RevenueChart
            data={adminData?.revenueByMonth}
            isLoading={isLoading}
          />
        </Suspense>
      </RoleGuard>
    );
  } else {
    // User dashboard
    const userData = data as UserDashboardResponse;
    return (
      <RoleGuard allowedRoles={["USER"]}>
        <div className="flex justify-center items-stretch mb-6">
          {/* <Suspense fallback={<UserSpendingChart data={[]} isLoading={true} />}>
            <UserSpendingChart
              data={userData.userSpending}
              isLoading={isLoading}
            />
          </Suspense> */}

          <Suspense
            fallback={
              <BookingStats
                stats={{ completed: 0, cancelled: 0, active: 0 }}
                isLoading={true}
              />
            }
          >
            <BookingStats stats={userData.bookingStats} isLoading={isLoading} />
          </Suspense>
        </div>

        <Suspense fallback={<TotalSpendings amount={0} isLoading={true} />}>
          <TotalSpendings amount={userData.totalSpent} isLoading={isLoading} />
        </Suspense>

        <Suspense fallback={<UserBookings bookings={[]} isLoading={true} />}>
          <UserBookings
            bookings={userData.userBookings}
            isLoading={isLoading}
          />
        </Suspense>
      </RoleGuard>
    );
  }
};
