"use client";

import { trackIp } from "@/actions/ip-track/ip-track";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const IpTracker = () => {
  const pathName = usePathname();
  useEffect(() => {
    trackIp(pathName);
  }, [pathName]);

  return null;
};
