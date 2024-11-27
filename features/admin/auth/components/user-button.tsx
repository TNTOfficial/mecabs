"use client";

import { BookImageIcon, LayoutDashboard, Loader, LogOut } from "lucide-react";
import { useCurrentUser } from "../hooks/use-current-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RoleGuard } from "../guard/role-guard";

export const UserButton = () => {
  const pathname = usePathname();
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader className="h-4 w-4 animate-spin text-muted-foreground" />;
  }

  const name = user?.name;
  const imageUrl = user?.image;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none">
        <div className="flex items-center gap-2 bg-white hover:bg-gray-300 rounded-3xl px-5 py-2 border  transition-all duration-100">
          <Avatar className="h-8 w-8">
            <AvatarImage alt={name!} src={imageUrl || ""} />
            <AvatarFallback className="bg-blue-700 text-sm text-white">
              {name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-700">
            Hi, <strong> {name || "User"}</strong>
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {(user && user?.phoneNumber) ||
          (user?.email && !pathname.startsWith("/dashboard") && (
            <DropdownMenuItem className="p-0">
              <RoleGuard allowedRoles={["ADMIN"]}>
                <Link
                  href="/dashboard"
                  className="py-2 px-3 flex justify-start items-center w-full"
                >
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  <span>Dashboard</span>
                </Link>
              </RoleGuard>
              <RoleGuard allowedRoles={["USER"]}>
                <Link
                  href="/dashboard/user-bookings"
                  className="py-2 px-3 flex justify-start items-center w-full"
                >
                  <BookImageIcon className="h-4 w-4 mr-2" />
                  <span>My Bookings</span>
                </Link>
              </RoleGuard>
            </DropdownMenuItem>
          ))}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem
          className="py-2 px-3 w-full cursor-pointer"
          onClick={() => {
            signOut({
              redirectTo: "/",
            });
          }}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
