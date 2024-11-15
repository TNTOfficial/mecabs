"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteBlog = async (id: string) => {
  try {
    await db.blog.delete({
      where: { id },
    });

    revalidatePath("/dashboard/blogs");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete blog:", error);
    return { success: false, error: "Failed to delete blog post" };
  }
};
