// "use client"
import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { GoogleMapProvider } from "@/features/booking/components/google-map-provider";

const dm = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Me Cabs",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" className={dm.className}>
        <body
          suppressHydrationWarning={true}
          className="font-body bg-white dark:bg-gray-500 text-black dark:text-white"
        >
          <GoogleMapProvider>{children}</GoogleMapProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
