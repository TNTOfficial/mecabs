"use server";

import { BlogFormSchema, BlogFormType } from "@/features/admin/blog/types";
import { db } from "@/lib/db";
import { saveToDisk } from "@/lib/image-save";
import { revalidatePath } from "next/cache";

export const createBlog = async (
  data: BlogFormType & { image: string | null }
) => {
  try {
    // Validate the input data
    const validatedFields = BlogFormSchema.safeParse({
      title: data.title,
      description: data.description,
      content: data.content,
    });

    if (!validatedFields.success) {
      return { success: false, error: "Invalid fields" };
    }

    // Handle image upload if present
    let imagePath = null;
    if (data.image) {
      imagePath = await saveToDisk(data.image);
      if (!imagePath) {
        return { success: false, error: "Failed to save image" };
      }
    }

    // Create the blog post in the database
    const blog = await db.blog.create({
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        imagePath: imagePath || "", // Use empty string if no image
      },
    });

    // Revalidate the blogs page to show the new post
    revalidatePath("/dashboard/blogs");

    return { success: true, data: blog };
  } catch (error) {
    console.error("Failed to create blog:", error);
    return { success: false, error: "Failed to create blog post" };
  }
};
