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
            <Card key={i} className="animate-pulse basis-[300px] grow shrink-0">
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
        <Card key={stat.title} className="dashcardbg p-5 basis-[280px] overflow-hidden bg-blue-600 grow shrink-0  relative z-0 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-[-1]  before:bg-no-repeat before:bg-center before:bg-cover before:opacity-10 odd:before:rotate-180 even:bg-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[1.1rem] text-zinc-50 font-bold">{stat.title}</CardTitle>
            <stat.icon className="h-8 w-8 text-blue-50 " />
          </CardHeader>
          <CardContent className="mt-0">
            <h4 className="text-[2rem] text-white font-bold">{stat.value}</h4>
            <p className="text-[0.8rem] text-zinc-100 font-medium">{stat.description}</p>
            <div
              className={`text-xs ${
                stat.trend === "up" ? "text-green-300" : "text-red-300"
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
