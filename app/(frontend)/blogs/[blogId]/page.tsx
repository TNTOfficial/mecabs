import { getBlog } from "@/actions/blog/get-blog";
import { BlogDetail } from "@/features/frontend/blogs/components/blog-detail";
import { notFound } from "next/navigation";
import React from "react";

interface BlogDetailPageProps {
  params: { blogId: string };
}
const BlogDetailPage: React.FC<BlogDetailPageProps> = async ({ params }) => {
  const blog = await getBlog(params.blogId);
  if (!blog) {
    return notFound();
  }
  return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;
