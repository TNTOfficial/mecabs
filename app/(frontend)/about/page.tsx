import React from "react";
import banner1 from "@/public/banner1.jpg";
import bg4 from "@/public/bg4.png";
import { CiCalendar } from "react-icons/ci";
import {
  IoCarOutline,
  IoCheckmark,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";
import { AiOutlineSafety, AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsLuggageFill } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";
import bgshap from "@/public/bgshap.png";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default async function About() {

  const makeTrip = [
    {
      title: "Safety First",
      icon: AiOutlineSafety,
      para: "Both you and your shipments will travel with professionaldrivers. Always with the highest quality standards.",
    },
    {
      title: "Prices With No Surprises",
      icon: RiMoneyDollarCircleLine,
      para: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
    },
    {
      title: "Private Travel Solutions",
      icon: IoCarOutline,
      para: "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
    },
  ];
  return (
    <>
      {/* About Page Landing section Start */}
      <section
        style={{ backgroundImage: ` url(${banner1.src})` }}
        className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
      >
        <div className="container mx-auto px-5">
          <div className="flex min-h-[40vh] justify-start items-center ">
            <div className="w-full px-3">
              <div className="text">
                <h1 className="text-[3rem] font-normal mb-5 dark:text-white text-white">
                  About Us
                </h1>
                <h5 className="text-[1.3rem] font-normal dark:text-white text-white">
                  HOME - ABOUT US
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Page Landing section End */}

      {/* About Us section Start */}
      <section className="py-[100px] bg-white dark:bg-gray-400">
        <div className="container max-w-screen-xl">
          <div className="flex flex-wrap justify-center gap-5 items-stretch">
            <div className="">
              <div className="text">
                <h4 className="text-black mb-5 dark:text-white text-[3rem] font-bold ">
                  We reimagine the way the world moves for the better
                </h4>

                <p className="text-[1rem] text-gray-600 dark:text-white font-normal">
                  We offer luxury chauffeur driven airport transfers and pickups
                  to London. Exceptional Safe, Meet and Greet. One hour of
                  complimentary wait time and flight tracking. Professional
                  Drivers & Vehicles. Fixed prices on airport transfers. VIP
                  service, get your quote today!
                </p>

                <p className="text-[1rem] text-gray-600 dark:text-white font-normal">
                  Et, morbi at sagittis vehicula rutrum. Lacus tortor, quam arcu
                  mi et, at lectus leo nunc. Mattis cras auctor vel pharetra
                  tempor. Rhoncus pellentesque habitant ac tempor. At aliquam
                  euismod est in praesent ornare etiam id. Faucibus libero sit
                  vehicula sed condimentum. Vitae in nam porttitor rutrum sed
                  aliquam donec sed. Sapien facilisi lectus.
                </p>
                <ul className="list-none mt-5">
                  <li className="flex justify-start mb-3 items-center gap-3">
                    <IoCheckmarkCircleSharp className="text-gray-300 dark:text-white text-[1.3rem]" />
                    <span className="tetx-gray-600 dark:text-white text-[1.1rem] font-light">
                      100% Luxurious Fleet
                    </span>
                  </li>
                  <li className="flex justify-start mb-3 items-center gap-3">
                    <IoCheckmarkCircleSharp className="text-gray-300 dark:text-white text-[1.3rem]" />
                    <span className="tetx-gray-600 dark:text-white text-[1.1rem] font-light">
                      All Our Fleet Are Fully Valeted & Serviced
                    </span>
                  </li>
                  <li className="flex justify-start mb-3 items-center gap-3">
                    <IoCheckmarkCircleSharp className="text-gray-300 dark:text-white text-[1.3rem]" />
                    <span className="tetx-gray-600 dark:text-white text-[1.1rem] font-light">
                      A Safe & Secure Journey
                    </span>
                  </li>
                  <li className="flex justify-start mb-3 items-center gap-3">
                    <IoCheckmarkCircleSharp className="text-gray-300 dark:text-white text-[1.3rem]" />
                    <span className="tetx-gray-600 dark:text-white text-[1.1rem] font-light">
                      Comfortable And Enjoyable
                    </span>
                  </li>
                  <li className="flex justify-start mb-3 items-center gap-3">
                    <IoCheckmarkCircleSharp className="text-gray-300 dark:text-white text-[1.3rem]" />
                    <span className="tetx-gray-600 dark:text-white text-[1.1rem] font-light">
                      Clean, Polite & Knowledgeable
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="counter flex flex-wrap justify-center items-center  gap-5 mt-10">
            <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card_circle h-[190px] w-[190px] rounded-full border border-gray-300 drak:border-blue-500 mx-auto flex justify-center items-center relative">
                <div className="absolute top-2 right-1 h-12 w-12 flex justify-center items-center bg-gray-100 dark:bg-white rounded-full">
                  <IoCheckmark className="text-gray-500 text-[1.5rem]" />
                </div>
                <div className="num  flex justify-center items-center flex-col h-full w-[96%] border border-gray-300 dark:border-blue-500 rounded-full">
                  <span className="text-[2.5rem] text-blue-500 dark:text-white font-extralight">
                    120
                  </span>
                  <span className="text-[1rem] text-gray-400 dark:text-white">
                    Vehicles
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card_circle h-[190px] w-[190px] rounded-full border border-gray-300 drak:border-blue-500 mx-auto flex justify-center items-center relative">
                <div className="absolute top-2 right-1 h-12 w-12 flex justify-center items-center bg-gray-100 dark:bg-white rounded-full">
                  <IoCheckmark className="text-gray-500 text-[1.5rem]" />
                </div>
                <div className="num  flex justify-center items-center flex-col h-full w-[96%] border border-gray-300 dark:border-blue-500 rounded-full">
                  <span className="text-[2.5rem] text-blue-500 dark:text-white font-extralight">
                    25
                  </span>
                  <span className="text-[1rem] text-gray-400 dark:text-white">
                    Countries Visited
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card_circle h-[190px] w-[190px] rounded-full border border-gray-300 drak:border-blue-500 mx-auto flex justify-center items-center relative">
                <div className="absolute top-2 right-1 h-12 w-12 flex justify-center items-center bg-gray-100 dark:bg-white rounded-full">
                  <IoCheckmark className="text-gray-500 text-[1.5rem]" />
                </div>
                <div className="num  flex justify-center items-center flex-col h-full w-[96%] border border-gray-300 dark:border-blue-500 rounded-full">
                  <span className="text-[2.5rem] text-blue-500 dark:text-white font-extralight">
                    25
                  </span>
                  <span className="text-[1rem] text-gray-400 dark:text-white">
                    Miles Traveled
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
              <div className="card_circle h-[190px] w-[190px] rounded-full border border-gray-300 drak:border-blue-500 mx-auto flex justify-center items-center relative">
                <div className="absolute top-2 right-1 h-12 w-12 flex justify-center items-center bg-gray-100 dark:bg-white rounded-full">
                  <IoCheckmark className="text-gray-500 text-[1.5rem]" />
                </div>
                <div className="num  flex justify-center items-center flex-col h-full w-[96%] border border-gray-300 dark:border-blue-500 rounded-full">
                  <span className="text-[2.5rem] text-blue-500 dark:text-white font-extralight">
                    7
                  </span>
                  <span className="text-[1rem] text-gray-400 dark:text-white">
                    Awards Won
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us section End */}
      {/* Make your trip Start */}
      <section className="makeTrip pb-[100px]">
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
                    <div className="count text-center  cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-in-out">
                      <h3 className="text-[3rem] text-white font-semibold">
                        97
                      </h3>
                      <h5 className="text-[1.3rem] text-white font-medium">
                        Awards
                      </h5>
                    </div>
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

      {/* About Us Second section Start */}
      <section className="bg-zinc-50 py-[100px]">
        <div className="flex flex-wrap justify-center lg:justify-between gap-5 items-center">
          <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] px-20">
            <div
              style={{ backgroundImage: ` url(${bg4.src})` }}
              className="image bg-no-repeat bg-center bg-cover h-[400px] w-full  relative z-0 after:bg-black overflow-hidden rounded-2xl after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-25 after:z-[2]"
            ></div>
          </div>
          <div className="w-[calc(100%_-_20px)] lg:w-[calc(100%_/_2_-_20px)] ">
            <div className="text">
              <h4 className="text-black m2-5 text-[1.5rem] font-medium">
                For over a dozen years we have been providing the best transport
                services. We offer bus, passenger transport and limousine
                rental.
              </h4>

              <p className="text-[1.1rem] text-gray-600 font-normal mt-4">
                We address our offer to all who want to travel in comfortable
                conditions. We have over 120 top-class vehicles, so our
                customers can be assured of comfort and safety.
              </p>
              <ul className="list-none mt-5">
                <li className="flex justify-start mb-3 items-center gap-3">
                  <IoCheckmarkCircleSharp className="text-blue-500 text-[1.3rem]" />
                  <span className="text-gray-500 text-[1.2rem] font-light">
                    Professionally Trained Chauffeurs
                  </span>
                </li>
                <li className="flex justify-start mb-3 items-center gap-3">
                  <IoCheckmarkCircleSharp className="text-blue-500 dark:text-white text-[1.3rem]" />
                  <span className="text-gray-500 text-[1.2rem] font-light">
                    24/7 Full-Service Transportation
                  </span>
                </li>
                <li className="flex justify-start mb-3 items-center gap-3">
                  <IoCheckmarkCircleSharp className="text-blue-500 dark:text-white text-[1.3rem]" />
                  <span className="text-gray-500 text-[1.2rem] font-light">
                    Global network of Transportation Partners
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Second section End */}

      {/* Services steps section Start */}
      <section className="bg-white py-[100px] ">
        <div className="container flex flex-wrap items-stretch justify-center md:justify-between gap-5">
          <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
            <div className="card bg-white shadow border-t rounded-3xl px-16 py-16 relative h-full">
              <div className="absolute top-10 right-10 text-gray-400 text-[1.5rem]  flex justify-center items-center">
                01
              </div>
              <div className="flex justify-center gap-4 flex-col">
                <CiCalendar className="text-[4rem] text-black" />
                <span className="text-[1.3rem] font-light text-black"> 
                  Each of our drivers is characterized by professionalism and
                  punctuality
                </span>
              </div>
            </div>
          </div>
          <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
            <div className="card bg-white shadow border-t rounded-3xl px-16 py-16 relative h-full">
              <div className="absolute top-10 right-10 text-gray-400 text-[1.5rem]  flex justify-center items-center">
                02
              </div>
              <div className="flex justify-center gap-4 flex-col">
                <AiOutlineSafetyCertificate className="text-[4rem] text-black" />
                <span className="text-[1.3rem] font-light text-black">
                  We always go the extra mile when it comes to the safety
                </span>
              </div>
            </div>
          </div>
          <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
            <div className="card bg-white shadow border-t rounded-3xl px-16 py-16 relative h-full">
              <div className="absolute top-10 right-10 text-gray-400 text-[1.5rem]  flex justify-center items-center">
                03
              </div>
              <div className="flex justify-center gap-4 flex-col">
                <BsLuggageFill className="text-[4rem] text-black" />
                <span className="text-[1.3rem] font-light text-black">
                  You can rely on our knowledge and experience to guide you on
                  your tour
                </span>
              </div>
            </div>
          </div>
          <div className="xl:w-[calc(100%_/_4_-_20px)] md:w-[calc(100%_/_3_-_20px)] sm:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]">
            <div className="card bg-white shadow border-t rounded-3xl px-16 py-16 relative h-full">
              <div className="absolute top-10 right-10 text-gray-400 text-[1.5rem]  flex justify-center items-center">
                04
              </div>
              <div className="flex justify-center gap-4 flex-col">
                <MdWorkspacePremium className="text-[4rem] text-black" />
                <span className="text-[1.3rem] font-light text-black">
                  Premium quality and award winning customer service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
