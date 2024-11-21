export interface ManageBooking {
  id: string;
  passengerName: string;
  pickDateTime: Date;
  phoneNumber: string;
  pickupLocation?: string;
  isLuggagePicked: boolean;
  luggageRemarks: string | null;
}

export interface ManageBookingResponse {
  success?: string;
  error?: string;
  booking?: ManageBooking;
}
