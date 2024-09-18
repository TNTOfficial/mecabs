import React from 'react'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { LuClock3 } from 'react-icons/lu'

export default function ContactUsForm() {
    return (
        <>
            <section className="contactus py-[100px]">
                <div className="container">
                    <h3 className='text-center text-[2.5rem] font-medium mb-12'>
                        Private chauffeur, sightseeing tour? <br />
                        Please fill out the form below with questions or comments
                    </h3>

                    <div className="flex flex-wrap justify-center bg-gray-50 dark:bg-gray-600 divide-x-2 items-stretch">
                        <div className="w-[calc(100%_/_2)]">
                            <div className="contact_details p-12 flex flex-col h-full justify-between items-start">
                                <div>
                                    <div className="title_icon mb-3 flex justify-start items-center gap-3">
                                        <IoCallOutline className='text-blue-500 dark:text-white text-[2rem]' />
                                        <span className='text-[1.2rem] text-black dark:text-white font-bold'>CALL US</span>
                                    </div>
                                    <div className="title_info mb-10">
                                        <span className='text-[1.3rem] text-gray-700 font-normal'>1 (234) 567-891, 1 (234) 987-654</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="title_icon mb-3 flex justify-start items-center gap-3">
                                        <IoLocationOutline className='text-blue-500 dark:text-white text-[2rem]' />
                                        <span className='text-[1.2rem] text-black dark:text-white font-bold'>LOCATION</span>
                                    </div>
                                    <div className="title_info mb-10">
                                        <span className='text-[1.3rem] text-gray-700 font-normal'>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="title_icon mb-3 flex justify-start items-center gap-3">
                                        <LuClock3 className='text-blue-500 dark:text-white text-[2rem]' />
                                        <span className='text-[1.2rem] text-black dark:text-white font-bold'>BUSINESS HOURS</span>
                                    </div>
                                    <div className="title_info">
                                        <span className='text-[1.3rem] text-gray-700 font-normal'>Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[calc(100%_/_2)]">
                            <form action="#" className=' p-12 h-full'>
                                <h4 className='text-[1.2rem] text-black dark:text-white mb-3'><strong>Step 1 -</strong> Tell us how can we help you today? <span className="text-blue-500 dark:text-white dark:font-bold">(Required)</span></h4>
                                <div className="relative mb-10">
                                    <input type="text" id="enquire" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white border-b  border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label htmlFor="enquire" className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        What would you like to enquire about?
                                    </label>
                                </div>
                                <h4 className='text-[1.2rem] text-black dark:text-white mb-3'><strong>Step 2 -</strong>Provide your contact details <span className="text-blue-500 dark:text-white dark:font-bold">(Required)</span></h4>

                                <div className="relative mb-4">
                                    <input type="text" id="name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white border-b  border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label htmlFor="name" className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Enter Your Full Name
                                    </label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="tel" id="phoneNumber" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white border-b  border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label htmlFor="phoneNumber" className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Enter Your Phone Number
                                    </label>
                                </div>
                                <div className="relative mb-10">
                                    <input type="email" id="emailAddress" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white border-b  border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label htmlFor="emailAddress" className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Enter Your Email Address
                                    </label>
                                </div>


                                <h4 className='text-[1.2rem] text-black dark:text-white mb-3'><strong>Step 3 -</strong> Add additional Details<span className="text-blue-500 dark:text-white dark:font-bold">(Required)</span></h4>
                                <div className="relative mb-4">
                                    <input type="email" id="emailAddress" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white border-b  border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " > </input>
                                    <label htmlFor="emailAddress" className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                        Enter Your Email Address
                                    </label>
                                </div>

                                <button type='submit' className='bg-blue-500 w-full block py-2 px-3 text-center text-white'>Submit Enquiry</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
