"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import { IoCheckmark } from "react-icons/io5";

const faqs = [
  {
    type: "General Questions",
    data: [
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
    ],
  },
  {
    type: "Booking & Payments",
    data: [
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
    ],
  },
  {
    type: "Airport Transfers",
    data: [
      {
        title: "Do you offer airport pickup and drop-off services?",
        para: "Yes, we specialize in Melbourne airport transfers with timely pickups and smooth rides.",
      },
      {
        title: "What happens if my flight is delayed?",
        para: "Our drivers monitor flight timings and adjust the pickup schedule accordingly without extra charges.",
      },
    ],
  },
  {
    type: "Parcel Delivery",
    data: [
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
    ],
  },

  {
    type: "Hotel Transfers",
    data: [
      {
        title: "Do you work with hotels for guest transportation?",
        para: "Yes, we partner with hotels to provide convenient guest transportation.",
      },
      {
        title:
          "Can hotel guests request additional services like guided tours?",
        para: "Yes, we offer personalized services such as city tours upon request.",
      },
    ],
  },

  {
    type: "Safety & Comfort",
    data: [
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
    ],
  },

  {
    type: "Customer Support",
    data: [
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
    ]
  },

  {
    type: "Corporate Services",
    data: [
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
    ],
  },
];

// Define our FAQ types
const faq = {
  GENERAL: "General Questions",
  BOOKING: "Booking & Payments",
  AIRPORT: "Airport Transfers",
  PARCEL: "Parcel Delivery",
  HOTEL: "Hotel Transfers",
  SAFETY: "Safety & Comfort",
  CUSTOMER: "Customer Support",
  CORPORATE: "Corporate Services",
} as const;

type faqType = (typeof faq)[keyof typeof faq];

const TestPage = () => {
  const [type, setType] = useState<faqType>(faq.GENERAL);

  const selectedFaq = faqs.find((faq) => faq.type === type);

  return (
    <div className="w-full mx-auto p-4">
      <Tabs
        defaultValue={type}
        onValueChange={(value) => setType(value as faqType)}
        className="w-full"
      >
        <TabsList className="w-full justify-start">
          {faqs.map((faq) => (
            <TabsTrigger key={faq.type} value={faq.type} className="capitalize">
              {faq.type.replace("-", " ")}
            </TabsTrigger>
          ))}
        </TabsList>

        {selectedFaq && (
          <TabsContent value={selectedFaq.type}>
            <div className="space-y-4">
              {selectedFaq.data.map((item, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold text-[#333] no-underline">
                      <div className="inline-flex gap-3 justify-start items-center">
                        <IoCheckmark className="text-blue-700 text-[1.3rem]" />
                        <span>{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="ps-7 text-[1rem] text-gray-700">
                      {item.para}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default TestPage;
