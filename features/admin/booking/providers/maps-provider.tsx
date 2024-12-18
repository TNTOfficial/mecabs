import React from "react";
import { useMapsConfig } from "../hooks/use-maps-config";
import { APIProvider } from "@vis.gl/react-google-maps";
import logo from "@/public/logo.webp";
import Image from "next/image";
import { Loader } from "lucide-react";

interface MapsProviderProps {
  children: React.ReactNode;
}
export const MapsProvider: React.FC<MapsProviderProps> = ({ children }) => {
  const { config, error } = useMapsConfig();

  if (error) {
    return <div>Error loading maps: {error}</div>;
  }

  if (!config) {
    return (
      <div className="h-[100dvh] flex flex-col items-center justify-center">
        <div>
          <h1 className="font-bold lg:text-[3rem] text-[2rem] text-center">Welcome to <span className="text-blue-600">ME Cabs</span></h1>
        </div>
        <Image
          className="h-16 max-w-52 block mb-6"
          src={logo}
          alt="logo"
        />

        <Loader className="size-10 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return <APIProvider apiKey={config.apiKey}>{children}</APIProvider>;
};
