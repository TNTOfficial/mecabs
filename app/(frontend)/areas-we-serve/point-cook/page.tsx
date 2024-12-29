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
            Reliable Taxi Service in Point Cook <span>&minus;</span> Me Cabs
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            For anyone seeking a
            <strong>reliable taxi in Point Cook, Me Cabs</strong> offers a
            service that combines convenience, safety, and professionalism. Our
            dedicated cab service is designed to get you where you need to
            go—whether it’s a short trip within Point Cook, a business meeting,
            or an airport transfer. With years of experience in providing
            quality transportation, Me Cabs has built a reputation for prompt
            and dependable service that customers can count on.
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
                    Convenient and Comfortable Taxi Service in Point Cook
                  </h2>
                  <p className="text-[1rem] text-zinc-800">
                    At <strong>Me Cabs</strong>, we believe that every journey
                    should be smooth and enjoyable. Our
                    <strong>cab service in Point Cook</strong> is equipped with
                    comfortable, clean vehicles and experienced drivers familiar
                    with the area. Whether you<span>&apos;</span>re commuting to
                    work, running errands, or enjoying a night out, our taxis
                    are a hassle-free way to travel. With modern amenities and
                    friendly drivers, we aim to provide the best taxi service
                    experience in Point Cook.
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
                    Stress-Free Airport Transfers
                  </h2>
                  <p className="text-[1rem] text-zinc-800">
                    Need to catch a flight? Our
                    <strong>airport transfer service in Point Cook</strong> is
                    here to make your travel experience seamless. We offer
                    reliable pickups and drop-offs to Melbourne Airport,
                    ensuring that you reach the airport on time and stress-free.
                    Our drivers monitor traffic and flight schedules to minimize
                    any delays, making our airport transfer service ideal for
                    both business and leisure travelers. With Me Cabs, you can
                    rest assured that your airport transfer will be smooth,
                    comfortable, and timely.
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
                    Why Choose ME CABSin Point Cook?
                  </h3>
                  <p className="text-[1rem] text-zinc-800 mb-5">
                    Choosing <strong>Me Cabs</strong> means choosing a
                    <strong>taxi service in Point Cook</strong>
                    that is customer-focused and committed to excellence. We are
                    known for our attention to detail and commitment to
                    punctuality. Our drivers are trained, licensed, and
                    friendly, ensuring that every ride with us is a safe and
                    enjoyable experience. Whether you<span>&apos;</span>re
                    taking a quick cab ride or a longer trip, we prioritize your
                    comfort and convenience above all.
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
              Affordable and Easy-to-Book Service
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500">
              We believe quality service should also be affordable. Me Cabs
              offers competitive pricing, making us an accessible choice for all
              your <strong>taxi needs in Point Cook</strong>. Our easy-to-use
              booking system allows you to arrange your taxi online or over the
              phone, giving you flexibility and peace of mind.
            </p>
            <p className="block max-w-2xl mt-4 text-gray-500">
              Choose <strong>Me Cabs</strong> for your next taxi in Point Cook
              and experience a top-notch service that prioritizes your needs.
              From everyday transportation to reliable airport transfers, Me
              Cabs is here to make every journey enjoyable.
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
