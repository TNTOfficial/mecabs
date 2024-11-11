"use server";

import { cookies, headers } from "next/headers";
import crypto from "crypto";
import { db } from "@/lib/db";

// If tracking according to browser session
const getSessionId = () => {
  const cookieStore = cookies();
  let sessionId = cookieStore.get("session-id")?.value;
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    cookies().set("session-id", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  }
  return sessionId;
};

//if tracking according to tab session

// const getTabId = () => {
//     const tabId = sessionStorage.getItem("tab-id") || crypto.randomUUID();
//     sessionStorage.setItem("tab-id", tabId);
//     return tabId;
//   };

export const trackIp = async (path: string) => {
  try {
    const headersList = headers();
    const ip = headersList.get("x-forwarded-for") || "0.0.0.0";
    const userAgent = headersList.get("user-agent");
    const sessionId = getSessionId();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    //checking if we already tracked this ip
    const existingTrack = await db.ipTrack.findFirst({
      where: {
        ip,
        createdAt: {
          gte: today,
        },
      },
    });

    if (!existingTrack) {
      await db.ipTrack.create({
        data: {
          ip,
          sessionId,
          path,
          userAgent,
          visitCount: 1,
        },
      });
    } else {
      //updating visit count only if there is new session
      if (existingTrack.sessionId !== sessionId) {
        await db.ipTrack.update({
          where: { id: existingTrack.id },
          data: {
            visitCount: { increment: 1 },
            updatedAt: new Date().toISOString(),
          },
        });
      }
    }
    return { success: true };
  } catch (error) {
    console.error("Error tracking IP:", error);
    return { error: "Failed to track IP" };
  }
};
