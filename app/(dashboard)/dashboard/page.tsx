import { RoleGuard } from "@/features/auth/guard/role-guard";

const DashboardHomePage = () => {
  return (
    <>
      <RoleGuard allowedRoles={["ADMIN"]}>
        <div>I am Admin</div>
      </RoleGuard>
      <RoleGuard allowedRoles={["USER"]}>
        <div>I am user</div>
      </RoleGuard>
    </>
  );
};

export default DashboardHomePage;
