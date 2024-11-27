"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
export async function markContactAsViewed(id: string) {
  try {
    await db.contact.update({
      where: { id },
      data: { viewed: true },
    });

    revalidatePath("/admin/contacts");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to mark contact as viewed" };
  }
}
