"use server";

import { IpTrackResponse } from "@/features/ip-track/types";
import { db } from "@/lib/db";

export const getTrackedIp = async (): Promise<IpTrackResponse | null> => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const visits = await db.ipTrack.findMany({
      orderBy: { visitCount: "desc" },
      select: {
        id: true,
        ip: true,
        visitCount: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const totalVisitors = await db.ipTrack.count();
    const todayVisitors = await db.ipTrack.count({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });

    return {
      visits,
      totalVisitors,
      todayVisitors,
    };
  } catch (error) {
    console.error("Error fetching tracked IP data:", error);

    // Return a default structure or null in case of an error
    return null;
  }
};
