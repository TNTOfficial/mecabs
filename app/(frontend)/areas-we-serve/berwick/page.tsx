import React from "react";

import banner8 from "@/public/banner8.webp";
import banner9 from "@/public/banner9.webp";
import banner10 from "@/public/banner10.webp";
import banner11 from "@/public/banner11.webp";
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
            Take the Stress Out of Travel with ME CABS<span>&apos;</span>{" "}
            Berwick Taxi Service
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            Living in <strong>Berwick</strong> or visiting the area? When it
            comes to getting around town or catching a flight, look no further
            than <strong>ME CABS</strong>
            reliable and convenient <strong>taxi service</strong>. We offer a
            stress-free travel experience, ensuring you reach your destination
            on time and in comfort.
          </p>
        </div>
      </section>
      {/* city landing area end */}

      {/* Trusted Taxi Partner start */}
      <section className="trustedTaxiPartner py-[100px]">
        <div className="container">
          <div className="sectionHeading text-center max-w-screen-md mx-auto space-y-6 mb-16">
            <h2 className="text-[2rem] text-zinc-900 font-bold">
              Your Trusted Partner for Berwick Taxi Needs
            </h2>
            <p className="text-[1.1rem] text-zinc-700">
              Whether you<span>&apos;</span>re a Berwick resident needing a lift
              to a doctor&apos;s appointment or a tourist exploring the local
              wineries, we are here for you. We cater to a wide range of needs,
              including:
            </p>
          </div>

          {/* trusted cards */}
          <div className="flex justify-center items-stretch  flex-wrap gap-5 xl:max-w-screen-lg mx-auto">
            <div className="flex-[1_1_350px]">
              <div className="card h-full shadow rounded-xl flex justify-start items-stretch overflow-hidden">
                <div className="cardImage flex-1">
                  <Image
                    src={banner8}
                    alt="City Card Image"
                    className=" h-full w-full object-cover"
                  />
                </div>
                <div className="cardBody border-t overflow-hidden border-l px-5 py-10  flex-[1_1_50%] relative z-0 before:absolute before:-top-[40px] before:-right-[40px] before:rounded-bl-xl before:h-20 before:min-w-20 before:max-w-20 before:w-full before:aspect-square before:rotate-[0deg] before:bg-blue-500 after:absolute after:-top-[5px] after:-right-[5px] after:rounded-bl-lg after:h-10 after:aspect-square after:rotate-[0deg] after:bg-white after:z-40 before:z-30">
                  <h4 className="text-[1.4rem] text-zinc-800 font-semibold">
                    Local Trips
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Need a ride to the shops, the cinema, or even a
                    friend&apos;s place across town? We<span>&apos;</span>ll get
                    you there safely and efficiently
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[1_1_350px]">
              <div className="card h-full shadow rounded-xl flex justify-start items-stretch overflow-hidden">
                <div className="cardImage flex-1">
                  <Image
                    src={banner9}
                    alt="City Card Image"
                    className=" h-full w-full object-cover"
                  />
                </div>
                <div className="cardBody border-t overflow-hidden border-l px-5 py-10  flex-[1_1_50%] relative z-0 before:absolute before:-top-[40px] before:-right-[40px] before:rounded-bl-xl before:h-20 before:min-w-20 before:max-w-20 before:w-full before:aspect-square before:rotate-[0deg] before:bg-blue-500 after:absolute after:-top-[5px] after:-right-[5px] after:rounded-bl-lg after:h-10 after:aspect-square after:rotate-[0deg] after:bg-white after:z-40 before:z-30">
                  <h4 className="text-[1.4rem] text-zinc-800 font-semibold">
                    Airport Transfers
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Catching a flight from Melbourne Airport? Our reliable
                    airport <strong>taxi service</strong> ensures a smooth and
                    stress-free transition. We<span>&apos;</span>ll monitor your
                    flight arrival time and be waiting for you upon landing,
                    ready to whisk you home to Berwick.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[1_1_350px]">
              <div className="card h-full shadow rounded-xl flex justify-start items-stretch overflow-hidden">
                <div className="cardImage flex-1">
                  <Image
                    src={banner10}
                    alt="City Card Image"
                    className=" h-full w-full object-cover"
                  />
                </div>
                <div className="cardBody border-t overflow-hidden border-l px-5 py-10  flex-[1_1_50%] relative z-0 before:absolute before:-top-[40px] before:-right-[40px] before:rounded-bl-xl before:h-20 before:min-w-20 before:max-w-20 before:w-full before:aspect-square before:rotate-[0deg] before:bg-blue-500 after:absolute after:-top-[5px] after:-right-[5px] after:rounded-bl-lg after:h-10 after:aspect-square after:rotate-[0deg] after:bg-white after:z-40 before:z-30">
                  <h4 className="text-[1.4rem] text-zinc-800 font-semibold">
                    Nightlife Transportation
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Enjoying a night out in Berwick or Melbourne? Leave the car
                    at home and let ME CABS be your designated driver. We
                    <span>&apos;</span>ll take you safely between bars,
                    restaurants, and your final destination.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[1_1_350px]">
              <div className="card h-full shadow rounded-xl flex justify-start items-stretch overflow-hidden">
                <div className="cardImage flex-1">
                  <Image
                    src={banner11}
                    alt="City Card Image"
                    className=" h-full w-full object-cover"
                  />
                </div>
                <div className="cardBody border-t overflow-hidden border-l px-5 py-10  flex-[1_1_50%] relative z-0 before:absolute before:-top-[40px] before:-right-[40px] before:rounded-bl-xl before:h-20 before:min-w-20 before:max-w-20 before:w-full before:aspect-square before:rotate-[0deg] before:bg-blue-500 after:absolute after:-top-[5px] after:-right-[5px] after:rounded-bl-lg after:h-10 after:aspect-square after:rotate-[0deg] after:bg-white after:z-40 before:z-30">
                  <h4 className="text-[1.4rem] text-zinc-800 font-semibold">
                    Special Occasions
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Need a touch of class for a wedding or formal event? Our
                    <strong>taxi service </strong> offers a stylish and
                    comfortable way to arrive in style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted Taxi Partner end */}

      {/* Provider start */}
      <section className="provider bg-gray-100 py-[100px]">
        <div className="container">
          <div className="sectionHeading text-center max-w-screen-md mx-auto space-y-6 mb-16">
            <h2 className="text-[2rem] text-zinc-900 font-bold">
              ME CABS: More than Just a Berwick Taxi Service
            </h2>
            <p className="text-[1.1rem] text-zinc-700">
              Beyond our comprehensive service offerings,{" "}
              <strong>ME CABS</strong> stands out for the following reasons:
            </p>
          </div>

          <div className="flex justify-center items-stretch flex-wrap gap-8">
            <div className="flex-[1_1_300px]">
              <Image
                src={banner13}
                alt="card city image"
                className="rounded-lg h-full w-full object-cover object-left"
              />
            </div>
            <div className="flex-[1_1_300px]">
              <div className="card text-start h-full rounded-lg bg-gray-50 p-5 space-y-6">
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Modern Fleet
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    We have a fleet of well-maintained, late-model vehicles to
                    ensure a comfortable and enjoyable ride.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Experienced Drivers
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Our team of professional and courteous drivers are familiar
                    with the Berwick area and surrounding suburbs, guaranteeing
                    a safe and efficient journey.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    24/7 Availability
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Need a taxi at 3 am? No problem! We operate 24/7 to ensure
                    you have reliable transportation whenever you need it most.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Competitive Rates
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    We offer transparent and competitive fares, ensuring you get
                    the best value for money.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Convenient Booking
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Book your taxi quickly and easily using our user-friendly
                    app or by calling our 24/7 hotline.
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
              Experience the Difference
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500">
              Ditch the stress of driving, parking, and navigating unfamiliar
              routes. With ME CABS, you can relax, unwind, and leave the driving
              to our experienced professionals. Whether you<span>&apos;</span>re
              a local resident or a visitor exploring Berwick , we
              <span>&apos;</span>re committed to providing a seamless and
              enjoyable travel experience.
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
