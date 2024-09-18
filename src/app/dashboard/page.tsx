import React from "react";
import watch from "../dashboard/images/watch.png";
import Image from "next/image";
import { GoGraph } from "react-icons/go";
import { FaPlus, FaRegUser } from "react-icons/fa";
import phone from "../dashboard/images/phone.png";
import user1 from "../dashboard/images/user1.jpeg";
import user2 from "../dashboard/images/user2.jpg";
import user3 from "../dashboard/images/user3.jpg";
import user4 from "../dashboard/images/user4.jpg";
import pc from "../dashboard/images/pc.png";
import { RiPieChartLine } from "react-icons/ri";
import { BsGraphDownArrow } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-start gap-5 mb-5">
        <div className="w-full xl:w-[calc(100%_/_2_-_10px)]">
          <div className="flex flex-wrap gap-5 justify-center items-center mb-5">
            <div className="w-full sm:w-[calc(100%_/_2_-_10px)]">
              <div className="card p-5 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="icon mb-2">
                  <GoGraph className="text-violet-700 dark:text-violet-300 text-[2rem]" />
                  <i className="ti ti-chart-bar text-violet-700 dark:text-violet-300 text-[2rem]"></i>
                </div>
                <div className="card_title">
                  <h5 className="text-[1rem] text-gray-600 dark:text-white mb2">
                    Avg. Client Rating
                  </h5>

                  <h3 className="price text-black dark:text-white font-medium text-[1.8rem] text-end">
                    $7.235K
                  </h3>

                  <div className="rating">
                    <span>
                      <span className="text-green-500 text-[0.9rem]">
                        <i className="ti ti-trending-up-3 text-[1.5rem]"></i>
                        +2.5%
                      </span>
                      <span className="text-[0.9rem] text-gray-600 dark:text-gray-100 font-normal">
                        than last Week
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[calc(100%_/_2_-_10px)]">
              <div className="card p-5 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="icon mb-2">
                  <i className="ti ti-chart-donut text-rose-600 text-[2rem]"></i>

                  <BsGraphDownArrow className=" text-rose-600 text-[2rem]" />
                </div>
                <div className="card_title">
                  <h5 className="text-[1rem] text-gray-600 dark:text-white mb2">
                    Avg. Client Rating
                  </h5>

                  <h3 className="price text-black dark:text-white font-medium text-[1.8rem] text-end">
                    $7.235K
                  </h3>

                  <div className="rating">
                    <span>
                      <span className="text-red-500 text-[0.9rem]">
                        <i className="ti ti-trending-down-3 text-[1.5rem]"></i>
                        -0.5%
                      </span>
                      <span className="text-[0.9rem] dark:text-gray-100 text-gray-600 font-normal">
                        than last Week
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[calc(100%_/_2_-_10px)]">
              <div className="card p-5 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="icon mb-2">
                  <RiPieChartLine className="text-orange-600 text-[2rem]" />
                </div>
                <div className="card_title">
                  <h5 className="text-[1rem] text-gray-600 dark:text-white mb2">
                    Avg. Client Rating
                  </h5>

                  <h3 className="price dark:text-white text-black font-medium text-[1.8rem] text-end">
                    $7.235K
                  </h3>

                  <div className="rating">
                    <span>
                      <span className="text-red-500 text-[0.9rem]">
                        <i className="ti ti-sort-descending-2 text-[1.5rem]"></i>
                        -0.5%
                      </span>
                      <span className="text-[0.9rem] text-gray-600 font-normal dark:text-gray-100">
                        than last Week
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[calc(100%_/_2_-_10px)]">
              <div className="card p-5 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="icon mb-2">
                  <FaRegUser className=" text-rose-600 text-[2rem]" />
                </div>
                <div className="card_title">
                  <h5 className="text-[1rem] text-gray-600 dark:text-white mb2">
                    Avg. Client Rating
                  </h5>

                  <h3 className="price dark:text-white text-black font-medium text-[1.8rem] text-end">
                    $7.235K
                  </h3>

                  <div className="rating">
                    <span>
                      <span className="text-green-500 text-[0.9rem]">
                        <i className="ti ti-sort-ascending-2 text-[1.5rem]"></i>
                        +2.5%
                      </span>
                      <span className="text-[0.9rem] text-gray-600 font-normal dark:text-gray-100">
                        than last Week
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <Image
                      src={watch}
                      alt=""
                      className="w-16 md:w-32 max-w-full max-h-full"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Apple Watch
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <FaMinus></FaMinus>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $599
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <Image
                      src={pc}
                      alt=""
                      className="w-16 md:w-32 max-w-full max-h-full"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    iMac 27
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <FaMinus />
                      </button>
                      <div className="ms-3">
                        <input
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $2499
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <Image
                      src={phone}
                      alt=""
                      className="w-16 md:w-32 max-w-full max-h-full"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    IPhone 12
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <FaMinus />
                      </button>
                      <div className="ms-3">
                        <input
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1"
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $999
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full xl:w-[calc(100%_/_2_-_10px)]">
          <div className="bg-white dark:bg-gray-800 dark:text-white p-4 mb-5 rounded-lg shadow">
            <div id="chart"></div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* <img
                      className="min-w-10 w-full max-w-10 h-10 rounded-full object-cover"
                      src="./images/user1.jpeg"
                      alt="Jese image"
                    /> */}

                    <Image
                      src={user1}
                      alt=""
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">Neil Sims</div>
                      <div className="font-normal text-gray-500">
                        neil.sims@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">React Developer</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-2"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* <img
                      className="min-w-10 w-full max-w-10 h-10 rounded-full object-cover"
                      src="./images/user2.jpg"
                      alt="Jese image"
                    /> */}
                    <Image
                      src={user2}
                      alt=""
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        Bonnie Green
                      </div>
                      <div className="font-normal text-gray-500">
                        bonnie@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">Designer</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-2"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* <img
                      className="min-w-10 w-full max-w-10 h-10 rounded-full object-cover"
                      src="./images/user3.jpg"
                      alt="Jese image"
                    /> */}
                    <Image
                      src={user3}
                      alt=""
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">Jese Leos</div>
                      <div className="font-normal text-gray-500">
                        jese@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">Vue JS Developer</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-2"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* <img
                      className="min-w-10 w-full max-w-10 h-10 rounded-full object-cover"
                      src="./images/user4.jpg"
                      alt="Jese image"
                    /> */}
                    <Image
                      src={user4}
                      alt=""
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">Thomas Lean</div>
                      <div className="font-normal text-gray-500">
                        thomes@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">UI/UX Engineer</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-3"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* <img
                      className="min-w-10 w-full max-w-10 h-10 rounded-full object-cover"
                      src="./images/user2.jpg"
                      alt="Jese image"
                    /> */}
                    <Image
                      src={user2}
                      alt=""
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        Leslie Livingston
                      </div>
                      <div className="font-normal text-gray-500">
                        leslie@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">SEO Specialist</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                      Offline
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 mb-5">
        <div className="w-full lg:w-[calc(100%_/_2_-_20px)]"></div>
        <div className="w-full lg:w-[calc(100%_/_2_-_20px)]"></div>
      </div>
    </>
  );
};

export default AdminDashboard;
