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
            Dependable Taxi Service in Croydon <span>&minus;</span> Me Cabs
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            When you<span>&apos;</span>re searching for a reliable{" "}
            <strong>taxi in Croydon</strong>, ME CABS is the name you can trust.
            Offering top-notch taxi services across Croydon, we ensure every
            ride is convenient, safe, and comfortable. Whether you need a ride
            for a local journey, an important appointment, or a seamless
            transfer to the airport, our <strong>taxi cabs</strong> are equipped
            to meet your needs.
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
                    Professional Taxi Service
                  </h2>
                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>ME CABS</strong> takes pride in delivering a{" "}
                    <strong>premium taxi service</strong>, tailored to suit the
                    diverse transportation needs of our customers. Our
                    experienced drivers are knowledgeable about the local area
                    and committed to ensuring a smooth journey. With a fleet of
                    clean, modern vehicles, we prioritize your comfort and
                    safety, making us the go-to choice for dependable Croydon
                    taxi cabs.
                  </p>
                  <p className="text-[1rem] text-zinc-800">
                    Whether it’s a quick trip across town or a longer ride to
                    nearby suburbs, we focus on delivering punctual, stress-free
                    transportation every time.
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
                    Hassle-Free Airport Transfers
                  </h2>
                  <p className="text-[1rem] text-zinc-800">
                    For travelers, we offer reliable airport transfer services.
                    We know how critical it is to get to the airport on time,
                    and our team is here to make that happen. Our drivers are
                    trained to plan the best routes and monitor your flight
                    schedules, ensuring prompt pickups and drop-offs. With{" "}
                    <strong>ME CABS</strong>, your airport journey is guaranteed
                    to be smooth and worry-free, allowing you to focus on your
                    travels.
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
                    Why Choose ME CABS?
                  </h3>
                  <p className="text-[1rem] text-zinc-800 mb-5">
                    ME CABS is trusted by many for its exceptional Croydon taxi
                    services. Here<span>&apos;</span>s what sets us apart:
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Experienced Drivers: </strong> Professional,
                    friendly, and knowledgeable, ensuring a safe and enjoyable
                    journey.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Modern Fleet: </strong>Clean, comfortable, and
                    well-maintained vehicles for a superior travel experience.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Timeliness: </strong>Punctual pickups and drop-offs,
                    helping you stay on schedule.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Affordable Rates: </strong>Quality service at
                    competitive prices to suit all budgets.
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
              Easy Booking and Great Value
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500">
              Booking a <strong>taxi in Croydon with ME CABS</strong> is easy
              and convenient. Use our online booking system or call us to
              reserve your ride in just a few steps. We offer competitive rates,
              ensuring high-quality service without the hefty price tag.
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
