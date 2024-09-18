import React from "react";
import Image from "next/image";
import google from "../dashboard/images/google.png";
import facebook from "../dashboard/images/facebook.png";
import x from "../dashboard/images/x.png";
import dashboard from "../dashboard/images/dashboard.png";

import user1 from "../dashboard/images/user1.jpeg";
import user2 from "../dashboard/images/user2.jpg";
import user3 from "../dashboard/images/user3.jpg";
import user4 from "../dashboard/images/user4.jpg";
import login from "../dashboard/images/login.jpg";

const page = () => {
  return (
    <div className="font-body bg-[#f5f7fa] dark:bg-gray-600">
      <section className="bg-transparent">
        <div className="container">
          <div className="form_card min-h-screen flex justify-center items-center">
            <div className="flex flex-wrap gap-5 lg:justify-between justify-center items-stretch bg-white shadow-xl dark:bg-gray-500 rounded-xl p-4 w-full">
              <div className="lg:w-[calc(100%_/_2_-_10px)] w-full mlg:order-2">
                <form
                  action="./dashboard.html"
                  className="bg-[#f5f7fa] dark:bg-gray-800 rounded-xl py-8 px-4 shadow mb-4"
                >
                  <div className="mx-auto max-w-sm">
                    <div className="form_title mb-5">
                      <h1 className="text-[1.8rem] text-gray-700 dark:text-white font-bold mb-2">
                        Log in to Online Mandi
                      </h1>
                      <p className="text-[0.9rem] text-gray-600 dark:text-white">
                        Welcome back! login with your data that entered during
                        registration.
                      </p>
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                        placeholder="name@onlinemandi.com"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                        required
                      />
                    </div>
                    <div className="flex items-start mb-5">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="terms"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        I agree with the
                        <a
                          href="#"
                          className="text-gray-600 hover:underline dark:text-gray-200"
                        >
                          terms and conditions
                        </a>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="text-white w-full bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
                    >
                      Login account
                    </button>

                    <div className="flex justify-center items-center gap-4 my-5">
                      <div className="line h-[1px] bg-gray-400 w-[40%]"></div>
                      <h5 className="text-[1rem] text-gray-500 dark:text-white font-bold">
                        or
                      </h5>
                      <div className="line h-[1px] bg-gray-400 w-[40%]"></div>
                    </div>

                    <a
                      href="https://www.google.com"
                      type="submit"
                      className="text-black dark:text-white mb-4 border-t border-gray-200 dark:border-gray-500 flex justify-center items-center gap-3 w-full bg-white shadow-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
                    >
                      <Image
                        src={google}
                        alt=""
                        className="w-[33px] h-[33px] object-contain"
                      />
                      <span>Login with Google</span>
                    </a>

                    <a
                      href="https://www.facebook.com"
                      type="submit"
                      className="text-black dark:text-white mb-4 border-t border-gray-200 dark:border-gray-500 flex justify-center items-center gap-3 w-full bg-white shadow-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
                    >
                      <Image
                        src={facebook}
                        alt=""
                        className="w-[33px] h-[33px] object-contain"
                      />
                      <span> Login with Facebook</span>
                    </a>
                    <a
                      href="https://www.x.com"
                      type="submit"
                      className="text-black dark:text-white mb-4 border-t border-gray-200 dark:border-gray-500 flex justify-center items-center gap-3 w-full bg-white shadow-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
                    >
                      <Image
                        src={x}
                        alt=""
                        className="w-[33px] h-[33px] object-contain"
                      />
                      <span>Login with X</span>
                    </a>

                    <p className="text-[1rem] text-gray-500 text-center dark:text-gray-100">
                      Create an account{" "}
                      <a href="/signup" className="text-[0.9rem] underline">
                        SignUp
                      </a>{" "}
                      ?
                    </p>
                  </div>
                </form>

                <div className="bg-[#f5f7fa] dark:bg-gray-800 p-4 rounded-xl shadow flex justify-between gap-4 items-center">
                  <div className="flex justify-start gap-3 items-center">
                    <div className="flex -space-x-2 ">
                      <Image
                        src={user1}
                        alt=""
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                      />
                      <Image
                        src={user2}
                        alt=""
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                      />
                      <Image
                        src={user3}
                        alt=""
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                      />
                      <Image
                        src={user4}
                        alt=""
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                      />
                    </div>
                    <div className="avtars"></div>
                    <div className="title">
                      <h4 className="text-black dark:text-white text-[1.2rem] font-medium">
                        Join with 20k+ Users!
                      </h4>
                      <h5 className="text-gray-400 dark:text-gray-200 text-[1rem] font-normal">
                        Let•s see our happy customer
                      </h5>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-gray-500 dark:text-white text-[3rem] no-underline"
                  >
                    <i className="ph-thin ph-arrow-circle-up-right"></i>
                  </a>
                </div>
              </div>
              <div className="lg:w-[calc(100%_/_2_-_10px)] w-full mlg:order-1">
                <div className="image min-h-[800px] h-full w-full relative overflow-hidden z-0 ">
                  <Image
                    src={login}
                    alt=""
                    className="rounded-2xl h-full w-full object-cover"
                  />
                  <Image
                    src={dashboard}
                    className="max-w-[1100px] h-[400px] z-20 dark:hidden rounded-xl absolute bottom-0 left-[20%] drop-shadow-xl"
                    alt=""
                  />

                  <div className="img_card_body absolute top-0 left-0 h-full w-full z-10 bg-black bg-opacity-50 rounded-2xl py-[100px] px-[80px]">
                    <div className="text">
                      <h2 className="text-white font-bold text-[3rem] text-start">
                        Welcome to our community
                      </h2>
                      <p className="text-white text-[1rem] font-normal">
                        Personalized, updated daily, and beautifully presented.
                        Create account to find your dream new home and get full
                        access to platform functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
