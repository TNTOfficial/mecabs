import React from "react";

import banner8 from "@/public/banner8.webp";
import banner9 from "@/public/banner9.webp";
import banner12 from "@/public/banner12.webp";
import banner13 from "@/public/banner13.webp";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
      {/* city landing area start */}

      {/* style={{ backgroundImage: ` url(${slide.bgImg.src})` }} */}
      <section
        className="cityLandingArea py-[100px] px-14 flex justify-center items-center bg-bottom bg-no-repeat bg-cover relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-50 before:z-[-1] before:absolute before:top-0 before:start-0"
        style={{ backgroundImage: `url(${banner8.src})` }}
      >
        <div className="sectionMainHeading text-center text-white max-w-screen-lg">
          <h1 className="text-[3rem] font-bold">
            Professional Taxi Service in Melton <span>&minus;</span> Me Cabs
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            Looking for a convenient and
            <strong>reliable taxi in Melton? Me Cabs</strong>
            provides professional taxi services designed to meet your
            transportation needs in and around Melton. Whether you’re commuting
            locally, attending a business meeting, or need a comfortable ride to
            the airport, our Melton taxi cabs are here to offer you a smooth,
            efficient, and hassle-free experience.
          </p>
        </div>
      </section>
      {/* city landing area end */}

      {/* Trusted Taxi Partner start */}
      <section className="trustedTaxiPartner py-[100px]">
        <div className="container">
          {/* trusted cards */}

          <div className="flex justify-center items-stretch  flex-wrap gap-5 mx-auto pb-16">
            <div className="flex-[1_1_500px]">
              <Image
                src={banner9}
                alt="card city image"
                className="rounded-lg h-full w-full object-cover object-left"
              />
            </div>
            <div className="flex-[1_1_500px]">
              <div className="card text-start h-full rounded-lg bg-gray-50 p-5 space-y-6 flex justify-start items-center">
                <div className="articalText">
                  <h2 className="text-[1.8rem] text-blue-950 font-bold">
                    Trusted Taxi Service in Melton
                  </h2>
                  <p className="text-[1rem] text-zinc-800">
                    Me Cabs is committed to offering
                    <strong>high-quality taxi service in Melton</strong> with a
                    focus on customer satisfaction. Our Melton taxi cabs are
                    operated by experienced, friendly drivers who are
                    well-acquainted with the area, ensuring a quick and direct
                    route to your destination. Each cab is modern, clean, and
                    fully equipped to provide you with a comfortable journey, no
                    matter the distance. Our taxi service is ideal for all types
                    of travel, whether you need a ride within Melton or a
                    reliable option to travel to surrounding suburbs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-stretch  flex-wrap gap-5 mx-auto">
            <div className="flex-[1_1_500px]">
              <div className="card text-start h-full rounded-lg bg-gray-50 p-5 space-y-6 flex justify-start items-center">
                <div className="articalText">
                  <h2 className="text-[1.8rem] text-blue-950 font-bold">
                    Reliable Airport Transfer in Melton
                  </h2>
                  <p className="text-[1rem] text-zinc-800">
                    For those needing a <strong>Melton airport transfer</strong>
                    , Me Cabs offers a dependable solution. We know that getting
                    to and from the airport on time is essential, which is why
                    our airport transfer service is designed to be punctual and
                    stress-free. Our drivers are well-versed in handling airport
                    trips and will manage everything from keeping track of your
                    flight schedule to choosing the fastest routes. With Me
                    Cabs, you can rest assured that you<span>&apos;</span>ll
                    arrive at the airport comfortably and on time.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[1_1_500px]">
              <Image
                src={banner8}
                alt="card city image"
                className="rounded-lg h-full w-full object-cover object-left"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Trusted Taxi Partner end */}

      {/* Provider start */}
      <section className="provider bg-gray-100 py-[100px]">
        <div className="container">
          <div className="flex justify-center items-stretch flex-wrap gap-8">
            <div className="flex-[1_1_500px]">
              <Image
                src={banner13}
                alt="card city image"
                className="rounded-lg h-full w-full object-cover object-left"
              />
            </div>
            <div className="flex-[1_1_500px]">
              <div className="card text-start h-full rounded-lg bg-gray-50 p-5 space-y-6 flex justify-start items-center">
                <div className="articalText">
                  <h3 className="text-[1.3rem] text-blue-950 font-bold">
                    Easy Booking and Affordable Rates
                  </h3>
                  <p className="text-[1rem] text-zinc-800 mb-5">
                    Me Cabs offers a simple and straightforward booking system
                    that allows you to <strong>reserve a taxi in Melton</strong>
                    quickly and easily. You can book online or by phone,
                    ensuring that a reliable ride is just a few clicks or a call
                    away. Our competitive rates make it easy to choose quality
                    without breaking the bank, providing an affordable way to
                    travel with peace of mind.
                  </p>
                  <p className="text-[1rem] text-zinc-800">
                    Choose <strong>Me Cabs</strong> for all your taxi needs in
                    Melton and enjoy a taxi service that values punctuality,
                    safety, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Provider end */}

      {/* City Experience start */}
      <section className="bg-white">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
              Why Choose Me Cabs for Taxi Services in Melton?
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500">
              Choosing Me Cabs means choosing a taxi service that puts you
              first. Our <strong>Melton taxi cabs</strong> are operated by fully
              licensed, courteous drivers who prioritize your safety and
              comfort. From prompt pickups to smooth drop-offs, every detail is
              managed with care. Our affordable pricing structure ensures that
              you get excellent value for a high-quality service, whether you
              <span>&apos;</span>re heading across Melton or booking an airport
              transfer.
            </p>
          </div>
          <div className="flex justify-center xl:w-1/2">
            <Image
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
              src={banner12}
              alt="card city image"
            />
          </div>
        </div>
      </section>
      {/* City Experience end */}

      {/* cta section start */}
      <section className="px-6 py-16 bg-white">
        <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
          <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">
            Ready to Book Your Taxi?
          </h2>
          <div className="mt-8">
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              For convenient booking, call our friendly team to discuss your
              needs.
            </p>

            <Link
              href="/booking"
              className="text-[1.1rem] text-white bg-blue-600 rounded-3xl py-3 px-5"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
      {/* cta section end */}
    </>
  );
};

export default page;
