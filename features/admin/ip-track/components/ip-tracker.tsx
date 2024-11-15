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
  const [sessionId, setSessionId] = useState("");
  const [visitId, setVisitId] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      // Update sessionId and visitId only when they change
      const newSessionId = getStorageItem("session-id");
      const newVisitId = getStorageItem("visit-id");

      if (newSessionId !== sessionId || newVisitId !== visitId) {
        setSessionId(newSessionId);
        setVisitId(newVisitId);
        trackIp(pathname, newSessionId, newVisitId);
      }
    }
  }, [isClient, pathname, sessionId, visitId]);

  return null;
};
