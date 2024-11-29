import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReturnBooking: (bookingId: string) => void;
  bookingType: string;
  bookingId?: string;
  pickupLocation: string;
  dropoffLocation: string;
  isReturnBooking: boolean;
  isHourlyBooking: boolean;
  isAirportPickup: boolean;
  bookingMode: "now" | "later";
  onReset: () => void;
}

export const SuccessModal = ({
  isOpen,
  onClose,
  bookingType,
  onReturnBooking,
  pickupLocation,
  dropoffLocation,
  bookingId = "",
  isReturnBooking,
  onReset,
  isHourlyBooking,
  isAirportPickup,
  bookingMode,
}: SuccessModalProps) => {
  const handleClose = () => {
    onReset();
    onClose();
  };

  const handleReturnPress = () => {
    onReturnBooking(bookingId);
    onClose();
  };

  console.log("insdie the modal", isAirportPickup);
  console.log("insdie the modal", bookingMode);

  // Only show return booking option for regular bookings and when not already a return booking
  const showReturnOption =
    bookingType === "booking" && isReturnBooking === false;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="w-6 h-6" />
            {isAirportPickup && bookingMode == "later"
              ? "Thank you for choosing us"
              : isHourlyBooking
              ? "Thank you!"
              : isReturnBooking
              ? "Return reserved successfully"
              : "Booking Successful"}
          </DialogTitle>
          <DialogDescription>
            {isAirportPickup && bookingMode == "later"
              ? "Your booking has been successfully created.Please notify us when you have picked your luggage.We have sent you link inside a message."
              : isHourlyBooking
              ? "Thank you for contacting us. We will contact you shortly.We will notify you once a driver accepts your booking"
              : isReturnBooking
              ? "Your return has been successfully created."
              : "Your booking has been successfully created. We will notify you once a driver accepts your booking."}
          </DialogDescription>
        </DialogHeader>

        {showReturnOption && !isHourlyBooking && bookingMode !== "later" && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2">
              Would you like to book a return?
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              From: {dropoffLocation}
              <br />
              To: {pickupLocation}
            </p>
            <Button onClick={handleReturnPress} className="w-full">
              Book Return Trip
            </Button>
          </div>
        )}

        <DialogFooter className="sm:justify-start">
          <Button
            className="w-full"
            type="button"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
