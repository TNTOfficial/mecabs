import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    return existingUser;
  } catch {
    return null;
  }
};

export const getUserByPhone = async (phoneNumber: string) => {
  try {
    const user = await db.user.findFirst({
      where: { phoneNumber },
    });
    return user;
  } catch {
    return null;
  }
};
