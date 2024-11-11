import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col shrink-0 w-[300px] top-0 fixed lg:left-0 left-[-300px] h-[100dvh] bg-white">
      <Logo />
      <SidebarRoutes />
    </aside>
  );
};
