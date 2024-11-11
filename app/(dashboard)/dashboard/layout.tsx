import React from "react";
import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { RoleGuard } from "@/features/auth/guard/role-guard";
import { Toaster } from "@/components/ui/sonner";

interface DashbaordLayoutProps {
  children: React.ReactNode;
}
const DashbaordLayout: React.FC<DashbaordLayoutProps> = ({ children }) => {
  return (
    <div className=" bg-[#f5f7fa] dark:bg-gray-600 min-h-[100dvh]">
      <Sidebar />
      <div className="w-full lg:pl-[300px]">
        <Navbar />
        <main className="flex-1 overflow-auto p-4">
          <Toaster />
          <RoleGuard allowedRoles={["ADMIN", "USER"]}>{children}</RoleGuard>
        </main>
      </div>
    </div>
  );
};

export default DashbaordLayout;
