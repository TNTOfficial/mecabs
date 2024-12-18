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
            Reliable Taxi Service in Glen Waverley <span>&minus;</span> Me Cabs
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            For anyone seeking a For those in need of a trusted
            <strong>taxi in Glen Waverley</strong>, ME CABS offers unparalleled
            transportation services tailored to your needs. Whether you
            <span>&apos;</span>re traveling locally, attending a meeting, or
            catching a flight, our taxi cabs ensure a smooth, comfortable, and
            stress-free experience.
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
                    Premier Taxi Service in Glen Waverley
                  </h2>
                  <p className="text-[1rem] text-zinc-800 mb-5">
                    At <strong>ME CABS</strong>, we<span>&apos;</span>re proud
                    to provide high-quality
                    <strong>taxi services in Glen Waverley</strong> for
                    residents and visitors alike. Our professional drivers are
                    familiar with the area and focus on delivering prompt,
                    reliable, and efficient rides. Each of our cabs is modern,
                    well-maintained, and equipped to make your journey as
                    pleasant as possible.
                  </p>
                  <p className="text-[1rem] text-zinc-800">
                    From quick trips to longer rides, our Glen Waverley taxi
                    cabs are perfect for daily commutes, leisure outings, and
                    everything in between.
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
                    Seamless Airport Transfers
                  </h2>
                  <p className="text-[1rem] text-zinc-800">
                    When it comes to <strong>airport transfers</strong>, ME CABS
                    is your dependable partner. We know how important it is to
                    reach the airport on time, and our service is designed to
                    eliminate the stress of travel. Our drivers plan the best
                    routes and monitor flight schedules to ensure timely pickups
                    and drop-offs. Whether it<span>&apos;</span>s Melbourne
                    Airport or another destination, our
                    <strong>airport transfer servic</strong>e offers comfort,
                    convenience, and reliability.
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
                    ME CABS has become a trusted name for Glen Waverley taxi
                    services due to our unwavering commitment to customer
                    satisfaction. Here<span>&apos;</span>s why so many choose
                    us:
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Experienced Drivers: </strong> Friendly,
                    professional, and knowledgeable about Glen Waverley and
                    surrounding areas.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Modern Fleet: </strong>Clean, spacious vehicles
                    equipped for a comfortable journey.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Punctuality: </strong>On-time pickups and drop-offs
                    to help you stick to your schedule.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Affordable Rates: </strong>On-time pickups and
                    drop-offs to help you stick to your schedule.
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
              Easy Booking and Exceptional Value
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500">
              Booking a <strong>taxi in Glen Waverley</strong> with ME CABS is
              quick and simple. Use our online platform or give us a call to
              reserve your ride in minutes. With competitive pricing and a focus
              on quality, we make it easy to enjoy premium transportation
              services without the premium price tag.
            </p>
            <p className="block max-w-2xl mt-4 text-gray-500">
              Trust <strong>ME CABS</strong> for all your transportation needs in Glen Waverley.
              From local rides to dependable airport transfers, we<span>&apos;</span>re here to
              deliver a superior experience every time.
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
