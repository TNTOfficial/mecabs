"use client";

import { LayoutDashboard, User } from "lucide-react";
import { BookMarked } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { RoleGuard } from "@/features/auth/guard/role-guard";
import { Separator } from "@radix-ui/react-dropdown-menu";

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
      <div className="px-3">
        <Separator />
      </div>
      <div>
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
          </RoleGuard>
        </ul>
      </div>
    </div>
  );
};
