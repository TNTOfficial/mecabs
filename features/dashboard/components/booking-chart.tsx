import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BookingTrend } from "../types";

interface BookingChartProps {
  data: BookingTrend[];
  isLoading: boolean;
  hasError?: boolean;
}

export const BookingChart = ({
  data,
  isLoading,
  hasError,
}: BookingChartProps) => {
  console.log("Booking data", data);

  // Preprocess the data to fit the chart's expectations
  const formattedData = data.map((item) => ({
    name: item.vehicleType, // Mapping `vehicleType` to `name`
    bookings: item._count, // Mapping `_count` to `bookings`
    completedRides: 0, // Placeholder for completed rides if needed
  }));

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="animate-pulse h-16 bg-gray-200" />
        <CardContent className="animate-pulse h-64 bg-gray-100" />
      </Card>
    );
  }

  if (hasError || !data || data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Booking Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">
            Failed to load data. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Booking Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={formattedData} // Use the formatted data here
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#8884d8"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="completedRides"
              stroke="#82ca9d"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
