"use client";

import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import { BookMarked } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

export const SidebarRoutes = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-4 flex-1 mt-5 p-2">
      <ul className="flex flex-col gap-y-1 p-3 bg-white rounded-xl">
        <SidebarItem
          href="/dashboard"
          icon={Home}
          label="Home"
          isActive={pathname === "/"}
        />
      </ul>
      <div className="px-3">
        <Separator />
      </div>

      <ul className="flex flex-col gap-y-1 p-3 bg-white rounded-xl">
        <SidebarItem href="/dashboard/user-bookings" icon={BookMarked} label="My Bookings" />
      </ul>
    </div>
  );
};
