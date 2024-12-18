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
            Take the Stress Out of Travel with ME CABS <span>&minus;</span> Your
            Reliable Epping Taxi Service
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            Need a reliable and comfortable <strong>taxi in Epping?</strong>
            Look no further than ME CABS! We are your one-stop shop for all your
            local and long-distance travel needs. Whether you're heading to the
            airport, a night out on the town, or simply across Epping, we offer
            a prompt, efficient, and stress-free taxi service you can count on.
          </p>
        </div>
      </section>
      {/* city landing area end */}

      {/* Trusted Taxi Partner start */}
      <section className="trustedTaxiPartner py-[100px]">
        <div className="container">
          <div className="sectionHeading text-center max-w-screen-md mx-auto space-y-6 mb-16">
            <h2 className="text-[2rem] text-zinc-900 font-bold">
              Experience the ME CABS Difference:
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
                    Convenience
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    We take the hassle out of finding a taxi. With ME CABS, you
                    can book your ride online, through our app, or simply by
                    giving us a call. Our friendly and helpful staff will take
                    care of everything, ensuring a smooth and seamless
                    experience.
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
                    24/7 Availability
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Life doesn't wait, and neither do we! ME CABS operates 24
                    hours a day, 7 days a week. Whether you need a late-night
                    pickup or an early morning ride, we're always here to get
                    you where you need to be on time.
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
                    Safety & Comfort
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    Your safety is our top priority. Our vehicles are
                    meticulously maintained and fully insured. Our professional
                    drivers are experienced, courteous, and committed to
                    providing a safe and comfortable journey.
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
                    Competitive Rates
                  </h4>
                  <p className="text-[1rem] text-zinc-700 font-normal">
                    We offer competitive fares without compromising on quality.
                    Get a transparent quote upfront with no hidden fees, so you
                    can relax knowing exactly how much your ride will cost.
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
              More Than Just Epping Taxi Cabs
            </h2>
            <p className="text-[1.1rem] text-zinc-700">
              <strong>ME CABS</strong> is your complete Epping transportation
              solution. We offer a variety of services to cater to your specific
              needs
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
              <div className="card text-start h-full rounded-lg bg-gray-50 p-5 space-y-6 flex justify-center ic flex-col">
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Airport Transfer
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Take the worry out of airport travel with our reliable and
                    efficient airport transfer service. We'll monitor your
                    flight arrival time and ensure a stress-free transition from
                    the airport to your destination in Epping.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Local Trips
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Need a ride across town? ME CABS is here for your local
                    trips, from shopping excursions to doctor's appointments and
                    everything in between.
                  </p>
                </div>
                <div className="articalText">
                  <h4 className="text-[1.3rem] text-blue-950 font-bold">
                    Special Events
                  </h4>
                  <p className="text-[1rem] text-zinc-800">
                    Make a grand entrance or ensure a safe return home from a
                    special event. ME CABS is your designated driver for
                    weddings, concerts, nights out, or any other occasion.
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
              Ride with Confidence with ME CABS
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500 mb-6">
              We understand that choosing a taxi service is a matter of trust.
              We are committed to exceeding your expectations with our
              dedication to
            </p>

            <p className="block max-w-2xl mt-4 text-gray-500 mb-4">
              <strong className="text-black">Punctuality:</strong> We value your time and will arrive
              promptly for your scheduled pick-up.
            </p>
            <p className="block max-w-2xl mt-4 text-gray-500 mb-4">
              <strong className="text-black">Reliability:</strong> You can count on us to get you to
              your destination safely and efficiently.
            </p>
            <p className="block max-w-2xl mt-4 text-gray-500 mb-4">
              <strong className="text-black">Professionalism:</strong> Our drivers are courteous,
              helpful, and committed to providing a positive experience.
            </p>

            <p className="block max-w-2xl mt-4 text-gray-500">
              Let ME CABS be your go-to Epping taxi service. Choose comfort,
              convenience, and peace of mind with your next ride.
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