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
      <Card className="p-4 border-b-0 border-e-0 border-l-0 shadow-md">
        <CardHeader>
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
