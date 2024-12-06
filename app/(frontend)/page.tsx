"use client";

import React from "react";

import Image from "next/image";
import { BsLuggageFill } from "react-icons/bs";
import car1 from "@/public/car1.webp";
import car2 from "@/public/car2.webp";
import car3 from "@/public/car3.webp";
import car4 from "@/public/car4.webp";
import car5 from "@/public/car5.webp";
import car6 from "@/public/car6.webp";
import car11 from "@/public/car11.webp";
import car12 from "@/public/car12.webp";
import car13 from "@/public/car13.webp";
import car14 from "@/public/car14.webp";
import s1 from "@/public/01.webp";
import s2 from "@/public/02.webp";
import s3 from "@/public/03.webp";
import s4 from "@/public/04.webp";
import s5 from "@/public/05.webp";
import user1 from "@/public/user1.webp";
import user2 from "@/public/user2.webp";
import user3 from "@/public/user3.webp";
import bg5 from "@/public/bg5.webp";
import bgshap from "@/public/bgshap.webp";

// import { useEffect } from "react";
// import AOS from "aos";

import "aos/dist/aos.css";
import { IoCarOutline, IoCheckmark } from "react-icons/io5";
import { PiUsersDuotone } from "react-icons/pi";
import LandingSlider from "./components/landingSlider";
import { AiOutlineSafety } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { NewsSection } from "@/features/frontend/home/components/news-section";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

export default function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     easing: "ease-out-quad",
  //     duration: 1000,
  //   });
  // }, []);

  const makeTrip = [
    {
      title: "Safety First",
      icon: AiOutlineSafety,
      para: "Both you and your shipments will travel with professionaldrivers. Always with the highest quality standards.",
    },
    {
      title: "Prices With No Surprises",
      icon: RiMoneyDollarCircleLine,
      para: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
    },
    {
      title: "Private Travel Solutions",
      icon: IoCarOutline,
      para: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
    },
  ];

  const carPost = [
    {
      title: "The BMW 7 Series Sedan",
      subTitle: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      carImage: car12,
      passenger: 4,
      luggage: 3,
    },
    {
      title: "The BMW 7 Series Sedan",
      subTitle: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      carImage: car13,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "The BMW 7 Series Sedan",
      subTitle: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      carImage: car14,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "The BMW 7 Series Sedan",
      subTitle: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      carImage: car4,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "The BMW 7 Series Sedan",
      subTitle: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      carImage: car5,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "The BMW 7 Series Sedan",
      subTitle: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      carImage: car6,
      passenger: 4,
      luggage: 3,
    },
  ];

  const servicePost = [
    {
      title: "The BMW 7 Series Sedan",
      para: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      serviceImage: s1,
    },
    {
      title: "The BMW 7 Series Sedan",
      para: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      serviceImage: s2,
    },

    {
      title: "The BMW 7 Series Sedan",
      para: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      serviceImage: s3,
    },

    {
      title: "The BMW 7 Series Sedan",
      para: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      serviceImage: s4,
    },

    {
      title: "The BMW 7 Series Sedan",
      para: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      serviceImage: s5,
    },
  ];

  return (
    <>
      <section id="top" className="landing_area relative z-0">
        <LandingSlider />

        <div className="max-lg:hidden max-w-screen-xl w-full px-3 mx-auto absolute 2xl:bottom-[4  0px] bottom-[40px] left-[50%] translate-x-[-50%] z-10">
          <div className="continueForm bg-white rounded-[50px] w-full px-16 py-3  shadow-lg border-t flex md:justify-between justify-center items-center flex-wrap gap-4">
            <h3 className="text-[1.6rem] font-bold">Start Your Journey</h3>
            <Link
              href="/booking"
              className="text-white bg-black py-4 px-16 hover:scale-95 transition-all duration-300 hover:shadow-sm shadow-none hover:shadow-blue-700 inline-block text-nowrap border-none rounded-[50px]"
            >
              Book Now
            </Link>
            <Link
              href="/manage-bookings"
              className="text-white bg-black py-4 px-16 hover:scale-95 transition-all duration-300 hover:shadow-sm shadow-none hover:shadow-blue-700 inline-block text-nowrap border-none rounded-[50px]"
            >
              Manage Bookings
            </Link>

            <Link
              href="tel: +61 1300012018"
              className="no-underline text-black flex justify-center items-center gap-2"
            >
              <FiPhoneCall className="text-black text-[1rem]" />{" "}
              <span className="font-extrabold text-black text-[.9rem]">
                +61 1300012018
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Make your trip Start */}
      <section className="makeTrip pt-[100px]">
        <div className="container">
          <div className="sectionHeading text-center">
            <h2 className="capitalize text-zinc-800 text-[2.3rem] font-bold">
              Make your trip your way with us
            </h2>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-10 pt-10">
            {makeTrip.map((trip) => {
              return (
                <div
                  className="xl:w-[calc(100%_/_4_-_40px)] md:w-[calc(100%_/_2_-_40px)] w-[calc(100%_/_1_-_40px)]"
                  key={trip.title}
                >
                  <div className="card text-center cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                    <div className="card_icon  mx-auto bg-zinc-100 h-16 w-16 mb-6 rounded-full flex justify-center items-end">
                      <trip.icon className="text-zinc-600 text-[2.5rem]" />
                    </div>

                    <h3 className="text-[1.3rem] text-zinc-800 font-semibold mb-4">
                      {trip.title}
                    </h3>
                    <p className="text-[1rem] text-zinc-800 font-medium">
                      {trip.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-20">
            <div className="bg-blue-700 pb-10 px-5 rounded-md">
              <div
                className="max-w-screen-lg mx-auto bg-no-repeat bg-center bg-cover pt-20 pb-10 flex flex-wrap justify-center items-center gap-5"
                style={{ backgroundImage: ` url(${bgshap.src})` }}
              >
                <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
                  <h2 className="text-[3rem] text-white font-bold">
                    Showcase some impressive numbers.
                  </h2>
                </div>
                <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
                  <div className="flex justify-around items-center">
                    <div className="count text-center  cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                      <h3 className="text-[3rem] text-white font-semibold">
                        285 +
                      </h3>
                      <h5 className="text-[1.3rem] text-white font-medium">
                        Vehicles
                      </h5>
                    </div>
                    <div className="count text-center  cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                      <h3 className="text-[3rem] text-white font-semibold">
                        97
                      </h3>
                      <h5 className="text-[1.3rem] text-white font-medium">
                        Awards
                      </h5>
                    </div>
                    <div className="count text-center  cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                      <h3 className="text-[3rem] text-white font-semibold">
                        13 k
                      </h3>
                      <h5 className="text-[1.3rem] text-white font-medium">
                        Happy Customer
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Make your trip end */}

      {/* Our fleet Start */}
      <section className="ourFleet py-[100px] relative overflow-hidden z-0">
        <div className="circle absolute bottom-[-40%] left-[-10%] border-[1px] border-blue-700 h-full z-[-1] w-[40%] rounded-[50%] scale-125"></div>

        <div className="container xl:max-w-screen-2xl xl:ms-auto xl:me-0">
          <div className="section_title">
            <h3 className="text-[2.8rem] mb-5 text-zinc-800 font-semibold">
              Our Fleet
            </h3>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            modules={[Pagination, Mousewheel]}
            breakpoints={{
              639: {
                slidesPerView: 2,
              },
              1023: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {carPost.map((car) => {
              return (
                <SwiperSlide key={car.title} className="pb-16 cursor-grab">
                  <div className="card border border-zinc-400 rounded-lg py-8 px-4 bg-white hover:bg-zinc-50">
                    <div className="card_titles">
                      <h4 className="text-[1.2rem] font-semibold text-zinc-800 mb-3">
                        {car.title}
                      </h4>
                      <p className="text-[.9rem] text-zinc-700 font-normal">
                        {car.subTitle}
                      </p>
                    </div>

                    <div className="card_img w-full h-[200px]">
                      <Image
                        src={car.carImage}
                        className="w-full h-full object-contain "
                        alt="Car Image"
                      />
                    </div>
                    <div className="icons flex justify-between items-center">
                      <div className="persons flex justify-center items-center gap-2 w-[50%]">
                        <div className="icon h-12 w-12 rounded-full bg-zinc-100 flex justify-center items-center">
                          <PiUsersDuotone className="text-zinc-900 text-[1.2rem]" />
                        </div>
                        <span className="text-zinc-800 font-normal text-[1rem]">
                          Passengers <span>{car.passenger}</span>
                        </span>
                      </div>
                      <div className="luggages flex justify-center items-center gap-2 w-[50%]">
                        <div className="icon h-12 w-12 rounded-full bg-zinc-100 flex justify-center items-center">
                          <BsLuggageFill className="text-zinc-900 text-[1.2rem]" />
                        </div>
                        <span className="text-zinc-800 font-normal text-[1rem]">
                          Luggage <span>{car.luggage}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* Our fleet End */}

      {/* How It Works Start */}
      <section className="how py-[100px] bg-black">
        <div className="container">
          <div className="section_title">
            <h3 className="text-[2.8rem] text-white font-bold mb-5">
              How It Works
            </h3>

            <div className="flex flex-wrap gap-5 justify-center items-stretch">
              <div className="2xl:w-[calc(30%_-_20px)] lg:w-[calc(40%_-_20px)] w-[calc(100%_-_20px)]">
                <div className="text-start mb-8">
                  <h4 className="text-white text-[1.5rem] font-medium mb-3">
                    Create Your Route
                  </h4>
                  <p className="text-white text-[1rem] font-normal">
                    Enter your pickup & dropoff locations or the number of hours
                    you wish to book a car and driver for
                  </p>
                </div>

                <div className="text-start mb-8">
                  <h4 className="text-white text-[1.5rem] font-medium mb-3">
                    Choose Vehicle For You
                  </h4>
                  <p className="text-white text-[1rem] font-normal">
                    Enter your pickup & dropoff locations or the number of hours
                    you wish to book a car and driver for
                  </p>
                </div>

                <div className="text-start mb-8">
                  <h4 className="text-white text-[1.5rem] font-medium mb-3">
                    Enjoy The Journey
                  </h4>
                  <p className="text-white text-[1rem] font-normal">
                    Enter your pickup & dropoff locations or the number of hours
                    you wish to book a car and driver for
                  </p>
                </div>
              </div>
              <div
                style={{ backgroundImage: ` url(${bg5.src})` }}
                className="2xl:w-[calc(70%_-_20px)] lg:w-[calc(60%_-_20px)] w-[calc(100%_-_20px)] py-[100px] px-4 flex justify-center items-center  bg-no-repeat bg-center bg-fixed bg-cover relative z-0 after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[-1]"
              >
                <div className="icons w-full flex justify-between relative z-0 before:z-[-1] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:bg-white before:w-full before:h-1">
                  <div className="circle_short h-8 w-8 rounded-full bg-gray-400 flex justify-center items-center">
                    <div className="small h-4 w-4 rounded-full bg-white"></div>
                  </div>
                  <div className="circle_short h-8 w-8 rounded-full bg-gray-400 flex justify-center items-center">
                    <div className="small h-4 w-4 rounded-full bg-white"></div>
                  </div>
                  <div className="circle_short h-8 w-8 rounded-full bg-gray-400 flex justify-center items-center">
                    <div className="small h-4 w-4 rounded-full bg-white"></div>
                  </div>
                  <div className="button">
                    <a
                      href="#top"
                      className="no-underline text-[1rem] text-black bg-white rounded-3xl py-3 px-5"
                    >
                      Continue Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works End */}

      {/* Our Service Start */}
      <section className="ourService py-[100px] relative overflow-hidden z-0">
        <div className="circle absolute bottom-[-40%] right-[-10%] border-[1px] border-blue-700 h-full z-[-1] w-[40%] rounded-[50%] scale-125"></div>

        <div className="xl:max-w-screen-2xl me-auto px-4">
          <div className="section_title">
            <h3 className="text-[2.8rem] text-end mb-5 text-zinc-800 font-semibold">
              Our Services
            </h3>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            loop={true}
            modules={[Pagination, Mousewheel]}
            className="mySwiper pb-12"
            breakpoints={{
              639: {
                slidesPerView: 2,
              },
              1023: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
          >
            {servicePost.map((service, idx) => {
              return (
                <SwiperSlide key={idx} className="pb-16">
                  <div className="relative z-0 overflow-hidden rounded-2xl [&_.cardBody]:hover:bottom-0 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-blue-700 before:to-[#0000ff11] before:hover:top-0 before:hover:opacity-100 before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-25 after:z-[8]">
                    <div className="card_img w-full h-[400px] rounded-2xl overflow-hidden">
                      <Image
                        src={service.serviceImage}
                        className="w-full h-full object-cover "
                        alt="Car Image"
                      />
                    </div>
                    <div className="cardBody bg-transparent p-5 flex flex-col justify-end items-start absolute z-30 bottom-[-30%] left-0 w-full transition-all duration-300">
                      <h3 className="text-white mb-5 text-[1.7rem]">
                        Intercity Rides
                      </h3>
                      <p className="text-white mb-4">
                        At the heart Of Wedding Class is a commitment to
                        personalized service.
                      </p>

                      <a href="#" className=" text-white">
                        <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* Our Service End */}

      {/* News Start */}
      <NewsSection />
      {/* News end */}

      {/* Testimonials Start */}
      <section className="testimonials pt-[100px]">
        <div className="my-6 max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-800">
              What our happy client say
            </h2>
            <p className="text-sm mt-4 leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              praesentium consectetur vero maxime, quod nemo eum debitis Odit
              deserunt vero placeat voluptatum assumenda!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-md:gap-12 max-md:justify-center text-center max-md:max-w-lg mx-auto mt-16">
            <div className="rounded-md">
              <div className="flex flex-col items-center">
                <Image
                  src={user3}
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white object-cover"
                  alt="Testimonial user1"
                />
                <div className="mt-4">
                  <h4 className="text-sm font-extrabold text-gray-800">
                    John Doe
                  </h4>
                  <p className="text-xs text-blue-600 font-bold mt-1">
                    CEO, Company
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm leading-relaxed text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  praesentium consectetur vero maxime, quod nemo eum debitis
                  Odit deserunt vero placeat voluptatum assumenda!
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-gray-600" />
              </div>
            </div>

            <div className="rounded-md">
              <div className="flex flex-col items-center">
                <Image
                  src={user1}
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white object-cover"
                  alt="Testimonial user1"
                />
                <div className="mt-4">
                  <h4 className="text-sm font-extrabold text-gray-800">
                    Mark Adair
                  </h4>
                  <p className="text-xs text-blue-600 font-bold mt-1">
                    CEO, Company
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm leading-relaxed text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  praesentium consectetur vero maxime, quod nemo eum debitis
                  Odit deserunt vero placeat voluptatum assumenda!
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
              </div>
            </div>

            <div className="rounded-md">
              <div className="flex flex-col items-center">
                <Image
                  src={user2}
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white object-cover"
                  alt="Testimonial user1"
                />
                <div className="mt-4">
                  <h4 className="text-sm font-extrabold text-gray-800">
                    Simon Konecki
                  </h4>
                  <p className="text-xs text-blue-600 font-bold mt-1">
                    CEO, Company
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm leading-relaxed text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  praesentium consectetur vero maxime, quod nemo eum debitis
                  Odit deserunt vero placeat voluptatum assumenda!
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials End */}
      {/* FAQ Start */}
      <section className="faq py-[100px]">

        <div className="container">
          <div className="max-w-screen-md mx-auto">
            <div className="bg-white px-6">
              <h2 className="text-3xl font-extrabold text-black text-center mb-10">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold text-[#333] no-underline">
                    <span>How can I create an account?</span> </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>


              <div className="space-y-8 max-w-4xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <IoCheckmark className="text-blue-700 text-[1.3rem]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#333]">
                      How can I create an account?
                    </h3>
                    <p className="text-sm text-[#333] mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <IoCheckmark className="text-blue-700 text-[1.3rem]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#333]">
                      How can I reset my password?
                    </h3>
                    <p className="text-sm text-[#333] mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <IoCheckmark className="text-blue-700 text-[1.3rem]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#333]">
                      How do I update my account information?
                    </h3>
                    <p className="text-sm text-[#333] mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <IoCheckmark className="text-blue-700 text-[1.3rem]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#333]">
                      Is there a mobile app available?
                    </h3>
                    <p className="text-sm text-[#333] mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ End */}
    </>
  );
}
