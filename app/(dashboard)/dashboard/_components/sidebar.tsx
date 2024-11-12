"use client";

import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

interface SidebarProps {
  isOpen: boolean;
}
export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`flex flex-col shrink-0 w-[300px] top-0 fixed lg:left-0  h-[100dvh] bg-white ${
        isOpen ? "left-0" : "left-[-300px]"
      }`}
    >
      <Logo />
      <SidebarRoutes />
    </aside>
  );
};
