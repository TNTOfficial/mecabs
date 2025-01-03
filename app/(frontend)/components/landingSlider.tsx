"use client";

import React, { useRef } from "react";

import bg1 from "@/public/bg_slide1.webp";
import bg2 from "@/public/bg_slide2.webp";
import bg3 from "@/public/bg_slide3.webp";
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

const LandingSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const slideContent = [
    {
      title: "Where Wd You Like To Go?",
      subtitle: "Ploring the Essence Of Chauffeur Services",
      bgImg: bg1,
    },

    {
      title: "Where Wd You Like To Go?",
      subtitle: "Your Personal Chauffeur Services",
      bgImg: bg2,
    },

    {
      title: "Where Wd You Like To Go?",
      subtitle: "Tailored Experiences with Chauffeur Services",
      bgImg: bg3,
    },
  ];
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      pagination={{ type: "fraction", clickable: false }}
      centeredSlides={true}
      speed={1000}
      init={true}
      parallax={true}
      onInit={(swiper) => {
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i]
            .querySelector(".slide-bg")
            ?.setAttribute("data-swiper-parallax", `${0.75 * swiper.width}`);
        }
      }}
      autoplay={{
        delay: 200000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="h-full text-white"
    >
      {slideContent.map((slide) => {
        return (
          <SwiperSlide
            key={slide.title}
            style={{ backgroundImage: ` url(${slide.bgImg.src})` }}
            className=" bg-no-repeat bg-cover max-lg:even:bg-left-top bg-left relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0 h-full slide-bg"
            data-swiper-parallax="1152"
          >
            <div className="container">
              <div className="max-w-screen-xl px-3 mx-auto lg:h-[calc(90dvh_-_64px)] h-full min-h-[60vh] py-[50px] lg:py-[100px] flex lg:justify-evenly justify-center items-start flex-col">
                <div className="sectionHeading lg:pb-[100px] w-full max-w-[525px]">
                  <div className="flex gap-3 mb-10">
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
                  <h4
                    data-swiper-parallax="-1000"
                    className="text-white text-[1.1rem] font-bold"
                  >
                    {slide.title}
                  </h4>
                  <h1
                    data-swiper-parallax="-2000"
                    className="text-white lg:text-[3rem] text-[2rem] font-extrabold"
                  >
                    {slide.subtitle}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default LandingSlider;
