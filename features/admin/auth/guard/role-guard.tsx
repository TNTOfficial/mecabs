"use client";

import { UserRole } from "@prisma/client";
import React from "react";
import { useCurrentUser } from "../hooks/use-current-user";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
  fallback?: React.ReactNode;
}

export const RoleGuard: React.FC<RoleGuardProps> = ({
  children,
  allowedRoles,
  fallback = null,
}) => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <div className="animate-spin">Loading.... ⏳</div>;
  }

  if (user && allowedRoles.includes(user?.role)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};
