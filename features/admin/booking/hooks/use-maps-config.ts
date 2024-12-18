import { decrypt } from "@/utils/encryption";
import { useState, useEffect } from "react";

interface MapsConfig {
  mapId: string;
  gk: string;
}
export const useMapsConfig = () => {
  const [config, setConfig] = useState<{
    mapId: string;
    apiKey: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/api/gm");
        if (!response.ok) {
          throw new Error("Failed to load maps configuration");
        }
        const data: MapsConfig = await response.json();

        if (!data.gk) {
          throw new Error("No encrypted API key received from server");
        }

        try {
          // Decrypt the API key
          const decryptedKey = decrypt(data.gk);

          setConfig({
            mapId: data.mapId,
            apiKey: decryptedKey,
          });
        } catch (decryptError) {
          console.log(decryptError);

          //   throw new Error(`Failed to decrypt API key: ${decryptError.message}`);
        }
      } catch (err) {
        console.error("Error fetching maps config:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      }
    };

    fetchConfig();
  }, []);

  return { config, error };
};
