import React from 'react'
import banner1 from '@/public/banner1.jpg'
import car2 from "@/public/car2.jpg";
import car3 from "@/public/car3.jpg";
import Image from 'next/image'
import { CiCalendar, CiCircleCheck } from 'react-icons/ci';
import { IoCheckmark } from 'react-icons/io5';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { BsLuggageFill } from 'react-icons/bs';
import { MdWorkspacePremium } from 'react-icons/md';
import { fetchRevenue } from '@/app/lib/data';

export default async function About() {
  const revenue = await fetchRevenue();
  console.log(revenue);
  
  return (
    <>
      {/* About Page Landing section Start */}
      <section
        style={{ backgroundImage: ` url(${banner1.src})` }}
        className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
      >
        <div className="container mx-auto px-5">
          <div className="flex min-h-[40vh] justify-start items-center ">
            <div className="w-full px-3">
              <div className="text">
                <h1 className="text-[3rem] font-normal mb-5 dark:text-white text-white">
                  About Us
                </h1>
                <h5 className="text-[1.3rem] font-normal dark:text-white text-white">
                  HOME - ABOUT US
                </h5>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Page Landing section End */}

      {/* About Us section Start */}
      <section className='py-[100px] bg-white dark:bg-gray-400'>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-5 items-stretch">
            <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">
              <div className="text">
                <h4 className='text-black mb-5 dark:text-white text-[1.5rem] font-medium '>
                  For over a dozen years we have been providing the best transport services. We offer bus, passenger transport and limousine rental.
                </h4>

                <p className='text-[1.275rem] text-gray-600 dark:text-white font-normal'>
                  We address our offer to all who want to travel in comfortable conditions.
                  We have over 120 top-class vehicles, so our customers can be assured of comfort and safety.
                </p>
                <ul className='list-none mt-5'>
                  <li className='flex justify-start mb-3 items-center gap-3'>
                    <CiCircleCheck className='text-blue-500 dark:text-white text-[2.5rem]' />
                    <span className='tetx-gray-600 dark:text-white text-[1.2rem] font-light'>Professionally Trained Chauffeurs</span>
                  </li>
                  <li className='flex justify-start mb-3 items-center gap-3'>
                    <CiCircleCheck className='text-blue-500 dark:text-white text-[2.5rem]' />
                    <span className='tetx-gray-600 dark:text-white text-[1.2rem] font-light'>24/7 Full-Service Transportation</span>
                  </li>
                  <li className='flex justify-start mb-3 items-center gap-3'>
                    <CiCircleCheck className='text-blue-500 dark:text-white text-[2.5rem]' />
                    <span className='tetx-gray-600 dark:text-white text-[1.2rem] font-light'>Global network of Transportation Partners</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">
              <div className="image h-full w-full">
                <Image src={car3} alt='image' className='w-full h-full object-cover' />
              </div>
            </div>
          </div>

          <div className="counter flex flex-wrap justify-center items-center  gap-5 mt-10">
            <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card_circle h-[190px] w-[190px] rounded-full border border-gray-300 drak:border-blue-500 mx-auto flex justify-center items-center relative">
                <div className="absolute top-2 right-1 h-12 w-12 flex justify-center items-center bg-gray-100 dark:bg-white rounded-full">
                  <IoCheckmark className='text-gray-500 text-[1.5rem]' />
                </div>
                <div className="num  flex justify-center items-center flex-col h-full w-[96%] border border-gray-300 dark:border-blue-500 rounded-full">
                  <span className='text-[3rem] text-blue-500 dark:text-white font-extralight'>120</span>
                  <span className='text-[1.3rem] text-gray-400 dark:text-white'>Vehicles</span>
                </div>
              </div>
            </div>
            <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card_circle h-[190px] w-[190px] rounded-full border border-gray-300 drak:border-blue-500 mx-auto flex justify-center items-center relative">
                <div className="absolute top-2 right-1 h-12 w-12 flex justify-center items-center bg-gray-100 dark:bg-white rounded-full">
                  <IoCheckmark className='text-gray-500 text-[1.5rem]' />
                </div>
                <div className="num  flex justify-center items-center flex-col h-full w-[96%] border border-gray-300 dark:border-blue-500 rounded-full">
                  <span className='text-[3rem] text-blue-500 dark:text-white font-extralight'>25</span>
                  <span className='text-[1.3rem] text-gray-400 dark:text-white'>Countries Visited</span>
                </div>
              </div>
            </div>
            <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card_circle h-[190px] w-[190px] rounded-full border border-gray-300 drak:border-blue-500 mx-auto flex justify-center items-center relative">
                <div className="absolute top-2 right-1 h-12 w-12 flex justify-center items-center bg-gray-100 dark:bg-white rounded-full">
                  <IoCheckmark className='text-gray-500 text-[1.5rem]' />
                </div>
                <div className="num  flex justify-center items-center flex-col h-full w-[96%] border border-gray-300 dark:border-blue-500 rounded-full">
                  <span className='text-[3rem] text-blue-500 dark:text-white font-extralight'>25</span>
                  <span className='text-[1.3rem] text-gray-400 dark:text-white'>Miles Traveled</span>
                </div>
              </div>
            </div>
            <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card_circle h-[190px] w-[190px] rounded-full border border-gray-300 drak:border-blue-500 mx-auto flex justify-center items-center relative">
                <div className="absolute top-2 right-1 h-12 w-12 flex justify-center items-center bg-gray-100 dark:bg-white rounded-full">
                  <IoCheckmark className='text-gray-500 text-[1.5rem]' />
                </div>
                <div className="num  flex justify-center items-center flex-col h-full w-[96%] border border-gray-300 dark:border-blue-500 rounded-full">
                  <span className='text-[3rem] text-blue-500 dark:text-white font-extralight'>7</span>
                  <span className='text-[1.3rem] text-gray-400 dark:text-white'>Awards Won</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us section End */}

      {/* About Us Second section Start */}
      <section className="bg-gray-100 dark:bg-gray-600">
        <div className="flex flex-wrap justify-center lg:justify-between gap-5 items-center">
          <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">
            <div className="image h-full w-full">
              <Image src={car2} alt='image' className='w-full h-full object-cover' />
            </div>
          </div>
          <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">
            <div className="text py-10">
              <h4 className="text-black mb-5 dark:text-white text-[1.5rem] font-medium">
                For over a dozen years we have been providing the best transport services. We offer bus, passenger transport and limousine rental.
              </h4>

              <p className='text-[1.275rem] text-gray-600 dark:text-white font-normal'>
                We address our offer to all who want to travel in comfortable conditions.
                We have over 120 top-class vehicles, so our customers can be assured of comfort and safety.
              </p>
              <ul className='list-none mt-5'>
                <li className='flex justify-start mb-3 items-center gap-3'>
                  <CiCircleCheck className='text-blue-500 dark:text-white text-[2.5rem]' />
                  <span className='tetx-gray-600 dark:text-white text-[1.2rem] font-light'>Professionally Trained Chauffeurs</span>
                </li>
                <li className='flex justify-start mb-3 items-center gap-3'>
                  <CiCircleCheck className='text-blue-500 dark:text-white text-[2.5rem]' />
                  <span className='tetx-gray-600 dark:text-white text-[1.2rem] font-light'>24/7 Full-Service Transportation</span>
                </li>
                <li className='flex justify-start mb-3 items-center gap-3'>
                  <CiCircleCheck className='text-blue-500 dark:text-white text-[2.5rem]' />
                  <span className='tetx-gray-600 dark:text-white text-[1.2rem] font-light'>Global network of Transportation Partners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Second section End */}

      {/* Services steps section Start */}
      <section className='bg-white dark:bg-gray-500'>
        <div className="counter flex flex-wrap items-stretch justify-center md:justify-between gap-5 divide-x">
          <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
            <div className="card bg-[#556677]  px-16 py-16 relative h-full">
              <div className="absolute top-10 right-10 text-gray-400 text-[1.5rem]  flex justify-center items-center">
                01
              </div>
              <div className="flex justify-center gap-4 flex-col">
                <CiCalendar className='text-[4rem] text-white' />
                <span className='text-[1.3rem] font-light text-white'>
                  Each of our drivers is characterized by professionalism and punctuality
                </span>
              </div>
            </div>
          </div>
          <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
            <div className="card bg-[#556677]  px-16 py-16 relative h-full">
              <div className="absolute top-10 right-10 text-gray-400 text-[1.5rem]  flex justify-center items-center">
                02
              </div>
              <div className="flex justify-center gap-4 flex-col">
                <AiOutlineSafetyCertificate className='text-[4rem] text-white' />
                <span className='text-[1.3rem] font-light text-white'>
                  We always go the extra mile when it comes to the safety
                </span>
              </div>
            </div>
          </div>
          <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
            <div className="card bg-[#556677]  px-16 py-16 relative h-full">
              <div className="absolute top-10 right-10 text-gray-400 text-[1.5rem]  flex justify-center items-center">
                03
              </div>
              <div className="flex justify-center gap-4 flex-col">
                <BsLuggageFill className='text-[4rem] text-white' />
                <span className='text-[1.3rem] font-light text-white'>
                  You can rely on our knowledge and experience to guide you on your tour
                </span>
              </div>
            </div>
          </div>
          <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
            <div className="card bg-[#556677]  px-16 py-16 relative h-full">
              <div className="absolute top-10 right-10 text-gray-400 text-[1.5rem]  flex justify-center items-center">
                04
              </div>
              <div className="flex justify-center gap-4 flex-col">
                <MdWorkspacePremium className='text-[4rem] text-white' />
                <span className='text-[1.3rem] font-light text-white'>
                  Premium quality and award winning customer service
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

