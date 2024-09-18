import React from 'react'
import banner2 from '../../../../public/banner2.jpg'
import banner3 from '../../../../public/banner3.jpg'
import { PiAirplaneInFlightThin, PiAirplaneThin, PiCarProfileThin, PiDoorOpenThin, PiRoadHorizonThin, PiWifiHighThin } from 'react-icons/pi'

export default function ServicesPage() {
    return (
        <>

            {/* Services Page Landing section Start */}
            <section
                style={{ backgroundImage: ` url(${banner3.src})` }}
                className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
            >
                <div className="container mx-auto px-5">
                    <div className="flex min-h-[40vh] justify-start items-center ">
                        <div className="w-full px-3">
                            <div className="text">
                                <h1 className="text-[3rem] font-normal mb-5 dark:text-white text-white">
                                    Services
                                </h1>
                                <h5 className="text-[1.3rem] font-normal dark:text-white text-white">
                                    HOME - Services
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Page Landing section End */}

            {/* Service details Section Start */}
            <section className='bg-white dark:bg-gray-600 py-[100px]'>
                <div className="container">
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        <div className="w-[calc(100%_/_2_-_20px)]">
                            <div className="text">
                                <h3 className='text-[2rem] mb-5 font-normal text-black dark:text-whinte'>MeCabs Services</h3>
                                <p className='text-[1.4rem] font-light text-gray-500 dark:text-gray-100'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, minima iure praesentium itaque fugiat sequi, ullam eum cupiditate, pariatur perspiciatis neque ad at eius natus! Iste, dicta!
                                </p>
                            </div>
                        </div>
                        <div className="w-[calc(100%_/_2_-_20px)]">
                            <div className="text-[1.8rem] text-gray-500 dark:text-gray-100 font-normal">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, minima iure praesentium itaque fugiat sequi, ullam eum cupiditate, pariatur perspiciatis neque ad at eius natus! Iste, dicta!
                                </p>

                                <p className='text-[1.2rem] text-gray-500 dark:text-gray-100 text-right tracking-widest italic '>
                                    Company CEO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service details Section End */}

            {/* Services Types Section Start */}
            <section className='py-[100px] bg-no-repeat bg-fixed bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-black before:bg-opacity-45 before:z-[-1] before:absolute before:top-0 before:start-0'

                style={{ backgroundImage: ` url(${banner2.src})` }}
            >
                <div className="container">
                    <div className="section_title text-center mb-10">
                        <h4 className='text-white text-[2rem] font-light text-center mb-7'>
                            The perfect collection of vehicles – <br />
                            whatever your occasion is choose our service
                        </h4>

                        <h5 className="title text-[1.5rem] text-white font-bold mb-4">
                            OUR SERVICES
                        </h5>

                        <p className="text-[1.3rem] text-gray-200">
                            Opt for Melbourne Express Cabs for luxurious taxi services and professionally endorsed drivers. Whether you are traveling to or from the airport, navigating through the city, or simply seeking a premium ride, look no further. With us, you will receive a Price Guarantee, top-notch service, and a comfortable journey.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
                        <div className="w-[calc(100%_/_3_-20px)]">
                            <div className="card bg-white p-8 flex flex-col justify-center items-center">
                                <div className="circle_icon border border-gray-300 rounded-full w-[150px] h-[150px] flex justify-center items-center mb-3">
                                    <PiAirplaneInFlightThin className='text-[4rem] text-blue-500' />
                                </div>
                                <h4 className='text-[1rem] text-gray-500 font-bold'> Airport Transfers</h4>
                            </div>
                        </div>
                        <div className="w-[calc(100%_/_3_-20px)]">
                            <div className="card bg-white p-8 flex flex-col justify-center items-center">
                                <div className="circle_icon border border-gray-300 rounded-full w-[150px] h-[150px] flex justify-center items-center mb-3">
                                    <PiCarProfileThin className='text-[4rem] text-blue-500' />
                                </div>
                                <h4 className='text-[1rem] text-gray-500 font-bold'> Taxi Service</h4>
                            </div>
                        </div>
                        <div className="w-[calc(100%_/_3_-20px)]">
                            <div className="card bg-white p-8 flex flex-col justify-center items-center">
                                <div className="circle_icon border border-gray-300 rounded-full w-[150px] h-[150px] flex justify-center items-center mb-3">
                                    <PiRoadHorizonThin className='text-[4rem] text-blue-500' />
                                </div>
                                <h4 className='text-[1rem] text-gray-500 font-bold'> Corporate Travelling</h4>
                            </div>
                        </div>
                    </div>

                    <div className="section_title text-center mb-10">
                        <h5 className="title text-[1.5rem] text-white font-bold mb-4">
                            SPECIAL SERVICES
                        </h5>

                        <p className='text-[1.3rem] text-gray-200'>
                            Experience seamless airport transfers in Melbourne with our popular service. Whether greeting you at the terminal upon arrival or picking you up from your doorstep for your journey to the airport, we ensure a hassle-free and reliable transportation experience, every time   </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-5">
                        <div className="w-[calc(100%_/_3_-20px)]">
                            <div className="card bg-white p-8 flex flex-col justify-center items-center">
                                <div className="circle_icon border border-gray-300 rounded-full w-[150px] h-[150px] flex justify-center items-center mb-3">
                                    <PiAirplaneThin className='text-[4rem] text-blue-500' />
                                </div>
                                <h4 className='text-[1rem] text-gray-500 font-bold'> Melbourne Airport Transfers</h4>
                            </div>
                        </div>
                        <div className="w-[calc(100%_/_3_-20px)]">
                            <div className="card bg-white p-8 flex flex-col justify-center items-center">
                                <div className="circle_icon border border-gray-300 rounded-full w-[150px] h-[150px] flex justify-center items-center mb-3">
                                    <PiDoorOpenThin className='text-[4rem] text-blue-500' />
                                </div>
                                <h4 className='text-[1rem] text-gray-500 font-bold'> Airport Inside Pickup</h4>
                            </div>
                        </div>
                        <div className="w-[calc(100%_/_3_-20px)]">
                            <div className="card bg-white p-8 flex flex-col justify-center items-center">
                                <div className="circle_icon border border-gray-300 rounded-full w-[150px] h-[150px] flex justify-center items-center mb-3">
                                    <PiWifiHighThin className='text-[4rem] text-blue-500' />
                                </div>
                                <h4 className='text-[1rem] text-gray-500 font-bold'> Flight Tracking</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Types Section End */}

        </>
    )
}
