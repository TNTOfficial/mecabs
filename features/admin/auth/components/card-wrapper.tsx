"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./Header";
import { Social } from "./social";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  headerMainLabel?: string;
  headerSubLabel?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: ("google" | "facebook")[];
  showFields?: boolean;
  showPhoneAuth?: boolean;
  changeFormType?: () => void;
}

export const CardWrapper = ({
  children,
  headerMainLabel,
  headerSubLabel,
  showSocial,
  showFields,
  showPhoneAuth,
  changeFormType,
}: CardWrapperProps) => {
  // seperating providers
  const googleProvider = showSocial?.filter(
    (provider) => provider === "google"
  );

  const otherProviders = showSocial?.filter(
    (provider) => provider !== "google"
  );
  return (
    <Card className="border-none shadow-none px-5 flex flex-col justify-between items-stretch  py-10 h-full ">
      <div className="headerBodyWrapper">
        <CardHeader>
          <Header
            mainLabel={headerMainLabel}
            subLabel={headerSubLabel}
            changeFormType={changeFormType}
          />
          {!showFields && !showPhoneAuth && googleProvider && (
            <div className="flex flex-col gap-3">
              {googleProvider.map((provider) => (
                <Social key={provider} showField={provider} />
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent>{children}</CardContent>
        {!showFields && !showPhoneAuth && (
          <p className="text-muted-foreground text-xl flex items-center justify-center my-3">
            or
          </p>
        )}

        {!showFields && !showPhoneAuth && otherProviders && (
          <div className="flex gap-5 flex-col justify-center">
            {otherProviders.map((provider) => (
              <Social key={provider} showField={provider} />
            ))}
          </div>
        )}
      </div>
      <CardFooter>
        <p>
          By joining, you agree to the MeCabs
          <Link href="/terms" className="underline">
            Terms and Conditions
          </Link>
          and to occasionally receive emails from us. Please read our
          <Link href="/policy" className="underline">
            Privacy Policy
          </Link>
          to learn how we use your personal data.
        </p>
      </CardFooter>
    </Card>
  );
};
