"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full size-sm">
      <Link href={href}> <IoChevronBack /> {label}</Link>
    </Button>
  );
};
