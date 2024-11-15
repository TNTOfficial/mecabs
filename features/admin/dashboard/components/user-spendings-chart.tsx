import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { UserSpending } from "../types";

interface UserSpendingChartProps {
  data: UserSpending[];
  isLoading?: boolean;
}

export const UserSpendingChart: React.FC<UserSpendingChartProps> = ({
  data,
  isLoading = false,
}) => {
    console.log("spending vehicle type", data);
    
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Spending by Vehicle Type</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] animate-pulse bg-gray-100" />
      </Card>
    );
  }

  const chartData = data.map((item) => ({
    name: item.vehicleType,
    amount: item.amount,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending by Vehicle Type</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              formatter={(value: number) => [
                `$${value?.toLocaleString()}`,
                "Amount",
              ]}
            />
            <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
