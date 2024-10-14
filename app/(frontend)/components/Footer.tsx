"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgCopyright } from "react-icons/cg";
import WhiteLogo from "@/public/logo.png";
import McLogo from "@/public/mclogo.svg";
import VisaLogo from "@/public/visa.png";
import CabCharge from "@/public/cabcharge_logo.svg";
import AmericanExp from "@/public/americanexpress.svg";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/booking" },
    { name: "Privacy Policy", href: "/policy" },
    { name: "Terms and Conditions", href: "/terms" },
  ];
  return (
    <>
      <footer className=" bg-[linear-gradient(139deg,_rgba(250,250,250,1)_0%_34%,_rgba(234,234,234,1)_34%_43%,_rgba(250,250,250,1)_43%_100%)] max-lg:pb-[90px]">
        <div className="container">
          <div className="flex xl:justify-between justify-start gap-y-10 flex-wrap items-end py-[50px] border-b border-zinc-200">
            <div className="logo flex justify-start max-sm:justify-center items-end flex-wrap gap-6 xl:w-[calc(100%_/_3_-_20px)] w-full">
              <Image
                src={WhiteLogo}
                alt="Logo"
                className="w-[200px] h-auto object-contain"
              />
              <Link
                href="tel: +91 0000000000"
                className="no-underline text-black flex justify-center items-center gap-2"
              >
                {" "}
                <FiPhoneCall className="text-black text-[1.8rem]" />{" "}
                <span className="font-extrabold text-black text-[1.2rem]">
                  +91 00000XXXXX
                </span>
              </Link>
            </div>
            <div className="xl:w-[calc(100%_/_3_-_20px)] w-full">
              <strong className="text-nowrap text-[1.1rem] w-full inline-block">
                Payment with:{" "}
              </strong>
              <div className="flex gap-4 justify-start max-sm:justify-center items-center flex-nowrap max-sm:flex-wrap">
                <Image
                  src={CabCharge}
                  alt="payment"
                  className="lg:w-[100px] w-[50px] object-contain h-[50px]"
                />
                <Image
                  src={McLogo}
                  alt="payment"
                  className="lg:w-[100px] w-[50px] object-contain h-[50px]"
                />
                <Image
                  src={VisaLogo}
                  alt="payment"
                  className="lg:w-[100px] w-[50px] object-contain h-[50px]"
                />
                <Image
                  src={AmericanExp}
                  alt="payment"
                  className="lg:w-[100px] w-[50px] object-contain h-[50px]"
                />
              </div>
            </div>
            <div className="social text-black flex justify-end max-sm:justify-center items-center gap-2 xl:w-[calc(100%_/_3_-_20px)] w-full">
              <strong className="text-[1.3rem] font-bold text-whtie">
                Follow Us:{" "}
              </strong>

              <div className="icons flex justify-center items-center gap-3">
                <Link href="#">
                  <FaFacebookSquare className="text-[2rem]" />
                </Link>
                <Link href="#">
                  <FaInstagram className="text-[2rem]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap max-sm:justify-center py-6 px-3 border-t border-zinc-300">
            <div className="footerNav flex gap-4 max-sm:flex-col items-start justify-start max-sm:justify-center">
              <div className="copyrigh flex gap-2 items-start justify-start max-sm:justify-center max-sm:text-center">
                <CgCopyright className="text-black text-[1.2rem]" />
                <span className="text-black text-[1rem] text-nowrap">2024 MeCabs</span>
              </div>

              <ul className="flex list-none max-sm:justify-center flex-wrap min-w-[300px]">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className={clsx(
                          "block py-2 px-3 lg:px-4 font-extrabold text-[0.9rem] uppercase rounded lg:rounded-3xl ",
                          {
                            "text-white  bg-blue-700 hover:text-white":
                              pathname === link.href,
                            "text-black lg:bg-transparent hover:text-gray-800":
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
            </div>
            <div className="develop text-center">
              <span className="text-black">
                Developed By:{" "}
                <Link
                  href="https://www.topntech.com/"
                  className="text-black font-bold"
                  target="_blank"
                >
                  TopNTech Solutions
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
