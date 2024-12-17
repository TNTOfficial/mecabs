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
            Reliable Taxi Service in Bundoora <span>&minus;</span> Me Cabs
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            When you need a trusted and convenient{" "}
            <strong>taxi in Bundoora</strong>, ME CABS is here to deliver
            exceptional transportation services. Whether it<span>&apos;</span>s
            a quick trip around town, a longer journey, or a ride to the
            airport, our taxi cabs are designed to provide comfort, safety, and
            reliability. With professional drivers and a customer-first
            approach, we make your travel experience seamless and stress-free.
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
                    Professional Taxi Service in Bundoora
                  </h2>
                  <p className="text-[1rem] text-zinc-800 mb-5">
                    At <strong>ME CABS</strong>, we take pride in offering a
                    dependable <strong>taxi service in Bundoora</strong>{" "}
                    tailored to meet the diverse needs of our customers. Our
                    well-maintained fleet and experienced drivers ensure a
                    smooth journey, no matter your destination. Whether it’s for
                    work, errands, or leisure, our taxi cabs provide a reliable
                    way to get around. We know the local area well, so you can
                    count on us for efficient routes and timely arrivals.
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
                    Traveling to or from the airport? ME CABS offers convenient
                    and timely airport transfer services in Bundoora. We
                    understand how critical punctuality is when catching a
                    flight, and our drivers are trained to manage time
                    effectively, ensuring you arrive with plenty of time to
                    spare. From monitoring your flight schedule to selecting the
                    fastest routes, we make sure your airport transfer is
                    smooth, comfortable, and worry-free.
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
                    <strong>ME CABS</strong> stands out as a trusted provider of
                    taxi services in Bundoora due to our commitment to customer
                    satisfaction. Here<span>&apos;</span>s why customers choose
                    us:
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Professionalism: </strong> Our drivers are
                    experienced, courteous, and fully licensed.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Comfort: </strong>Each cab is modern, clean, and
                    equipped to provide a relaxing ride.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Punctuality: </strong>We value your time and ensure
                    on-time pickups and drop-offs.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    <strong>Affordability: </strong>Quality service doesn
                    <span>&apos;</span>t have to come at a high price.
                  </p>

                  <p className="text-[1rem] text-zinc-800 mb-5">
                    Whether it<span>&apos;</span>s a local trip or a reliable
                    airport transfer, <strong>ME CABS</strong> is dedicated to
                    meeting your needs with professionalism and care.
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
              Easy Booking and Affordable Rides
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500">
              Booking with ME CABS is quick and easy. Simply visit our website
              or give us a call to reserve your taxi. Our competitive rates and
              user-friendly system make it simple to enjoy premium
              transportation services without breaking the bank.
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
