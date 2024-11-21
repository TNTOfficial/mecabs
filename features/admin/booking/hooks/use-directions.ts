"use client";

import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

interface DirectionsResult {
  route: google.maps.LatLng[] | null;
  distance: string | null;
  duration: string | null;
  error: string | null;
  tollCount: number;
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
    tollCount: 0,
  });

  const routesLib = useMapsLibrary("routes");
  useEffect(() => {
    if (!routesLib || !pickUp || !dropoff) {
      return;
    }

    const directionService = new routesLib.DirectionsService();

    // fn to count toll roads
    const countTollRoads = (route: google.maps.DirectionsRoute): number => {
      let tollCount = 0;
      console.log(route);
      if (route.legs[0].steps) {
        route.legs[0].steps.forEach((step) => {
          if (
            step.instructions &&
            step.instructions.toLowerCase().includes("toll")
          ) {
            tollCount++;
          }
        });
      }
      return tollCount;
    };

    directionService.route(
      {
        origin: pickUp,
        destination: dropoff,
        travelMode: google.maps.TravelMode.DRIVING,
        avoidTolls: false,
        optimizeWaypoints: true,
        provideRouteAlternatives: true,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          const route = response.routes[0];
          const tollCount = countTollRoads(route);
          setResult({
            route: route.overview_path,
            distance: route.legs[0].distance?.text || null,
            duration: route.legs[0].duration?.text || null,
            error: null,
            tollCount: tollCount,
          });
        } else {
          setResult({
            route: null,
            distance: null,
            duration: null,
            error: "Failed to calculate directions",
            tollCount: 0,
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
      tollCount: 0,
    });
  };
  return {
    distance: result.distance,
    tollCount: result.tollCount,
    route: result.route,
    duration: result.duration,
    error: result.error,
    resetDirections,
  };
};
