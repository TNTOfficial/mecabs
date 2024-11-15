import { useState, useEffect } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

export const useAutoComplete = (input: string) => {
  const [predictions, setPredictions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const placesLib = useMapsLibrary("places");

  useEffect(() => {
    if (!placesLib || !input) {
      setPredictions([]);
      return;
    }

    const autocompleteService = new placesLib.AutocompleteService();
    setLoading(true);

    // Define Melbourne bounds
    const melbourneBounds = new google.maps.LatLngBounds(
      // Southwest corner
      new google.maps.LatLng(-38.4034, 144.5937),
      // Northeast corner
      new google.maps.LatLng(-37.5112, 145.5125)
    );

    autocompleteService.getPlacePredictions(
      {
        input,
        componentRestrictions: { country: "AU" },
        locationRestriction: melbourneBounds,
      },
      (results, status) => {
        setLoading(false);
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          setPredictions(results);
        } else {
          setError("Failed to fetch predictions");
          setPredictions([]);
        }
      }
    );
  }, [input, placesLib]);

  const resetPredictions = () => {
    setPredictions([]);
  };

  return { predictions, loading, error, resetPredictions };
};
