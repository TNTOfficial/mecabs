"use client";

import React from "react";
import signbg from "@/public/signbg.webp";
// import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import Link from "next/link"

const SettingsPage = () => {
  // const user = useCurrentUser()

  // return 
  return (
    <>

      <section style={{ backgroundImage: `url(${signbg.src})` }} className="py-[50px] flex justify-center items-center min-h-screen bg-center bg-cover bg-no-repeat relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:z-[-1] before:absolute before:top-0 before:start-0">
        <div className="p-10 bg-white flex flex-col justify-center items-center text-center w-full max-w-[400px] card border-t shadow-lg rounded-2xl">
          {/* <div className="img h-[150px] w-[150px] rounded-full aspect-square bg-gray-300">
          </div> */}
          <h1>Logged In successfully!</h1>
          <h2>
            We are currently working on this functionality, Thank you so much!
          </h2>
          <Button variant="link" asChild>
            <Link href="/" className="underline">  Back to home page</Link>
          </Button>
          {/* <h3 className="text-[2rem] font-bold">{user?.name}</h3>
          <h6 className="text-[1rem] font-medium">{user?.email}</h6> */}


        </div>
      </section >
    </>
  );
};

export default SettingsPage;
