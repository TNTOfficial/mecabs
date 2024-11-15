"use client";

import { getBlogs } from "@/actions/blog/get-blogs";
import { Blog, BlogStatus } from "@/features/admin/blog/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

// Swiper components, modules and styles
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";
import SwiperCore from "swiper";
import { Swiper as SwiperType } from "swiper";
SwiperCore.use([Parallax]);
export const NewsSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const swiperRef = useRef<SwiperType | null>(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getBlogs(5, BlogStatus.ACTIVE);
      if (response.success && response.blogs) {
        setBlogs(response.blogs);
      }
    };
    fetchBlogs();
  }, []);

  const formatDate = (date: Date) => {
    const d = new Date(date);
    return {
      day: d.getDate(), // gets the day of the month
      month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(d),
      year: d.getFullYear(),
    };
  };
  return (
    <section className="news bg-zinc-950 py-[100px]">
      <div className="container max-w-screen-xl">
        <div className="sectionHeading mb-6 flex justify-between items-center ">
          <h3 className="text-white text-[2.8rem] font-semibold">
            Latest From News
          </h3>
          <div className="flex">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="rounded-full h-10 w-10 bg-zinc-700 bg-opacity-30 flex justify-center items-center cursor-pointer"
            >
              <HiMiniArrowSmallLeft className="text-white text-[1.5rem]" />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="rounded-full h-10 w-10 bg-zinc-700 bg-opacity-30 flex justify-center items-center cursor-pointer"
            >
              <HiMiniArrowSmallRight className="text-white text-[1.5rem]" />
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ type: "fraction", clickable: false }}
          autoplay={{
            delay: 200000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="h-full text-white items-stretch [&_.swiper-wrapper]:items-stretch"
        >
          {blogs.map((blog) => {
            const date = blog.createdAt ? formatDate(blog.createdAt) : null;
            return (
              <SwiperSlide
                key={blog.title}
                className="h-auto w-full"
                data-swiper-parallax="1152"
              >
                <div
                  key={blog.id}
                  className="flex-[1_1_300px] h-full"
                >
                  <div className="card rounded-2xl h-full p-2 [&_img]:hover:scale-110 cursor-pointer [&_.cardImage]:hover:before:top-0 [&_.cardImage]:hover:before:opacity-100 bg-gray-800">
                    <div className="cardImage w-full h-[300px] rounded-xl overflow-hidden relative z-0 before:z-10 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-[#00f4] before:to-[#0000ff11] before:transition-all before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-25 after:z-[8]">
                      {blog.imagePath ? (
                        <Image
                          src={blog.imagePath}
                          alt={blog.title}
                          fill
                          className="object-cover transition-all duration-300"
                        />
                      ) : (
                        <Image
                          src="/api/placeholder/400/300"
                          alt="placeholder"
                          fill={true}
                          className="w-full h-full object-cover transition-all duration-300"
                        />
                      )}
                      {date && (
                        <h2 className="text-[3rem] text-white font-normal flex flex-col absolute z-20 top-3 left-3">
                          <strong className="leading-none">{date.day}.</strong>
                          <span className="text-[1rem]">
                            {date.month}, {date.year}
                          </span>
                        </h2>
                      )}
                    </div>

                    <div className="cardBody pt-5 px-1">
                      <h4 className="cardTitle text-[0.9rem] text-white font-normal mb-3">
                        {blog.status}
                      </h4>

                      <p className="text-white font-semibold text-[1.5rem] mb-4">
                        {blog.title}
                      </p>

                      <p className="text-white font-normal text-[1rem] mb-4">
                        {blog.description}
                      </p>

                      <a href="#" className="text-white">
                        <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};
