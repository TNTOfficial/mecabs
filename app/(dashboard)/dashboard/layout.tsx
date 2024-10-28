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
    <div className="bg-muted h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="bg-white flex-1 overflow-auto p-8 lg:rounded-tl-2xl">
          <Toaster />
          <RoleGuard allowedRoles={["ADMIN", "USER"]}>{children}</RoleGuard>
        </main>
      </div>
    </div>
  );
};

export default DashbaordLayout;
