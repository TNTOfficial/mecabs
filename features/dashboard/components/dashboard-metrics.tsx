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
      <div className="gap-4 flex justify-center items-stretch flex-wrap">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card key={i} className="animate-pulse basis-[300px] grow shrink-0 ">
              <CardHeader className="h-20 bg-gray-200" />
              <CardContent className="h-24 bg-gray-100" />
            </Card>
          ))}
      </div>
    );
  }

  return (
    <div className="gap-4 flex justify-center items-stretch flex-wrap mb-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-5 basis-[280px] grow shrink-0 ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[1.1rem] text-zinc-900 font-bold">{stat.title}</CardTitle>
            <stat.icon className="h-8 w-8 text-blue-600 " />
          </CardHeader>
          <CardContent className="mt-0">
            <div className="text-[2rem] font-bold">{stat.value}</div>
            <p className="text-[0.8rem] text-zinc-900 font-medium">{stat.description}</p>
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
