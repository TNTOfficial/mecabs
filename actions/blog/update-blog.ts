"use server";

import { BlogFormType } from "@/features/blog/types";
import { db } from "@/lib/db";
import { saveToDisk } from "@/lib/image-save";
import { revalidatePath } from "next/cache";

export const updateBlog = async (id: string, data: BlogFormType) => {
  try {
    // Prepare the base update data without image
    const updateData: {
      title: string;
      description: string;
      content: string;
      status: string;
      imagePath?: string;
    } = {
      title: data.title,
      description: data.description,
      content: data.content,
      status: data.status,
    };
    console.log(data.image);

    // Handle image based on its type
    if (data.image) {
      if (data.image.startsWith("/uploads")) {
        // If it's a simple path and hasn't changed, don't update it
        // Only set imagePath if you want to change the existing path
        updateData.imagePath = data.image;
      } else {
        const imagePath = await saveToDisk(data.image);
        if (imagePath) {
          updateData.imagePath = imagePath;
        }
      }
    }

    const blog = await db.blog.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/dashboard/blogs");
    return { success: true, data: blog };
  } catch (error) {
    console.error("Failed to update blog:", error);
    return { success: false, error: "Failed to update blog post" };
  }
};
