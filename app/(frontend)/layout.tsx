"use client"
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppBar from "./components/appBar";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const pathName = usePathname();
  return (
    <>
      <Navbar />
      <Toaster />
      {children}
      <Footer />
      {pathName !== "/booking" && <AppBar />}
    </>
  );
};

export default Layout;
