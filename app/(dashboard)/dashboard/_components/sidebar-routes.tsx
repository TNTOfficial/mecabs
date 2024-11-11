"use client";

import { Globe, LayoutDashboard, User } from "lucide-react";
import { BookMarked } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { RoleGuard } from "@/features/auth/guard/role-guard";

export const SidebarRoutes = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-4 flex-1 mt-5 p-2">
      <div>
        <ul className="flex flex-col gap-y-1 ">
          <SidebarItem
            href="/dashboard"
            icon={LayoutDashboard}
            label="Dashboard"
            isActive={pathname === "/dashboard"}
          />
        </ul>
      </div>
      {/* <div className="px-3">
        <Separator />
      </div> */}
      <div className="mt-3">
        <h6 className="text-blue-600 text-sm font-bold px-4">Information</h6>
        <ul className="flex flex-col gap-y-1 ">
          <SidebarItem
            href="/dashboard/user-bookings"
            icon={BookMarked}
            label="My Bookings"
            isActive={pathname === "/dashboard/user-bookings"}
          />
          <RoleGuard allowedRoles={["ADMIN"]}>
            <SidebarItem
              href="/dashboard/leads"
              icon={User}
              label="Leads"
              isActive={pathname === "/dashboard/leads"}
            />
            <SidebarItem
              href="/dashboard/ip-trackings"
              icon={Globe}
              label="Ip Trackings"
              isActive={pathname === "/dashboard/ip-trackings"}
            />
          </RoleGuard>
        </ul>
      </div>
    </div>
  );
};
