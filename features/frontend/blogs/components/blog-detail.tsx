import React from "react";
import { BlogClient } from "../types";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { HtmlContent } from "./html-content";

interface BlogDetailProps {
  blog?: BlogClient;
}
export const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!blog) {
    notFound();
  }
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <Link href="/blogs" className="inline-block mb-8">
        <Button variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blogs
        </Button>
      </Link>

      <Card>
        {blog.imagePath && (
          <div className="w-full h-96 relative">
            <Image
              fill={true}
              src={blog.imagePath}
              alt={blog.title}
              className="w-full h-full object-cover object-[0px_-100px] rounded-t-lg"
            />
          </div>
        )}
        <CardHeader className="px-4 mt-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-4xl font-bold capitalize">{blog.title}</CardTitle>
          </div>
          <div className="flex gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Published on {formatDate(blog.createdAt)}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-4 px-4">
          <HtmlContent content={blog.content} />
        </CardContent>
      </Card>
    </div>
  );
};
