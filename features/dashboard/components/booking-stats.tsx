import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface BookingStatsProps {
  stats: {
    completed: number;
    cancelled: number;
    active: number;
  };
  isLoading?: boolean;
}

export const BookingStats: React.FC<BookingStatsProps> = ({
  stats,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader className="p-5">
          <CardTitle>Booking Statistics</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] animate-pulse bg-gray-100" />
      </Card>
    );
  }

  const data = [
    { name: "Completed", value: stats.completed, color: "#10B981" },
    { name: "Cancelled", value: stats.cancelled, color: "#EF4444" },
    { name: "Active", value: stats.active, color: "#3B82F6" },
  ];

  const total = stats.completed + stats.cancelled + stats.active;

  return (
    <Card className="flex-1">
      <CardHeader className="p-5">
        <CardTitle>Booking Statistics</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({ name, value }) =>
                `${name} (${((value / total) * 100).toFixed(1)}%)`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
