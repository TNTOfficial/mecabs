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
            Keysborough Taxis: Reliable Rides at Your Doorstep with ME CABS
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            Need a <strong>taxi in Keysborough?</strong> Look no further than
            <strong>ME CABS!</strong> We offer prompt, reliable taxi services to
            Glen Keysborough and surrounding areas. Whether you&apos;re commuting for
            work, heading out for a night on the town, or catching a flight, ME
            CABS is your one-stop solution for comfortable and convenient taxi
            travel.
          </p>
        </div>
      </section>
      {/* city landing area end */}

      {/* Trusted Taxi Partner start */}
      <section className="trustedTaxiPartner py-[100px]">
        <div className="container">
          <div className="sectionHeading text-center max-w-screen-md mx-auto space-y-6 mb-16">
            <h2 className="text-[2rem] text-zinc-900 font-bold">
              Benefits of Choosing ME CABS for Your Taxi Needs
            </h2>
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
                    Competitive Rates
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    We offer competitive fares for all our taxi services,
                    ensuring you get a safe and reliable ride without breaking
                    the bank.
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
                    Safe & Secure Travel
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Your safety is our priority. All ME CABS vehicles are
                    regularly inspected and maintained to the highest standards.
                    Our drivers undergo thorough background checks, ensuring a
                    safe and secure journey.
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
                    Easy Booking
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Booking your taxi is simple and convenient. You can hail a
                    cab on the street, call us directly, or book online through
                    our user-friendly website.
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
                    Multiple Payment Options
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Pay for your ride in a way that suits you. We accept cash,
                    credit card, and debit card payments.
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
              Our Taxi Services
            </h2>
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
                    24/7 Availability
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    We operate 24 hours a day, 7 days a week, ensuring you can
                    always get a taxi when you need it most. No more scrambling
                    for a ride at odd hours <span>&minus;</span> ME CABS is
                    there for you, day or night.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Fast & Efficient Service
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Time is precious. Our experienced drivers know Keysborough
                    and its surrounding suburbs well, minimizing travel time and
                    getting you to your destination quickly.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Modern & Clean Cabs
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Travel in comfort and style with our fleet of
                    well-maintained, clean taxis. We offer a variety of vehicles
                    to suit your needs, whether you&apos;re a single passenger or a
                    group traveling together.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Airport Transfers
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Catching a flight from Melbourne Airport? Take the stress
                    out of your journey by pre-booking your airport transfer
                    with ME CABS. We&apos;ll ensure you arrive at the airport on time
                    and relaxed, ready for your flight.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Friendly & Professional Drivers
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Our team of professional drivers are courteous, helpful, and
                    local area experts. They&apos;ll get you where you need to go
                    safely and efficiently, while providing a pleasant travel
                    experience
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
              More than just a Taxi Service
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500 mb-5">
              We<span>&apos;</span>re committed to providing a comprehensive
              taxi service experience. Whether you need a taxi for a short trip
              across town or a long-distance airport transfer, we&apos;re here to get
              you there comfortably and efficiently.
            </p>

            <p className="block max-w-2xl mt-4 text-gray-500">
              Call us today for your Keysborough taxi needs! We&apos;re available
              24/7 to take your call and get you on your way.
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
