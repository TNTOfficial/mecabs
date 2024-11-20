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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { searchBlogs } from "@/actions/blog/search-blog";
import { Blog } from "@/features/admin/blog/types";
import { Clock } from "lucide-react";
// import banner6 from '@/public/banner6.webp'

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
    }, 6);
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
    <>
      <div className="relative z-0 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-0 before:z-10">
        {/* <Image src={banner6} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover object-bottom" /> */}
        <div className="min-h-[400px] relative z-10 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 pt-12 pb-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-black md:text-5xl text-4xl font-bold">Our Blog Posts</h3>
            <p className="text-gray-700 text-sm mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat reprehenderit totam placeat itaque blanditiis cum, in laudantium obcaecati dolor natus ratione et ut quisquam saepe, amet consectetur consequuntur hic!</p>

            <div className="w-full mx-auto bg-gray-100 flex p-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} type="text"
                placeholder="Search blogs...." className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3" />
              <button type='button'
                className="bg-gray-800 hover:bg-gray-700 transition-all text-white tracking-wide text-sm rounded-full px-6 py-3">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
          <div className="flex gap-4 mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10"
            />
          </div>
        </div> */}

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-200 relative before:absolute before:bottom-3 before:right-3 before:h-5 before:aspect-square odd:before:bg-gray-600 before:bg-blue-600 odd:before:bg-opacity-35 before:bg-opacity-35 before:z-[1] before:rounded-full  after:absolute after:bottom-4 after:right-4 after:h-10 after:aspect-square odd:after:bg-blue-600 after:bg-gray-600 odd:after:bg-opacity-35 after:bg-opacity-35 after:z-[1] after:rounded-full"
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
                <CardHeader className="px-3 pt-3">
                  <CardTitle className="line-clamp-[1.4] text-[1.3rem] capitalize">{blog.title}</CardTitle> 
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="px-3 m-0">
                  <p className="text-gray-600 line-clamp-3">{blog.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between px-3 pb-3 pt-5">
                  {blog.updatedAt && (
                    <span className="text-[0.8rem] text-gray-700 bg-blue-500 bg-opacity-15 p-2 rounded-lg flex justify-center items-center gap-2">
                     <Clock className="h-4 w-4" />  {formatDate(blog.updatedAt)}
                    </span>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
