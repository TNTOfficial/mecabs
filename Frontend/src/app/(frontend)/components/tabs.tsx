"use client";
import React, { useState } from 'react'
import { FaLeaf, FaRoad } from 'react-icons/fa'
import { LuUsers } from 'react-icons/lu'

export default function TabComponents() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>

            <section className="py-14 border-b bg-white dark:bg-gray-200 border-zinc-300">
                <div className="container ">
                    <div className="flex flex-wrap justify-center items-center mb-20 ">
                        <div className={`tab-button ${activeTab === 0
                            ? "active transition-all w-1/5 border-b-2 border-[var(--theme)] flex flex-col items-center"
                            : "transition-all duration-300 w-1/5 border-b-2 border-transparent flex flex-col items-center"
                            }`}
                            onClick={() => handleTabClick(0)}>
                            <div
                                className={`tab-button ${activeTab === 0
                                    ? "active transition-all duration-300 aspect-square w-[136px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 dark:border-blue-500 rounded-full"
                                    : "transition-all duration-300 aspect-square w-[136px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 dark:[#CED3D9] rounded-full"
                                    }`}>
                                <LuUsers
                                    className={`tab-button ${activeTab === 0
                                        ? "active transition-all duration-300 text-6xl text-[var(--theme)] dark:text-white"
                                        : "transition-all duration-300 text-6xl text-[#CED3D9] dark:text-white"
                                        }`} />
                            </div>
                            <h6 className="text-center my-10 text-[#556677] text-[1.125rem] font-light">
                                Our Customers
                            </h6>
                        </div>
                        <div className={`tab-button ${activeTab === 1
                            ? "active transition-all w-1/5 border-b-2 border-[var(--theme)] flex flex-col items-center"
                            : "transition-all duration-300 w-1/5 border-b-2 border-transparent flex flex-col items-center"
                            }`}
                            onClick={() => handleTabClick(1)}>
                            <div className={`tab-button ${activeTab === 1
                                ? "active transition-all duration-300 aspect-square w-[136px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 dark:border-blue-500 rounded-full"
                                : "transition-all duration-300 aspect-square w-[136px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 dark:[#CED3D9] rounded-full"
                                }`}>
                                <FaLeaf className={`tab-button ${activeTab === 1
                                    ? "active transition-all duration-300 text-6xl text-[var(--theme)] dark:text-white"
                                    : "transition-all duration-300 text-6xl text-[#CED3D9] dark:text-white"
                                    }`} />
                            </div>
                            <h6 className="text-center my-10 text-[#556677] text-[1.125rem] font-light">
                                The Environment
                            </h6>
                        </div>
                        <div className={`tab-button ${activeTab === 2
                            ? "active transition-all w-1/5 border-b-2 border-[var(--theme)] flex flex-col items-center"
                            : "transition-all duration-300 w-1/5 border-b-2 border-transparent flex flex-col items-center"
                            }`}
                            onClick={() => handleTabClick(2)}>
                            <div className={`tab-button ${activeTab === 2
                                ? "active transition-all duration-300 aspect-square w-[136px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 dark:border-blue-500 rounded-full"
                                : "transition-all duration-300 aspect-square w-[136px] flex justify-center items-center border border-[#CED3D9] dark:bg-gray-600 dark:[#CED3D9] rounded-full"
                                }`}>
                                <FaRoad className={`tab-button ${activeTab === 2
                                    ? "active transition-all duration-300 text-6xl text-[var(--theme)] dark:text-white"
                                    : "transition-all duration-300 text-6xl text-[#CED3D9] dark:text-white"
                                    }`} />
                            </div>
                            <h6 className="text-center my-10 text-[#556677] text-[1.125rem] font-light">
                                Communication
                            </h6>
                        </div>
                    </div>

                    <div className={`tab-button ${activeTab === 0
                        ? "active transition-all flex flex-wrap -mx-5 items-center"
                        : "transition-all hidden flex-wrap -mx-5 items-center"
                        }`}>
                        <div className="w-6/12 px-5">
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
                        <div className="w-6/12 px-5">
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
                    <div className={`tab-button ${activeTab === 1
                        ? "active transition-all flex flex-wrap -mx-5 items-center"
                        : "transition-all hidden flex-wrap -mx-5 items-center"
                        }`}>
                        <div className="w-6/12 px-5">
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
                        <div className="w-6/12 px-5">
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
                    <div className={`tab-button ${activeTab === 2
                        ? "active transition-all flex flex-wrap -mx-5 items-center"
                        : "transition-all hidden flex-wrap -mx-5 items-center"
                        }`}>
                        <div className="w-6/12 px-5">
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
                        <div className="w-6/12 px-5">
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
    )
}
