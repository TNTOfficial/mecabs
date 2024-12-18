"use client";

import { MapsProvider } from "@/features/admin/booking/providers/maps-provider";
import { IpTracker } from "@/features/admin/ip-track/components/ip-tracker";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
  session: Session | null;
}
export const Providers: React.FC<ProvidersProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <IpTracker />
      <MapsProvider>{children}</MapsProvider>
    </SessionProvider>
  );
};
