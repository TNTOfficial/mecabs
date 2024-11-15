"use server";

import { db } from "@/lib/db";

export const searchBlogs = async (query: string) => {
  try {
    const blogs = await db.blog.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, blogs };
  } catch (error) {
    console.error("Failed to search blogs:", error);
    return { success: false, blogs: [], error: "Failed to search blogs" };
  }
};
