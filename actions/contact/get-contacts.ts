"use server";

import { ContactRespone } from "@/features/admin/contacts/types";
import { db } from "@/lib/db";

export const getContacts = async (): Promise<ContactRespone | null> => {
  try {
    const contacts = await db.contact.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        subject: true,
        message: true,
        viewed: true,
        createdAt: true,
      },
    });
    return { success: true, contacts: contacts };
  } catch (error) {
    console.error("Error tracking IP:", error);
    return { error: true, contacts: null };
  }
};
