import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Car, DollarSign, Users } from "lucide-react";
import { DashboardMetrics as MetricsType } from "../types";

interface DashboardMetricsProps {
  data: MetricsType;
  isLoading?: boolean;
}

export const DashboardMetrics: React.FC<DashboardMetricsProps> = ({
  data,
  isLoading = false,
}) => {
  const stats = [
    {
      title: "Total Bookings",
      value: data.totalBookings,
      icon: Calendar,
      description: "Total bookings this month",
      change: data.bookingsChange,
      trend: data.bookingsChange >= 0 ? "up" : "down",
    },
    {
      title: "Active Bookings",
      value: data.activeRides,
      icon: Car,
      description: "Currently ongoing rides",
      change: data.activeRidesChange,
      trend: data.activeRidesChange >= 0 ? "up" : "down",
    },
    {
      title: "Revenue",
      value: `$${data?.revenue?.toLocaleString()}`,
      icon: DollarSign,
      description: "Total revenue this month",
      change: data.revenueChange,
      trend: data.revenueChange >= 0 ? "up" : "down",
    },
    {
      title: "Total Users",
      value: data.totalUsers,
      icon: Users,
      description: "Registered users",
      change: data.userChange,
      trend: data.userChange >= 0 ? "up" : "down",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="h-20 bg-gray-200" />
              <CardContent className="h-24 bg-gray-100" />
            </Card>
          ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <div
              className={`text-xs ${
                stat.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.change >= 0 ? "+" : ""}
              {stat?.change?.toFixed(1)}% from last month
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
