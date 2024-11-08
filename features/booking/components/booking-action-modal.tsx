import React, { useState } from "react";
import { BookingAction } from "../types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";

interface BookingActionModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: (remarks?: string) => Promise<void>;
  action: BookingAction;
  isLoading: boolean;
}
export const BookingActionModal: React.FC<BookingActionModalProps> = ({
  isLoading,
  isOpen,
  onClose,
  onConfirm,
  action,
}) => {
  const [remarks, setRemarks] = useState<string | undefined>("");

  const actionTexts = {
    cancel: { title: "Cancel Booking", action: "cancel" },
    complete: { title: "Complete Booking", action: "complete" },
    dismiss: { title: "Dismiss Booking", action: "dismiss" },
  };

  const { title, action: actionText } = actionTexts[action];

  const handleConfirm = async () => {
    await onConfirm(remarks);
    setRemarks("");
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogDescription>
          Are you want to {actionText} this booking?
          {action !== "dismiss" && "Please provide any relevent remarks."}
        </AlertDialogDescription>

        {action !== "dismiss" && (
          <Textarea
            placeholder="Enter remarks..."
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="min-h-[100px]"
          />
        )}

        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={isLoading || (action !== "dismiss" && !remarks?.trim())}
          >
            {isLoading ? "Processing..." : `Yes, ${actionText} it.`}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
