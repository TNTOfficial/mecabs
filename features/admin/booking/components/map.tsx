import React, { useEffect, useMemo, useCallback } from "react";
import { Map as GoogleMap, useMap } from "@vis.gl/react-google-maps";
import { Card } from "@/components/ui/card";
// import { Clock, Navigation2 } from "lucide-react";
import { useDirections } from "@/features/admin/booking/hooks/use-directions";

interface MapProps {
  pickup: google.maps.LatLngLiteral | null;
  dropoff: google.maps.LatLngLiteral | null;
}

// Constants for map configuration
const MIN_ZOOM = 11;
const MAX_ZOOM = 15;
const DEFAULT_ZOOM = 14; // Reduced from 20 for better initial view
const PADDING_PERCENTAGE = 20; // Percentage of viewport to use as padding

// Component for markers
const AdvancedMarkers: React.FC<{
  pickup: google.maps.LatLngLiteral | null;
  dropoff: google.maps.LatLngLiteral | null;
}> = ({ pickup, dropoff }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const markers: google.maps.Marker[] = [];

    if (pickup) {
      const pickupMarker = new google.maps.Marker({
        map,
        position: pickup,
        title: "Pickup Location",
        icon: {
          url: "https://cdn-icons-png.flaticon.com/128/14035/14035502.png",
          scaledSize: new google.maps.Size(40, 40),
        },
        animation: google.maps.Animation.DROP,
      });
      markers.push(pickupMarker);
    }

    if (dropoff) {
      const dropoffMarker = new google.maps.Marker({
        map,
        position: dropoff,
        title: "Dropoff Location",
        icon: {
          url: "https://cdn-icons-png.flaticon.com/128/14034/14034747.png",
          scaledSize: new google.maps.Size(40, 40),
        },
        animation: google.maps.Animation.DROP,
      });
      markers.push(dropoffMarker);
    }

    return () => markers.forEach((marker) => marker.setMap(null));
  }, [map, pickup, dropoff]);

  return null;
};

// Component for route visualization
const RoutePolyline: React.FC<{
  path: google.maps.LatLng[];
  pickup: google.maps.LatLngLiteral | null;
  dropoff: google.maps.LatLngLiteral | null;
  distance: string;
  duration: string;
}> = ({ path, pickup, dropoff, distance, duration }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !pickup || !dropoff) return;

    const polyline = new google.maps.Polyline({
      path,
      geodesic: true,
      strokeColor: "#0000ff",
      strokeOpacity: 1.0,
      strokeWeight: 7,
      draggable: false,
    });

    // const infoWindow = new google.maps.InfoWindow({
    //   content: `
    //     <div class="p-2">
    //       <div class="flex items-center gap-2">
    //         <span>${distance}</span> • <span>${duration}</span>
    //       </div>
    //     </div>
    //   `,
    // });

    // Add hover effects for the route
    // polyline.addListener(
    //   "mouseover",
    //   (e: { latLng: google.maps.LatLngLiteral }) => {
    //     const position = e.latLng;
    //     if (position) {
    //       infoWindow.setPosition(position);
    //       infoWindow.open(map);
    //     }
    //   }
    // );

    // polyline.addListener("mouseout", () => {
    //   infoWindow.close();
    // });

    polyline.setMap(map);

    return () => {
      polyline.setMap(null);
      // infoWindow.close();
    };
  }, [map, path, pickup, dropoff, distance, duration]);

  return null;
};

// Improved bounds calculation function
const calculateOptimalBounds = (
  points: google.maps.LatLngLiteral[],
  map: google.maps.Map
) => {
  const bounds = new google.maps.LatLngBounds();
  points.forEach((point) => bounds.extend(point));

  // Get map dimensions
  const mapDiv = map.getDiv();
  const mapWidth = mapDiv.offsetWidth;
  const mapHeight = mapDiv.offsetHeight;

  // Calculate padding based on viewport size
  const paddingX = (mapWidth * PADDING_PERCENTAGE) / 100;
  const paddingY = (mapHeight * PADDING_PERCENTAGE) / 100;

  // Apply padding to bounds
  const ne = bounds.getNorthEast();
  const sw = bounds.getSouthWest();
  const latSpan = ne.lat() - sw.lat();
  const lngSpan = ne.lng() - sw.lng();

  // Extend bounds with calculated padding
  bounds.extend(
    new google.maps.LatLng(
      ne.lat() + latSpan * (paddingY / mapHeight),
      ne.lng() + lngSpan * (paddingX / mapWidth)
    )
  );
  bounds.extend(
    new google.maps.LatLng(
      sw.lat() - latSpan * (paddingY / mapHeight),
      sw.lng() - lngSpan * (paddingX / mapWidth)
    )
  );

  return bounds;
};

// Main Map component
export const Map: React.FC<MapProps> = ({ pickup, dropoff }) => {
  const defaultCenter = useMemo(() => ({ lat: -37.8136, lng: 144.9631 }), []);
  const { route, distance, duration, error } = useDirections(pickup, dropoff);
  const map = useMap();

  const updateMapView = useCallback(() => {
    if (!map || !pickup || !dropoff) return;

    // Collect all relevant points
    const points = [pickup, dropoff];
    if (route) {
      route.forEach((point) =>
        points.push({ lat: point.lat(), lng: point.lng() })
      );
    }

    // Calculate and apply optimal bounds
    const bounds = calculateOptimalBounds(points, map);
    map.fitBounds(bounds);

    // Apply zoom constraints after a short delay to ensure bounds are set
    setTimeout(() => {
      const currentZoom = map.getZoom();
      if (currentZoom) {
        const newZoom = Math.min(Math.max(currentZoom, MIN_ZOOM), MAX_ZOOM);
        if (newZoom !== currentZoom) {
          map.setZoom(newZoom);
        }
      }
    }, 100);
  }, [map, pickup, dropoff, route]);

  // Update view when locations or route changes
  useEffect(() => {
    updateMapView();
  }, [updateMapView]);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => updateMapView();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateMapView]);

  return (
    <div className="relative w-full lg:h-full h-[400px]">
      <GoogleMap
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
        defaultCenter={defaultCenter}
        defaultZoom={DEFAULT_ZOOM}
        disableDefaultUI={true}
        // streetViewControl={false}
        // zoomControl={true}
        // mapTypeControl={true}
        // fullscreenControl={true}
      >
        <AdvancedMarkers pickup={pickup} dropoff={dropoff} />
        {route && pickup && dropoff && (
          <RoutePolyline
            path={route}
            pickup={pickup}
            dropoff={dropoff}
            distance={distance!}
            duration={duration!}
          />
        )}
      </GoogleMap>

      {/* {distance && duration && (
        <Card className="absolute top-4 right-4 p-4 bg-white/90 backdrop-blur shadow-lg">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Navigation2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">{distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
          </div>
        </Card>
      )} */}

      {error && (
        <Card className="absolute top-4 left-4 p-4 bg-red-50 text-red-600">
          <p className="text-sm">{error}</p>
        </Card>
      )}
    </div>
  );
};
