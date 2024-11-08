import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { VehicleDistribution as VehicleDistributionType } from "../types";

interface VehicleDistributionProps {
  data: VehicleDistributionType[];
  isLoading?: boolean;
}

const COLORS = ["#2563eb", "#00C49F", "#FFBB28", "#FF8042"];

export const VehicleDistribution: React.FC<VehicleDistributionProps> = ({
  data,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <Card className="col-span-2 p-5">
        <CardHeader>
          <CardTitle>Vehicle Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] animate-pulse bg-gray-100" />
      </Card>
    );
  }

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="col-span-2 p-5 h-full">
      <CardHeader>
        <CardTitle className="text-[1.1rem] text-blue-600 font-bold">Vehicle Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
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
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
