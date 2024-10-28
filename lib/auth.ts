import { auth } from "@/auth";
import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";

export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};
export const currentRole = async () => {
  const session = await auth();
  return session?.user?.role;
};

export const checkRole = async (requiredRole: UserRole) => {
  const user = await currentUser();
  return user?.role === requiredRole;
};

export const requiredRole = async (role: UserRole) => {
  const hasRole = await checkRole(role);
  if (!hasRole) {
    redirect("/auth/unauthorized");
  }
};
