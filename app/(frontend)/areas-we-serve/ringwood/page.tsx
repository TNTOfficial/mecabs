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
            Reliable Taxi in Ringwood: Your Go<span>&minus;</span>To
            Transportation Service
          </h1>
          <p className="text-justify text-[1.1rem] [text-align-last:center]">
            When you need dependable and efficient transportation in Ringwood,
            look no further than <strong>Me Cabs</strong>. Our
            <strong>Ringwood taxi service</strong> is designed to offer comfort,
            safety, and convenience, whether you<span>&apos;</span>re heading
            across town or catching a flight. With years of experience, we
            understand the importance of punctuality and professionalism, making
            Me Cabs your preferred choice for getting around Ringwood.
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
                    Comprehensive Cab Services in Ringwood
                  </h2>
                  <p className="text-[1rem] text-zinc-800">
                    At Me Cabs, we provide a broad range of
                    <strong>cab services in Ringwood</strong> to cater to your
                    travel needs. Our drivers are skilled, courteous, and
                    well-acquainted with Ringwood and surrounding areas,
                    ensuring you get to your destination without delay. From
                    short trips around town to longer journeys, our cabs are
                    well-maintained and equipped with modern amenities, ensuring
                    a pleasant ride every time.
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
                    Hassle-Free Airport Transfers in Ringwood
                  </h2>
                  <p className="text-[1rem] text-zinc-800">
                    For those in need of{" "}
                    <strong>reliable airport transfers in Ringwood,</strong>
                    Me Cabs offers timely and comfortable airport taxi services.
                    We know how stressful airport travel can be, and our service
                    is designed to minimize that stress by providing on-time
                    pickups and drop-offs. Our airport taxi Ringwood service is
                    perfect for both business and leisure travelers who need a
                    dependable ride to Melbourne Airport. Let us handle your
                    airport commute so you can focus on what matters most.
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
                    Why Choose Me Cabs for Your Taxi Service in Ringwood?
                  </h3>
                  <p className="text-[1rem] text-zinc-800 mb-5">
                    Choosing <strong>Me Cabs</strong> means choosing a taxi
                    service in Ringwood that prioritizes your safety and
                    satisfaction. Our fleet consists of clean, well-maintained
                    vehicles, and our drivers are fully licensed and trained to
                    meet the highest standards of service. Whether you
                    <span>&apos;</span>re booking a Ringwood taxi for a quick
                    trip or arranging a last-minute airport transfer, we have
                    the resources and commitment to ensure you enjoy a seamless
                    experience.
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
              Affordable Rates and Easy Booking
            </h3>

            <p className="block max-w-2xl mt-4 text-gray-500">
              Me Cabs believes in providing quality service at competitive
              rates, making us an affordable option for those seeking a{" "}
              <strong> cab in Ringwood</strong>. Our user-friendly booking
              system makes it easy to reserve a taxi at your convenience. Book
              online or call us to secure your ride, and enjoy a hassle-free
              experience from start to finish.
            </p>
            <p className="block max-w-2xl mt-4 text-gray-500">
              Choose <strong>Me Cabs</strong> for all your transportation needs in Ringwood, and
              experience the difference of a reliable, customer-focused Ringwood
              taxi service. Whether it’s an airport taxi in Ringwood or a local
              trip, we’re here to make your journey smooth and enjoyable.
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
