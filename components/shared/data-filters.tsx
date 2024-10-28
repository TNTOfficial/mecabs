import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingStatus, BookingTypes } from "@prisma/client";
import { BookingFilters } from "@/features/booking/types";

export interface FilterConfig {
  key: string;
  type: "select" | "input" | "date";
  label: string;
  options?: { label: string; value: string }[];
}

interface DataFiltersProps {
  config: FilterConfig[];
  onFilterChange: (filters: BookingFilters) => void;
  initialFilters?: Partial<BookingFilters>;
}

export const DataFilters: React.FC<DataFiltersProps> = ({
  config,
  onFilterChange,
  initialFilters = {},
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<BookingFilters>({
    search: "",
    status: BookingStatus.active,
    vehicleType: "",
    bookingType: BookingTypes.booking,
    ...initialFilters,
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search..."
            value={filters.search || ""}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>

      {showFilters && (
        <Card>
          <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            {config.map((filter) => {
              if (filter.type === "select" && filter.options) {
                return (
                  <Select
                    key={filter.key}
                    value={
                      filters[filter.key as keyof BookingFilters]?.toString() ||
                      ""
                    }
                    onValueChange={(value) =>
                      handleFilterChange(filter.key, value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={filter.label} />
                    </SelectTrigger>
                    <SelectContent>
                      {filter.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }
              return null;
            })}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
