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
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <Header
          mainLabel={headerMainLabel}
          subLabel={headerSubLabel}
          changeFormType={changeFormType}
        />
        {!showFields && googleProvider && (
          <div className="flex flex-col space-y-2 w-[600px]">
            {googleProvider.map((provider) => (
              <Social key={provider} showField={provider} />
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
      <p className="text-muted-foreground text-xl flex items-center justify-center">
        or
      </p>

      {!showFields && otherProviders && (
        <div className="flex space-x-4 justify-center">
          {otherProviders.map((provider) => (
            <Social key={provider} showField={provider} />
          ))}
        </div>
      )}
      {/* <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter> */}
    </Card>
  );
};
