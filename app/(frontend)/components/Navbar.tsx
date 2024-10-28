"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import logo from "@/public/logo.png";

import { MdMenuOpen } from "react-icons/md";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import { LoginButton } from "@/features/auth/components/login-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { UserButton } from "@/features/auth/components/user-button";
export default function Navbar() {
  const pathname = usePathname();
  const [display, setDisplay] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Booking", href: "/booking" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];
  const { user } = useCurrentUser();

  const toggleClass = () => {
    setDisplay(!display);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-600 border-t border-transparent dark:border-white sticky top-0 z-50 shadow-sm shadow-zinc-200">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex gap-3 items-center">
            <Image
              src={logo}
              alt=""
              className="min-w-[150px] max-w-[180px] h-full "
            />
          </Link>
          <div className="lg:w-[82%]">
            <div
              className={
                display
                  ? "w-full transition-all duration-300 max-lg:w-[300px] max-lg:fixed z-[1599] max-lg:top-0 max-lg:pb-[100px] max-lg:h-[100dvh] lg:w-auto flex max-lg:flex-col justify-between items-center p-4 lg:p-0 max-lg:bg-gray-50 max-lg:start-0"
                  : "transition-all duration-300 max-lg:w-[300px] max-lg:fixed z-[1599] max-lg:top-0  max-lg:pb-[100px] max-lg:h-[100dvh] lg:w-auto flex max-lg:flex-col justify-between items-center p-4 lg:p-0 max-lg:bg-gray-50 max-lg:start-[-300px] "
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
                  {!user ? (
                    <>
                      <LoginButton mode="modal" formType="login" asChild>
                        <Button className="border border-transparent text-white bg-[#2e2e2e] px-5 py-2 rounded-3xl text-[0.9rem] font-semibold">
                          Sign In
                        </Button>
                      </LoginButton>
                      <LoginButton mode="modal" formType="register" asChild>
                        <Button className="border border-transparent text-white bg-[#2e2e2e] px-5 py-2 rounded-3xl text-[0.9rem] font-semibold">
                          Sign Up
                        </Button>
                      </LoginButton>
                    </>
                  ) : (
                    <>
                      <UserButton />
                    </>
                  )}
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
