import { LUGGAGE_PICKUP_MESSAGE } from "@/features/admin/booking/constants/luggage-constants";
import {
  LuggageNotificationPayload,
  NotificationPayload,
} from "@/features/admin/booking/types";
import { ContactNotificationPayload } from "@/features/admin/contacts/types";
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

const formatDateTime = (date: Date): string => {
  return new Intl.DateTimeFormat("en-GB", {
    timeStyle: "short",
    dateStyle: "short",
    hour12: true,
    timeZone: "Australia/Melbourne",
  }).format(date);
};

// Helper function to format location-specific message
const getLocationMessage = (location: string, code?: string): string => {
  if (location.toLowerCase().includes("airport") && code) {
    return `Please enter this code to verify your luggage status: ${code}`;
  }
  return "";
};

// Helper function to format dropoff and link message
const getDropoffMessage = (dropoffLocation?: string, link?: string): string => {
  if (!dropoffLocation) return "";

  let message = `Dropoff: ${dropoffLocation}`;
  if (link) {
    message += `\nPlease notify us when you have picked your luggage by visiting this link: ${link}`;
  }
  return message;
};

export const sendWhatsAppNotification = async (
  payload: NotificationPayload
) => {
  console.log("Sending whatsapp notification for booking", payload.bookingId);
  try {
    const contentVariables = {
      1: payload.passengerName,
      2: payload.to,
      3: payload.pickupLocation,
      4: payload.dropoffLocation || "N/A",
      5: formatDateTime(payload.pickupDateTime),
      6: payload.vehicleType,
      7: payload.price ? `${payload.price} AUD` : "Meter fare",
      8: payload.paymentMethod || "Cash",
      9: payload.status,
    };
    if (payload.notes) {
      Object.assign(contentVariables, { 10: payload.notes });
    }
    const messageOptions = {
      contentSid: payload.notes
        ? "HX74bb9b4e34f4a94e0e6d3ad31edad0dc"
        : "HX7114e39a9124bd525afbaab7eedf647f",
      contentVariables: JSON.stringify(contentVariables),
      from: "whatsapp:+61483916627",
      messagingServiceSid: "MGdabed5aa4c2b3967a3d01e67fd7c8350",
      to: `whatsapp:${payload.to}`,
    };
    const message = await client.messages.create(messageOptions);
    return { success: true, messageId: message.sid };
  } catch (error) {
    console.error("WHATSAPP_NOTIFICATION_ERROR", error);
    return { error: "Failed to send WhatsApp notification" };
  }
};

export const sendSMSNotification = async (payload: NotificationPayload) => {
  console.log("Sending SMS notification for booking", payload.bookingId);

  try {
    const isNewBooking = payload.type === "create";
    const prefix = `Hello ${payload.passengerName}! Your booking (ID: ${payload.bookingId}) `;

    // Build the message components
    const statusMessage = isNewBooking ? "" : "has been updated.";
    const locationVerification = getLocationMessage(
      payload.pickupLocation,
      payload.code
    );
    const pickupDetails = `\n\n${isNewBooking ? "" : "New "}Pickup: ${
      payload.pickupLocation
    }`;
    const dateTimeDetails = `\nDate/Time: ${payload.pickupDateTime.toLocaleString()}`;
    const dropoffDetails = payload.dropoffLocation
      ? `\n${getDropoffMessage(payload.dropoffLocation, payload.link)}`
      : "";

    // Combine all message components
    const message = [
      prefix,
      statusMessage,
      locationVerification,
      pickupDetails,
      dateTimeDetails,
      dropoffDetails,
    ]
      .filter(Boolean)
      .join(" ")
      .trim();

    // Send the message using Twilio
    await client.messages.create({
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

// export const sendNotification = async (payload: NotificationPayload) => {
//   if (payload.to.startsWith("+61412853735")) {
//     return sendWhatsAppNotification(payload);
//   } else if (payload.to.startsWith("+61")) {
//     return sendSMSNotification(payload);
//   } else {
//     return { error: "Invalid phone number format" };
//   }
// };

export const sendLuggageSmsNotification = async (
  payload: LuggageNotificationPayload
) => {
  if (!payload.phoneNumber) {
    throw new Error("Phone number is required for SMS notification!");
  }
  console.log("sending notification for update");

  const message = `Hello, ${payload.passengerName}! ${LUGGAGE_PICKUP_MESSAGE}`;
  await client.messages.create({
    body: message,
    to: payload.phoneNumber,
    from: process.env.TWILIO_MESSAGING_MOBILE_NO!,
  });
  return { success: "Message send successfully!" };
};

export const sendContactWhatsAppNotification = async (
  payload: ContactNotificationPayload
) => {
  console.log("Sending WhatsApp notification for new contact request");

  try {
    const contentVariables = {
      1: payload.name, // Contact name
      2: payload.email, // Contact email
      3: payload.subject, // Subject of inquiry
      4: payload.message, // Contact message
      5: new Date().toLocaleString(), // Timestamp of request
    };

    const messageOptions = {
      contentSid: "HX74bb9b4e34f4a94e0e6d3ad31edad0dc", // Have to replace this withF template ID
      contentVariables: JSON.stringify(contentVariables),
      from: "whatsapp:+61483916627",
      messagingServiceSid: "MGdabed5aa4c2b3967a3d01e67fd7c8350",
      to: `whatsapp:${payload.to}`,
    };

    const message = await client.messages.create(messageOptions);
    return { success: true, messageId: message.sid };
  } catch (error) {
    console.error("CONTACT_WHATSAPP_NOTIFICATION_ERROR", error);
    return { error: "Failed to send WhatsApp notification" };
  }
};
