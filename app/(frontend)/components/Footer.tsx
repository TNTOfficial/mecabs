import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { GiSmartphone } from 'react-icons/gi'
import { IoCallOutline, IoCarSportOutline, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoMapOutline, IoSearchOutline } from 'react-icons/io5'
import { MdOutlineWifiCalling3 } from 'react-icons/md'
import { PiMapPinLineThin } from 'react-icons/pi'
import { TfiArrowCircleRight, TfiEmail } from 'react-icons/tfi'

// import card1 from "../../../../public/cabcharge_logo.svg";
// import card2 from "../../../../public/mclogo.svg";
// import card3 from "../../../../public/visa.png";
// import card4 from "../../../../public/americanexpress.svg";
// import Image from 'next/image'
import { AiTwotoneCopyrightCircle } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
export default function Footer() {
    return (
        <>
            <footer className='bg-[#eaecee] '>
                <div className="max-w-screen-2xl mx-auto px-6 py-[60px]">
                    <div className="upper_footer mb-16 flex flex-wrap justify-center lg:justify-between gap-x-5 gap-y-7">
                        <div className="lg:w-[calc(100%_/_3_-_15px)] sm:w-[calc(100%_/_2_-_15px)] w-[calc(100%_-_15px)]">
                            <div className="flex gap-3 items-start justify-center lg:justify-start">
                                <div className="icon w-12 h-12 rounded-full  bg-[#fff] dark:bg-gray-500  relative block">
                                    <IoMapOutline className="text-5xl text-gray-400 dark:text-white absolute bottom-1 right-1" />
                                </div>
                                <div className="text-start">
                                    <h3 className='text-xl text-gray-400 dark:text-white'>Address</h3>
                                    <h4 className='text-[1.2rem] text-gray-600 dark:text-white font-semibold'>2507 PARKER BOULEVARD <br /> OAKLAND, CA 76107</h4>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[calc(100%_/_3_-_15px)] sm:w-[calc(100%_/_2_-_15px)] w-[calc(100%_-_15px)]">
                            <div className="flex gap-3 items-start justify-center lg:justify-start">
                                <div className="icon w-12 h-12 rounded-full  bg-[#fff] dark:bg-gray-500  relative block">
                                    <MdOutlineWifiCalling3 className="text-5xl text-gray-400 dark:text-white absolute bottom-1 right-1" />
                                </div>
                                <div className="text-start">
                                    <h3 className='text-xl text-gray-400 dark:text-white'>Phones</h3>
                                    <h4 className='text-[1.2rem] text-gray-600 dark:text-white font-semibold'>
                                        BOOK A RIDE: (0481) 123 987 2411 <br /> OFFICE: (0481) 123 987 2412
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[calc(100%_/_3_-_15px)] sm:w-[calc(100%_/_2_-_15px)] w-[calc(100%_-_15px)]">
                            <div className="flex gap-3 items-start justify-center lg:justify-start">
                                <div className="icon w-12 h-12 rounded-full  bg-[#fff] dark:bg-gray-500  relative block">
                                    <CiClock2 className="text-5xl text-gray-400 dark:text-white absolute bottom-1 right-1" />
                                </div>
                                <div className="text-start">
                                    <h3 className='text-xl text-gray-400 dark:text-white'>Working Hours</h3>
                                    <h4 className='text-[1.2rem] text-gray-600 dark:text-white font-semibold'>MON-SAT: 07:00 - 17:00 <br />
                                        SUN: CLOSED</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="middle_footer">
                        <div className="flex flex-wrap gap-5">
                            <div className="xl:w-[calc(100%_/_4_-_20px)] lg:w-[calc(100%_/_3_-_20px)]">
                                <div className="title_bottom mb-10">
                                    <h4 className='text-gray-600 w-fit border-b-2 border-blue-500 pb-2 px-2 text-[1.1rem] tracking-widest'>ABOUT</h4>
                                </div>

                                <div className="text-start mb-7">
                                    <p className='text-[1.1rem] text-gray-500 font-light'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing laudantium voluptates, inventore, placeat incidunt pariatur excepturi totam cum, accusamus recusandae repellat?
                                    </p>
                                </div>
                                <a href="/" className="flex gap-3 items-center">
                                    {/* <Image src={Logo} className="h-[100px] w-full" alt="Logo" /> */}
                                    <IoCarSportOutline className="self-center text-[3rem] text-[var(--theme)] font-semibold whitespace-nowrap dark:text-gray-200" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                                        Me Cabs
                                    </span>
                                </a>
                            </div>
                            <div className="xl:w-[calc(100%_/_4_-_20px)] lg:w-[calc(100%_/_3_-_20px)]">
                                <div className="title_bottom mb-10">
                                    <h4 className='text-gray-600 w-fit border-b-2 border-blue-500 pb-2 px-2 text-[1.1rem] tracking-widest'>OUR SERVICES</h4>
                                </div>

                                <ul className='list-none '>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <TfiArrowCircleRight className='text-gray-500 text-[1.2rem]' /> Experiential Tours</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <TfiArrowCircleRight className='text-gray-500 text-[1.2rem]' /> Wedding Limousine</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <TfiArrowCircleRight className='text-gray-500 text-[1.2rem]' /> Corporate Travel</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <TfiArrowCircleRight className='text-gray-500 text-[1.2rem]' /> Special Events</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <TfiArrowCircleRight className='text-gray-500 text-[1.2rem]' /> Airport Transportation</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <TfiArrowCircleRight className='text-gray-500 text-[1.2rem]' /> Nationwide Transportation</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <TfiArrowCircleRight className='text-gray-500 text-[1.2rem]' /> Handicap Transportation</li>
                                </ul>
                            </div>
                            <div className="xl:w-[calc(100%_/_4_-_20px)] lg:w-[calc(100%_/_3_-_20px)]">
                                <div className="title_bottom mb-10">
                                    <h4 className='text-gray-600 w-fit border-b-2 border-blue-500 pb-2 px-2 text-[1.1rem] tracking-widest'>AUTORIDE</h4>
                                </div>
                                <ul className='list-none '>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <PiMapPinLineThin className='text-gray-500 text-[1.2rem]' /> 2507 Parker Boulevard, Oakland</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <IoCallOutline className='text-gray-500 text-[1.2rem]' /> (0481) 123 987 2411</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <GiSmartphone className='text-gray-500 text-[1.2rem]' /> 	(0481) 123 987 2412</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <TfiEmail className='text-gray-500 text-[1.2rem]' /> contact@autoride.com</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <CiClock2 className='text-gray-500 text-[1.2rem]' /> Mon-Sat: 07:00 - 17:00</li>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <CiClock2 className='text-gray-500 text-[1.2rem]' /> Sunday: Closed</li>
                                </ul>
                            </div>
                            <div className="xl:w-[calc(100%_/_4_-_20px)] lg:w-[calc(100%_/_3_-_20px)]">
                                <div className="title_bottom mb-10">
                                    <h4 className='text-gray-600 w-fit border-b-2 border-blue-500 pb-2 px-2 text-[1.1rem] tracking-widest'>HELP</h4>
                                </div>
                                <ul className='list-none '>
                                    <li className='flex gap-2 justify-start items-center py-1 text-gray-500 text-[1rem]'> <PiMapPinLineThin className='text-gray-500 text-[1.2rem]' /> Contact Us</li>
                                </ul>
                                <div className="title_bottom my-7">
                                    <h4 className='text-gray-600 w-fit border-b-2 border-blue-500 pb-2 px-2 text-[1.1rem] tracking-widest'>PAYMENT </h4>
                                </div>

                                <div className="flex flex-nowrap gap-2">
                                    {/* <Image src={card1} alt='' className='h-auto w-[120px] object-contain' />
                                    <Image src={card2} alt='' className='h-auto w-[50px] object-contain' />
                                    <Image src={card3} alt='' className='h-auto w-[40px] object-contain' />
                                    <Image src={card4} alt='' className='h-auto w-[40px] object-contain' /> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="lower_footer bg-white dark:bg-gray-600 border-t border-transparent dark:border-white py-3">
                    <div className="max-w-screen-2xl mx-auto px-6">
                        <div className="flex justify-between items-center">
                            <div className="copyright flex gap-3 justify-start items-center text-black dark:text-white">
                                <AiTwotoneCopyrightCircle className='text-[1.3rem]' />
                                <span>Copyright <strong>2024</strong> MeCabs : Developed By: <strong>TopNTech Solutions</strong> </span>
                            </div>

                            <div className="icons">
                                <div className="flex justify-between gap-4">
                                    <a href="#" className="flex justify-start items-center gap-2">
                                        <IoLogoFacebook className="text-[1.1rem] text-gray-400" />
                                    </a>
                                    <a href="#" className="flex justify-start items-center gap-2">
                                        <FaXTwitter className="text-[1.1rem] text-gray-400 " />
                                    </a>
                                    <a href="#" className="flex justify-start items-center gap-2">
                                        <IoLogoInstagram className="text-[1.1rem] text-gray-400 "/>
                                    </a>
                                    <a href="#" className="flex justify-start items-center gap-2">
                                        <IoLogoWhatsapp className="text-[1.1rem] text-gray-400 " />
                                    </a>
                                    <a href="#" className="flex justify-start items-center gap-2">
                                        <IoSearchOutline className="text-[1.1rem] text-gray-400" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
