import React from "react";
import user4 from "../images/user4.jpg";
import Image from "next/image";

const HeaderComponent = () => {
  return (
    <header className="pb-4 pe-4">
      <nav className="bg-white dark:bg-gray-800 shadow rounded-xl flex justify-between items-center">
        <div className="logo px-8 py-4 border-e border-gray-100 text-[2rem] font-bold text-black dark:text-white">
          <span>TopNTech</span>
        </div>
        <div className="profile h-full flex justify-end items-center gap-3 ps-2 pe-5 bg-white border border-gray-200 dark:border-0 dark:bg-gray-700 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-all duration-200 me-2 rounded-[60px] [&_button]:hover:bg-gray-400 [&_button>i]:hover:text-white">
          <div className="profile_image h-[44px] w-[44px] bg-gray-100 rounded-full overflow-hidden">
            <Image src={user4} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="prifile_title mlg:hidden">
            <h5 className="text-black dark:text-white text-[0.9rem]">
              User Name
            </h5>
            <h6 className="text-black dark:text-white text-[0.8rem] font-normal">
              user.tnt@mandi.com
            </h6>
          </div>

          <button className="menu border-none rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-3 lg:hidden transition-all duration-200">
            <i className="ph-light ph-text-indent text-black text-[2rem] transition-all duration-200"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
