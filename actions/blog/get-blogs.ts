"use server";

import { BlogFormResponseType, BlogStatus } from "@/features/admin/blog/types";
import { db } from "@/lib/db";

export const getBlogs = async (
  limit?: number,
  status?: BlogStatus
): Promise<BlogFormResponseType> => {
  try {
    const blogs = await db.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      ...(status && { where: { status: status } }),
      ...(limit ? { take: limit } : {}),
    });

    return { success: true, blogs: blogs };
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return { success: false, error: "Failed to fetch blog posts", blogs: [] };
  }
};
