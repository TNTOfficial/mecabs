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
            Navigate Altona with Ease: Reliable Taxi Service from ME CABS
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            Need a convenient and reliable way to get around Altona? Look no
            further than ME CABS! We offer a comprehensive{" "}
            <strong>taxi service</strong> that caters to all your Altona travel
            needs, ensuring a stress-free and comfortable journey every time.
          </p>
        </div>
      </section>
      {/* city landing area end */}

      {/* Trusted Taxi Partner start */}
      <section className="trustedTaxiPartner py-[100px]">
        <div className="container">
          <div className="sectionHeading text-center max-w-screen-md mx-auto space-y-6 mb-16">
            <h2 className="text-[2rem] text-zinc-900 font-bold">
              Your Go-To Taxi Service
            </h2>
            <p className="text-[1.1rem] text-zinc-700">
              Whether you<span>&apos;</span>re a resident of Altona or simply
              visiting the vibrant area, <strong>ME CABS</strong> is your one
              <span>&minus;</span>
              stop solution for a hassle-free travel experience. We cater to a
              wide range of needs, including:
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
                    Need a ride to the Altona Community Centre, a grocery run at
                    Woolworths, or visiting friends across town? Our taxis will
                    get you there efficiently and safely, allowing you to focus
                    on enjoying your time.
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
                    Catching a flight from Melbourne Airport? Don
                    <span>&apos;</span>t sweat the logistics. Our reliable
                    airport taxi service guarantees a smooth and stress-free
                    transition. We<span>&apos;</span>ll monitor your flight
                    arrival time and be readily waiting for you upon landing,
                    ready to whisk you back to your Altona destination.
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
                    Seamless Nightlife Transportation
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Enjoying a night out in Altona or venturing into Melbourne<span>&apos;</span>s
                    bustling nightlife scene? Leave the car at home and let ME
                    CABS be your designated driver. We&apos;ll ensure a safe and
                    comfortable ride between bars, restaurants, and your final
                    destination in Altona or surrounding areas.
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
                    taxi service offers a stylish and comfortable way to arrive
                    in style. Make a memorable entrance that complements your
                    special occasion.
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
              ME CABS: Trusted Taxi Provider
            </h2>
            <p className="text-[1.1rem] text-zinc-700">
              Beyond our comprehensive service offerings, here
              <span>&apos;</span>s what sets ME CABS apart:
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
                    We maintain a fleet of well-maintained, late-model vehicles
                    to ensure a comfortable and enjoyable ride. Each taxi is
                    clean, spacious, and equipped for a smooth journey.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Experienced Drivers
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Our team of professional and courteous drivers is familiar
                    with Altona<span>&apos;</span>s streets and surrounding
                    suburbs. They prioritize safe and efficient journeys,
                    ensuring you reach your destination on time.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    24/7 Availability
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Need a taxi at any hour? ME CABS operates 24/7, offering
                    reliable transportation whenever you need it most, day or
                    night.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Competitive Rates
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    We offer transparent and competitive fares, ensuring you get
                    the best value for money. You<span>&apos;</span>ll know the
                    cost upfront, allowing for stress-free budgeting.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Convenient Booking
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Book your taxi quickly and easily using our user-friendly
                    app or by calling our 24/7 hotline. Our booking process is
                    simple and efficient, saving you valuable time.
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
              a local resident or a visitor exploring Altona, we
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
