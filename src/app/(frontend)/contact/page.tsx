import React from 'react'
import banner2 from '../../../../public/banner2.jpg'
import ContactUsForm from '../components/ContactUsForm'

export default function ContactUsPage() {
    return (
        <>

            {/* Contact Page Landing section Start */}
            <section
                style={{ backgroundImage: ` url(${banner2.src})` }}
                className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
            >
                <div className="container mx-auto px-5">
                    <div className="flex min-h-[40vh] justify-start items-center ">
                        <div className="w-full px-3">
                            <div className="text">
                                <h1 className="text-[3rem] font-normal mb-5 dark:text-white text-white">
                                    Contact Us
                                </h1>
                                <h5 className="text-[1.3rem] font-normal dark:text-white text-white">
                                    HOME - Contact US
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Page Landing section End */}


            {/* Contact Us Form Section Component Start */}
            <ContactUsForm />
            {/* Contact Us Form Section Component End */}
        </>
    )
}
