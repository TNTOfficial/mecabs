"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { IoMdCheckmark } from "react-icons/io";

import signcard from "@/public/signcard4.jpg";
import { useState } from "react";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  formType?: "login" | "register";
}

export const LoginButton = ({
  children,
  mode = "redirect",
  formType,
  asChild,
}: LoginButtonProps) => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode == "modal") {
    return (
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-0  flex justify-center items-center overflow-y-auto h-fit shadow-none">
          <div className="flex m-auto flex-wrap justify-center items-stretch rounded-3xl lg:min-h-[730px] bg-white overflow-hidden lg:max-w-screen-lg  max-w-full ">
            <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)] max-lg:hidden">
              <div
                className="card h-full relative z-0  bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: ` url(${signcard.src})` }}
              >
                <div className="card_body bg-black bg-opacity-50  h-full w-full md:px-14 md:pb-14 p-10 md:pt-[70px] flex justify-start items-start flex-col">
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
              <LoginForm
                formType={formType}
                onCloseDialog={() => {
                  setDialogOpen(false);
                }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <>
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>


    </>


  );
};
