import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { UserBooking } from "../types";

interface UserBookingsProps {
  bookings: UserBooking[];
  isLoading?: boolean;
}

export const UserBookings: React.FC<UserBookingsProps> = ({
  bookings,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <Card >
        <CardHeader className="p-5">
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent className="animate-pulse space-y-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-16 bg-gray-100 rounded" />
            ))}
        </CardContent>
      </Card>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "text-green-600 bg-green-50";
      case "CANCELLED":
        return "text-red-600 bg-red-50";
      case "ACTIVE":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <Card className="p-5">
      <CardHeader className="p-5">
        <CardTitle>Recent Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="space-y-1">
                <p className="font-medium">{booking.vehicleType}</p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(booking.date), "MMM d, yyyy HH:mm")}
                </p>
              </div>
              <div className="space-x-4 flex items-center">
                <span className="font-medium">
                  ${booking?.amount?.toLocaleString()}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                    booking.status
                  )}`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
          {bookings.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No bookings found
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
