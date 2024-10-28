import Link from "next/link";
// import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 hover:opacity-65 transition  px-4">
        {/* <div className="size-8 relative">
          <Image src="/logo.png" alt="Image AI" fill />
        </div> */}
        <h1 className={cn(font.className, "text-xl font-bold pt-2")}>
          Melbourne Cabs
        </h1>
      </div>
    </Link>
  );
};