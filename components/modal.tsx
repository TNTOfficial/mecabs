import { IoMdCheckmark } from "react-icons/io";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (value: boolean) => void;
}
export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open}>
      <DialogContent className="p-0 bg-transparent border-0 flex justify-center items-center overflow-y-auto h-fit shadow-none">
        <div className="flex m-auto flex-wrap justify-center items-stretch rounded-3xl lg:min-h-[730px] bg-white overflow-hidden lg:max-w-screen-lg max-w-full">
          <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)] max-lg:hidden">
            <div className="card h-full relative z-0 bg-no-repeat bg-center bg-cover bg-[url('/signcard5.jpg')]">
              <div className="card_body bg-black bg-opacity-50 h-full w-full md:px-14 md:pb-14 p-10 md:pt-[70px] flex justify-center items-start flex-col">
                <h1 className="text-white text-[2rem] font-bold text-center">
                  Login to Book Your Ride
                </h1>
                <ul className="list-none mt-10">
                  <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                    <IoMdCheckmark className="text-[1rem]" />
                    <span className="text-[1rem]">Track your bookings</span>
                  </li>
                  <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                    <IoMdCheckmark className="text-[1rem]" />
                    <span className="text-[1rem]">Save favorite locations</span>
                  </li>
                  <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                    <IoMdCheckmark className="text-[1rem]" />
                    <span className="text-[1rem]">Quick booking process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-[calc(100%_/_2)] w-full flex flex-col">
            {children}
            <Button
              variant="ghost"
              className="mt-4 mb-8 mx-auto"
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Continue without login
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
