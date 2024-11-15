import { NotificationPayload } from "@/features/admin/booking/types";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_MESSAGING_ACCOUNT_SID,
  process.env.TWILIO_MESSAGING_AUTH_TOKEN
);

export type VerificationResult = {
  success: boolean;
  status?: string;
  error?: string;
};

export const sendVerificationCode = async (
  phoneNumber: string,
  channel: "sms" | "whatsapp" = "sms"
) => {
  try {
    const verification = await client.verify.v2
      .services(process.env.TWILIO_MESSAGING_VERIFY_SID!)
      .verifications.create({
        to: phoneNumber,
        channel,
      });
    return {
      success: true,
      status: verification.status,
    };
  } catch (error) {
    console.error("Failed to send verification code:", error);
    return {
      success: false,
      error: "Failed to send verification code",
    };
  }
};

export const verifyCode = async (
  phoneNumber: string,
  code: string
): Promise<VerificationResult> => {
  try {
    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_MESSAGING_VERIFY_SID!)
      .verificationChecks.create({
        to: phoneNumber,
        code,
      });

    return {
      success: verificationCheck.status === "approved",
      status: verificationCheck.status,
    };
  } catch (error) {
    console.error("Failed to verify code:", error);
    return {
      success: false,
      error: "Failed to verify code",
    };
  }
};

export const sendSMSNotification = async (payload: NotificationPayload) => {
  try {
    const message =
      payload.type === "create"
        ? `Hello ${payload.passengerName}! Your booking (ID: ${
            payload.bookingId
          }) has been confirmed.\n\nPickup: ${
            payload.pickupLocation
          }\nDate/Time: ${payload.pickupDateTime.toLocaleString()}\n${
            payload.dropoffLocation ? `Dropoff: ${payload.dropoffLocation}` : ""
          }`
        : `Hello ${payload.passengerName}! Your booking (ID: ${
            payload.bookingId
          }) has been updated.\n\nNew pickup: ${
            payload.pickupLocation
          }\nNew Date/Time: ${payload.pickupDateTime.toLocaleString()}\n${
            payload.dropoffLocation
              ? `New dropoff: ${payload.dropoffLocation}`
              : ""
          }`;
    client.messages.create({
      body: message,
      to: payload.to,
      from: process.env.TWILIO_MESSAGING_MOBILE_NO!,
    });
    return { success: true };
  } catch (error) {
    console.error("SMS_NOTIFICATION_ERROR", error);
    return { error: "Failed to send SMS notification" };
  }
};
