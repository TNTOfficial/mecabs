"use client";

import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

interface SidebarProps {
  isOpen: boolean;
  onSidebarToggle: () => void;
}
export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onSidebarToggle }) => {
  return (
    <>
      <aside
        className={`flex flex-col shrink-0 w-[300px] top-0 fixed lg:left-0  h-[100dvh] bg-white z-50 transition-all duration-300
           ${isOpen ? "left-0" : "left-[-300px]"
          }`}
      >
        <Logo />
        <SidebarRoutes />
      </aside>

      {/* Sidebar Side black layer for close sidebar. */}

      <div className={`sideLayer fixed top-0 h-[100dvh] w-screen bg-black bg-opacity-0 z-40 transition-all duration-300
           ${isOpen ? "right-0" : "right-[-100vw]"
        }`}  
        onClick={onSidebarToggle}></div>

    </>
  );
};
