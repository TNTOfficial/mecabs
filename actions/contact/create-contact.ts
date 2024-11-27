"use server";

import { ContactNotificationPayload } from "@/features/admin/contacts/types";
import { db } from "@/lib/db";
import { sendContactWhatsAppNotification } from "@/lib/twilio";
import { contactFormSchema, ContactFormValues } from "@/schemas/schema";

export const createContact = async (data: ContactFormValues) => {
  try {
    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }

    // Create contact in database
    const contact = await db.contact.create({
      data: validatedFields.data,
    });

    // Prepare notification payload
    const notificationPayload: ContactNotificationPayload = {
      ...validatedFields.data,
      to: "+61412853735", // Target WhatsApp number
    };

    // Send WhatsApp notification
    const notificationResult = await sendContactWhatsAppNotification(
      notificationPayload
    );

    if (notificationResult.error) {
      console.error(
        "Failed to send WhatsApp notification:",
        notificationResult.error
      );
      // Continue with success response even if notification fails
    }

    return {
      success: true,
      data: contact,
      notificationSent: !notificationResult.error,
    };
  } catch (error) {
    console.error("Contact creation failed:", error);
    return {
      success: false,
      error: "Failed to submit contact form",
    };
  }
};
