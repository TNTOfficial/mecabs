"use client";
import React, { useState } from "react";
import { FaLeaf, FaRoad } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

export default function TabComponents() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className="py-14 border-b bg-white dark:bg-gray-200 border-zinc-300">
        <div className="container ">
          <div className="flex flex-wrap justify-center md:gap-5 items-center mb-20 ">
            <div
              className={`tab-button  flex flex-col justify-center w-fit items-center transition-all duration-300 px-2 border-b-2 ${
                activeTab === 0
                  ? "active border-[var(--theme)]"
                  : "  border-transparent"
              }`}
              onClick={() => handleTabClick(0)}
            >
              <div
                className={`tab-button transition-all duration-300 aspect-square xl:w-[136px] lg:w-[100px] md:w-[70px] w-[50px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 rounded-full ${
                  activeTab === 0
                    ? "active  dark:border-blue-500"
                    : "dark:border-[#CED3D9]"
                }`}
              >
                <LuUsers
                  className={`tab-button transition-all duration-300 xl:text-[3.75rem] lg:text-[3rem] md:text-[2rem] text-[1.5rem] dark:text-white ${
                    activeTab === 0
                      ? "active text-[var(--theme)]"
                      : "text-[#CED3D9]"
                  }`}
                />
              </div>
              <h6 className="text-center my-5 text-[#556677] text-[1.125rem] font-light text-nowrap">
                Our Customers
              </h6>
            </div>
            <div
              className={`tab-button  flex flex-col justify-center w-fit items-center transition-all duration-300 px-2 border-b-2 ${
                activeTab === 1
                  ? "active border-[var(--theme)]"
                  : "  border-transparent"
              }`}
              onClick={() => handleTabClick(1)}
            >
              <div
                className={`tab-button transition-all duration-300 aspect-square xl:w-[136px] lg:w-[100px] md:w-[70px] w-[50px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 rounded-full ${
                  activeTab === 1
                    ? "active  dark:border-blue-500"
                    : "dark:border-[#CED3D9]"
                }`}
              >
                <FaLeaf
                  className={`tab-button transition-all duration-300 xl:text-[3.75rem] lg:text-[3rem] md:text-[2rem] text-[1.5rem] dark:text-white ${
                    activeTab === 1
                      ? "active text-[var(--theme)]"
                      : "text-[#CED3D9]"
                  }`}
                />
              </div>
              <h6 className="text-center my-5 text-[#556677] text-[1.125rem] font-light text-nowrap">
                The Environment
              </h6>
            </div>
            <div
              className={`tab-button  flex flex-col justify-center w-fit items-center transition-all duration-300 px-2 border-b-2 ${
                activeTab === 2
                  ? "active border-[var(--theme)]"
                  : "  border-transparent"
              }`}
              onClick={() => handleTabClick(2)}
            >
              <div
                className={`tab-button transition-all duration-300 aspect-square xl:w-[136px] lg:w-[100px] md:w-[70px] w-[50px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 rounded-full ${
                  activeTab === 2
                    ? "active  dark:border-blue-500"
                    : "dark:border-[#CED3D9]"
                }`}
              >
                <FaRoad
                  className={`tab-button transition-all duration-300 xl:text-[3.75rem] lg:text-[3rem] md:text-[2rem] text-[1.5rem] dark:text-white ${
                    activeTab === 2
                      ? "active text-[var(--theme)]"
                      : "text-[#CED3D9]"
                  }`}
                />
              </div>
              <h6 className="text-center my-5 text-[#556677] text-[1.125rem] font-light text-nowrap">
                Communication
              </h6>
            </div>
          </div>

          <div
            className={`tab-button transition-all  flex-wrap  justify-center gap-5 items-stretch ${
              activeTab === 0 ? "active flex" : "hidden"
            }`}
          >
            <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
              <div className="text-center lg:text-start">
                <h3 className="text-3xl font-light text-[#556677] mb-10">
                  When organizing a special event you and your family or friends
                  might want to have a good time and not worry about driving
                </h3>
                <p className="text-[1.125rem] font-light text-[#556677]">
                  Our very experienced chauffeurs will guide you through what
                  every city you are in. Point to point / day trips / long
                  distance, you name it.
                </p>
              </div>
            </div>
            <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
              <div className="border-2 border-[#EAECEE] dark:bg-gray-600 p-8">
                <ul>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`tab-button transition-all  flex-wrap  justify-center gap-5 items-stretch ${
              activeTab === 1 ? "active flex" : "hidden"
            }`}
          >
            <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
              <div className="text-center lg:text-start">
                <h3 className="text-3xl font-light text-[#556677] mb-10">
                  Then organizing a special event you and your family or friends
                  might want to have a good time and not worry about driving
                </h3>
                <p className="text-[1.125rem] font-light text-[#556677]">
                  Our very experienced chauffeurs will guide you through what
                  every city you are in. Point to point / day trips / long
                  distance, you name it.
                </p>
              </div>
            </div>
            <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
              <div className="border-2 border-[#EAECEE] dark:bg-gray-600 p-8">
                <ul>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`tab-button transition-all  flex-wrap  justify-center gap-5 items-stretch ${
              activeTab === 2 ? "active flex" : "hidden"
            }`}
          >
            <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
              <div className="text-center lg:text-start">
                <h3 className="text-3xl font-light text-[#556677] mb-10">
                  When organizing a special event you and your family or friends
                  might want to have a good time and not worry about driving
                </h3>
                <p className="text-[1.125rem] font-light text-[#556677]">
                  Our very experienced chauffeurs will guide you through what
                  every city you are in. Point to point / day trips / long
                  distance, you name it.
                </p>
              </div>
            </div>
            <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
              <div className="border-2 border-[#EAECEE] dark:bg-gray-600 p-8">
                <ul>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                  <li className="flex gap-5 items-center text-xl pb-3">
                    <i className="ph ph-check text-[var(--theme)]"></i>{" "}
                    <span className="text=[#556677] dark:text-white font-light text-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
