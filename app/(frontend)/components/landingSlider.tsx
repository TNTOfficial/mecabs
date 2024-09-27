"use client";

import React from "react";

import bg1 from "@/public/bg_slide1.jpg";
import bg2 from "@/public/bg_slide2.jpg";
import bg3 from "@/public/bg_slide3.jpg";
// Swiper components, modules and styles
import {
  Autoplay,
  Navigation,
  EffectFade,
  Pagination,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";
import SwiperCore from "swiper";

SwiperCore.use([Parallax]);

const LandingSlider = () => {
  const swiperRef = React.useRef(null);

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
      ref={swiperRef}
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
        delay: 250000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="h-full"
    >
      {slideContent.map((slide) => {
        return (
          <SwiperSlide
            style={{ backgroundImage: ` url(${slide.bgImg.src})` }}
            className="slideSwiper slide-bg"
            data-swiper-parallax="1152"
          >
            <div className="container">
              <div className="max-w-screen-xl px-3 mx-auto h-[calc(90dvh_-_64px)] py-[100px] flex justify-center items-start flex-col">
                <div className="sectionHeading pb-[100px] w-full max-w-[525px]">
                  <div className="flex gap-3 mb-10">
                    <div
                      onClick={() => swiperRef?.current?.swiper?.slidePrev()}
                      className="rounded-full h-10 w-10 bg-zinc-700 bg-opacity-30 flex justify-center items-center cursor-pointer"
                    >
                      <HiMiniArrowSmallLeft className="text-white text-[1.5rem]" />
                    </div>
                    <div
                      onClick={() => swiperRef?.current?.swiper?.slideNext()}
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
                    className="text-white text-[3rem] font-extrabold"
                  >
                    {slide.subtitle}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      {/* <SwiperSlide
        style={{ backgroundImage: ` url(${bg2.src})` }}
        className="slideSwiper slide-bg"
        data-swiper-parallax="1152"
      >
        <div className="container">
          <div className="max-w-screen-xl px-3 mx-auto h-[calc(90dvh_-_64px)] py-[100px] flex justify-center items-start flex-col">
            <div className="sectionHeading pb-[100px]">
              <div className="flex gap-3 mb-10">
                <div
                  onClick={() => swiperRef?.current?.swiper?.slidePrev()}
                  className="rounded-full h-10 w-10 bg-zinc-700 bg-opacity-30 flex justify-center items-center cursor-pointer"
                >
                  <HiMiniArrowSmallLeft className="text-white text-[1.5rem]" />
                </div>
                <div
                  onClick={() => swiperRef?.current?.swiper?.slideNext()}
                  className="rounded-full h-10 w-10 bg-zinc-700 bg-opacity-30 flex justify-center items-center cursor-pointer"
                >
                  <HiMiniArrowSmallRight className="text-white text-[1.5rem]" />
                </div>
              </div>
              <h4
                data-swiper-parallax="-1000"
                className="text-white text-[1.3rem] font-bold"
              >
                Where Wd You Like To Go?
              </h4>
              <h1
                data-swiper-parallax="-2000"
                className="text-white text-[3rem] font-extrabold"
              >
                ploring the Essence <br /> Of Chauffeur Services
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: ` url(${bg3.src})` }}
        className="slideSwiper slide-bg"
        data-swiper-parallax="1152"
      >
        <div className="container">
          <div className="max-w-screen-xl px-3 mx-auto h-[calc(90dvh_-_64px)] py-[100px] flex justify-center items-start flex-col">
            <div className="sectionHeading pb-[100px]">
              <div className="flex gap-3 mb-10">
                <div
                  onClick={() => swiperRef?.current?.swiper?.slidePrev()}
                  className="rounded-full h-10 w-10 bg-zinc-700 bg-opacity-30 flex justify-center items-center cursor-pointer"
                >
                  <HiMiniArrowSmallLeft className="text-white text-[1.5rem]" />
                </div>
                <div
                  onClick={() => swiperRef?.current?.swiper?.slideNext()}
                  className="rounded-full h-10 w-10 bg-zinc-700 bg-opacity-30 flex justify-center items-center cursor-pointer"
                >
                  <HiMiniArrowSmallRight className="text-white text-[1.5rem]" />
                </div>
              </div>
              <h4
                data-swiper-parallax="-1000"
                className="text-white text-[1.3rem] font-bold"
              >
                Where Wd You Like To Go?
              </h4>
              <h1
                data-swiper-parallax="-2000"
                className="text-white text-[3rem] font-extrabold"
              >
                ploring the Essence <br /> Of Chauffeur Services
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default LandingSlider;
