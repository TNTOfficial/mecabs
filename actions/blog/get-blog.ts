"use server";

import { db } from "@/lib/db";

export const getBlog = async (id: string) => {
  try {
    const blog = await db.blog.findUnique({
      where: {
        id: id,
      },
    });
    if (!blog) {
      return null;
    }
    return blog;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
};
