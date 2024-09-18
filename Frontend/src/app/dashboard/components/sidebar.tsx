import {
  BiCart,
  BiLogIn,
  BiMailSend,
  BiShoppingBag,
  BiUser,
} from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import phone from "../images/phone.png";
import watch from "../images/watch.png";
import Image from "next/image";
import { IoLogOutOutline } from "react-icons/io5";
export const Sidebar = () => {
  return (
    <>
      <div className="sidebar shadow z-[1599] absolute top-0 lg:left-0 sm:left-[-350px] -left-full h-full  w-[300px] rounded-lg overflow-x-hidden overflow-y-auto bg-white transition-all duration-500 msm:w-full [.show_&]:left-[0px]">
        <div className="h-full px-3 flex justify-between items-stretch gap-8 flex-col py-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="."
                className="flex py-2 justify-start items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-2 rounded-xl gap-5 transition-all duration-100 text-gray-600 dark:text-white active dark:bg-gray-700 bg-gray-200"
              >
                <i className="text-[1.7rem] text-gray-600 dark:text-white ti ti-layout-board-split"></i>
                <span className="text-[1rem]">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex py-2 justify-start items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-2 rounded-xl gap-5 transition-all duration-100 text-gray-600 dark:text-white"
              >
                <BiShoppingBag className="size-4 text-gray-600 dark:text-white" />
                <div className="flex justify-between w-[70%]">
                  <span className="text-[1rem]">Shop</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex py-2 justify-start items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-2 rounded-xl gap-5 transition-all duration-100 text-gray-600 dark:text-white"
              >
                <BiMailSend className="size-4 text-gray-600 dark:text-white" />
                <div className="flex justify-between w-[70%]">
                  <span className="text-[1rem]">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/users"
                className="flex py-2 justify-start items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-2 rounded-xl gap-5 transition-all duration-100 text-gray-600 dark:text-white"
              >
                <BiUser className="size-4 text-gray-600 dark:text-white" />
                <span className="text-[1rem]">Users</span>
              </a>
            </li>
            <li>
              <a
                href="./cards.html"
                className="flex py-2 justify-start items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-2 rounded-xl gap-5 transition-all duration-100 text-gray-600 dark:text-white"
              >
                
                <BiCart className="size-4 text-gray-600 dark:text-white" />
                <span className="text-[1rem]">Products</span>
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="flex py-2 justify-start items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-2 rounded-xl gap-5 transition-all duration-100 text-gray-600 dark:text-white"
              >
                <BiLogIn className="size-4 text-gray-600 dark:text-white" />
                <span className="text-[1rem]">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="flex py-2 justify-start items-center hover:bg-gray-100 dark:hover:bg-gray-600 px-2 rounded-xl gap-5 transition-all duration-100 text-gray-600 dark:text-white"
              >
                <FaRegUser className="size-4 text-gray-600 dark:text-white" />
                <span className="text-[1rem]">Sign Up</span>
              </a>
            </li>
          </ul>

          <div className="add_product z-0 relative rounded-xl overflow-hidden max-h-[260px] h-full min-h-[260px]">
            <div className="swiper h-full w-full addSwip">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Image
                    src={phone}
                    alt=""
                    className="w-full aspect-square object-cover object-top rounded-xl [.swiper-slide-active_&]:scale-125 transition-all duration-1000"
                  />
                  <Image
                    src={watch}
                    alt=""
                    className="w-full aspect-square object-cover object-top rounded-xl [.swiper-slide-active_&]:scale-125 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>

            <div className="absolute z-50 top-0 left-0 flex flex-col justify-end h-full w-full items-center py-10 bg-gradient-to-b to-[#0007] from-[#0007]">
              <h3 className="title text-white font-bold text-[1.5rem]">
                New Product
              </h3>
              <h4 className="title text-white font-bold text-[1rem]">
                Celebrate soon as in india
              </h4>
            </div>
          </div>

          <a
            href="#"
            className="logoutProfile no-underline text-gray-700 dark:text-white shadow flex justify-between items-center gap-3 p-4 rounded-xl dark:bg-gray-700 bg-gray-100"
          >
            <span>Logout Now</span>

            <IoLogOutOutline className="h-[30px] w-[40px] rounded-full object-cover" />
          </a>
        </div>
      </div>
    </>
  );
};
