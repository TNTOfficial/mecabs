import React from "react";
import { RiForbid2Fill } from "react-icons/ri";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center">
        <RiForbid2Fill className="h-5 w-5 mr-2" />
        You are not allowed to view this page!
      </div>
    </div>
  );
};

export default Page;
