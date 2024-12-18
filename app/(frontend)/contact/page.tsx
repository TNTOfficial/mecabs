"use client";
import React, { useState } from "react";
import banner1 from "@/public/banner4.webp";
import Link from "next/link";
import { ContactForm } from "@/features/frontend/contact/components/contact-form";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <>
      {/* Contact Page Landing section Start */}
      <section
        style={{ backgroundImage: ` url(${banner1.src})` }}
        className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-950 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
      >
        <div className="container mx-auto px-5">
          <div className="flex min-h-[40vh] justify-start items-center ">
            <div className="w-full px-3">
              <div className="text">
                <h1 className="text-[3rem] font-normal mb-5 dark:text-white text-white">
                  Contact Us
                </h1>
                <h5 className="text-[1.3rem] font-normal dark:text-white text-white">
                  HOME - CONTACT US
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Page Landing section End */}

      {/* Contact with mail section Start */}
      <section className="mailSection">
        <div className="px-6 pb-[70px] pt-[100px]">
          <div className="text-center max-w-screen-lg max-md:max-w-md mx-auto">
            <p className="text-sm font-bold text-blue-600 mb-4">
              <span className="rotate-90 inline-block mr-2">|</span> Contact Us
            </p>
            <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">
              Reach out to us
            </h2>
            <div className="mt-8">
              <p className="text-base text-gray-500 leading-relaxed">
                If you have any questions, comments, or feedback, we would love
                to hear from you! Reach out to us at contact@example.com and our
                dedicated team will get back to you as soon as possible. We are
                here to assist you with anything you need.
              </p>
            </div>

            <div className="mt-6">
              <Button
                variant="default"
                className="mb-6"
                onClick={() => {
                  setShowForm(!showForm);
                }}
              >
                Contact Us
              </Button>
              {showForm && <ContactForm />}
            </div>
          </div>
        </div>
      </section>
      {/* Contact with mail section End */}

      {/* Contact with whatsapp app section Start */}
      <section className="whatsappSection">
        <div className=" bg-white px-6 pb-[100px] w-full rounded">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-gray-800 sm:text-5xl text-3xl font-extrabold">
              Contact us on Whatsapp
            </h1>
            <div className="my-10">
              <p className="text-gray-800 text-sm">
                We are just a message away! Connect with us on WhatsApp at +61
                40000000 for any queries, comments, or assistance. Our team is
                always ready to help and respond to your messages promptly. We
                look forward to hearing from you!
              </p>
            </div>

            <hr className="border-gray-600" />

            <div className="mt-10 flex max-sm:flex-col justify-center sm:gap-6 gap-4">
              <Link
                href="tel:+61 400000000"
                className="px-6 py-3 rounded-3xl text-white text-sm tracking-wider font-semibold border border-gray-800 outline-none bg-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-300"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact with whatsapp app section End */}
    </>
  );
};

export default ContactPage;
