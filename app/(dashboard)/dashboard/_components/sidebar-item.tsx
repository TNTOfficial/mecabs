import { cn } from "@/lib/utils";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  onClick,
}: SidebarItemProps) => {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className={cn(
          "text-black hover:text-blue-600 text-base flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all",
          isActive && "bg-blue-800 text-white"
        )}
      >
        <Icon className="text-[1.7rem] mr-3" />
        <span className="font-medium">{label}</span>
      </div>
    </Link>
  );
};
