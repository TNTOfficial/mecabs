// "use client"
import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { auth } from "@/auth";
import { Providers } from "./providers";

const dm = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Melton Taxi for Local Rides & Airport Transfers | Me Cabs",
  description: "Me Cabs provides dependable local taxi and airport transfer services in Melton. Book now for a professional, comfortable, and on-time ride.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className={dm.className}>
      <body
        suppressHydrationWarning={true}
        className="font-body bg-white dark:bg-gray-500 text-black dark:text-white"
      >
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
