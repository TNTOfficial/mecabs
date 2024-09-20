
"use client";

import React, { useState } from "react";
import CountryCode from '../components/CountryCode'
import banner1 from '@/public/banner1.jpg'

export default function BookingForm() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            {/* Booking Page Landing section Start */}
            <section
                style={{ backgroundImage: ` url(${banner1.src})` }}
                className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
            >
                <div className="container mx-auto px-5">
                    <div className="flex min-h-[40vh] justify-start items-center ">
                        <div className="w-full px-3">
                            <div className="text">
                                <h1 className="text-[3rem] font-normal mb-5 dark:text-white text-white">
                                    Booking Now
                                </h1>
                                <h5 className="text-[1.3rem] font-normal dark:text-white text-white">
                                    HOME - Booking Now
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Booking Page Landing section End */}


            {/* Booking form All types Start */}
            <section className="py-[100px] bg-gray-100">
                <div className="container">
                    <div className="flex flex-wrap gap-5 justify-center items-stretch">
                        <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">

                            <div className="card shadow transition-all duration-300 bg-white dark:bg-gray-600">
                                <div>
                                    <ul className="list-none flex justify-between items-center w-full bg-white border-b-2 dark:bg-gray-600">
                                        <li
                                            className={`tab-button ${activeTab === 0
                                                ? "active px-3 py-3 rounded-ee-md cursor-pointer text-blue-500 transition-all text-center dark:text-white duration-300 font-bold border border-blue-500 w-1/2"
                                                : "transition-all duration-300 px-3 py-3 cursor-pointer text-center text-black font-bold dark:text-white w-1/2 border border-transparent"
                                                }`}
                                            onClick={() => handleTabClick(0)}
                                        >
                                            Booking
                                        </li>
                                        <li
                                            className={`tab-button ${activeTab === 1
                                                ? "active px-3 py-3 rounded-b-md cursor-pointer text-blue-500 transition-all text-center dark:text-white duration-300 font-bold border border-blue-500 w-1/2"
                                                : "transition-all duration-300 px-3 py-3 cursor-pointer text-center text-black font-bold dark:text-white w-1/2 border border-transparent"
                                                }`}
                                            onClick={() => handleTabClick(1)}
                                        >

                                            Hourly
                                        </li>
                                        <li
                                            className={`tab-button ${activeTab === 2
                                                ? "active px-3 py-3 rounded-es-md cursor-pointer text-blue-500 transition-all text-center dark:text-white duration-300 font-bold border border-blue-500 w-1/2"
                                                : "transition-all duration-300 px-3 py-3 cursor-pointer text-center text-black font-bold dark:text-white w-1/2 border border-transparent"
                                                }`}
                                            onClick={() => handleTabClick(2)}
                                        >
                                            Parcel
                                        </li>
                                    </ul>
                                    <div className="card_body">
                                        <div className={`${activeTab === 0 ? "block show" : "hidden hide"}`}>
                                            <form action="#">
                                                <div className="flex flex-wrap justify-between items-stretch">
                                                    <div className="w-[calc(100%_/_2_-_2px)] px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="date" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Date</label>
                                                        <input id="date" type="date" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="v_divider w-[1px] bg-gray-300"></div>
                                                    <div className="w-[calc(100%_/_2_-_2px)] px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="time" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Time</label>
                                                        <input id="time" type="time" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="pickupLocation" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Location</label>
                                                        <input id="pickupLocation" placeholder="Enter a location" type="text" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="dropOffLocation" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Drop-Off Location</label>
                                                        <input id="dropOffLocation" placeholder="Enter a location" type="text" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>

                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <CountryCode />
                                                    </div>
                                                    <div className="w-full px-0 pt-0 pb-0">
                                                        <input type="submit" className="bg-blue-500 text-white cursor-pointer transition-all duration-300 hover:bg-blue-700 w-full py-3 ps-7 pe-5 font-medium text-[0.9rem] flex justify-center items-center gap-2" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className={`${activeTab === 1 ? "block show" : "hidden hide"}`}>
                                            <form action="#">
                                                <div className="flex flex-wrap justify-between items-stretch">
                                                    <div className="w-[calc(100%_/_2_-_2px)] px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="date" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Date</label>
                                                        <input id="date" type="date" className=" bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="v_divider w-[1px] bg-gray-300"></div>
                                                    <div className="w-[calc(100%_/_2_-_2px)] px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="time" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Time</label>
                                                        <input id="time" type="time" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="pickupLocation" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Location</label>
                                                        <input id="pickupLocation" placeholder="Enter a location" type="text" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="dropOffLocation" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Drop-Off Location</label>
                                                        <input id="dropOffLocation" placeholder="Enter a location" type="text" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <CountryCode />
                                                    </div>
                                                    <div className="w-full px-0 pt-0 pb-0">
                                                        <input type="submit" className="bg-blue-500 text-white cursor-pointer transition-all duration-300 hover:bg-blue-700 w-full py-3 ps-7 pe-5 font-medium text-[0.9rem] flex justify-center items-center gap-2" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className={`${activeTab === 2 ? "block show" : "hidden hide"}`}>
                                            <form action="#">
                                                <div className="flex flex-wrap justify-between items-stretch">
                                                    <div className="w-[calc(100%_/_2_-_2px)] px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="date" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Date</label>
                                                        <input id="date" type="date" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="v_divider w-[1px] bg-gray-300"></div>
                                                    <div className="w-[calc(100%_/_2_-_2px)] px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="time" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Time</label>
                                                        <input id="time" type="time" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="pickupLocation" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Pickup Location</label>
                                                        <input id="pickupLocation" placeholder="Enter a location" type="text" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <label htmlFor="dropOffLocation" className="block mb-0 text-xs font-normal  text-gray-700 dark:text-white text-nowrap uppercase">Drop-Off Location</label>
                                                        <input id="dropOffLocation" placeholder="Enter a location" type="text" className="bg-white border-0 text-gray-900 outline-none text-[1.1rem] focus:ring-yellow-300 focus:border-yellow-300 block w-full px-25 pb-6 pt-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                                    </div>
                                                    <div className="w-full px-4 pt-3 pb-0 border-b-[1px]">
                                                        <CountryCode />
                                                    </div>
                                                    <div className="w-full px-0 pt-0 pb-0">
                                                        <input type="submit" className="bg-blue-500 text-white cursor-pointer transition-all duration-300 hover:bg-blue-700 w-full py-3 ps-7 pe-5 font-medium text-[0.9rem] flex justify-center items-center gap-2" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


