import { UserButton } from "@/features/auth/components/user-button";

export const Navbar = () => {
  return (
    <nav className="w-full border-l bg-white sticky top-0 z-20 flex items-center p-4 h-[68px]">
      <div className="ml-auto">
        <UserButton />
      </div>
    </nav>
  );
};
