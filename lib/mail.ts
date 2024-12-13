import { LUGGAGE_PICKUP_MESSAGE } from "@/features/admin/booking/constants/luggage-constants";
import {
  LuggageNotificationPayload,
  NotificationPayload,
} from "@/features/admin/booking/types";
import nodemailer from "nodemailer";
// import path from "path";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const domain = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const getBaseEmailTemplate = (content: string) => `
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h1 style="color: #4a4a4a;">Welcome to Me cabs!</h1>
    ${content}
  </body>
</html>
`;

// const getDefaultAttachment = () => [
//   {
//     filename: "logo.webp",
//     path: path.join( "./public/logo.webp"),
//     cid: "logo",
//   },
// ];

const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html: getBaseEmailTemplate(htmlContent),
    // attachments: getDefaultAttachment(),
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const htmlContent = `
  <p>Thank you for signing up. Please confirm your email address to get started.</p>
  <p>
   ${token}
  </p>
  <p>If you're having trouble clicking the button, copy and paste this URL into your web browser:</p>
`;
  await sendEmail(email, "Confirm your email", htmlContent);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  const htmlContent = `
    <p>Reset your password</p>
    <p>
      <a href="${resetLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
        Reset Password
      </a>
    </p>
    <p>If you're having trouble clicking the button, copy and paste this URL into your web browser:</p>
    <p>${resetLink}</p>
  `;
  await sendEmail(email, "Reset your password", htmlContent);
};

export const sendEmailNotification = async (payload: NotificationPayload) => {
  console.log("payload", payload);

  // Construct the email subject based on notification type
  const subject =
    payload.type === "create"
      ? `Booking Confirmation - ${payload.bookingId}`
      : `Booking Update - ${payload.bookingId}`;

  // Build the HTML content with improved structure and the management link
  const htmlContent = `<h2>${
    payload.type === "create" ? "Booking Confirmation" : "Booking Update"
  }</h2>
      <p>Hello ${payload.passengerName},</p>
      <p>Your booking details are as follows:</p>
      <ul>
        <li>Booking ID: ${payload.bookingId}</li>
        <li>Pickup Location: ${payload.pickupLocation}</li>
        <li>Pickup Date/Time: ${payload.pickupDateTime.toLocaleString()}</li>
        ${
          payload.dropoffLocation
            ? `<li>Dropoff Location: ${payload.dropoffLocation}</li>`
            : ""
        }
        ${
          payload.pickupLocation.toLowerCase().includes("airport")
            ? `<li>Luggage Verification Code: ${payload.code}</li>`
            : ""
        }
        <li>Status: ${payload.status}</li>
      </ul>
      <p>You can manage your booking at any time by clicking <a href="${
        payload.link
      }">here</a>.</p>
      <p>Thank you for choosing our service!</p>`;

  await sendEmail(payload.to, subject, htmlContent);
};

export const sendLuggageEmailNotification = async (
  payload: LuggageNotificationPayload
) => {
  console.log("Sending luggage email");

  if (!payload.email) {
    throw new Error("Email is required for email notification");
  }

  const subject = `Luggage Pickup Notification - Booking ${payload.bookingId}`;
  const htmlContent = `
   <h2>Luggage Pickup Notification</h2>
    <p>Hello ${payload.passengerName},</p>
    <p>${LUGGAGE_PICKUP_MESSAGE}</p>
    <p>Booking ID: ${payload.bookingId}</p>
    <p>Thank you for choosing our service!</p>
  `;

  await sendEmail(payload.email, subject, htmlContent);
  return { success: "Email send successfully!" };
};
