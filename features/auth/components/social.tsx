"use client";

import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "@/components/ui/button";

interface ShowSocialProps {
  showField: "google" | "twitter" | "facebook";
}

export const Social = ({ showField }: ShowSocialProps) => {
  const onClick = (provider: "google" | "facebook" | "twitter") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          onClick(showField);
        }}
      >
        {showField === "google" && <FcGoogle className="h-5 w-5" />}
        {showField === "twitter" && <FaXTwitter className="h-5 w-5" />}
        {showField === "facebook" && <FaFacebookF className="h-5 w-5" />}
        <p className="p-2">Continue with {showField}</p>
      </Button>
    </div>
  );
};
