import React from 'react'
import banner1 from "@/public/banner4.jpg";
import Link from 'next/link';
import { IoMailOutline } from 'react-icons/io5';
import { LuFacebook } from 'react-icons/lu';
import { FiLinkedin } from 'react-icons/fi';
import { PiInstagramLogoLight } from 'react-icons/pi';

const page = () => {
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
      <section className='mailSection'>
        <div className="px-6 py-[100px] bg-gradient-to-t from-gray-200 via-gray-50 to-gray-50">
          <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
            <p className="text-sm font-bold text-blue-600 mb-4"><span className="rotate-90 inline-block mr-2">|</span> Contact Us</p>
            <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">Reach out to us</h2>
            <div className="mt-8">
              <p className="text-base text-gray-500 leading-relaxed">If you have any questions, comments, or feedback, we would love to hear from you! Reach out to us at contact@example.com and our dedicated team will get back to you as soon as possible. We are here to assist you with anything you need.</p>
            </div>

            <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden">
              <input type='email' placeholder='Enter your email' className="w-full outline-none bg-white pl-4 text-gray-800 text-sm" />
              <Link href="mailto: example@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2.5">Send</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact with mail section End */}

      {/* Contact with whatsapp app section Start */}
      <section className='whatsappSection'>
        <div className=" bg-white px-6 py-[100px] w-full rounded">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-gray-800 sm:text-5xl text-3xl font-extrabold">Contact us on Whatsapp</h1>
            <div className="my-10">
              <p className="text-gray-800 text-sm">We are just a message away! Connect with us on WhatsApp at +61 40000000 for any queries, comments, or assistance. Our team is always ready to help and respond to your messages promptly. We look forward to hearing from you!</p>
            </div>

            <hr className="border-gray-600" />

            <div className="mt-10 flex max-sm:flex-col justify-center sm:gap-6 gap-4">
              <Link href="tel:+61 400000000" className="px-6 py-3 rounded-3xl text-white text-sm tracking-wider font-semibold border border-gray-800 outline-none bg-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-300">Get started</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact with whatsapp app section End */}

      {/* Contact Us Form section Start */}
      <section className='formSection bg-white pb-[100px]'>
        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white rounded-xl shadow-xl border-t">
          <div>
            <h1 className="text-gray-800 text-3xl font-extrabold">Let&apos;s Talk</h1>
            <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we would love to hear about your project  and provide help.</p>

            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                 <IoMailOutline className='text-blue-500 text-[1.5rem]' />
                  </div>
                  <a href="mailto: example@gamil.com" className="text-[#007bff] text-sm ml-4">
                    <small className="block">Mail</small>
                    <strong>example@gamil.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>

              <ul className="flex mt-4 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                  <LuFacebook className='text-blue-500 text-[1.5rem]' />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                  <FiLinkedin className='text-blue-500 text-[1.5rem]' />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                  <PiInstagramLogoLight className='text-blue-500 text-[1.5rem]' />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form action="#"  className="ml-auto space-y-4">
            <input type='text' placeholder='Name'
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
            <input type='email' placeholder='Email'
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
            <input type='text' placeholder='Subject'
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
            <textarea placeholder='Message' rows={6}
              className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
            <button type='submit'
              className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
          </form>
        </div>
      </section>
      {/* Contact Us Form section End */}

    </>
  )
}

export default page
