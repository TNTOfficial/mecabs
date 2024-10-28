"use client";

import { UserRole } from "@prisma/client";
import { useCurrentUser } from "./use-current-user";

export const useRoleCheck = (allowedRoles: UserRole[]) => {
  const { user, isLoading } = useCurrentUser();

  return {
    isAllowed: user && allowedRoles.includes(user.role),
    isLoading,
    user,
  };
};
