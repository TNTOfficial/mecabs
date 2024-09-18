import { BsBuildings, BsBusFront, BsChatSquareText, BsLuggage } from "react-icons/bs";
import bg1 from "../../../public/bg_slide1.jpg";
import card1 from "../../../public/01.jpg";
import card2 from "../../../public/02.jpg";
import card3 from "../../../public/03.jpg";
import car1 from "../../../public/car1.jpg";
import car2 from "../../../public/car2.jpg";
import car3 from "../../../public/car3.jpg";
import BookingFormTabs from "./components/bookingFormTabs";
import TabComponents from "./components/tabs";
import Image from "next/image";
import { IoAirplaneOutline, IoCarSportOutline } from "react-icons/io5";
import { LuSliders, LuUsers } from "react-icons/lu";
import { PiChatsThin } from "react-icons/pi";
import { GiLighthouse } from "react-icons/gi";
import { TbUser } from "react-icons/tb";
export default function Home() {
    return (
        <>

        
            <section
                style={{ backgroundImage: ` url(${bg1.src})` }}
                className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
            >
                <div className="container mx-auto px-5">
                    <div className="flex min-h-[calc(100vh_-_118px)] justify-end items-center ">
                        <div className="w-[70%] px-3">
                            <div className="text">
                                <h5 className="text-[1.3rem] font-semibold dark:text-white text-white">
                                    BOOKING NOW
                                </h5>
                                <h1 className="text-[4rem] font-extrabold dark:text-white text-white">
                                    Easy airport transfers to and from your accommodation.
                                </h1>
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <BookingFormTabs />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-[#f6f6f6]">
                <div className="container">
                    <h5 className=" text-center font-bold text-[1.125rem] text-[var(--theme)]">
                        WHAT WE DO
                    </h5>
                    <h4 className="text-[2.5rem] font-light text-center text-black">
                        The Car and Limousine Service
                    </h4>

                    <div className="flex flex-wrap items-center justify-start pt-20">
                        <div className="lg:w-4/12 md:w-6/12 w-full p-5">
                            <div className="bg-white shadow-md text-black dark:bg-gray-600 dark:text-white">
                                <div className="relative z-0">
                                    <Image src={card1} className="w-full z-0 " alt="" />
                                    <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-t-full"></div>
                                    <BsBuildings className=" absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white dark:text-white text-6xl" />
                                    <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                                </div>
                                <div className="p-10 text-center">
                                    <a
                                        href=""
                                        className="block text-xl text-[var(--theme)] dark:text-white font-bold mb-5 "
                                    >
                                        CORPORATE TRAVEL
                                    </a>
                                    <p className="text-gray-600 dark:text-white font-light text-[1.125rem]">
                                        We provide business services and our own vehicle fleet so
                                        that you can reach your destination safely, in comfort and
                                        always on time
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col-end --> */}
                        <div className="lg:w-4/12 md:w-6/12 w-full p-5">
                            <div className="bg-white shadow-md text-black dark:bg-gray-600 dark:text-white">
                                <div className="relative z-0">
                                    <Image src={card2} className="w-full z-0 " alt="" />

                                    <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-t-full"></div>
                                    <IoAirplaneOutline className=" absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white dark:text-white text-6xl" />
                                    <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                                </div>
                                <div className="p-10 text-center">
                                    <a
                                        href=""
                                        className="block text-xl text-[var(--theme)] dark:text-white font-bold mb-5 "
                                    >
                                        AIRPORT TRANSFER
                                    </a>
                                    <p className="text-gray-600 dark:text-white font-light text-[1.125rem]">
                                        We provide airport transfers to and from all the major
                                        airports. Our service is the perfect option for when you are
                                        travelling for business or pleasure
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col-end --> */}
                        <div className="lg:w-4/12 md:w-6/12 w-full p-5">
                            <div className="bg-white shadow-md text-black dark:bg-gray-600 dark:text-white">
                                <div className="relative z-0">
                                    <Image src={card3} className="w-full z-0 " alt="" />

                                    <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-t-full"></div>
                                    <LuSliders className="absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white dark:text-white text-6xl" />
                                    <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                                </div>
                                <div className="p-10 text-center">
                                    <a
                                        href=""
                                        className="block text-xl text-[var(--theme)] dark:text-white font-bold mb-5 "
                                    >
                                        EVENT SERVICE
                                    </a>
                                    <p className="text-gray-600 dark:text-white font-light text-[1.125rem]">
                                        Whether it is a short shopping trip or a long-distance
                                        journey, we will get you there in comfort plus we will
                                        handle the entire event efficiently
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col-end --> */}
                    </div>
                </div>
            </section>
            <section className="bg-[#f6f6f6] dark:bg-gray-600">
                <div className="flex flex-wrap items-center">
                    <Image src={card3} className="z-0 w-6/12 " alt="" />

                    <div className="w-6/12 p-12">
                        <div className="">
                            <h5 className=" text-center font-bold text-[1.125rem] text-[var(--theme)] dark:text-white">
                                WHY CHOOSE US
                            </h5>
                            <h4 className="text-[2.5rem] font-light text-center text-black dark:text-white mb-14">
                                Service Tailored to You
                            </h4>
                            <p className="text-[#778591]  dark:text-white font-light text-[1.375rem] text-center mb-14">
                                When organizing a special event you and your family or friends
                                might want to have a good time and not worry about driving. Our
                                experienced chauffeurs will guide you through what every city
                                you are in.
                            </p>

                            <div className="flex flex-wrap justify-around items-center">
                                <div className="w-3/12">
                                    <div className="w-12 h-12 rounded-full  bg-white dark:bg-gray-500 relative mx-auto block">
                                        <IoCarSportOutline className="text-6xl text-[var(--theme)] dark:text-white absolute bottom-1 right-1" />
                                    </div>
                                    <h6 className="font-bold text-[1.125rem] text-[#2C3E50] dark:text-white mt-8 text-center">
                                        Safety First
                                    </h6>
                                </div>
                                <div className="w-3/12">
                                    <div className="w-12 h-12 rounded-full  bg-white dark:bg-gray-500 relative mx-auto block">
                                        <BsBusFront className="text-6xl text-[var(--theme)] dark:text-white absolute bottom-1 right-1" />
                                    </div>
                                    <h6 className="font-bold text-[1.125rem] text-[#2C3E50] dark:text-white  mt-8 text-center">
                                        Coach Buses
                                    </h6>
                                </div>
                                <div className="w-3/12">
                                    <div className="w-12 h-12 rounded-full  bg-white dark:bg-gray-500  relative mx-auto block">
                                        <GiLighthouse className="text-6xl text-[var(--theme)] dark:text-white absolute bottom-1 right-1" />
                                    </div>
                                    <h6 className="font-bold text-[1.125rem] text-[#2C3E50] dark:text-white mt-8 text-center">
                                        Safe Haven
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-stretch bg-[#f6f6f6] dark:bg-gray-600">
                    <div className="w-6/12 py-12 px-28  flex flex-col justify-center items-stretch text-center">
                        <div className="w-12 h-12 rounded-full  bg-[#fff] dark:bg-gray-500  relative mx-auto block mb-10">
                            <PiChatsThin className="text-6xl text-[var(--theme)] dark:text-white absolute bottom-1 right-1" />
                        </div>
                        <p className="text-[#778591] dark:text-white font-light text-[1.375rem] text-center mb-14">
                            I couldn’t be happier with the transport you did. It was great and
                            your car was amazing. Thank you for your great service and I will
                            continue to refer friends and family to you all.
                        </p>

                        <h6 className="text-center uppercase tracking-[.125rem] text-[.875rem] dark:text-gray-200 text-[#778591]">
                            Betty Finsen
                        </h6>
                    </div>
                    <Image src={card1} className="w-6/12" alt="" />
                </div>
            </section>
            <TabComponents />
            <section className="py-[100px]">
                <div className="container">
                    <div className="flex flex-wrap gap-8">
                        <div className="w-[calc(100%_/_3_-_22px)]">
                            <div className="card shadow-sm">
                                <div className="card_img w-full h-[250px] relative">
                                    <Image src={car1} alt="Cars" className="h-full w-full object-cover" />
                                    <div className="card_text absolute top-0 start-0 h-full w-full bg-black bg-opacity-10 flex justify-end items-start flex-col p-3">
                                        <button className="bg-white bg-opacity-70 border border-gray-400 py-2 px-3 text-[0.8rem] text-black font-bold mb-3">SEDAN</button>

                                        <span className="card_name text-gray-300 font-bold text-[1.5rem]">AUDI</span>
                                    </div>
                                </div>
                                <div className="card_body bg-white dark:bg-gray-600 py-3 flex justify-center items-center gap-5">
                                    <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                                        <TbUser className="text-[1.5rem]  text-gray-600 dark:text-white" />
                                        <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                                            4
                                        </span>
                                    </div>
                                    <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                                        <BsLuggage className="text-[1.5rem] text-gray-600 dark:text-white" />
                                        <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                                            6
                                        </span>
                                    </div>
                                    <div className="boot_space"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[calc(100%_/_3_-_22px)]">
                            <div className="card shadow-sm">
                                <div className="card_img w-full h-[250px] relative">
                                    <Image src={car2} alt="Cars" className="h-full w-full object-cover" />
                                    <div className="card_text absolute top-0 start-0 h-full w-full bg-black bg-opacity-10 flex justify-end items-start flex-col p-3">
                                        <button className="bg-white bg-opacity-70 border border-gray-400 py-2 px-3 text-[0.8rem] text-black font-bold mb-3">SEDAN</button>

                                        <span className="card_name text-gray-300 font-bold text-[1.5rem]">BMW</span>
                                    </div>
                                </div>
                                <div className="card_body bg-white dark:bg-gray-600 py-3 flex justify-center items-center gap-5">
                                    <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                                        <TbUser className="text-[1.5rem]  text-gray-600 dark:text-white" />
                                        <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                                            4
                                        </span>
                                    </div>
                                    <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                                        <BsLuggage className="text-[1.5rem] text-gray-600 dark:text-white" />
                                        <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                                            6
                                        </span>
                                    </div>
                                    <div className="boot_space"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[calc(100%_/_3_-_22px)]">
                            <div className="card shadow-sm">
                                <div className="card_img w-full h-[250px] relative">
                                    <Image src={car3} alt="Cars" className="h-full w-full object-cover" />
                                    <div className="card_text absolute top-0 start-0 h-full w-full bg-black bg-opacity-10 flex justify-end items-start flex-col p-3">
                                        <button className="bg-white bg-opacity-70 border border-gray-400 py-2 px-3 text-[0.8rem] text-black font-bold mb-3">SEDAN</button>

                                        <span className="card_name text-gray-300 font-bold text-[1.5rem]">MERCEDES</span>
                                    </div>
                                </div>
                                <div className="card_body bg-white dark:bg-gray-600 py-3 flex justify-center items-center gap-5">
                                    <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                                        <TbUser className="text-[1.5rem]  text-gray-600 dark:text-white" />
                                        <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                                            4
                                        </span>
                                    </div>
                                    <div className="seats_person text-black dark:text-white flex justify-center items-center gap-4">
                                        <BsLuggage className="text-[1.5rem] text-gray-600 dark:text-white" />
                                        <span className="rounded-full w-7 h-7 border border-gray-300 font-normal text-[1rem] flex justify-center items-center leading-[1rem]">
                                            6
                                        </span>
                                    </div>
                                    <div className="boot_space"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
