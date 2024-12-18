import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useAutoComplete } from "../hooks/use-auto-complete";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
export interface AutoCompleteInputRef {
  reset: () => void;
  setValue: (value: string) => void;
  getValue: () => string;
}

export const AutoCompleteInput = forwardRef<
  AutoCompleteInputRef,
  {
    onPlaceValueSet: (place: string) => void;
    onPlaceSelect: (place: google.maps.places.AutocompletePrediction) => void;
    placeholder: string;
    showLocator?: boolean;
    defaultValue?: string;
    name?: string;
    onLocatorClick?: () => void;
    isLoadingLocation?: boolean;
  }
>(
  (
    {
      onPlaceSelect,
      placeholder,
      onPlaceValueSet,
      defaultValue,
      name,
      showLocator,
      onLocatorClick,
      isLoadingLocation = false,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(defaultValue || "");
    const { predictions, loading, resetPredictions } =
      useAutoComplete(inputValue);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [showPredictions, setShowPredictions] = useState(false);

    useEffect(() => {
      if (defaultValue !== undefined) {
        setInputValue(defaultValue);
      }
    }, [defaultValue]);

    const handleSelect = (place: google.maps.places.AutocompletePrediction) => {
      setInputValue(place.description);
      onPlaceSelect(place);
      onPlaceValueSet(place.description);
      setHighlightedIndex(-1);
      setShowPredictions(false);
      resetPredictions();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!showPredictions) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prevIndex) =>
            Math.min(predictions.length - 1, prevIndex + 1)
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prevIndex) => Math.max(-1, prevIndex - 1));
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex >= 0 && predictions[highlightedIndex]) {
            handleSelect(predictions[highlightedIndex]);
          }
          break;
        case "Escape":
          setShowPredictions(false);
          break;
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onPlaceValueSet(newValue);
      setShowPredictions(true);
    };

    // Expose methods through ref
    useImperativeHandle(ref, () => ({
      reset: () => {
        setInputValue("");
        resetPredictions();
        onPlaceValueSet("");
      },
      setValue: (value: string) => {
        setInputValue(value);
        onPlaceValueSet(value);
      },
      getValue: () => inputValue,
    }));

    return (
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowPredictions(true)}
          onBlur={() => {
            // Delay hiding predictions to allow click events to fire
            setTimeout(() => setShowPredictions(false), 200);
          }}
          placeholder={placeholder}
          name={name}
          className="w-full p-2 border border-gray-500 rounded-md focus:border-blue-700 focus-visible:outline-none"
        />
        {showLocator && !inputValue && (
          <Button
            type="button"
            variant="link"
            className={cn(
              "absolute right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors",
              isLoadingLocation && "animate-spin"
            )}
            onClick={onLocatorClick}
            disabled={isLoadingLocation}
          >
            <MapPin className="h-5 w-5" />
          </Button>
        )}
        {loading && (
          <div className="absolute right-2 top-2 animate-spin">⌛</div>
        )}
        {showPredictions && predictions.length > 0 && (
          <ul className="absolute z-50 w-full bg-white border rounded-md mt-1 shadow-lg max-h-60 overflow-auto">
            {predictions.map((prediction, index) => (
              <li
                key={prediction.place_id}
                onClick={() => handleSelect(prediction)}
                className={`p-2 cursor-pointer hover:bg-gray-100 ${
                  highlightedIndex === index ? "bg-gray-200" : ""
                }`}
              >
                {prediction.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

AutoCompleteInput.displayName = "AutoCompleteInput";
