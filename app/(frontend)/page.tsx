"use client";

import React from "react";

import Image from "next/image";
import { BsLuggageFill } from "react-icons/bs";
import car1 from "@/public/car1.png";
import car2 from "@/public/car2.png";
import car3 from "@/public/car3.png";
import car4 from "@/public/car4.png";
import car5 from "@/public/car5.png";
import car6 from "@/public/car6.png";
import s1 from "@/public/01.jpg";
import s2 from "@/public/02.jpg";
import s3 from "@/public/03.jpg";
import s4 from "@/public/04.jpg";
import s5 from "@/public/05.jpg";
import bg5 from "@/public/bg5.jpg";
import bgshap from "@/public/bgshap.png";

// import { useEffect } from "react";
// import AOS from "aos";

import "aos/dist/aos.css";
import { IoCarOutline } from "react-icons/io5";
import { PiUsersDuotone } from "react-icons/pi";
import LandingSlider from "./components/landingSlider";
import { AiOutlineSafety } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

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
      carImage: car1,
      passenger: 4,
      luggage: 3,
    },
    {
      title: "The BMW 7 Series Sedan",
      subTitle: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      carImage: car2,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "The BMW 7 Series Sedan",
      subTitle: "Mercedes-Benz V-CIass, Chevrolet Suburban, Cadillac",
      carImage: car3,
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

        <div className="max-lg:hidden max-w-screen-xl w-full px-3 mx-auto absolute 2xl:bottom-[100px] bottom-[40px] left-[50%] translate-x-[-50%] z-10">
          <div className="continueForm bg-white rounded-[50px] w-full px-16 py-3  shadow-lg border-t flex md:justify-between justify-center items-center flex-wrap gap-4">
            <h3 className="text-[1.6rem] font-bold">Start Your Journey</h3>
            <Link
              href="/booking"
              className="text-white bg-black py-4 px-16 hover:scale-95 transition-all duration-300 hover:shadow-sm shadow-none hover:shadow-blue-700 inline-block text-nowrap border-none rounded-[50px]"
            >
              Book Now
            </Link>

            <Link
              href="tel: +91 0000000000"
              className="no-underline text-black flex justify-center items-center gap-2"
            >
              <FiPhoneCall className="text-black text-[1rem]" />{" "}
              <span className="font-extrabold text-black text-[0.9rem]">
                +91 00000XXXXX
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
            mousewheel={true}
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
                      <p className="text-[0.9rem] text-zinc-700 font-normal">
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
            mousewheel={true}
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
            {servicePost.map((service) => {
              return (
                <SwiperSlide key={service.title} className="pb-16">
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
      <section className="news bg-black py-[100px]">
        <div className="container max-w-screen-xl">
          <div className="sectionHeading mb-6">
            <h3 className="text-white text-[2.8rem] font-semibold">
              Latest From News
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5">
            <div className="lg:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card p-2 [&_img]:hover:scale-110 cursor-pointer [&_.cardImage]:hover:before:top-0 [&_.cardImage]:hover:before:opacity-100">
                <div className="cardImage w-full h-[300px] rounded-xl overflow-hidden relative z-0 before:z-10 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-[#00f4] before:to-[#0000ff11]  before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-25 after:z-[8]">
                  <Image
                    src={s2}
                    alt="s1"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <h2 className="text-[3rem] text-white font-normal flex flex-col absolute z-20 top-3 left-3">
                    <strong className="leading-none">18.</strong>
                    <span className="text-[1rem]">April, 2024</span>
                  </h2>
                </div>

                <div className="cardBody pt-5 px-1">
                  <h4 className="cardTitle text-[0.9rem] text-white font-normal mb-3">
                    Car Rent
                  </h4>

                  <p className="text-white font-semibold text-[1.5rem] mb-4">
                    Escaping London for a relaxing long weekend
                  </p>

                  <p className="text-white font-normal text-[1rem] mb-4">
                    Explore the picturesque countryside of England, such as the
                    Cotswolds, Lake District, or Peak District.
                  </p>
                  <a href="#" className=" text-white">
                    <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card p-2 [&_img]:hover:scale-110 cursor-pointer [&_.cardImage]:hover:before:top-0 [&_.cardImage]:hover:before:opacity-100">
                <div className="cardImage w-full h-[300px] rounded-xl overflow-hidden relative z-0 before:z-10 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-[#00f4] before:to-[#0000ff11]  before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-25 after:z-[8]">
                  <Image
                    src={s5}
                    alt="s1"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <h2 className="text-[3rem] text-white font-normal flex flex-col absolute z-20 top-3 left-3">
                    <strong className="leading-none">18.</strong>
                    <span className="text-[1rem]">April, 2024</span>
                  </h2>
                </div>

                <div className="cardBody pt-5 px-1">
                  <h4 className="cardTitle text-[0.9rem] text-white font-normal mb-3">
                    Car Rent
                  </h4>

                  <p className="text-white font-semibold text-[1.5rem] mb-4">
                    Escaping London for a relaxing long weekend
                  </p>

                  <p className="text-white font-normal text-[1rem] mb-4">
                    Explore the picturesque countryside of England, such as the
                    Cotswolds, Lake District, or Peak District.
                  </p>
                  <a href="#" className=" text-white">
                    <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card p-2 [&_img]:hover:scale-110 cursor-pointer [&_.cardImage]:hover:before:top-0 [&_.cardImage]:hover:before:opacity-100">
                <div className="cardImage w-full h-[300px] rounded-xl overflow-hidden relative z-0 before:z-10 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-[#00f4] before:to-[#0000ff11]  before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-25 after:z-[8]">
                  <Image
                    src={s4}
                    alt="s1"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <h2 className="text-[3rem] text-white font-normal flex flex-col absolute z-20 top-3 left-3">
                    <strong className="leading-none">18.</strong>
                    <span className="text-[1rem]">April, 2024</span>
                  </h2>
                </div>

                <div className="cardBody pt-5 px-1">
                  <h4 className="cardTitle text-[0.9rem] text-white font-normal mb-3">
                    Car Rent
                  </h4>

                  <p className="text-white font-semibold text-[1.5rem] mb-4">
                    Escaping London for a relaxing long weekend
                  </p>

                  <p className="text-white font-normal text-[1rem] mb-4">
                    Explore the picturesque countryside of England, such as the
                    Cotswolds, Lake District, or Peak District.
                  </p>
                  <a href="#" className=" text-white">
                    <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News end */}

      {/* FAQ Start */}
      <section className="faq py-[100px] border-t border-zinc-300">
        <div className="container">
          <div className="max-w-screen-md mx-auto">
            <div className="section_title text-center mb-14">
              <h3 className="text-[3rem] text-black font-medium">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="acordians">
              <ul className="list-none">
                <li className="pb-6 border-b border-zinc-400">
                  <h3 className="text-black text-[1.5rem] font-semibold flex justify-between items-center">
                    <span>How do I create an account?</span>{" "}
                    <CiCirclePlus className="text-black text-[1.5rem]" />
                  </h3>
                  <p className="text-[1rem] text-black font-normal pt-3">
                    Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy
                    Retailer For The People, Focusing On The Promotion Of
                    Sustainable Living, Renewable Energy Production And Smart
                    Energy Grid Utility Services.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ End */}
    </>
  );
}
