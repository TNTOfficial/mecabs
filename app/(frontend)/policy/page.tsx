import React from "react";

import banner4 from "@/public/banner4.jpg";
const page = () => {
  const policy: {
    title: string;
    para?: string;
    list?: { listItem: string; titleLi?: string }[];
  }[] = [
    {
      title: "Introduction",
      para: "ME Cabs is dedicated to safeguarding the privacy of its users and customers. This privacy policy elucidates how we gather, utilize, reveal, and safeguard personal information obtained through our taxi service in Melbourne.",
    },
    {
      title: "Information We Collect",
      list: [
        {
          listItem:
            " When utilizing our taxi service, we may gather personal information such as your name, contact details, payment information, and location data.",

          titleLi: "Personal Information:",
        },
        {
          listItem:
            " We may gather details about your interactions with our service, including the dates and times of your rides, pickup and drop-off locations, and the routes taken.",

          titleLi: "Usage Information:",
        },
      ],
    },
    {
      title: "How We Use Information",
      para: "We may utilize the gathered information for the following purposes:",
      list: [
        { listItem: "Providing and enhancing our taxi service" },
        { listItem: "Processing payments and invoices" },
        { listItem: "Communicating with you about your rides and account" },
        { listItem: "Analyzing usage trends and preferences" },
        { listItem: "Complying with legal and regulatory requirements" },
      ],
    },
    {
      title: "Information Sharing",
      para: "We may disclose your information to third parties under the following circumstances:",
      list: [
        {
          listItem:
            "With service providers assisting us in operating our business",
        },
        {
          listItem:
            "When legally required or to safeguard our rights and interests",
        },
        {
          listItem:
            "In conjunction with a corporate transaction, such as a merger or acquisition",
        },
      ],
    },
    {
      title: "Data Security",
      para: "We employ suitable measures to safeguard the security of your personal information, including encryption, access controls, and regular security audits.",
    },
    {
      title: "Your Rights",
      para: "You possess the right to access, rectify, or erase your personal information. Additionally, you may opt-out of specific communications or data processing activities.",
    },
    {
      title: "Changes to this Policy",
      para: "This privacy policy may undergo updates periodically. Any alterations will be published on our website, and we urge you to review the policy regularly.",
    },
    {
      title: "Contact Us",
      para: "For any queries or concerns regarding our privacy practices, please reach out to us at +611300012018",
    },
  ];
  return (
    <>
      <section
        style={{ backgroundImage: ` url(${banner4.src})` }}
        className="py-[200px] bg-no-repeat bg-center bg-cover relative z-0 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:bg-opacity-50 before:z-[-1] "
      >
        <div className="container">
          <h2 className="text-white text-[3rem] font-bold">PRIVACY POLICY</h2>
          <h5 className="text-white text-[1.2rem] font-normal">
            Home / Privacy Policy
          </h5>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="container">
          {policy.map((pol, index) => {
            return (
              <>
                <h3
                  key={index}
                  className="title text-[2rem] font-bold text-black"
                >
                  {pol.title}
                </h3>
                <p className="text-black text-[1.1rem] font-medium mb-4">
                  {pol.para}
                </p>

                <ul className="list-disc mb-6 list-inside">
                  {pol.list?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[1rem] text-black font-normal"
                      >
                        {item.titleLi && <strong>{item?.titleLi}</strong>}
                        <span>{item.listItem}</span>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
