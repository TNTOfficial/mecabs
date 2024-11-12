"use client";

import { v4 as uuidv4 } from "uuid";
import { trackIp } from "@/actions/ip-track/ip-track";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const getStorageItem = (key: string): string => {
  if (typeof window === "undefined") return "";
  try {
    const item = sessionStorage.getItem(key);
    if (!item) {
      const newId = uuidv4();
      window.sessionStorage.setItem(key, newId);
      return newId;
    }
    return item;
  } catch {
    return uuidv4(); // Fallback for incognito mode
  }
};

export const IpTracker = () => {
  const pathName = usePathname();

  useEffect(() => {
    const sessionId = getStorageItem("session-id");
    const visitId = getStorageItem("visit-id");
    trackIp(pathName, sessionId, visitId);
  }, [pathName]);

  return null;
};
