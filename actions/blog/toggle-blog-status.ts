"use server";

import { BlogStatus } from "@/features/blog/types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const toggleBlogStatus = async (id: string, status: BlogStatus) => {
  try {
    const blog = await db.blog.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/dashboard/blogs");

    return { success: true, data: blog };
  } catch (error) {
    console.error("Failed to update blog status:", error);
    return { success: false, error: "Failed to update blog status" };
  }
};
