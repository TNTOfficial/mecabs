import { LoginForm } from "@/features/auth/components/login-form";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import signcard from "@/public/signcard5.jpg";
import signbg from "@/public/signbg.jpg";

const LoginPage = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${signbg.src})` }}
        className="py-[50px] flex justify-center items-center min-h-screen bg-center bg-cover bg-no-repeat relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0"
      >
        <div className="flex m-auto flex-wrap justify-center items-stretch rounded-3xl lg:min-h-[730px] shadow-md border-t bg-white overflow-hidden lg:max-w-screen-lg  max-w-full ">
          <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)] max-lg:hidden">
            <div
              className="card h-full relative z-0  bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: ` url(${signcard.src})` }}
            >
              <div className="card_body bg-black bg-opacity-50  h-full w-full md:px-14 md:pb-14 p-10 md:pt-[70px] flex justify-center items-start flex-col">
                <h1 className="text-white text-[2rem] font-bold text-center">
                  Success starts here
                </h1>
                <ul className="list-none mt-10">
                  <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                    <IoMdCheckmark className="text-[1rem]" />
                    <span className="text-[1rem]">Over 700 categories</span>
                  </li>
                  <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                    <IoMdCheckmark className="text-[1rem]" />
                    <span className="text-[1rem]">
                      Quality work done faster
                    </span>
                  </li>
                  <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                    <IoMdCheckmark className="text-[1rem]" />
                    <span className="text-[1rem]">
                      Access to talent and businesses across the globe
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-[calc(100%_/_2)] w-full">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
