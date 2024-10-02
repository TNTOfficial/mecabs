"use client";
import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
// import Logo from "../../../../public/logo.png";

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
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IoIosSearch } from "react-icons/io";
import { FiPhoneCall, FiSearch } from "react-icons/fi";
export default function Navbar() {
  const pathname = usePathname();
  const [display, setDisplay] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/booking" },
  ];

  const toggleClass = () => {
    setDisplay(!display);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-600 border-t border-transparent dark:border-white">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex gap-3 items-center">
            <IoCarSportOutline className="self-center text-[3rem] text-[var(--theme)] font-semibold whitespace-nowrap dark:text-gray-200" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
              ME CABS
            </span>
          </Link>
          <div className="lg:w-[82%]">
            <div
              className={
                display
                  ? "w-full transition-all duration-300 max-lg:w-[300px] max-lg:fixed z-[1599] max-lg:top-0 max-lg:h-[100dvh] lg:w-auto flex max-lg:flex-col justify-between items-center p-4 lg:p-0 max-lg:bg-gray-50 max-lg:start-0"
                  : "transition-all duration-300 max-lg:w-[300px] max-lg:fixed z-[1599] max-lg:top-0 max-lg:h-[100dvh] lg:w-auto flex max-lg:flex-col justify-between items-center p-4 lg:p-0 max-lg:bg-gray-50 max-lg:start-[-300px] "
              }
              id="navbar-default"
            >
              <ul className="font-medium flex max-lg:w-full flex-col p-4 lg:p-0 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-600">
                {links.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={clsx(
                          "block py-2 px-3 lg:px-4 font-extrabold text-[0.9rem] uppercase rounded lg:rounded-3xl dark:text-white lg:dark:text-gray-200 lg:hover:text-blue-700 hover:text-gray-500",
                          {
                            "text-white  bg-blue-700 hover:text-white lg:text-white lg:bg-blue-700 lg:hover:bg-blue-700  lg:hover:text-white":
                              pathname === link.href,
                            " text-black lg:text-black lg:bg-transparent":
                              pathname !== link.href,
                          }
                        )}
                        aria-current="page"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="nav_contact max-lg:w-full  max-lg:flex-col flex justify-center items-center gap-3 max-lg:gap-y-9">
                <div className="flex justify-center items-center gap-3 max-lg:w-full">
                  <button className="border-none bg-none">
                    <FiSearch className="text-black text-[1.5rem]" />
                  </button>
                  <Link
                    href="tel: +91 0000000000"
                    className="no-underline text-black flex justify-center items-center gap-2"
                  >
                    {" "}
                    <FiPhoneCall className="text-black text-[1rem]" />{" "}
                    <span className="font-extrabold text-black text-[0.9rem]">
                      +91 00000XXXXX
                    </span>
                  </Link>
                </div>

                <div className="flex justify-center items-center gap-3 max-lg:w-full">
                  <Link
                    href="/"
                    className="border border-transparent text-white bg-[#2e2e2e] px-5 py-2 rounded-3xl text-[0.9rem] font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    href="/"
                    className="bg-white border border-[#2e2e2e] text-[#2e2e2e] px-5 py-2 rounded-3xl text-[0.9rem] font-semibold"
                  >
                    SignUp
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={toggleClass}
            type="button"
            className="inline-flex items-center py-1 px-2  justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <MdMenuOpen className="text-[3rem]" />
          </button>
        </div>
      </nav>
    </>
  );
}
