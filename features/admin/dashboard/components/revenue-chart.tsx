import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RevenueChartProps {
  data: Array<{ month: string; revenue: number }>;
  isLoading: boolean;
}

export const RevenueChart = ({ data, isLoading }: RevenueChartProps) => {
  if (isLoading) {
    return (
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Revenue Chart</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] animate-pulse bg-gray-100" />
      </Card>
    );
  }

  return (
    <Card className="col-span-2">
      <CardHeader className="p-5">
        <CardTitle>Revenue Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="month" tick={{ fill: "#333" }} />
            <YAxis tick={{ fill: "#333" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#f5f5f5", borderColor: "#ddd" }}
            />
            <Bar
              dataKey="revenue"
              fill="url(#colorRevenue)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9f9f9f" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#efefef  " stopOpacity={0.6} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
