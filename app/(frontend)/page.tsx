"use client";

import { BsBuildings, BsBusFront, BsLuggage } from "react-icons/bs";
import card1 from "@/public/01.jpg";
import card2 from "@/public/02.jpg";
import card3 from "@/public/03.jpg";
import car1 from "@/public/car1.jpg";
import car2 from "@/public/car2.jpg";
import car3 from "@/public/car3.jpg";
import bgshap from "@/public/bgshap.png";
import calender from "@/public/calendar.png";
import TabComponents from "./components/tabs";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import {
  IoAirplaneOutline,
  IoCalendar,
  IoCarOutline,
  IoCarSportOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";
import { LuSliders } from "react-icons/lu";
import {
  PiArrowUUpLeftFill,
  PiArrowUUpRightFill,
  PiChatsThin,
} from "react-icons/pi";
import { GiLighthouse } from "react-icons/gi";
import { TbUser } from "react-icons/tb";
import LandingSlider from "./components/landingSlider";
import { AiOutlineSafety } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
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

  return (
    <>
      <section className="landing_area relative z-0">
        <LandingSlider />

        <div className="max-w-screen-xl w-full px-3 mx-auto lg:absolute lg:bottom-[100px] left-[50%] max-lg:mt-[50px] lg:translate-x-[-50%] z-10">
          <div className="continueForm bg-white rounded-[50px] w-full px-5 py-5  shadow-lg border-t">
            <form
              action=""
              className="flex lg:justify-center md:justify-start items-center flex-wrap gap-5"
            >
              <div className="lg:w-[calc(85%_/_4_-_20px)] md:w-[calc(100%_/_2_-_20px)] sm:w-fit w-full">
                <div className="inputField flex justify-start items-center gap-3">
                  <div className="icon h-14 min-w-14 max-w-14 w-full flex justify-center items-center rounded-full bg-zinc-100">
                    <IoMailUnreadOutline className="text-zinc-500 text-[1.5rem]" />
                  </div>

                  <div className="field flex flex-col w-[80%]">
                    <label
                      htmlFor="mail"
                      className="text-zinc-900 font-bold text-[1rem]"
                    >
                      Maild
                    </label>
                    <input
                      id="mail"
                      type="email"
                      className="text-zinc-500 bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-700"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[calc(85%_/_4_-_20px)] md:w-[calc(100%_/_2_-_20px)] sm:w-fit w-full">
                <div className="inputField flex justify-start items-center gap-3">
                  <div className="icon h-14 min-w-14 max-w-14 w-full flex justify-center items-center rounded-full bg-zinc-100">
                    <IoCalendar className="text-zinc-500 text-[1.5rem]" />
                  </div>

                  <div
                    className="field flex flex-col w-[80%]"
                    style={{ ["--bgImg" as string]: `url(${calender.src})` }}
                  >
                    <label
                      htmlFor="date"
                      className="text-zinc-900 font-bold text-[1rem]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="text-zinc-500 bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-700"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[calc(85%_/_4_-_20px)] md:w-[calc(100%_/_2_-_20px)] sm:w-fit w-full">
                <div className="inputField flex justify-start items-center gap-3">
                  <div className="icon h-14 min-w-14 max-w-14 w-full flex justify-center items-center rounded-full bg-zinc-100">
                    <PiArrowUUpRightFill className="text-zinc-500 text-[1.5rem]" />
                  </div>

                  <div className="field flex flex-col w-[80%]">
                    <label
                      htmlFor="pickup"
                      className="text-zinc-900 font-bold text-[1rem]"
                    >
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      id="pickup"
                      className="text-zinc-500 bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-700"
                      placeholder="London City Airport"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[calc(85%_/_4_-_20px)] md:w-[calc(100%_/_2_-_20px)] sm:w-fit w-full">
                <div className="inputField flex justify-start items-center gap-3">
                  <div className="icon h-14 min-w-14 max-w-14 w-full flex justify-center items-center rounded-full bg-zinc-100">
                    <PiArrowUUpLeftFill className="text-zinc-500 text-[1.5rem]" />
                  </div>

                  <div className="field flex flex-col w-[80%]">
                    <label
                      htmlFor="drop"
                      className="text-zinc-900 font-bold text-[1rem]"
                    >
                      Drop Location
                    </label>
                    <input
                      type="text"
                      id="drop"
                      className="text-zinc-500 bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-700"
                      placeholder="London City Blackheath"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[calc(15%_-_20px)] text-end">
                <button
                  type="submit"
                  className="text-white bg-black py-3 px-4 border-none rounded-3xl"
                >
                  Continue
                </button>
              </div>
            </form>
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

          <div className="flex justify-center items-center gap-10 pt-10">
            {makeTrip.map((trip) => {
              return (
                <div
                  className="lg:w-[calc(100%_/_4_-_40px)] md:w-[calc(100%_/_2_-_40px)] w-[calc(100%_/_1_-_40px)]"
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
                className="max-w-screen-lg mx-auto bg-no-repeat bg-center bg-cover pt-20 pb-10 flex justify-center items-center gap-5"
                style={{ backgroundImage: ` url(${bgshap.src})` }}
              >
                <div className="w-[calc(100%_/_2_-_20px)]">
                  <h2 className="text-[3rem] text-white font-bold">
                    Showcase some impressive numbers.
                  </h2>
                </div>
                <div className="w-[calc(100%_/_2_-_20px)]">
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

      <section className="py-20 bg-white dark:bg-[#f6f6f6]">
        <div className="container">
          <h5 className=" text-center font-bold text-[1.125rem] text-[var(--theme)]">
            WHAT WE DO
          </h5>
          <h4 className="text-[2.5rem] font-light text-center text-black">
            The Car and Limousine Service
          </h4>

          <div className="flex flex-wrap items-stretch justify-start pt-20">
            <div className="lg:w-4/12 md:w-6/12 w-full p-5">
              <div className="bg-white shadow-md text-black dark:bg-gray-600 dark:text-white h-full rounded-xl overflow-hidden">
                <div className="relative z-0">
                  <Image src={card1} className="w-full z-0 " alt="" />
                  <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-t-full"></div>
                  <BsBuildings className=" absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white dark:text-white text-6xl" />
                  <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                </div>
                <div className="p-10 text-center">
                  <a
                    href=""
                    className="block text-xl text-[var(--theme)] dark:text-white font-bold mb-5 "
                  >
                    CORPORATE TRAVEL
                  </a>
                  <p className="text-gray-600 dark:text-white font-light text-[1.125rem]">
                    We provide business services and our own vehicle fleet so
                    that you can reach your destination safely, in comfort and
                    always on time
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- col-end --> */}
            <div className="lg:w-4/12 md:w-6/12 w-full p-5">
              <div className="bg-white shadow-md text-black dark:bg-gray-600 dark:text-white h-full rounded-xl overflow-hidden">
                <div className="relative z-0">
                  <Image src={card2} className="w-full z-0 " alt="" />

                  <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-t-full"></div>
                  <IoAirplaneOutline className=" absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white dark:text-white text-6xl" />
                  <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                </div>
                <div className="p-10 text-center">
                  <a
                    href=""
                    className="block text-xl text-[var(--theme)] dark:text-white font-bold mb-5 "
                  >
                    AIRPORT TRANSFER
                  </a>
                  <p className="text-gray-600 dark:text-white font-light text-[1.125rem]">
                    We provide airport transfers to and from all the major
                    airports. Our service is the perfect option for when you are
                    travelling for business or pleasure
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- col-end --> */}
            <div className="lg:w-4/12 md:w-6/12 w-full p-5">
              <div className="bg-white shadow-md text-black dark:bg-gray-600 dark:text-white h-full rounded-xl overflow-hidden">
                <div className="relative z-0">
                  <Image src={card3} className="w-full z-0 " alt="" />

                  <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-t-full"></div>
                  <LuSliders className="absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white dark:text-white text-6xl" />
                  <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                </div>
                <div className="p-10 text-center">
                  <a
                    href=""
                    className="block text-xl text-[var(--theme)] dark:text-white font-bold mb-5 "
                  >
                    EVENT SERVICE
                  </a>
                  <p className="text-gray-600 dark:text-white font-light text-[1.125rem]">
                    Whether it is a short shopping trip or a long-distance
                    journey, we will get you there in comfort plus we will
                    handle the entire event efficiently
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- col-end --> */}
          </div>
        </div>
      </section>
      <section className="bg-[#f6f6f6] dark:bg-gray-600">
        <div className="flex flex-wrap justify-center items-stretch">
          <Image
            src={card3}
            className="z-0 w-full lg:w-[calc(100%_/_2)] "
            alt=""
          />

          <div className="w-full lg:w-[calc(100%_/_2)] p-12 max-md:p-7">
            <div className="">
              <h5 className=" text-center font-bold text-[1.125rem] text-[var(--theme)] dark:text-white">
                WHY CHOOSE US
              </h5>
              <h4 className="text-[2.5rem] font-light text-center text-black dark:text-white mb-14">
                Service Tailored to You
              </h4>
              <p className="text-[#778591]  dark:text-white font-light text-[1.375rem] text-center mb-14">
                When organizing a special event you and your family or friends
                might want to have a good time and not worry about driving. Our
                experienced chauffeurs will guide you through what every city
                you are in.
              </p>

              <div className="flex flex-wrap justify-around items-center">
                <div className="w-3/12">
                  <div className="w-12 h-12 rounded-full  bg-white dark:bg-gray-500 relative mx-auto block">
                    <IoCarSportOutline className="text-6xl text-[var(--theme)] dark:text-white absolute bottom-1 right-1" />
                  </div>
                  <h6 className="font-bold text-[1.125rem] text-[#2C3E50] dark:text-white mt-8 text-center">
                    Safety First
                  </h6>
                </div>
                <div className="w-3/12">
                  <div className="w-12 h-12 rounded-full  bg-white dark:bg-gray-500 relative mx-auto block">
                    <BsBusFront className="text-6xl text-[var(--theme)] dark:text-white absolute bottom-1 right-1" />
                  </div>
                  <h6 className="font-bold text-[1.125rem] text-[#2C3E50] dark:text-white  mt-8 text-center">
                    Coach Buses
                  </h6>
                </div>
                <div className="w-3/12">
                  <div className="w-12 h-12 rounded-full  bg-white dark:bg-gray-500  relative mx-auto block">
                    <GiLighthouse className="text-6xl text-[var(--theme)] dark:text-white absolute bottom-1 right-1" />
                  </div>
                  <h6 className="font-bold text-[1.125rem] text-[#2C3E50] dark:text-white mt-8 text-center">
                    Safe Haven
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-stretch bg-[#f6f6f6] dark:bg-gray-600">
          <div className="w-full lg:w-[calc(100%_/_2)] py-12 px-28 max-md:px-14 max-sm:px-5  flex flex-col justify-center items-stretch text-center">
            <div className="w-12 h-12 rounded-full  bg-[#fff] dark:bg-gray-500  relative mx-auto block mb-10">
              <PiChatsThin className="text-6xl text-[var(--theme)] dark:text-white absolute bottom-1 right-1" />
            </div>
            <p className="text-[#778591] dark:text-white font-light text-[1.375rem] text-center mb-14">
              I couldn’t be happier with the transport you did. It was great and
              your car was amazing. Thank you for your great service and I will
              continue to refer friends and family to you all.
            </p>

            <h6 className="text-center uppercase tracking-[.125rem] text-[.875rem] dark:text-gray-200 text-[#778591]">
              Betty Finsen
            </h6>
          </div>
          <Image src={card1} className="w-full lg:w-[calc(100%_/_2)]" alt="" />
        </div>
      </section>
      <TabComponents />
      <section className="py-[100px]">
        <div className="container">
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <div className="lg:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card shadow-sm">
                <div className="card_img w-full h-[250px] relative">
                  <Image
                    src={car1}
                    alt="Cars"
                    className="h-full w-full object-cover"
                  />
                  <div className="card_text absolute top-0 start-0 h-full w-full bg-black bg-opacity-10 flex justify-end items-start flex-col p-3">
                    <button className="bg-white bg-opacity-70 border border-gray-400 py-2 px-3 text-[0.8rem] text-black font-bold mb-3">
                      SEDAN
                    </button>

                    <span className="card_name text-gray-300 font-bold text-[1.5rem]">
                      AUDI
                    </span>
                  </div>
                </div>
                <div className="card_body bg-white dark:bg-gray-600 py-3 flex justify-center items-center gap-5">
                  <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                    <TbUser className="text-[1.5rem]  text-gray-600 dark:text-white" />
                    <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                      4
                    </span>
                  </div>
                  <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                    <BsLuggage className="text-[1.5rem] text-gray-600 dark:text-white" />
                    <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                      6
                    </span>
                  </div>
                  <div className="boot_space"></div>
                </div>
              </div>
            </div>
            <div className="lg:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card shadow-sm">
                <div className="card_img w-full h-[250px] relative">
                  <Image
                    src={car2}
                    alt="Cars"
                    className="h-full w-full object-cover"
                  />
                  <div className="card_text absolute top-0 start-0 h-full w-full bg-black bg-opacity-10 flex justify-end items-start flex-col p-3">
                    <button className="bg-white bg-opacity-70 border border-gray-400 py-2 px-3 text-[0.8rem] text-black font-bold mb-3">
                      SEDAN
                    </button>

                    <span className="card_name text-gray-300 font-bold text-[1.5rem]">
                      BMW
                    </span>
                  </div>
                </div>
                <div className="card_body bg-white dark:bg-gray-600 py-3 flex justify-center items-center gap-5">
                  <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                    <TbUser className="text-[1.5rem]  text-gray-600 dark:text-white" />
                    <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                      4
                    </span>
                  </div>
                  <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                    <BsLuggage className="text-[1.5rem] text-gray-600 dark:text-white" />
                    <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                      6
                    </span>
                  </div>
                  <div className="boot_space"></div>
                </div>
              </div>
            </div>
            <div className="lg:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card shadow-sm">
                <div className="card_img w-full h-[250px] relative">
                  <Image
                    src={car3}
                    alt="Cars"
                    className="h-full w-full object-cover"
                  />
                  <div className="card_text absolute top-0 start-0 h-full w-full bg-black bg-opacity-10 flex justify-end items-start flex-col p-3">
                    <button className="bg-white bg-opacity-70 border border-gray-400 py-2 px-3 text-[0.8rem] text-black font-bold mb-3">
                      SEDAN
                    </button>

                    <span className="card_name text-gray-300 font-bold text-[1.5rem]">
                      MERCEDES
                    </span>
                  </div>
                </div>
                <div className="card_body bg-white dark:bg-gray-600 py-3 flex justify-center items-center gap-5">
                  <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                    <TbUser className="text-[1.5rem]  text-gray-600 dark:text-white" />
                    <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                      4
                    </span>
                  </div>
                  <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                    <BsLuggage className="text-[1.5rem] text-gray-600 dark:text-white" />
                    <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                      6
                    </span>
                  </div>
                  <div className="boot_space"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
