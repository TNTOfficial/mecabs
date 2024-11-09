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
}: SuccessModalProps) => {
  const handleClose = () => {
    onReset();
    onClose();
  };

  const handleReturnPress = () => {
    onReturnBooking(bookingId);
    onClose();
  };

  // Only show return booking option for regular bookings and when not already a return booking
  const showReturnOption =
    bookingType === "booking" && isReturnBooking === false;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="w-6 h-6" />
            {isReturnBooking
              ? "Return reserved successfully"
              : "Booking Successful"}
          </DialogTitle>
          <DialogDescription>
            {isReturnBooking
              ? "Your return has been successfully created."
              : "Your booking has been successfully created. We will notify you once a driver accepts your booking."}
          </DialogDescription>
        </DialogHeader>

        {showReturnOption && (
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
          <Button type="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
