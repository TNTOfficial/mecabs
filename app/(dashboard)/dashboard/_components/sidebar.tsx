import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col shrink-0 w-[300px] top-0 fixed left-0 h-[100dvh] bg-muted ">
      <Logo />
      <SidebarRoutes />
    </aside>
  );
};
