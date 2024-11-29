import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Filter, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingStatus, BookingTypes, VehicleType } from "@prisma/client";
import {
  Calendar,
  DateRange as DateRangeComponent,
  RangeKeyDict,
} from "react-date-range";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

interface BookingFilters {
  search?: string;
  status?: BookingStatus;
  vehicleType?: VehicleType;
  bookingType?: BookingTypes;
  date?: Date;
  dateRange?: {
    startDate: Date;
    endDate: Date;
  };
}

export interface FilterConfig {
  key: keyof BookingFilters;
  type: "select" | "input" | "date";
  label: string;
  options?: { label: string; value: string }[];
}

interface DataFiltersProps {
  config: FilterConfig[];
  onFilterChange: (filters: BookingFilters) => void;
  initialFilters?: Partial<BookingFilters>;
}

const dateTypes = {
  SINGLE: "single",
  RANGE: "range",
} as const;

type DateType = (typeof dateTypes)[keyof typeof dateTypes];

export const DataFilters: React.FC<DataFiltersProps> = ({
  config,
  onFilterChange,
  initialFilters = {},
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [dateFilterType, setDateFilterType] = useState<DateType>(
    dateTypes.SINGLE
  );

  const [filters, setFilters] = useState<BookingFilters>(() => {
    const initialState: BookingFilters = {
      search: "",
      status: undefined,
      vehicleType: undefined,
      bookingType: undefined,
      date: undefined,
      dateRange: undefined,
      ...initialFilters,
    };

    if (initialFilters.date) {
      initialState.date = new Date(initialFilters.date);
    }
    if (initialFilters.dateRange) {
      initialState.dateRange = {
        startDate: new Date(initialFilters.dateRange.startDate),
        endDate: new Date(initialFilters.dateRange.endDate),
      };
    }

    return initialState;
  });

  const handleFilterChange = (
    key: keyof BookingFilters,
    value: string | Date | DateRange | undefined
  ) => {
    const newFilters: BookingFilters = { ...filters, [key]: value };

    if (key === "date" && value) {
      newFilters.dateRange = undefined;
    }

    if (key === "dateRange" && value) {
      newFilters.date = undefined;
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleFiltersReset = () => {
    const defaultFilters: BookingFilters = {
      search: "",
      status: undefined,
      vehicleType: undefined,
      bookingType: undefined,
      date: undefined,
      dateRange: undefined,
    };

    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
    setDateFilterType(dateTypes.SINGLE);
  };

  const handleSingleFilterReset = (key: keyof BookingFilters) => {
    const newFilters = { ...filters };

    if (key === "date" || key === "dateRange") {
      newFilters.date = undefined;
      newFilters.dateRange = undefined;
      setDateFilterType(dateTypes.SINGLE);
    } else {
      newFilters[key] = undefined;
    }

    if (key === "search") {
      newFilters.search = "";
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDateSelect = (date: Date) => {
    handleFilterChange("date", date);
    setShowDatePicker(false);
  };

  const handleDateRangeSelect = (ranges: RangeKeyDict) => {
    const range = ranges.selection;
    if (range) {
      const { startDate, endDate } = range;
      if (startDate && endDate) {
        handleFilterChange("dateRange", {
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          key: "selection",
        });
      }
    }
  };

  const getDisplayDate = () => {
    if (filters.date) {
      return format(filters.date, "PPP");
    }
    if (filters.dateRange) {
      return `${format(filters.dateRange.startDate, "PP")} - ${format(
        filters.dateRange.endDate,
        "PP"
      )}`;
    }
    return "Pick a date";
  };

  const isFilterActive = (key: keyof BookingFilters): boolean => {
    if (key === "search") return !!filters.search;
    if (key === "date" || key === "dateRange")
      return !!(filters.date || filters.dateRange);
    return !!filters[key];
  };

  return (
    <div className="space-y-4 px-4">
      <div className="flex items-center justify-end">
        <div className="flex w-full max-w-[600px] items-stretch justify-center space-x-2">
          <div className="relative flex-grow">
            <Input
              placeholder="Search..."
              value={filters.search || ""}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="pr-8"
            />
            {isFilterActive("search") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSingleFilterReset("search")}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>

          <Button
            className="h-auto flex justify-center items-center"
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
          </Button>

          <Button
            className="h-auto py-3"
            variant="outline"
            onClick={handleFiltersReset}
          >
            Reset All
          </Button>
        </div>
      </div>

      {showFilters && (
        <Card className="p-4 border-0 border-t rounded">
          <CardContent className="flex flex-wrap justify-center items-center w-full gap-4 p-4">
            {config.map((filter) => {
              if (filter.type === "select" && filter.options) {
                return (
                  <div key={filter.key} className="relative">
                    <Select
                      value={filters[filter.key]?.toString() || ""}
                      onValueChange={(value) =>
                        handleFilterChange(filter.key, value)
                      }
                    >
                      <SelectTrigger className="pr-8">
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
                    {isFilterActive(filter.key) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSingleFilterReset(filter.key)}
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                );
              }
              return null;
            })}

            <div className="relative">
              <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-full py-3 basis-[200px] grow shrink-0 justify-start pr-8"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {getDisplayDate()}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Tabs
                    defaultValue={dateFilterType}
                    onValueChange={(value) =>
                      setDateFilterType(value as DateType)
                    }
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value={dateTypes.SINGLE}>
                        Single Date
                      </TabsTrigger>
                      <TabsTrigger value={dateTypes.RANGE}>
                        Date Range
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value={dateTypes.SINGLE} className="p-0">
                      <Calendar
                        date={filters.date}
                        onChange={(date) => date && handleDateSelect(date)}
                      />
                    </TabsContent>
                    <TabsContent value={dateTypes.RANGE} className="p-0">
                      <DateRangeComponent
                        ranges={[
                          {
                            startDate:
                              filters.dateRange?.startDate || new Date(),
                            endDate: filters.dateRange?.endDate || new Date(),
                            key: "selection",
                          },
                        ]}
                        onChange={handleDateRangeSelect}
                      />
                    </TabsContent>
                  </Tabs>
                </PopoverContent>
              </Popover>
              {isFilterActive("date") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSingleFilterReset("date")}
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
