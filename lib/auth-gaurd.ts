import { UserRole } from "@prisma/client";
import { currentUser } from "./auth";
import { redirect } from "next/navigation";

export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized access") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export const checkUserAccess = async () => {
  const user = await currentUser();
  if (!user) {
    throw new UnauthorizedError();
  }
  return user;
};

export const checkAdminAccess = async () => {
  const user = await currentUser();
  if (!user || user.role !== UserRole.ADMIN) {
    throw new UnauthorizedError("Admin access required!");
  }
  return user;
};

/**
 *
 * @param handler
 * @param requiredRole
 * @returns This is hof which taker handler & role & according to role return handler or block access.
 */
export const withAuth = async <T>(
  handler: () => Promise<T>,
  requiredRole: UserRole
) => {
  const user = await currentUser();
  if (!user) {
    redirect("/auth/login");
  }
  if (requiredRole && user.role !== requiredRole) {
    redirect("/auth/unauthorized");
  }

  return handler();
};
