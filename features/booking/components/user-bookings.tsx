"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
import { UserBookingsList } from "./user-bookings-list";
import { BookingsSkeletons } from "./bookings-skeleton";
import type { BookingsResponse } from "../types";

interface UserBookingsProps {
  initialData: BookingsResponse;
}

export const UserBookings: React.FC<UserBookingsProps> = ({ initialData }) => {
  return (
    <div className="mx-auto py-10">
      <Card className="py-4 border-0 rounded">
        <CardHeader className="px-4">
          <CardTitle className="text-[1.4rem]">My Bookings</CardTitle>
          <CardDescription className="text-[1rem]">View and manage your bookings</CardDescription>
        </CardHeader>

        <CardContent>
          <Suspense fallback={<BookingsSkeletons />}>
            <UserBookingsList initialData={initialData} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};
