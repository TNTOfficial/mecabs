"use server";

import { Lead } from "@/features/admin/leads/types";
import { db } from "@/lib/db";

export const getLeads = async (): Promise<Lead[]> => {
  try {
    const leads = await db.leads.findMany({
      select: {
        id: true,
        phoneNumber: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return leads;
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return []; // Return an empty array on error
  }
};
