"use server";

import { LuggageNotificationPayload } from "@/features/admin/booking/types";
import { db } from "@/lib/db";
import { sendLuggageEmailNotification } from "@/lib/mail";
import { sendLuggageSmsNotification } from "@/lib/twilio";

export const sendLuggagePickupNotification = async (
  payload: LuggageNotificationPayload,
  bookingId: string
) => {
  try {
    await db.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        isReminded: true,
      },
    });
    //Check if we have a phone number and it starts with +61
    if (payload.phoneNumber?.startsWith("+61")) {
      const message = await sendLuggageSmsNotification(payload);
      return { success: message };
    } else if (payload.email) {
      console.log("About to send an email for luggage pickup");

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
