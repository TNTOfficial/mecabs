"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { searchBlogs } from "@/actions/blog/search-blog";
import { Blog } from "@/features/admin/blog/types";

interface BlogsProps {
  initialBlogs: Blog[];
}
export const Blogs: React.FC<BlogsProps> = ({ initialBlogs }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Debounced fn to handle search
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchTerm) {
        setLoading(true);
        const result = await searchBlogs(searchTerm);
        if (result.success) {
          setBlogs(result.blogs);
        }
        setLoading(false);
      } else {
        setBlogs(initialBlogs);
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, initialBlogs]);

  const handleBlogClick = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
        <div className="flex gap-4 mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search blogs...."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <Card key={n} className="animate-pulse">
              <CardHeader className="h-48 bg-gray-200" />
              <CardContent>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => {
                handleBlogClick(blog.id);
              }}
            >
              {blog.imagePath && (
                <div className="w-full h-48 relative">
                  <Image
                    fill={true}
                    src={blog.imagePath}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{blog.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                {blog.updatedAt && (
                  <span className="text-sm text-gray-500">
                    {formatDate(blog.updatedAt)}
                  </span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
