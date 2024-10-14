import React from "react";
import banner3 from "@/public/banner3.jpg";
import Image from "next/image";
import s1 from "@/public/01.jpg";
import s2 from "@/public/02.jpg";
import s3 from "@/public/03.jpg";
import s4 from "@/public/04.jpg";
import s5 from "@/public/05.jpg";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

export default function ServicesPage() {
  const service1Post = [
    {
      title: "Taxi Service",
      para: "You can book a taxi cab 24/7 and schedule your ride at any time of day or night. We also provide wheelchair accessible taxis and maxi taxis, ensuring that all our customers' transportation needs are met.",
      serviceImage: s1,
    },
    {
      title: "Airport Transfers",
      para: "Ease your airport travel worries by reserving a trustworthy taxi with Melbourne Express Cabs. Whether you're landing or taking off, count on us to get you to your destination promptly and stress-free.",
      serviceImage: s2,
    },

    {
      title: "Corporate Travelling",
      para: "Create a memorable impact with our corporate travel offerings. We deliver exceptional transportation solutions to your business needs, including meetings, conferences, and executive transfers.",
      serviceImage: s3,
    },
  ];

  const service2Post = [
    {
      title: "Melbourne Airport Transfers",
      para: "Our clients frequently opt for our car service for transportation to and from Melbourne Airport, spanning various areas including Phillip Island, Geelong, Great Ocean Road, Yarra Valley, and Lakes Entrance. ",
      serviceImage: s3,
    },
    {
      title: "Airport Inside Pickup",
      para: "We understand that jetting into town can be stressful, especially for frequent travelers. When booking your airport service, simply let us know you'd like to upgrade from curbside pick-up to inside pick-up. ",
      serviceImage: s4,
    },

    {
      title: "Flight Tracking",
      para: "Let us know your flight number the moment you book an airport pick-up service. We will be able to monitor your arrival time and provide a complimentary 60minute wait time, in case you experience a delay. .",
      serviceImage: s5,
    },
  ];

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
      <section className="bg-white dark:bg-gray-600 pt-[100px]">
        <div className="container">
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">
              <div className="text">
                <h3 className="text-[2rem] mb-5 font-normal text-black dark:text-whinte">
                  MeCabs Services
                </h3>
                <p className="text-[1.4rem] font-light text-gray-500 dark:text-gray-100">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, minima iure praesentium itaque fugiat sequi, ullam
                  eum cupiditate, pariatur perspiciatis neque ad at eius natus!
                  Iste, dicta!
                </p>
              </div>
            </div>
            <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">
              <div className="text-[1.8rem] text-gray-500 dark:text-gray-100 font-normal">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, minima iure praesentium itaque fugiat sequi, ullam
                  eum cupiditate, pariatur perspiciatis neque ad at eius natus!
                  Iste, dicta!
                </p>

                <p className="text-[1.2rem] text-gray-500 dark:text-gray-100 text-right tracking-widest italic ">
                  Company CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service details Section End */}

      {/* Services Types Section Start */}
      <section className="py-[100px] bg-no-repeat bg-fixed bg-cover bg-center">
        <div className="container max-w-screen-xl">
          <div className="section_title text-center mb-10">
            <h4 className="text-black text-[2rem] font-light text-center mb-7">
              The perfect collection of vehicles – <br />
              whatever your occasion is choose our service
            </h4>

            <h5 className="title text-[1.5rem] text-black font-bold mb-4">
              OUR SERVICES
            </h5>

            <p className="text-[1.3rem] text-gray-600">
              Opt for Melbourne Express Cabs for luxurious taxi services and
              professionally endorsed drivers. Whether you are traveling to or
              from the airport, navigating through the city, or simply seeking a
              premium ride, look no further. With us, you will receive a Price
              Guarantee, top-notch service, and a comfortable journey.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
            {service1Post.map((service1) => {
              return (
                <div
                  key={service1.title}
                  className=" lg:w-[calc(100%_/_3_-_20px)] md:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]"
                >
                  <div className="relative z-0 overflow-hidden rounded-2xl [&_.cardBody]:hover:bottom-0 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-blue-700 before:to-[#0000ff11] before:hover:top-0 before:hover:opacity-100 before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[8]">
                    <div className="card_img w-full h-[400px] rounded-2xl overflow-hidden">
                      <Image
                        src={service1.serviceImage}
                        className="w-full h-full object-cover "
                        alt="Car Image"
                      />
                    </div>
                    <div className="cardBody bg-transparent p-5 flex flex-col justify-end items-start absolute z-30 bottom-[-15%] left-0 w-full h-full transition-all duration-300">
                      <h3 className="text-white mb-5 text-[1.7rem]">
                        {service1.title}
                      </h3>
                      <p className="text-white mb-4">{service1.para}</p>

                      <a href="#" className=" text-white">
                        <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="section_title text-center my-20">
            <h5 className="title text-[1.5rem] text-black font-bold mb-4">
              SPECIAL SERVICES
            </h5>

            <p className="text-[1.3rem] text-gray-600">
              Experience seamless airport transfers in Melbourne with our
              popular service. Whether greeting you at the terminal upon arrival
              or picking you up from your doorstep for your journey to the
              airport, we ensure a hassle-free and reliable transportation
              experience, every time{" "}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5">
            {service2Post.map((service2) => {
              return (
                <div
                  key={service2.title}
                  className=" lg:w-[calc(100%_/_3_-_20px)] md:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]"
                >
                  <div className="relative z-0 overflow-hidden rounded-2xl [&_.cardBody]:hover:bottom-0 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-blue-700 before:to-[#0000ff11] before:hover:top-0 before:hover:opacity-100 before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[8]">
                    <div className="card_img w-full h-[400px] rounded-2xl overflow-hidden">
                      <Image
                        src={service2.serviceImage}
                        className="w-full h-full object-cover "
                        alt="Car Image"
                      />
                    </div>
                    <div className="cardBody bg-transparent p-5 flex flex-col justify-end items-start absolute z-30 bottom-[-15%] left-0 w-full h-full transition-all duration-300">
                      <h3 className="text-white mb-5 text-[1.7rem]">
                        {service2.title}
                      </h3>
                      <p className="text-white mb-4">{service2.para}</p>

                      <a href="#" className=" text-white">
                        <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Services Types Section End */}
    </>
  );
}
