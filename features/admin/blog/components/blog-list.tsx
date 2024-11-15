"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BlogForm } from "./blog-form";
import { Blog, BlogStatus } from "../types";
import { BlogActions } from "./blog-actions";
import Image from "next/image";
import { getBlogs } from "@/actions/blog/get-blogs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BlogStatusBadge } from "./blog-status-badge";

export const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [IsDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const { blogs: fetchedBlogs } = await getBlogs();
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSuccess = () => {
    fetchBlogs();
    setIsDialogOpen(false);
    setSelectedBlog(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-pulse text-gray-500">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded-lg ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Dialog open={IsDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Blog Post
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full lg:max-w-screen-sm max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {selectedBlog ? "Edit Blog Post" : "Create New Blog Post"}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <BlogForm
                blog={selectedBlog || undefined}
                onSuccess={handleSuccess}
                onClose={() => setIsDialogOpen(false)}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-start"
          >
            <div className="flex space-x-4 flex-1">
              {blog.imagePath && (
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={blog.imagePath}
                    alt={blog.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              )}
              <div className="space-y-2 flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <BlogStatusBadge status={blog.status as BlogStatus} />
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {blog.description}
                </p>
                <p className="text-xs text-gray-400">
                  {/* Created: {new Date(blog?.createdAt).toLocaleDateString()} */}
                </p>
              </div>
            </div>
            <BlogActions
              blog={blog}
              onEdit={() => {
                setSelectedBlog(blog);
                setIsDialogOpen(true);
              }}
              onDelete={handleSuccess}
              refetch={fetchBlogs}
            />
          </div>
        ))}
        {blogs.length === 0 && (
          <div className="text-center p-8 text-gray-500">
            No blog posts found. Create your first post!
          </div>
        )}
      </div>
    </div>
  );
};
