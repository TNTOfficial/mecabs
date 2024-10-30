import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Calendar, Clock, MapPin, MoreHorizontal } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { DataFilters, FilterConfig } from "@/components/shared/data-filters";
import { getUserBookings } from "@/actions/bookings/get-user-bookings";
import { Pagination } from "@/components/shared/pagination";
import { BookingStatus, BookingTypes } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cancelBooking } from "@/actions/bookings/cancel-bookings";
import { toast } from "sonner";
import { Booking, BookingFilters, BookingsResponse } from "../types";

const ITEMS_PER_PAGE = 10;

const filterConfig: FilterConfig[] = [
  {
    key: "status",
    type: "select",
    label: "Filter by status",
    options: [
      { label: "Active", value: BookingStatus.active },
      { label: "Completed", value: BookingStatus.completed },
      { label: "Cancelled", value: BookingStatus.cancelled },
    ],
  },
  {
    key: "vehicleType",
    type: "select",
    label: "Filter by vehicle",
    options: [
      { label: "Sedan", value: "sedan" },
      { label: "SUV", value: "suv" },
      { label: "Van", value: "van" },
    ],
  },
  {
    key: "bookingType",
    type: "select",
    label: "Filter by type",
    options: [
      { label: "Booking", value: BookingTypes.booking },
      { label: "Hourly", value: BookingTypes.hourly },
      { label: "Parcel", value: BookingTypes.parcel },
    ],
  },
];

interface UserBookingsListProps {
  initialData: BookingsResponse;
}

export const UserBookingsList: React.FC<UserBookingsListProps> = ({
  initialData,
}) => {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [bookings, setBookings] = useState<Booking[]>(
    initialData.success ? initialData.bookings : []
  );
  const [totalItems, setTotalItems] = useState(initialData.total);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingId, setIsLoadingId] = useState<string | null>(null);
  const [showCancelDialog, setShowCancelDialog] = useState<boolean>(false);
  const [selectedBookingForCancel, setSelectedBookingForCancel] = useState<
    string | null
  >(null);

  const [filters, setFilters] = useState<BookingFilters>({
    search: "",
    status: undefined,
    vehicleType: undefined,
    bookingType: undefined,
  });

  const fetchBookings = useCallback(async () => {
    try {
      const response = await getUserBookings(
        currentPage,
        ITEMS_PER_PAGE,
        filters
      );
      if (response.success) {
        setBookings(response.bookings);
        setTotalItems(response.total);
        setTotalPages(response.totalPages);
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to fetch bookings");
    }
  }, [currentPage, filters]);

  const handleCancelBooking = async () => {
    if (!selectedBookingForCancel) return;

    try {
      setIsLoadingId(selectedBookingForCancel);
      console.log(selectedBookingForCancel);

      const result = await cancelBooking(selectedBookingForCancel);
      if (result.success) {
        toast.success(result.message);
        setSelectedBooking(null);
        await fetchBookings();
      } else if (result.error) {
        toast.error(result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoadingId(null);
      setShowCancelDialog(false);
      setSelectedBookingForCancel(null);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [currentPage, filters, fetchBookings]);

  const handleFilterChange = (newFilters: BookingFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const getStatusBadge = (status: BookingStatus) => {
    const variants: Record<BookingStatus, string> = {
      [BookingStatus.active]: "bg-green-100 text-green-800",
      [BookingStatus.completed]: "bg-blue-100 text-blue-800",
      [BookingStatus.cancelled]: "bg-red-100 text-red-800",
    };
    return <Badge className={variants[status]}>{status}</Badge>;
  };

  return (
    <>
      <div className="space-y-4">
        <DataFilters
          config={filterConfig}
          onFilterChange={handleFilterChange}
          initialFilters={filters}
        />

        <Card className="py-4 border-0 rounded overflow-x-auto w-full">
          <CardHeader className="px-4">
            <CardTitle>Bookings ({totalItems})</CardTitle>
          </CardHeader>
          <CardContent className="w-full overflow-x-auto">
            <Table>
              {/* Table header and body remain the same */}
              <TableHeader>
                <TableRow>
                  <TableHead>Booking Details</TableHead>
                  <TableHead>Pickup & Drop</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    {/* Booking details cell */}
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-medium">{booking.passengerName}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.vehicleType} • {booking.bookingType}
                        </p>
                        {booking.returnBookings &&
                          booking.returnBookings.length > 0 && (
                            <Badge variant="outline">
                              Return Bookings available
                            </Badge>
                          )}
                      </div>
                    </TableCell>

                    {/* Pickup & Drop cell */}
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <span className="text-sm">
                            {format(new Date(booking.pickupDateTime), "PPP")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">
                            {format(new Date(booking.pickupDateTime), "p")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            {booking.pickupLocation}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-red-500" />
                          <span className="text-sm">
                            {booking.dropoffLocation}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    {/* Status cell */}
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>

                    {/* Price cell */}
                    <TableCell>
                      {booking.price ? (
                        <span className="font-medium">
                          ${booking?.price?.toFixed(2)}
                        </span>
                      ) : (
                        "TBD"
                      )}
                    </TableCell>

                    {/* Actions cell */}
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => setSelectedBooking(booking)}
                          >
                            View Details
                          </DropdownMenuItem>
                          {booking.status === BookingStatus.active && (
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedBookingForCancel(booking.id);
                                setShowCancelDialog(true);
                              }}
                              className="text-red-500"
                            >
                              Cancel Booking
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Cancel Booking Dialog */}
        <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Cancel Booking</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to cancel this booking? This action cannot
                be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setShowCancelDialog(false)}>
                No, keep it
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleCancelBooking}
                disabled={isLoadingId === selectedBookingForCancel}
              >
                Yes, cancel it
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Booking Details Dialog */}
        <Dialog
          open={!!selectedBooking}
          onOpenChange={() => setSelectedBooking(null)}
        >
          <DialogContent className="max-w-3xl max-h-screen  overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Booking Details</DialogTitle>
              <DialogDescription>
                Complete information about the booking
              </DialogDescription>
            </DialogHeader>

            {selectedBooking && (
              <div className="flex justify-center items-stretch max-lg:flex-wrap lg:gap-4">
                <Card className="w-full p-4 border-b-0 border-e-0 border-l-0 shadow">
                  <CardHeader>
                    <CardTitle className="text-[1.3rem]">
                      Main Booking
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-b pb-3 rounded-b-xl px-3">
                      <h4 className="font-semibold mb-2 text-gray-700">
                        Passenger Information
                      </h4>
                      <p>{selectedBooking.passengerName}</p>
                    </div>

                    <div className="border-b pb-3 rounded-b-xl px-3">
                      <h4 className="font-semibold mb-2 text-gray-700">
                        Vehicle Details
                      </h4>
                      <p>
                        {selectedBooking.vehicleType} -{" "}
                        {selectedBooking.bookingType}
                      </p>
                    </div>

                    <div className="border-b pb-3 rounded-b-xl px-3">
                      <h4 className="font-semibold mb-2 text-gray-700">
                        Pickup Details
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <span>
                            {format(
                              new Date(selectedBooking.pickupDateTime),
                              "PPP"
                            )}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span>
                            {format(
                              new Date(selectedBooking.pickupDateTime),
                              "p"
                            )}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-green-500" />
                          <span>{selectedBooking.pickupLocation}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-red-500" />
                          <span>{selectedBooking.dropoffLocation}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-b pb-3 rounded-b-xl px-3">
                      <h4 className="font-semibold mb-2 text-gray-700">
                        Status & Price
                      </h4>
                      <div className="flex items-center justify-between">
                        {getStatusBadge(selectedBooking.status)}
                        <span className="font-medium">
                          ${selectedBooking!.price!.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {selectedBooking.notes && (
                      <div className="border-b pb-3 rounded-b-xl px-3">
                        <h4 className="font-semibold mb-2 text-gray-700">
                          Additional Notes
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {selectedBooking.notes}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {selectedBooking.returnBookings &&
                  selectedBooking.returnBookings.length > 0 && (
                    <Card className="w-full p-4 border-b-0 border-e-0 border-l-0 shadow">
                      <CardHeader>
                        <CardTitle className="text-[1.3rem]">
                          Return Booking
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {selectedBooking.returnBookings.map((returnBooking) => (
                          <div key={returnBooking.id} className="space-y-4">
                            <div className="border-b pb-3 rounded-b-xl px-3">
                              <h4 className="font-semibold mb-2 text-gray-700">
                                Pickup Details
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Calendar className="h-5 w-5 text-blue-500" />
                                  <span>
                                    {format(
                                      new Date(returnBooking.pickupDateTime),
                                      "PPP"
                                    )}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="h-4 w-4 text-orange-500" />
                                  <span>
                                    {format(
                                      new Date(returnBooking.pickupDateTime),
                                      "p"
                                    )}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="h-4 w-4 text-green-500" />
                                  <span>{returnBooking.pickupLocation}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="h-4 w-4 text-red-500" />
                                  <span className="text-sm">
                                    {returnBooking.dropoffLocation}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="border-b pb-3 rounded-b-xl px-3">
                              <h4 className="font-semibold mb-2 text-gray-700">
                                Status & Price
                              </h4>
                              <div className="flex items-center justify-between">
                                {getStatusBadge(returnBooking.status)}
                                <span className="font-medium">
                                  ${returnBooking!.price!.toFixed(2)}
                                </span>
                              </div>
                            </div>

                            {returnBooking.notes && (
                              <div className="border-b pb-3 rounded-b-xl px-3">
                                <h4 className="font-semibold mb-2 text-gray-700">
                                  Additional Notes
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {returnBooking.notes}
                                </p>
                              </div>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger className="p-2 px-3 text-[0.9rem] bg-red-100 rounded-xl font-semibold border-none outline-none">
                                Cancel return booking
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  key={returnBooking.id}
                                  onClick={() => {
                                    setSelectedBookingForCancel(
                                      returnBooking.id
                                    );
                                    setShowCancelDialog(true);
                                  }}
                                  className="text-red-500"
                                >
                                  Cancel return booking
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};
