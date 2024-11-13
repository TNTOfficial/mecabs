import React from "react";
import banner5 from "@/public/banner5.webp";
const page = () => {
  const terms = [
    {
      title: "Introduction",
      para: "Welcome to ME Cabs! By using our taxi services, you agree to be bound by these terms and conditions. These terms outline the legal framework for our service usage, protecting both users and the company from potential disputes or misunderstandings.",
    },
    {
      title: "Definitions",
      para: "In order to maintain clarity and minimize legal ambiguity, key terms used throughout this document are defined, ensuring mutual understanding and preventing potential legal disputes.",
    },
    {
      title: "Use of the Service",
      para: "Eligibility for using our taxi service is subject to legal requirements and restrictions. By accessing our service, users agree to comply with all applicable laws and regulations, thereby protecting the company from any legal implications arising from misuse or unauthorized use of the service.",
    },
    {
      title: "Booking and Payment",
      para: "The process of booking a ride and payment for services is governed by legal agreements between ME Cabs and its users. Clear terms and conditions regarding fares, payment methods, and cancellations help prevent legal disputes and ensure transparent transactions. Users agree to provide accurate and complete information during the booking process.",
    },
    {
      title: "Passenger Conduct",
      para: "Passenger conduct during rides must adhere to legal standards and regulations. By using our service, passengers agree to conduct themselves lawfully and responsibly, thereby reducing the risk of legal complications for both the passenger and the company. ME Cabs is not liable for any damages or injuries resulting from passenger misconduct.",
    },
    {
      title: "Driver Conduct",
      para: "Drivers providing services through ME Cabs are required to adhere to legal standards of conduct and professionalism. By agreeing to these terms, drivers acknowledge their legal obligations and responsibilities, protecting the company from potential legal liabilities arising from driver misconduct. ME Cabs is not responsible for any actions or omissions by drivers that are beyond the scope of their employment.",
    },
    {
      title: "Limitation of Liability",
      para: "ME Cabs limits its liability for damages arising from the use of its services to the maximum extent permitted by law. By using our service, users acknowledge and accept this limitation of liability, thereby protecting the company from excessive legal claims and demands. ME Cabs is not liable for any indirect, incidental, or consequential damages.",
    },
    {
      title: "Privacy and Data Protection",
      para: "ME Cabs is committed to protecting user privacy and complying with all relevant data protection laws and regulations. By using our service, users consent to the collection, use, and protection of their personal data in accordance with our privacy policy. This includes the use of data provided during sign-up for purposes such as improving our services, customer support, and marketing, thereby safeguarding the company from legal challenges related to data privacy and security.",
    },
    {
      title: "Disclaimers and Limitation of Liability",
      para: "ME Cabs disclaims any warranties regarding the availability, accuracy, or reliability of its services to the fullest extent permitted by law. By agreeing to these terms, users acknowledge and accept these disclaimers, thereby shielding the company from legal liability for service disruptions or inaccuracies. The service is provided on an 'as is' basis.",
    },
    {
      title: "Termination",
      para: "ME Cabs reserves the right to terminate user access to its services at any time, without notice, for conduct that violates these terms or is otherwise harmful to the interests of ME Cabs or its users. By using our service, users agree to abide by these termination procedures, thereby minimizing the risk of legal disputes or challenges.",
    },
    {
      title: "Governing Law and Dispute Resolution",
      para: "These terms and conditions are governed by the laws of the jurisdiction in which ME Cabs operates. By agreeing to these terms, users consent to the exclusive jurisdiction of the courts in that jurisdiction for the resolution of any disputes, thereby providing legal clarity and certainty for all parties involved. Users waive any objections to the venue and jurisdiction of these courts.",
    },
    {
      title: "Amendments",
      para: "ME Cabs reserves the right to amend these terms and conditions as necessary to comply with legal requirements or improve service quality. By using our service, users agree to be bound by any such amendments, thereby ensuring legal compliance and accountability. Continued use of the service after amendments constitutes acceptance of the new terms.",
    },
    {
      title: "Contact Information",
      para: "For inquiries or concerns regarding these terms and conditions, users may contact ME Cabs using the provided contact information. Clear communication channels help resolve potential legal issues or disputes in a timely and efficient manner, thereby minimizing legal risks for the company.",
    },
    {
      title: "Severability",
      para: "If any provision of these terms and conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect to the fullest extent permitted by law. This provision helps protect the validity and enforceability of the agreement, reducing the risk of legal challenges or disputes.",
    },
    {
      title: "Entire Agreement",
      para: "These terms and conditions constitute the entire agreement between users and ME Cabs regarding the use of its services, superseding any prior agreements or understandings. By agreeing to these terms, users acknowledge and accept the legal framework governing their use of the service, thereby providing legal clarity and certainty for both parties involved.",
    },
  ];
  return (
    <>
      <section
        style={{ backgroundImage: ` url(${banner5.src})` }}
        className="py-[200px] bg-no-repeat bg-center bg-cover relative z-0 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:bg-opacity-50 before:z-[-1] "
      >
        <div className="container">
          <h2 className="text-white text-[3rem] font-bold">
            TERMS AND CONDITIONS
          </h2>
          <h5 className="text-white text-[1.2rem] font-normal">
            Home / Terms and Conditions
          </h5>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="container">
          {terms.map((term, index) => {
            return (
              <>
                <h3
                  key={index}
                  className="title text-[2rem] font-bold text-black"
                >
                  {term.title}
                </h3>
                <p className="text-black text-[1.1rem] font-medium mb-6">
                  {term.para}
                </p>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
