import React from "react";
import { Sidebar } from "./components/sidebar";
import HeaderComponent from "./components/header";

interface layoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: layoutProps) => {
  return (
    <div className="p-4 pe-0 bg-[#f5f7fa] dark:bg-gray-600 h-[100dvh] overflow-hidden">
      <HeaderComponent />

      <main className="flex flex-wrap h-[calc(100%_-_96px)] overflow-hidden justify-end items-start relative bg-[#f5f7fa] dark:bg-gray-600 rounded-xl">
        <Sidebar />
        <div className="mian_content w-[calc(100%_-_320px)] mlg:w-full overflow-x-hidden overflow-y-auto bg-transparent rounded-xl h-full pe-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default layout;
