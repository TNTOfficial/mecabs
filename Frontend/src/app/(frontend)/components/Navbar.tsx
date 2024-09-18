"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

import {
    IoCarSportOutline,
    IoMapOutline,
    IoPhonePortraitOutline,
    IoTimeOutline,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoWhatsapp,
    IoSearchOutline,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";
export default function Navbar() {
    const [display, setDisplay] = useState(false);

    const toggleClass = () => {
        setDisplay(!display);
    };
    return (
        <>
            <nav className="bg-gray-200 dark:bg-gray-600 py-2 px-4 w-full">
                <div className="container flex-wrap justify-between items-center flex mx-auto">
                    <div className="box-4 min-w-full sm:min-w-[280px] max-w-fit">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <IoMapOutline className="text-[1.3rem] text-blue-700 dark:text-blue-300" />
                            <span className="text-[0.9rem] font-semibold text-black dark:text-white">
                                Melbourne Express Cabs
                            </span>
                        </a>
                    </div>
                    <div className="box-4 min-w-full sm:min-w-[280px] max-w-fit">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <IoPhonePortraitOutline className="text-[1.3rem] text-blue-700 dark:text-blue-300" />
                            <span className="text-[0.9rem] font-semibold text-black dark:text-white">
                                +61 4123XXXXX
                            </span>
                        </a>
                    </div>
                    <div className="box-4 min-w-full sm:min-w-[280px] max-w-fit">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <IoTimeOutline className="text-[1.3rem] text-blue-700 dark:text-blue-300" />
                            <span className="text-[0.9rem] font-semibold text-black dark:text-white">
                                Melbourne Express Cabs
                            </span>
                        </a>
                    </div>
                    <div className="box-4 min-w-full sm:min-w-[280px] max-w-fit">
                        <div className="flex justify-between">
                            <a href="#" className="flex justify-start items-center gap-2">
                                <IoLogoFacebook className="text-[1.3rem] text-blue-700 dark:text-blue-50" />
                            </a>
                            <a href="#" className="flex justify-start items-center gap-2">
                                <FaXTwitter className="text-[1.3rem] text-black dark:text-white" />
                            </a>
                            <a href="#" className="flex justify-start items-center gap-2">
                                <IoLogoInstagram className="text-[1.3rem] text-red-600 dark:text-red-300" />
                            </a>
                            <a href="#" className="flex justify-start items-center gap-2">
                                <IoLogoWhatsapp className="text-[1.3rem] text-green-700 dark:text-green-300" />
                            </a>
                            <a href="#" className="flex justify-start items-center gap-2">
                                <IoSearchOutline className="text-[1.3rem] text-blue-700 dark:text-blue-50" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-white border-gray-200 dark:bg-gray-600 border-t border-transparent dark:border-white">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex gap-3 items-center">
                        {/* <Image src={Logo} className="h-[100px] w-full" alt="Logo" /> */}
                        <IoCarSportOutline className="self-center text-[3rem] text-[var(--theme)] font-semibold whitespace-nowrap dark:text-gray-200" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                            Me Cabs
                        </span>
                    </a>
                    <button
                        onClick={toggleClass}
                        type="button"
                        className="inline-flex items-center py-1 px-2  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <MdMenuOpen className="text-[3rem]" />
                    </button>
                    <div
                        className={
                            display
                                ? "w-full block md:w-auto mmd:w-[300px] mmd:fixed z-[1599] mmd:top-0 mmd:h-screen mmd:start-0 transition-all duration-300"
                                : "transition-all duration-300 mmd:w-[300px] mmd:fixed z-[1599] mmd:top-0 mmd:start-[-300px] mmd:h-screen block  md:w-auto"
                        }
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 border h-full border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-600">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 px-3 font-medium text-[1rem] uppercase text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-gray-200"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="block py-2 px-3 font-medium text-[1rem] uppercase text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="block py-2 px-3 font-medium text-[1rem] uppercase text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/booking"
                                    className="block py-2 px-3 font-medium text-[1rem] uppercase text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Booking
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="block py-2 px-3 font-medium text-[1rem] uppercase text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
