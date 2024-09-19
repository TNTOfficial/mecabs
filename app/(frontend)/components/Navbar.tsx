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
      <nav className="bg-gray-200 dark:bg-gray-600 py-2 px-4 w-full max-md:hidden">
        <div className="container flex-wrap justify-between items-center flex mx-auto">
          <div className="box-4 min-w-full sm:min-w-[280px] max-w-fit">
            <Link href="#" className="flex justify-start items-center gap-2">
              <IoMapOutline className="text-[1.3rem] text-blue-700 dark:text-blue-300" />
              <span className="text-[0.9rem] font-semibold text-black dark:text-white">
                Melbourne Express Cabs
              </span>
            </Link>
          </div>
          <div className="box-4 min-w-full sm:min-w-[280px] max-w-fit">
            <Link href="#" className="flex justify-start items-center gap-2">
              <IoPhonePortraitOutline className="text-[1.3rem] text-blue-700 dark:text-blue-300" />
              <span className="text-[0.9rem] font-semibold text-black dark:text-white">
                +61 4123XXXXX
              </span>
            </Link>
          </div>
          <div className="box-4 min-w-full sm:min-w-[280px] max-w-fit">
            <Link href="#" className="flex justify-start items-center gap-2">
              <IoTimeOutline className="text-[1.3rem] text-blue-700 dark:text-blue-300" />
              <span className="text-[0.9rem] font-semibold text-black dark:text-white">
                Melbourne Express Cabs
              </span>
            </Link>
          </div>
          <div className="box-4 min-w-full sm:min-w-[280px] max-w-fit">
            <div className="flex justify-between">
              <Link href="#" className="flex justify-start items-center gap-2">
                <IoLogoFacebook className="text-[1.3rem] text-blue-700 dark:text-blue-50" />
              </Link>
              <Link href="#" className="flex justify-start items-center gap-2">
                <FaXTwitter className="text-[1.3rem] text-black dark:text-white" />
              </Link>
              <Link href="#" className="flex justify-start items-center gap-2">
                <IoLogoInstagram className="text-[1.3rem] text-red-600 dark:text-red-300" />
              </Link>
              <Link href="#" className="flex justify-start items-center gap-2">
                <IoLogoWhatsapp className="text-[1.3rem] text-green-700 dark:text-green-300" />
              </Link>
              <Link href="#" className="flex justify-start items-center gap-2">
                <IoSearchOutline className="text-[1.3rem] text-blue-700 dark:text-blue-50" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-white border-gray-200 dark:bg-gray-600 border-t border-transparent dark:border-white">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex gap-3 items-center">
            <IoCarSportOutline className="self-center text-[3rem] text-[var(--theme)] font-semibold whitespace-nowrap dark:text-gray-200" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
              Me Cabs
            </span>
          </Link>
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
                ? "w-full block md:w-auto max-md:w-[300px] max-md:fixed z-[1599] max-md:top-0 max-md:h-[100dvh] max-md:start-0 transition-all duration-300"
                : "transition-all max-md:hidden duration-300 max-md:w-[300px] max-md:fixed z-[1599] max-md:top-0 max-md:start-[-300px] max-md:h-[100dvh] block  md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 border h-full border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-600">
              {links.map((link) => {
                return (
                  <li>
                    <Link
                      href={link.href}
                      className={clsx(
                        "block py-2 px-3 font-medium text-[1rem] uppercase rounded md:p-0 dark:text-white md:dark:text-gray-200 md:hover:text-blue-700 hover:text-gray-500",
                        {
                          "text-white md:text-blue-700 bg-blue-700 md:bg-transparent hover:text-white md:hover:text-blue-700": pathname === link.href,
                          " text-black md:text-black md:bg-transparent" : pathname !== link.href
                        },
                      )}
                      aria-current="page"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
