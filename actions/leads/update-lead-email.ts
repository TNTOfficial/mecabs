"use server";

import { db } from "@/lib/db";
import { LeadSchema } from "@/schemas/schema";
import * as z from "zod";

export const updateLeadEmail = async (values: z.infer<typeof LeadSchema>) => {
    console.log("im in", values);
    
  try {
    const validatedFields = LeadSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    const { email, leadId } = validatedFields.data;

    //updating the lead with email
    await db.leads.update({
      where: {
        id: leadId,
      },
      data: {
        email: email,
      },
    });
    return { success: "Email updated successfully!" };
  } catch (error) {
    console.error("UPDATE_LEAD_EMAIL_ERROR", error);
    return { error: "Something went wrong!" };
  }
};
