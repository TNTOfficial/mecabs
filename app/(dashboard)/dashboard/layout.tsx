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
    <div className="bg-zinc-50 min-h-screen flex">
      <Sidebar />
      <div className="w-full pl-[300px]">
        <Navbar />
        <main className="flex-1 overflow-auto p-8">
          <Toaster />
          <RoleGuard allowedRoles={["ADMIN", "USER"]}>{children}</RoleGuard>
        </main>
      </div>
    </div>
  );
};

export default DashbaordLayout;
