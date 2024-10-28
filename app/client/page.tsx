"use client";
import { RoleGuard } from "@/features/auth/guard/role-guard";
import { useRoleCheck } from "@/features/auth/hooks/use-role-check";
import React from "react";

const TestClientPage = () => {
  const { isAllowed, user } = useRoleCheck(["USER"]);
  return (
    <RoleGuard allowedRoles={["USER"]}>
      <div> Allowed to visit page:{isAllowed}</div>
      <div>{JSON.stringify(user)}</div>
    </RoleGuard>
  );
};

export default TestClientPage;
