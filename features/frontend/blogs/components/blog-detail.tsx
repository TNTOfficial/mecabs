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
          <div className="flex-[2_1_600px]">
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
          <div className="flex-[1_1_300px] w-full sticky top-20 ">
            <div className="flex flex-col gap-10">
              {/*  Recent Post Box Start */}
              <div className="w-full rounded-xl border border-gray-3 p-4 sm:p-7 lg:p-10">
                <h4 className="font-bold text-[1.375rem] text-dark mb-7">
                  Recent Posts
                </h4>

                <div className=" flex flex-col gap-7">
                  {/*  post item */}
                  <a href="blog-single-3.html" className="group flex gap-4 ">
                    <div className="h-[70px] aspect-square rounded-full overflow-hidden w-[70px] max-w-[70px] min-w-[70px]">
                      <Image src={Sideimg1} alt="blog" className="h-full w-full object-cover" />
                    </div>

                    <div>
                      <h5 className="font-medium text-sm text-dark duration-200 ease-in mb-1 group-hover:text-blue-600">
                        The Most Beautiful Green Field on Earth
                      </h5>

                      <div className="flex items-center gap-2">
                        <p className="text-[0.8rem]">Rhiel Madsen</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
                        <p className="text-[0.8rem]">Sep 10, 2025</p>
                      </div>
                    </div>
                  </a>

                  {/*  post item */}
                  <a href="blog-single-3.html" className="group flex gap-4 ">
                    <div className="h-[70px] aspect-square rounded-full overflow-hidden w-[70px] max-w-[70px] min-w-[70px]">
                      <Image src={Sideimg2} alt="blog" className="h-full w-full object-cover" />
                    </div>

                    <div>
                      <h5 className="font-medium text-sm text-dark duration-200 ease-in mb-1 group-hover:text-blue-600">
                        Facts About Business That Will Help You Success
                      </h5>

                      <div className="flex items-center gap-2">
                        <p className="text-[0.8rem]">Jordyn Culhne</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
                        <p className="text-[0.8rem]">Mar-12, 2025</p>
                      </div>
                    </div>
                  </a>

                  {/*  post item */}
                  <a href="blog-single-3.html" className="group flex gap-4 ">
                    <div className="h-[70px] aspect-square rounded-full overflow-hidden w-[70px] max-w-[70px] min-w-[70px]">
                      <Image src={Sideimg3} alt="blog" className="h-full w-full object-cover" />
                    </div>

                    <div>
                      <h5 className="font-medium text-sm text-dark duration-200 ease-in mb-1 group-hover:text-blue-600">
                        5 Easy Ways You Can Turn Future Into Success
                      </h5>

                      <div className="flex items-center gap-2">
                        <p className="text-[0.8rem]">Ane Madsen</p>
                        <span className="flex w-[3px] h-[3px] rounded-full bg-gray-500"></span>
                        <p className="text-[0.8rem]">Nov 25, 2025</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/*  Recent Post Box End */}

              {/*  Explore Topics Box Start */}
              <div className="w-full rounded-xl border border-gray-3 p-4 sm:p-7 lg:p-10 bg-gray-300">
                <h4 className="font-bold text-[1.375rem] text-dark mb-8">
                  Explore Topics
                </h4>

                <div className="flex flex-col gap-3">
                  {/*  topics item */}
                  <a href="#" className="group flex items-center justify-between gap-2">
                    <p className="ease-in duration-200 group-hover:text-dark">
                      Celebration
                    </p>

                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-[0.875rem] border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                      02
                    </span>
                  </a>

                  {/*  topics item */}
                  <a href="#" className="group flex items-center justify-between gap-2">
                    <p className="ease-in duration-200 group-hover:text-dark">
                      Culture
                    </p>

                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-[0.875rem] border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                      05
                    </span>
                  </a>

                  {/*  topics item */}
                  <a href="#" className="group flex items-center justify-between gap-2">
                    <p className="ease-in duration-200 group-hover:text-dark">
                      Fashion
                    </p>

                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-[0.875rem] border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                      12
                    </span>
                  </a>

                  {/*  topics item */}
                  <a href="#" className="group flex items-center justify-between gap-2">
                    <p className="ease-in duration-200 group-hover:text-dark">
                      Inspiration
                    </p>

                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-[0.875rem] border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                      30
                    </span>
                  </a>

                  {/*  topics item */}
                  <a href="#" className="group flex items-center justify-between gap-2">
                    <p className="ease-in duration-200 group-hover:text-dark">
                      Lifestyle
                    </p>

                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-[0.875rem] border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                      45
                    </span>
                  </a>

                  {/*  topics item */}
                  <a href="#" className="group flex items-center justify-between gap-2">
                    <p className="ease-in duration-200 group-hover:text-dark">
                      Political
                    </p>

                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-[0.875rem] border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                      23
                    </span>
                  </a>

                  {/*  topics item */}
                  <a href="#" className="group flex items-center justify-between gap-2">
                    <p className="ease-in duration-200 group-hover:text-dark">
                      Trending
                    </p>

                    <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-[0.875rem] border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-black group-hover:border-black">
                      03
                    </span>
                  </a>
                </div>
              </div>
              {/*  Explore Topics Box End */}

              {/*  Newsletter Box Start */}
              <div className="w-full rounded-xl border border-gray-3 p-4 sm:p-7 lg:p-10">
                <h4 className="font-bold text-[1.375rem] text-dark mb-7">
                  Newsletter
                </h4>
                <p className="font-medium text-[1.125rem] mb-5">
                  Join 70,000 subscribers!
                </p>

                <form>
                  <input id="email" type="email" name="email" placeholder="Enter your Email" className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3 px-5 outline-none text-center focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent" />
                  <button className="font-medium rounded-md bg-zinc-900 text-white bg-dark flex justify-center text-center w-full py-3 px-5 hover:opacity-90 transition-all duration-200 mt-4">
                    Subscribe Now
                  </button>
                </form>

                <p className="text-[0.875rem] mt-5 text-center">
                  By signing up, you agree to our
                  <a href="privacy-policy.html" className="text-dark">Privacy Policy</a>
                </p>
              </div>
              {/*  Newsletter Box End */}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
