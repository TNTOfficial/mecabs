"use server";

import { headers } from "next/headers";
import { db } from "@/lib/db";

export const trackIp = async (
  path: string,
  sessionId: string,
  visitId: string
) => {
  try {
    const headersList = headers();
    const ip = headersList.get("x-forwarded-for") || "0.0.0.0";
    const userAgent = headersList.get("user-agent");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // First, try to find an existing track for today
    const existingTrack = await db.ipTrack.findFirst({
      where: {
        ip,
        createdAt: {
          gte: today,
        },
      },
    });

    console.log(existingTrack);
    console.log(existingTrack?.visitId);
    console.log(visitId);

    // If we have an existing track for today
    if (existingTrack) {
      // Only update if the visitId is different
      if (existingTrack.visitId !== visitId) {
        console.log("Visit id is not same then calling update fn");

        await db.ipTrack.update({
          where: {
            id: existingTrack.id, // We know this exists and is valid
          },
          data: {
            visitCount: {
              increment: 1,
            },
            updatedAt: new Date().toISOString(),
          },
        });
      }
    } else {
      console.log("Record not exits creating new record");

      if (sessionId && visitId) {
        // Create a new track if none exists for today
        await db.ipTrack.create({
          data: {
            ip,
            sessionId,
            visitId,
            path,
            userAgent,
            visitCount: 1,
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
