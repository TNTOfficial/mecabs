"use client";

import React, { useState } from "react";
import gmap from "@/public/map.png";
import { PiArrowUUpLeftFill, PiArrowUUpRightFill } from "react-icons/pi";
import { IoCalendar, IoMailUnreadOutline } from "react-icons/io5";
import calender from "@/public/calendar.png";
import Image from "next/image";

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* Booking form All types Start */}
      <section className="bg-gray-100">
        <div className="flex flex-wrap justify-start items-stretch min-h-[calc(100vh_-_70px)]">
          <div className="lg:w-[500px] w-full max-lg:order-2  ">
            <div className="continueForm bg-white h-full w-full px-0 py-2 max-lg:pt-10  shadow-lg border-t">
              <div className="px-6">
                <ul className="list-none mb-2 shadow flex justify-between rounded-lg items-center w-full overflow-hidden  border-b-2 dark:bg-gray-600">
                  <li
                    className={`text-[1rem] px-1 py-2 w-[calc(100%_/_3)] rounded-s-lg text-center ${
                      activeTab === 0
                        ? "bg-white text-black font-bold"
                        : "bg-blue-500 text-white font-normal"
                    }`}
                    onClick={() => handleTabClick(0)}
                  >
                    Booking
                  </li>
                  <li
                    className={`text-[1rem] px-1 py-2 w-[calc(100%_/_3)] text-center ${
                      activeTab === 1
                        ? "bg-white text-black font-bold"
                        : "bg-blue-500 text-white font-normal"
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    Hourly
                  </li>
                  <li
                    className={`text-[1rem] px-1 py-2 w-[calc(100%_/_3)] rounded-e-lg text-center ${
                      activeTab === 2
                        ? "bg-white text-black font-bold"
                        : "bg-blue-500 text-white font-normal"
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    Parcel
                  </li>
                </ul>
                <div className="card_body pt-2">
                  <div
                    className={`${
                      activeTab === 0 ? "block show" : "hidden hide"
                    }`}
                  >
                    <form
                      action=""
                      className="flex lg:justify-center md:justify-start items-center flex-wrap gap-2"
                    >
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
                            <IoCalendar className="text-zinc-500 text-[1.5rem]" />
                          </div>

                          <div
                            className="field flex flex-col w-[80%]"
                            style={{
                              ["--bgImg" as string]: `url(${calender.src})`,
                            }}
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="London City Airport"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="London City Blackheath"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full text-center pt-4">
                        <button
                          type="submit"
                          className="text-white bg-black py-3 px-4 w-full border-none rounded-3xl"
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className={`${
                      activeTab === 1 ? "block show" : "hidden hide"
                    }`}
                  >
                    <form
                      action=""
                      className="flex lg:justify-center md:justify-start items-center flex-wrap gap-2"
                    >
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
                            <IoCalendar className="text-zinc-500 text-[1.5rem]" />
                          </div>

                          <div
                            className="field flex flex-col w-[80%]"
                            style={{
                              ["--bgImg" as string]: `url(${calender.src})`,
                            }}
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="London City Airport"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="London City Blackheath"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full text-center pt-4">
                        <button
                          type="submit"
                          className="text-white bg-black py-3 px-4 w-full border-none rounded-3xl"
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className={`${
                      activeTab === 2 ? "block show" : "hidden hide"
                    }`}
                  >
                    <form
                      action=""
                      className="flex lg:justify-center md:justify-start items-center flex-wrap gap-2"
                    >
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
                            <IoCalendar className="text-zinc-500 text-[1.5rem]" />
                          </div>

                          <div
                            className="field flex flex-col w-[80%]"
                            style={{
                              ["--bgImg" as string]: `url(${calender.src})`,
                            }}
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="London City Airport"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="inputField flex justify-start items-center gap-3 bg-zinc-100 rounded-xl p-2">
                          <div className="icon h-10 min-w-10 max-w-10 w-full flex justify-center items-center rounded-full bg-white">
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
                              className="text-zinc-700 font-semibold bg-transparent border-none focus:outline-none text-[0.9rem] placeholder-zinc-400"
                              placeholder="London City Blackheath"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full text-center pt-4">
                        <button
                          type="submit"
                          className="text-white bg-black py-3 px-4 w-full border-none rounded-3xl"
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[calc(100%_-_500px)] w-full max-lg:order-1 min-h-[200px] max-lg:max-h-[300px] bg-gray-300">
            <Image src={gmap} alt="map" className="w-full h-full object-cover object-left-top" />
          </div>
        </div>
      </section>
    </>
  );
}
 