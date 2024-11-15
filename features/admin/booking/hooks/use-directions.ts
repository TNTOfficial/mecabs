"use client";

import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

interface DirectionsResult {
  route: google.maps.LatLng[] | null;
  distance: string | null;
  duration: string | null;
  error: string | null;
}

export const useDirections = (
  pickUp: google.maps.LatLngLiteral | null,
  dropoff: google.maps.LatLngLiteral | null
) => {
  const [result, setResult] = useState<DirectionsResult>({
    route: null,
    distance: null,
    duration: null,
    error: null,
  });

  const routesLib = useMapsLibrary("routes");
  useEffect(() => {
    if (!routesLib || !pickUp || !dropoff) {
      return;
    }

    const directionService = new routesLib.DirectionsService();

    directionService.route(
      {
        origin: pickUp,
        destination: dropoff,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          const route = response.routes[0];
          setResult({
            route: route.overview_path,
            distance: route.legs[0].distance?.text || null,
            duration: route.legs[0].duration?.text || null,
            error: null,
          });
        } else {
          setResult({
            route: null,
            distance: null,
            duration: null,
            error: "Failed to calculate directions",
          });
        }
      }
    );
  }, [pickUp, dropoff, routesLib]);

  const resetDirections = () => {
    setResult({
      distance: null,
      duration: null,
      route: null,
      error: null,
    });
  };
  return {
    distance: result.distance,
    route: result.route,
    duration: result.duration,
    error: result.error,
    resetDirections,
  };
};
