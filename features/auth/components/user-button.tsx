"use client";

import { LayoutDashboard, Loader, LogOut } from "lucide-react";
import { useCurrentUser } from "../hooks/use-current-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
        <div className="flex items-center gap-2 hover:bg-gray-100 rounded-md px-2 py-1 transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarImage alt={name!} src={imageUrl || ""} />
            <AvatarFallback className="bg-blue-700 text-sm text-white">
              {name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-700">Hi, {name || "User"}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {!pathname.startsWith("/dashboard") && (
          <DropdownMenuItem className="py-2">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="py-2"
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
