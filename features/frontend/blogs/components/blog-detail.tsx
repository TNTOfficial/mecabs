import React from "react";
import { BlogClient } from "../types";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { HtmlContent } from "./html-content";
import Sideimg1 from '@/public/user1.webp'
import Sideimg2 from '@/public/user2.webp'
import Sideimg3 from '@/public/user3.webp'

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
    <>
      <div className="container max-w-screen-xl py-14">
        <div className="flex flex-wrap justify-center items-start max-lg:flex-col gap-8">
          <div className="flex-[1_1_0px]">
            <div className="blogDetails">
     
            <Link href="/blogs" className="inline-block mb-8 fixed top-20 right-5 z-50" >
                <Button variant="outline" className="max-lg:p-2 rounded-full">
                  <ArrowLeft className="lg:mr-2 h-4 w-4" />
                 <span className="max-lg:hidden">Back to blogs</span>
                </Button>
              </Link>
              <Card className="border-none shadow-none">
                {blog.imagePath && (
                  <div className="w-full h-96 relative">
                    <Image
                      fill={true}
                      src={blog.imagePath}
                      alt={blog.title}
                      className="w-full h-full object-cover object-[0px_-100px] rounded-xl"
                    />
                  </div>
                )}
                <CardHeader className="px-4 mt-6">
                  <div className="flex justify-between items-center py-9">
                    <CardTitle className="text-5xl font-extrabold capitalize">{blog.title}</CardTitle>
                  </div>
                  <div className="flex gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="icon bg-gray-500 rounded-full h-12 aspect-square flex justify-center items-center">
                      <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <span>Published on {formatDate(blog.createdAt)}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-4 px-4">
                  <HtmlContent content={blog.content} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
