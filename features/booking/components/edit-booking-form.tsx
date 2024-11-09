import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { BookingForm } from "./booking-form";
import { Booking } from "../types";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface EditBookingFormProps {
  booking: Booking;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const EditBookingForm: React.FC<EditBookingFormProps> = ({
  booking,
  isOpen,
  onClose,
  onSuccess,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-[400px] w-full p-0 flex flex-col h-full">
        <SheetHeader className="p-4 bg-gray-50 border-b shrink-0">
          <div className="flex items-end justify-between">
            <div>
              <SheetTitle className="text-lg font-semibold">
                Edit Booking
              </SheetTitle>
              <p className="text-xs text-muted-foreground">ID: {booking.id}</p>
            </div>
            <Badge
              variant={booking.status === "active" ? "default" : "secondary"}
              className="capitalize"
            >
              {booking.status}
            </Badge>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span>{format(new Date(booking.pickupDateTime), "hh:mm a")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              <span>
                {format(new Date(booking.pickupDateTime), "MMM dd, yyyy")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-muted-foreground" />
              <span className="truncate" title={booking.pickupLocation}>
                {booking.pickupLocation}
              </span>
            </div>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-auto p-0">
          <BookingForm
            isEditBooking={true}
            booking={booking}
            onEditSuccess={() => {
              onSuccess?.();
              onClose();
            }}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditBookingForm;
