import { UserButton } from "@/features/auth/components/user-button";
import { RiMenuFold3Line } from "react-icons/ri";

export const Navbar = () => {
  return (
    <nav className="w-full border-l bg-white sticky top-0 z-20 flex justify-end max-lg:justify-between items-center p-4 h-[68px]">
      <div className="collapsBtn cursor-pointer lg:hidden">
        <RiMenuFold3Line className="text-[1.6rem]" />
      </div>
      <div className="userdrop">
        <UserButton />
      </div>
    </nav>
  );
};
