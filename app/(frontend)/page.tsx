"use client";

import React from "react";

import Image from "next/image";
import { BsLuggageFill } from "react-icons/bs";

import car1 from "@/public/car1.webp";
import car2 from "@/public/car2.webp";
import car3 from "@/public/car3.webp";
import car4 from "@/public/car4.webp";
import car5 from "@/public/car5.webp";
import car6 from "@/public/car6.webp";
import car7 from "@/public/car7.webp";
import s1 from "@/public/01.webp";
import s2 from "@/public/02.webp";
import s3 from "@/public/03.webp";
import s4 from "@/public/04.webp";
import s5 from "@/public/05.webp";
import user1 from "@/public/user1.webp";
import user2 from "@/public/user2.webp";
import user3 from "@/public/user3.webp";
import bg5 from "@/public/bg5.webp";
import bgshap from "@/public/bgshap.webp";

// import { useEffect } from "react";
// import AOS from "aos";

import "aos/dist/aos.css";
import { IoCarOutline, IoCheckmark } from "react-icons/io5";
import { PiUsersDuotone } from "react-icons/pi";
import LandingSlider from "./components/landingSlider";
import { AiOutlineSafety } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { NewsSection } from "@/features/frontend/home/components/news-section";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

export default function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     easing: "ease-out-quad",
  //     duration: 1000,
  //   });
  // }, []);

  const makeTrip = [
    {
      title: "Safety First",
      icon: AiOutlineSafety,
      para: "Your safety is our top priority. Our vehicles are regularly inspected and equipped with the latest safety features to ensure a secure ride every time.",
    },
    {
      title: "Prices With No Surprises",
      icon: RiMoneyDollarCircleLine,
      para: "At our cab service, we believe in clear, upfront pricing with no hidden fees. Every ride comes with a transparent fare, so you will always know what to expect. .",
    },
    {
      title: "Private Travel Solutions",
      icon: IoCarOutline,
      para: "Our private travel solutions offer a personalized, comfortable way to get where you need to go.",
    },
  ];

  const carPost = [
    {
      title: "Lexus RX 350h",
      carImage: car1,
      passenger: 4,
      luggage: 3,
    },
    {
      title: "Highlander L SUV I4",
      carImage: car2,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "2025 Toyota Camry",
      carImage: car3,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "Volkswagen Arteon SEL",
      carImage: car4,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "Tesla Model Y | RACQ",
      carImage: car5,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "Mercedes Benz Limousine",
      carImage: car6,
      passenger: 4,
      luggage: 3,
    },

    {
      title: "Lexus ES ",
      carImage: car7,
      passenger: 4,
      luggage: 3,
    },
  ];

  const servicePost = [
    {
      title: "Taxi Service",
      para: "You can book a taxi cab 24/7 and schedule your ride at any time of day or night. We also provide wheelchair accessible taxis and maxi taxis, ensuring that all our customers' transportation needs are met.",
      serviceImage: s1,
    },
    {
      title: "Airport Transfers",
      para: "Ease your airport travel worries by reserving a trustworthy taxi with Melbourne Express Cabs. Whether you're landing or taking off, count on us to get you to your destination promptly and stress-free.",
      serviceImage: s2,
    },

    {
      title: "Airport Inside Pickup",
      para: "We understand that jetting into town can be stressful, especially for frequent travelers. When booking your airport service, simply let us know you'd like to upgrade from curbside pick-up to inside pick-up.",
      serviceImage: s3,
    },

    {
      title: "Flight Tracking",
      para: "Let us know your flight number the moment you book an airport pick-up service. We will be able to monitor your arrival time and provide a complimentary 60minute wait time, in case you experience a delay. ",
      serviceImage: s4,
    },

    {
      title: "Corporate Travelling",
      para: "Create a memorable impact with our corporate travel offerings. We deliver exceptional transportation solutions to your business needs, including meetings, conferences, and executive transfers.",
      serviceImage: s5,
    },
  ];

  const faqs = [
    {
      title: "What is ME CABS?",
      para: "ME CABS is a professional taxi service operating in Melbourne, Victoria, providing reliable transportation for airport transfers, parcel delivery, and hotel transfers.",
    },
    {
      title: "Where does ME CABS operate?",
      para: "ME CABS primarily operates in Melbourne, Victoria, and surrounding areas.",
    },

    {
      title: "How can I book a ME CABS ride?",
      para: "You can book a ride through our website, by calling us, or via partner hotels where our service is available.",
    },
    {
      title: "Can I book a ME CABS ride in advance?",
      para: "Yes, we accept advance bookings to ensure a hassle-free experience.",
    },
    {
      title: "What payment methods does ME CABS accept?",
      para: "We accept cash, Mastercard, Visa, AMEX, Cabcharge, and online payments.",
    },
    {
      title: "Is there a cancellation fee for bookings?",
      para: "No, ME CABS does not charge any cancellation fees. You can cancel your booking without any additional costs.",
    },
    {
      title: "Do you provide quotes before booking?",
      para: "Yes, we provide clear and upfront quotes, ensuring transparency in pricing.",
    },
    {
      title: "Do you offer airport pickup and drop-off services?",
      para: "Yes, we specialize in Melbourne airport transfers with timely pickups and smooth rides.",
    },
    {
      title: "What happens if my flight is delayed?",
      para: "Our drivers monitor flight timings and adjust the pickup schedule accordingly without extra charges.",
    },
    {
      title: "Does ME CABS offer parcel delivery services?",
      para: "Yes, ME CABS provides safe and reliable parcel delivery within Melbourne.",
    },
    {
      title: "How do I track my parcel?",
      para: "You will receive updates via SMS/email once your parcel is dispatched.",
    },
    {
      title: "What kind of parcels do you deliver?",
      para: "We deliver small to medium-sized parcels. For larger items, please contact us directly.",
    },
    {
      title: "Do you work with hotels for guest transportation?",
      para: "Yes, we partner with hotels to provide convenient guest transportation.",
    },
    {
      title: "Can hotel guests request additional services like guided tours?",
      para: "Yes, we offer personalized services such as city tours upon request.",
    },
    {
      title: "Are your drivers professional and licensed?",
      para: "Yes, all our drivers are fully licensed, experienced, and trained to provide excellent service.",
    },
    {
      title: "Does ME CABS provide wheelchair-accessible taxis?",
      para: "We strive to accommodate all needs; please inform us in advance to ensure we can provide suitable arrangements.",
    },
    {
      title: "What safety measures does ME CABS follow?",
      para: "All vehicles are regularly sanitized, and drivers adhere to safety protocols.",
    },
    {
      title: "How do I contact ME CABS for assistance?",
      para: "You can reach us via phone, email, or the contact form on our website.",
    },
    {
      title: "What if I left something in the cab?",
      para: "Contact us immediately, and we will assist you in retrieving your lost item.",
    },
    {
      title: "Do you offer discounts for repeat customers?",
      para: "Yes, we value our loyal customers and offer discounts for frequent riders.",
    },
    {
      title: "Does ME CABS offer corporate transportation services?",
      para: "Yes, ME CABS provides tailored transportation solutions for corporate clients, including employee commutes, executive travel, and event transportation.",
    },
    {
      title: "Can businesses set up a corporate account with ME CABS?",
      para: "Absolutely! ME CABS offers corporate accounts with flexible billing options, priority service, and exclusive benefits for regular bookings.",
    },
    {
      title: "Do you provide transportation for corporate events or conferences",
      para: "Yes, ME CABS specializes in managing transportation for corporate events, ensuring seamless coordination and punctual service.",
    },
    {
      title: "Can ME CABS handle last-minute bookings for corporate clients?",
      para: "Yes, ME CABS prioritizes corporate clients and can handle last-minute bookings based on availability."
    },
    {
      title: "How does ME CABS ensure a professional experience for corporate clients?",
      para: "Our professional drivers, premium vehicles, and punctual service are designed to meet the high standards of corporate clients."
    },
    {
      title: "Can ME CABS provide flexible billing for corporate accounts?",
      para: "Yes, ME CABS offers flexible billing options, including weekly or fortnightly invoices, to make payment and expense management simple and efficient for businesses."
    },
  ];

  return (
    <>
      <section id="top" className="landing_area relative z-0">
        <LandingSlider />

        <div className="max-lg:hidden max-w-screen-xl w-full px-3 mx-auto absolute 2xl:bottom-[4  0px] bottom-[40px] left-[50%] translate-x-[-50%] z-10">
          <div className="continueForm bg-white rounded-[50px] w-full px-16 py-3  shadow-lg border-t flex md:justify-between justify-center items-center flex-wrap gap-4">
            <h3 className="text-[1.6rem] font-bold">Start Your Journey</h3>
            <Link
              href="/booking"
              className="text-white bg-black py-4 px-16 hover:scale-95 transition-all duration-300 hover:shadow-sm shadow-none hover:shadow-blue-700 inline-block text-nowrap border-none rounded-[50px]"
            >
              Book Now
            </Link>
            <Link
              href="/manage-bookings"
              className="text-white bg-black py-4 px-16 hover:scale-95 transition-all duration-300 hover:shadow-sm shadow-none hover:shadow-blue-700 inline-block text-nowrap border-none rounded-[50px]"
            >
              Manage Bookings
            </Link>

            <Link
              href="tel: +61 1300012018"
              className="no-underline text-black flex justify-center items-center gap-2"
            >
              <FiPhoneCall className="text-black text-[1rem]" />
              <span className="font-extrabold text-black text-[.9rem]">
                +61 1300012018
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Make your trip Start */}
      <section className="makeTrip pt-[100px]">
        <div className="container">
          <div className="sectionHeading text-center">
            <h2 className="capitalize text-zinc-800 text-[2.3rem] font-bold">
              Make your trip your way with us
            </h2>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-10 pt-10">
            {makeTrip.map((trip) => {
              return (
                <div
                  className="xl:w-[calc(100%_/_4_-_40px)] md:w-[calc(100%_/_2_-_40px)] w-[calc(100%_/_1_-_40px)]"
                  key={trip.title}
                >
                  <div className="card text-center cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                    <div className="card_icon  mx-auto bg-zinc-100 h-16 w-16 mb-6 rounded-full flex justify-center items-end">
                      <trip.icon className="text-zinc-600 text-[2.5rem]" />
                    </div>

                    <h3 className="text-[1.3rem] text-zinc-800 font-semibold mb-4">
                      {trip.title}
                    </h3>
                    <p className="text-[1rem] text-zinc-800 font-medium">
                      {trip.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-20">
            <div className="bg-blue-700 pb-10 px-5 rounded-md">
              <div
                className="max-w-screen-lg mx-auto bg-no-repeat bg-center bg-cover pt-20 pb-10 flex flex-wrap justify-center items-center gap-5"
                style={{ backgroundImage: ` url(${bgshap.src})` }}
              >
                <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
                  <h2 className="text-[3rem] text-white font-bold">
                    Showcase some impressive numbers.
                  </h2>
                </div>
                <div className="lg:w-[calc(100%_/_2_-_20px)] w-[calc(100%_-_20px)]">
                  <div className="flex justify-around items-center">
                    <div className="count text-center  cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                      <h3 className="text-[3rem] text-white font-semibold">
                        285 +
                      </h3>
                      <h5 className="text-[1.3rem] text-white font-medium">
                        Vehicles
                      </h5>
                    </div>
                    {/* <div className="count text-center  cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                      <h3 className="text-[3rem] text-white font-semibold">
                        97
                      </h3>
                      <h5 className="text-[1.3rem] text-white font-medium">
                        Awards
                      </h5>
                    </div> */}
                    <div className="count text-center  cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                      <h3 className="text-[3rem] text-white font-semibold">
                        13 k
                      </h3>
                      <h5 className="text-[1.3rem] text-white font-medium">
                        Happy Customer
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Make your trip end */}

      {/* Our fleet Start */}
      <section className="ourFleet py-[100px] relative overflow-hidden z-0">
        <div className="circle absolute bottom-[-40%] left-[-10%] border-[1px] border-blue-700 h-full z-[-1] w-[40%] rounded-[50%] scale-125"></div>

        <div className="container xl:max-w-screen-2xl xl:ms-auto xl:me-0">
          <div className="section_title">
            <h3 className="text-[2.8rem] mb-5 text-zinc-800 font-semibold">
              Our Fleet
            </h3>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            modules={[Pagination, Mousewheel]}
            breakpoints={{
              639: {
                slidesPerView: 2,
              },
              1023: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {carPost.map((car) => {
              return (
                <SwiperSlide key={car.title} className="pb-16 cursor-grab">
                  <div className="card border border-zinc-400 rounded-lg py-8 px-4 bg-white hover:bg-zinc-50">
                    <div className="card_titles">
                      <h4 className="text-[1.2rem] font-semibold text-zinc-800 mb-3">
                        {car.title}
                      </h4>
                    </div>

                    <div className="card_img w-full h-[200px]">
                      <Image
                        src={car.carImage}
                        className="w-full h-full object-contain "
                        alt="Car Image"
                      />
                    </div>
                    <div className="icons flex justify-between items-center">
                      <div className="persons flex justify-center items-center gap-2 w-[50%]">
                        <div className="icon h-12 w-12 rounded-full bg-zinc-100 flex justify-center items-center">
                          <PiUsersDuotone className="text-zinc-900 text-[1.2rem]" />
                        </div>
                        <span className="text-zinc-800 font-normal text-[1rem]">
                          Passengers <span>{car.passenger}</span>
                        </span>
                      </div>
                      <div className="luggages flex justify-center items-center gap-2 w-[50%]">
                        <div className="icon h-12 w-12 rounded-full bg-zinc-100 flex justify-center items-center">
                          <BsLuggageFill className="text-zinc-900 text-[1.2rem]" />
                        </div>
                        <span className="text-zinc-800 font-normal text-[1rem]">
                          Luggage <span>{car.luggage}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* Our fleet End */}

      {/* How It Works Start */}
      <section className="how py-[100px] bg-black">
        <div className="container">
          <div className="section_title">
            <h3 className="text-[2.8rem] text-white font-bold mb-5">
              How It Works
            </h3>

            <div className="flex flex-wrap gap-5 justify-center items-stretch">
              <div className="2xl:w-[calc(30%_-_20px)] lg:w-[calc(40%_-_20px)] w-[calc(100%_-_20px)]">
                <div className="text-start mb-8">
                  <h4 className="text-white text-[1.5rem] font-medium mb-3">
                    Create Your Route
                  </h4>
                  <p className="text-white text-[1rem] font-normal">
                    Enter your pickup & dropoff locations or the number of hours
                    you wish to book a car and driver for
                  </p>
                </div>

                <div className="text-start mb-8">
                  <h4 className="text-white text-[1.5rem] font-medium mb-3">
                    Choose Vehicle For You
                  </h4>
                  <p className="text-white text-[1rem] font-normal">
                    Choose Vehicle For You! Easily book your perfect ride with
                    just a few clicks. Select your preferred vehicle type
                  </p>
                </div>

                <div className="text-start mb-8">
                  <h4 className="text-white text-[1.5rem] font-medium mb-3">
                    Enjoy The Journey
                  </h4>
                  <p className="text-white text-[1rem] font-normal">
                    let us handle the rest for a smooth and comfortable journey.
                  </p>
                </div>
              </div>
              <div
                style={{ backgroundImage: ` url(${bg5.src})` }}
                className="2xl:w-[calc(70%_-_20px)] lg:w-[calc(60%_-_20px)] w-[calc(100%_-_20px)] py-[100px] px-4 flex justify-center items-center  bg-no-repeat bg-center bg-fixed bg-cover relative z-0 after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[-1]"
              >
                <div className="icons w-full flex justify-between relative z-0 before:z-[-1] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:bg-white before:w-full before:h-1">
                  <div className="circle_short h-8 w-8 rounded-full bg-gray-400 flex justify-center items-center">
                    <div className="small h-4 w-4 rounded-full bg-white"></div>
                  </div>
                  <div className="circle_short h-8 w-8 rounded-full bg-gray-400 flex justify-center items-center">
                    <div className="small h-4 w-4 rounded-full bg-white"></div>
                  </div>
                  <div className="circle_short h-8 w-8 rounded-full bg-gray-400 flex justify-center items-center">
                    <div className="small h-4 w-4 rounded-full bg-white"></div>
                  </div>
                  <div className="button">
                    <a
                      href="#top"
                      className="no-underline text-[1rem] text-black bg-white rounded-3xl py-3 px-5"
                    >
                      Continue Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works End */}

      {/* Our Service Start */}
      <section className="ourService py-[100px] relative overflow-hidden z-0">
        <div className="circle absolute bottom-[-40%] right-[-10%] border-[1px] border-blue-700 h-full z-[-1] w-[40%] rounded-[50%] scale-125"></div>

        <div className="xl:max-w-screen-2xl me-auto px-4">
          <div className="section_title">
            <h3 className="text-[2.8rem] text-end mb-5 text-zinc-800 font-semibold">
              Our Services
            </h3>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            loop={true}
            modules={[Pagination, Mousewheel]}
            className="mySwiper pb-12"
            breakpoints={{
              639: {
                slidesPerView: 2,
              },
              1023: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
          >
            {servicePost.map((service, idx) => {
              return (
                <SwiperSlide key={idx} className="pb-16">
                  <div className="relative z-0 overflow-hidden rounded-2xl [&_.cardBody]:hover:bottom-0 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-blue-700 before:to-[#0000ff11] before:hover:top-0 before:hover:opacity-100 before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-25 after:z-[8]">
                    <div className="card_img w-full h-[400px] rounded-2xl overflow-hidden">
                      <Image
                        src={service.serviceImage}
                        className="w-full h-full object-cover "
                        alt="Car Image"
                      />
                    </div>
                    <div className="cardBody bg-transparent p-5 flex flex-col justify-end items-start absolute z-30 bottom-[-30%] left-0 w-full transition-all duration-300">
                      <h3 className="text-white mb-5 text-[1.7rem]">
                        {service.title}
                      </h3>
                      <p className="text-white mb-4">{service.para}</p>

                      <a href="#" className=" text-white">
                        <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* Our Service End */}

      {/* News Start */}
      <NewsSection />
      {/* News end */}

      {/* Testimonials Start */}
      <section className="testimonials pt-[100px]">
        <div className="my-6 max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-800">
              What our happy client say
            </h2>
            <p className="text-sm mt-4 leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              praesentium consectetur vero maxime, quod nemo eum debitis Odit
              deserunt vero placeat voluptatum assumenda!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-md:gap-12 max-md:justify-center text-center max-md:max-w-lg mx-auto mt-16">
            <div className="rounded-md">
              <div className="flex flex-col items-center">
                <Image
                  src={user3}
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white object-cover"
                  alt="Testimonial user1"
                />
                <div className="mt-4">
                  <h4 className="text-sm font-extrabold text-gray-800">
                    John Doe
                  </h4>
                  <p className="text-xs text-blue-600 font-bold mt-1">
                    CEO, Company
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm leading-relaxed text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  praesentium consectetur vero maxime, quod nemo eum debitis
                  Odit deserunt vero placeat voluptatum assumenda!
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-gray-600" />
              </div>
            </div>

            <div className="rounded-md">
              <div className="flex flex-col items-center">
                <Image
                  src={user1}
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white object-cover"
                  alt="Testimonial user1"
                />
                <div className="mt-4">
                  <h4 className="text-sm font-extrabold text-gray-800">
                    Mark Adair
                  </h4>
                  <p className="text-xs text-blue-600 font-bold mt-1">
                    CEO, Company
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm leading-relaxed text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  praesentium consectetur vero maxime, quod nemo eum debitis
                  Odit deserunt vero placeat voluptatum assumenda!
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
              </div>
            </div>

            <div className="rounded-md">
              <div className="flex flex-col items-center">
                <Image
                  src={user2}
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white object-cover"
                  alt="Testimonial user1"
                />
                <div className="mt-4">
                  <h4 className="text-sm font-extrabold text-gray-800">
                    Simon Konecki
                  </h4>
                  <p className="text-xs text-blue-600 font-bold mt-1">
                    CEO, Company
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm leading-relaxed text-gray-800">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  praesentium consectetur vero maxime, quod nemo eum debitis
                  Odit deserunt vero placeat voluptatum assumenda!
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-blue-600" />
                <Star className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials End */}
      {/* FAQ Start */}
      <section className="faq py-[100px]">
        <div className="container">
          <div className="max-w-screen-md mx-auto">
            <div className="bg-white px-6">
              <h2 className="text-3xl font-extrabold text-black text-center mb-10">
                Frequently Asked Questions
              </h2>
              {faqs.map((faq, index) => {
                return (
                  <Accordion key={index} type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold text-[#333] no-underline">
                        <div className="inline-flex gap-3 justify-start items-center">
                          <IoCheckmark className="text-blue-700 text-[1.3rem]" />
                          <span>{faq.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="ps-7 text-[1rem] text-gray-700">
                       {faq.para}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ End */}
    </>
  );
}
