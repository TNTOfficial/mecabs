import Link from "next/link";
import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const AppBar = () => {
  return (
    <>
      <nav className=" lg:hidden block appbarNav  fixed bottom-0 z-40 pb-1 pt-2 bg-white w-full shadow-inner">
        <div className="icons w-full flex justify-evenly items-center gap-5">
          <Link
            href="/booking"
            className="transition-all duration-300 text-center activeBarTab flex flex-col justify-center items-center overflow-hidden px-1 pt-1 rounded-full bg-transparent text-black flex-[1_1_100px] max-w-[150px] [&_svg]:text-blue-600 [&_.cirdle]:outline-blue-600 [&_.cirdle]:border-blue-600"
          >
            <div className="cirdle outline outline-1 outline-zinc-900 transition-all duration-300 outline-offset-2 border-black border h-10 w-full min-w-10 max-w-10 rounded-full flex justify-center items-center ">
              <BsBookmarkPlusFill className="text-[1.3rem] text-black transition-all duration-300" />
            </div>
            <span className="text-[1rem] font-bold pt-1 text-nowrap">Book</span>
          </Link>
          <Link
            href="tel: +61 1300012018"
            className="transition-all duration-300 text-center activeBarTab flex flex-col justify-center items-center overflow-hidden px-1 pt-1 rounded-full bg-transparent text-black flex-[1_1_100px] max-w-[150px] [&_svg]:text-blue-600 [&_.cirdle]:outline-blue-600 [&_.cirdle]:border-blue-600"
          >
            <div className="cirdle outline outline-1 outline-blue-600    transition-all duration-300 outline-offset-2 border-blue-600 border h-10 w-full min-w-10 max-w-10 rounded-full flex justify-center items-center ">
              <IoMdCall className="text-[1.3rem] animate-[shake_1.5s_infinite] text-blue-600 transition-all" />
            </div>
            <span className="text-[1rem] font-bold pt-1 text-nowrap">Call</span>
          </Link>
          <Link
            href="/dashboard/user-bookings"
            className="transition-all duration-300 text-center activeBarTab flex flex-col justify-center items-center overflow-hidden px-1 pt-1 rounded-full bg-transparent text-black flex-[1_1_100px] max-w-[150px] [&_svg]:text-blue-600 [&_.cirdle]:outline-blue-600 [&_.cirdle]:border-blue-600"
          >
            <div className="cirdle outline outline-1 outline-zinc-900 transition-all duration-300 outline-offset-2 border-black border h-10 w-full min-w-10 max-w-10 rounded-full flex justify-center items-center ">
              <FaRoad className="text-[1.3rem] text-black transition-all duration-300" />
            </div>
            <span className="text-[1rem] font-bold pt-1 text-nowrap">
              My Ride
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default AppBar;
