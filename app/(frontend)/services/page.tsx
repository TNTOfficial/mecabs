import React from "react";
import banner3 from "@/public/banner3.webp";
import Image from "next/image";
import s1 from "@/public/01.webp";
import s2 from "@/public/02.webp";
import s3 from "@/public/03.webp";
import s4 from "@/public/04.webp";
import s5 from "@/public/05.webp";
import s6 from "@/public/06.webp";
import s7 from "@/public/07.webp";
import s8 from "@/public/08.webp";
import s9 from "@/public/signcard2.webp";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

export default function ServicesPage() {
  const service1Post = [
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
      title: "Corporate Travelling",
      para: "Create a memorable impact with our corporate travel offerings. We deliver exceptional transportation solutions to your business needs, including meetings, conferences, and executive transfers.",
      serviceImage: s3,
    },
  ];

  const service2Post = [
    {
      title: "Melbourne Airport Transfers",
      para: "Our clients frequently opt for our car service for transportation to and from Melbourne Airport, spanning various areas including Phillip Island, Geelong, Great Ocean Road, Yarra Valley, and Lakes Entrance. ",
      serviceImage: s3,
    },
    {
      title: "Airport Inside Pickup",
      para: "We understand that jetting into town can be stressful, especially for frequent travelers. When booking your airport service, simply let us know you'd like to upgrade from curbside pick-up to inside pick-up. ",
      serviceImage: s4,
    },

    {
      title: "Flight Tracking",
      para: "Let us know your flight number the moment you book an airport pick-up service. We will be able to monitor your arrival time and provide a complimentary 60minute wait time, in case you experience a delay. .",
      serviceImage: s5,
    },
  ];

  return (
    <>
      {/* Services Page Landing section Start */}
      <section
        style={{ backgroundImage: ` url(${banner3.src})` }}
        className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-950 before:bg-opacity-50 before:z-[-1] before:absolute before:top-0 before:start-0"
      >
        <div className="container mx-auto px-5">
          <div className="flex min-h-[40vh] justify-start items-center ">
            <div className="w-full px-3">
              <div className="text">
                <h2 className="text-[3rem] font-normal mb-5 text-white">
                  Services
                </h2>
                <h5 className="text-[1.3rem] font-normal text-white">
                  HOME - Services
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page Landing section End */}

      {/* Service details Section Start */}
      <section className="bg-white dark:bg-gray-600 py-[80px]">
        <div className="container">
          <div className="sectionHeading">
            <h1 className="text-black mb-5 text-[3rem] font-bold ">
              Premium Corporate Taxi Services in Melbourne <span>&minus;</span> Me Cabs
            </h1>

            <p className="text-[1rem] text-gray-600 font-normal">
              Welcome to <strong className="text-black">ME CABS</strong>, your
              ultimate choice for reliable and efficient{" "}
              <strong className="text-black">
                corporate transportation services in Melbourne
              </strong>
              . We specialize in offering{" "}
              <strong className="text-black">premium corporate cabs</strong>{" "}
              solutions tailored to meet the unique demands of professionals and
              businesses. Whether you need a seamless ride to a corporate
              meeting, a convenient airport transfer, or ongoing transport for
              your employees, ME CABS delivers unmatched service quality with a
              focus on punctuality, comfort, and professionalism.
            </p>
          </div>
        </div>
      </section>
      {/* Service details Section End */}

      {/* Why choose me section Start */}
      <section className="whyChoose py-[80px] bg-gray-50">
        <div className="container">
          <div className="whyHeading max-w-screen-lg mx-auto text-center">
            <h2 className="text-[2.2rem] font-bold text-black">
              Why Choose Me Cabs for Corporate Travel?
            </h2>

            <p className="text-[1rem] text-gray-600 font-normal">
              We understand the importance of time and convenience in the
              corporate world. Our corporate taxi services are designed to
              provide hassle-free and comfortable transportation for busy
              professionals. When you book with us, you can expect:
            </p>
          </div>
          <div className="flex justify-start items-center flex-wrap gap-10 mt-16 max-w-screen-lg mx-auto">
            <div className="flex-[1_1_400px] max-lg:order-2">
              <div className="whyText">
                <ul>
                  <li className="mb-6">
                    <h4>
                      <strong>Punctuality: </strong> We ensure on-time pickups
                      and drop-offs, allowing you to focus on what matters most{" "}
                      <span>&minus;</span> your work.
                    </h4>
                  </li>
                  <li className="mb-6">
                    <h4>
                      <strong>Comfortable Fleet: </strong> Our vehicles are
                      modern, clean, and equipped with features that make every
                      ride pleasant and productive.
                    </h4>
                  </li>
                  <li className="mb-6">
                    <h4>
                      <strong>Professional Drivers: </strong> Our highly trained
                      drivers have extensive knowledge of Melbourne
                      <span>&apos;</span>s roads, ensuring a smooth journey
                      while maintaining discretion and professionalism.
                    </h4>
                  </li>
                  <li className="mb-6">
                    <h4>
                      <strong>Flexible Services: </strong>Whether you need a
                      one-time transfer or regular transportation, we offer
                      customizable packages to suit your needs.
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-[1_1_400px] max-lg:order-1">
              <Image
                src={s6}
                alt="service s6 image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why choose me section End */}


      {/*Corporate  section Start */}
      <section className="corporate py-[80px] bg-white">
        <div className="container">
          <div className="corpoHeading max-w-screen-lg mx-auto text-center">
            <h2 className="text-[2.2rem] font-bold text-black">
              Seamless Corporate Transfers
            </h2>

            <p className="text-[1rem] text-gray-600 font-normal">
              For businesses in Melbourne, we offer seamless transportation
              solutions that prioritize efficiency and reliability. Our
              corporate cabs Melbourne are perfect for:
            </p>
          </div>
          <div className="flex justify-start items-center flex-wrap gap-10 mt-16 max-w-screen-lg mx-auto">
            <div className="flex-[1_1_400px]">
              <Image
                src={s7}
                alt="service s7 image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-[1_1_400px]">
              <div className="corpoText">
                <ul>
                  <li className="mb-6">
                    <h4>
                      <strong>Airport Transfers: </strong> Start or conclude
                      your business trips stress-free with our reliable airport
                      transfer services.
                    </h4>
                  </li>
                  <li className="mb-6">
                    <h4>
                      <strong>Meeting Transfers: </strong> Arrive at your
                      corporate meetings on time and in style.
                    </h4>
                  </li>
                  <li className="mb-6">
                    <h4>
                      <strong>Employee Transportation: </strong> Ensure your
                      team members travel comfortably and punctually with our
                      dedicated employee shuttle services.
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Corporate  section End */}

      {/* Made Simple section Start */}
      <section style={{ backgroundImage: `url(${s8.src})` }} className="madeSimple py-[150px] bg-center bg-cover bg-no-repeat bg-gray-100 relative z-0 before:h-full before:w-full before:bg-slate-950 before:bg-opacity-60 before:z-[-1] before:absolute before:top-0 before:start-0">
        <div className="container">
          <div className="sectionHeading max-w-screen-lg text-center mx-auto">
            <h3 className="text-white mb-5 text-[3rem] font-bold ">
              Booking Made Simple
            </h3>

            <p className="text-[1.3rem] text-white font-normal">
              We<span>&apos;</span>ve made booking as effortless as possible. Our user-friendly
              platform allows you to schedule your corporate taxi in Melbourne
              in just a few steps. Whether you<span>&apos;</span>re planning ahead or need a
              last-minute ride, we<span>&apos;</span>ve got you covered.
            </p>
          </div>
        </div>
      </section>
      {/* Made Simple section End */}

      {/* Committed to Excellence section Start */}
      <section className="commitExcellence pt-[80px]">
        <div className="container max-w-screen-xl">

          <div className="flex justify-center items-center flex-wrap gap-10">
            <div className="flex-[3_1_600px]">

              <div className="sectionHeading">
                <h3 className="text-black mb-5 dark:text-white text-[2rem] font-bold ">
                  Committed to Excellence
                </h3>

                <p className="text-[1rem] text-gray-600 dark:text-white font-normal mb-6">
                  Welcome to <strong className="text-black">ME CABS,</strong> your trusted{" "}
                  <strong className="text-black">taxi service</strong> provider in
                  <strong className="text-black">Melbourne and the surrounding areas</strong>. We pride
                  ourselves on delivering reliable, comfortable, and affordable
                  transportation solutions for all your travel needs. Whether
                  you’re heading to the <strong className="text-black">airport</strong>, commuting to
                  work, or planning a <strong className="text-black">night out</strong>, we ensure a
                  smooth and stress-free journey every time
                </p>

                <p className="text-[1rem] text-gray-600 dark:text-white font-normal mb-6">
                  At <strong className="text-black">ME CABS</strong>, our team of professional and
                  courteous drivers is committed to providing exceptional
                  service. With extensive local knowledge and a dedication to
                  punctuality, we guarantee that you’ll reach your destination
                  safely and on time. Our fleet of well-maintained vehicles is
                  designed for your comfort, offering a pleasant ride regardless
                  of the distance.
                </p>
                <p className="text-[1rem] text-gray-600 dark:text-white font-normal mb-6">
                  We understand that every journey is unique, which is why we
                  tailor our services to meet your specific requirements. From
                  quick <strong className="text-black">city transfers to long-distance trips</strong>,
                  our flexible options ensure convenience and peace of mind.
                  Booking with us is easy – our user-friendly platform allows
                  you to schedule your ride in just a few clicks.
                </p>
                <p className="text-[1rem] text-gray-600 dark:text-white font-normal mb-6">
                  At the heart of our service is a commitment to excellence and
                  customer satisfaction. Our goal is to build lasting
                  relationships with our clients through exceptional service,
                  competitive pricing, and a focus on your comfort and safety.
                </p>
                <p className="text-[1rem] text-gray-600 dark:text-white font-normal mb-6">
                  Thank you for choosing <strong className="text-black">ME CABS</strong>. Let us be
                  your reliable partner for all your transportation needs in
                  Point Cook and beyond. Your journey matters to us, and we look
                  forward to serving you.
                </p>

              </div>

            </div>
            <div className="flex-[1_1_250px]">
               <Image src={s9} alt="service s9 image"  className="h-full w-full object-cover rounded-lg max-lg:hidden"/>
            </div>
          </div>

        </div>
      </section>

      {/* Committed to Excellence section End */}

      {/* Services Types Section Start */}
      <section className="py-[80px] bg-no-repeat bg-fixed bg-cover bg-center">
        <div className="container max-w-screen-xl">
          <div className="section_title text-center mb-10">
            <h5 className="title text-[1.5rem] text-black font-bold mb-4">
              OUR SERVICES
            </h5>

            <p className="text-[1rem] text-gray-600 font-normal">
              Opt for Melbourne Express Cabs for luxurious taxi services and
              professionally endorsed drivers. Whether you are traveling to or
              from the airport, navigating through the city, or simply seeking a
              premium ride, look no further. With us, you will receive a Price
              Guarantee, top-notch service, and a comfortable journey.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
            {service1Post.map((service1) => {
              return (
                <div
                  key={service1.title}
                  className=" lg:w-[calc(100%_/_3_-_20px)] md:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]"
                >
                  <div className="relative z-0 overflow-hidden rounded-lg [&_.cardBody]:hover:bottom-0 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-blue-700 before:to-[#0000ff11] before:hover:top-0 before:hover:opacity-100 before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[8]">
                    <div className="card_img w-full h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src={service1.serviceImage}
                        className="w-full h-full object-cover "
                        alt="Car Image"
                      />
                    </div>
                    <div className="cardBody bg-transparent p-5 flex flex-col justify-end items-start absolute z-30 bottom-[-15%] left-0 w-full h-full transition-all duration-300">
                      <h3 className="text-white mb-5 text-[1.7rem]">
                        {service1.title}
                      </h3>
                      <p className="text-white mb-4">{service1.para}</p>

                      <a href="#" className=" text-white">
                        <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="section_title text-center my-20">
            <h5 className="title text-[1.5rem] text-black font-bold mb-4">
              SPECIAL SERVICES
            </h5>

            <p className="text-[1rem] text-black font-normal">
              Experience seamless airport transfers in Melbourne with our
              popular service. Whether greeting you at the terminal upon arrival
              or picking you up from your doorstep for your journey to the
              airport, we ensure a hassle-free and reliable transportation
              experience, every time{" "}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5">
            {service2Post.map((service2) => {
              return (
                <div
                  key={service2.title}
                  className=" lg:w-[calc(100%_/_3_-_20px)] md:w-[calc(100%_/_2_-_20px)] w-[calc(100%_/_1_-_20px)]"
                >
                  <div className="relative z-0 overflow-hidden rounded-lg [&_.cardBody]:hover:bottom-0 before:absolute before:opacity-0 before:top-full before:left-0 before:h-full before:w-full before:bg-gradient-to-t before:from-blue-700 before:to-[#0000ff11] before:hover:top-0 before:hover:opacity-100 before:transition-all  before:duration-300 cursor-grab after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[8]">
                    <div className="card_img w-full h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src={service2.serviceImage}
                        className="w-full h-full object-cover "
                        alt="Car Image"
                      />
                    </div>
                    <div className="cardBody bg-transparent p-5 flex flex-col justify-end items-start absolute z-30 bottom-[-15%] left-0 w-full h-full transition-all duration-300">
                      <h3 className="text-white mb-5 text-[1.7rem]">
                        {service2.title}
                      </h3>
                      <p className="text-white mb-4">{service2.para}</p>

                      <a href="#" className=" text-white">
                        <LuArrowUpRightFromCircle className="text-[2.5rem]" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Services Types Section End */}
    </>
  );
}
