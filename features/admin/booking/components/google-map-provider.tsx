"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import React from "react";
interface GoogleMapProviderProps {
  children: React.ReactNode;
}
export const GoogleMapProvider: React.FC<GoogleMapProviderProps> = ({
  children,
}) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      {children}
    </APIProvider>
  );
};
