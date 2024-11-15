"use client";

import { useState } from "react";

interface GeolocationState {
  location: google.maps.LatLngLiteral | null;
  error: string | null;
  isLoading: boolean;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    location: null,
    error: null,
    isLoading: false,
  });

  const getCurrentLocation = () => {
    return new Promise<google.maps.LatLngLiteral>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
        return;
      }
      setState((prev) => ({ ...prev, isLoading: true }));

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setState({
            location,
            error: null,
            isLoading: false,
          });
          resolve(location);
        },
        (error) => {
          setState((prev) => ({
            ...prev,
            error: error.message,
            isLoading: false,
          }));
          reject(error);
        }
      );
    });
  };
  // useEffect(() => {
  //   if (!navigator.geolocation) {
  //     setState((prev) => ({
  //       ...prev,
  //       error: "Geolocation is not supported by your browser",
  //     }));
  //     return;
  //   }

  //   // Getting user's current location using js's navigator object.
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setState({
  //         location: {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         },
  //         error: null,
  //       });
  //     },
  //     (error) => {
  //       setState((prev) => ({ ...prev, error: error.message }));
  //     }
  //   );
  // }, []);

  return { ...state, getCurrentLocation };
};
