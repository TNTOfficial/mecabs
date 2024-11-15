import { getBlogs } from "@/actions/blog/get-blogs";
import { Blogs } from "@/features/frontend/blogs/components/blogs";
import React from "react";

const BlogPage = async () => {
  const data = await getBlogs();

  return <Blogs initialBlogs={data.blogs} />;
};

export default BlogPage;
