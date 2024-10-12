"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BackButton } from "./back-button";
import { Header } from "./Header";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerMainLabel?: string;
  headerSubLabel?: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: ("google" | "twitter" | "facebook")[];
  showFields?: boolean;
  changeFormType: () => void;
}

export const CardWrapper = ({
  children,
  headerMainLabel,
  headerSubLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
  showFields, // Added showFields prop
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
          {!showFields && googleProvider && (
            <div className="flex flex-col gap-3">
              {googleProvider.map((provider) => (
                <Social key={provider} showField={provider} />
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent>{children}</CardContent>
        <p className="text-muted-foreground text-xl flex items-center justify-center my-3">
          or
        </p>

        {!showFields && otherProviders && (
          <div className="flex gap-5 flex-col justify-center">
            {otherProviders.map((provider) => (
              <Social key={provider} showField={provider} />
            ))}
          </div>
        )}
      </div>
      <CardFooter>
        <p>
          By joining, you agree to the Fiverr Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.
        </p>
      </CardFooter>
    </Card>
  );
};
