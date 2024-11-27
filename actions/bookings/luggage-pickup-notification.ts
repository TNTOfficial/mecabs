"use server";

import { LuggageNotificationPayload } from "@/features/admin/booking/types";
import { sendLuggageEmailNotification } from "@/lib/mail";
import { sendLuggageSmsNotification } from "@/lib/twilio";

export const sendLuggagePickupNotification = async (
  payload: LuggageNotificationPayload
) => {
  try {
    //Check if we have a phone number and it starts with +61
    if (payload.phoneNumber?.startsWith("+61")) {
      const message = await sendLuggageSmsNotification(payload);
      return { success: message };
    } else if (payload.email) {
      const message = await sendLuggageEmailNotification(payload);
      return { success: message };
    } else {
      throw new Error("No valid contact method provided");
    }
  } catch (error) {
    console.error("LUGGAGE_NOTIFICATION_ERROR", error);
    return { error: "Failed to send luggage pickup notification" };
  }
};
