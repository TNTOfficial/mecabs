// components/IpTracker.tsx
"use client";

import { v4 as uuidv4 } from "uuid";
import { trackIp } from "@/actions/ip-track/ip-track";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const getStorageItem = (key: string): string => {
  try {
    const item = window.sessionStorage.getItem(key);
    if (!item) {
      const newId = uuidv4();
      window.sessionStorage.setItem(key, newId);
      return newId;
    }
    return item;
  } catch {
    return uuidv4(); // Fallback for incognito mode or storage issues
  }
};

export const IpTracker = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark when component is mounted on the client side
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const sessionId = getStorageItem("session-id");
      const visitId = getStorageItem("visit-id");
      trackIp(pathname, sessionId, visitId);
    }
  }, [isClient, pathname]);

  return null;
};
