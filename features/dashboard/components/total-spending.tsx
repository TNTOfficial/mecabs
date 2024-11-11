import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import React from "react";

interface TotalSpendingsProps {
  amount: number;
  isLoading: boolean;
}

export const TotalSpendings: React.FC<TotalSpendingsProps> = ({
  amount,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader className="animate-pulse h-16 bg-gray-200" />
        <CardContent className="animate-pulse h-24 bg-gray-100" />
      </Card>
    );
  }
  return (
    <Card className="p-5 mb-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Spending</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${amount?.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">
          Total amount spent on rides
        </p>
      </CardContent>
    </Card>
  );
};
