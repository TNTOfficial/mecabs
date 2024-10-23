import React, { useEffect, useMemo, useCallback } from "react";
import { Map as GoogleMap, useMap } from "@vis.gl/react-google-maps";
import { Card } from "@/components/ui/card";
import { Clock, Navigation2 } from "lucide-react";
import { useDirections } from "@/features/booking/hooks/use-directions";

interface MapProps {
  pickup: google.maps.LatLngLiteral | null;
  dropoff: google.maps.LatLngLiteral | null;
}

const SIDEBAR_WIDTH = 400;
const MIN_ZOOM = 11;
const MAX_ZOOM = 15;
const DEFAULT_ZOOM = 12;
const NAVBAR_HEIGHT = 80;

const PADDING = {
  top: 120,
  right: SIDEBAR_WIDTH + 150,
  bottom: 120,
  left: 150,
};

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
      });
      markers.push(pickupMarker);
    }

    if (dropoff) {
      const dropoffMarker = new google.maps.Marker({
        map,
        position: dropoff,
        title: "Dropoff Location",
      });
      markers.push(dropoffMarker);
    }

    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [map, pickup, dropoff]);

  return null;
};

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
      strokeColor: "#4285F4",
      strokeOpacity: 1.0,
      strokeWeight: 7,
      draggable: false,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div class="p-2">
          <div class="flex items-center gap-2">
            <span>${distance}</span> • <span>${duration}</span>
          </div>
        </div>
      `,
    });

    polyline.addListener(
      "mouseover",
      (e: { latLng: google.maps.LatLngLiteral }) => {
        const position = e.latLng;
        if (position) {
          infoWindow.setPosition(position);
          infoWindow.open(map);
        }
      }
    );

    polyline.addListener("mouseout", () => {
      infoWindow.close();
    });

    polyline.setMap(map);

    return () => {
      polyline.setMap(null);
      infoWindow.close();
    };
  }, [map, path, pickup, dropoff, distance, duration]);

  return null;
};

const calculateOptimalView = (
  points: google.maps.LatLngLiteral[],
  mapWidth: number,
  mapHeight: number
) => {
  const bounds = new google.maps.LatLngBounds();
  points.forEach((point) => bounds.extend(point));

  const center = bounds.getCenter();
  const ne = bounds.getNorthEast();
  const sw = bounds.getSouthWest();

  const boundsWidth = ne.lng() - sw.lng();
  const boundsHeight = ne.lat() - sw.lat();

  const horizontalOffsetRatio = (SIDEBAR_WIDTH / mapWidth) * 1.5;
  const verticalOffsetRatio = (NAVBAR_HEIGHT / mapHeight) * 1.5;

  const offsetLng = Math.max(boundsWidth * horizontalOffsetRatio, 0.06);
  const offsetLat = Math.max(boundsHeight * verticalOffsetRatio, 0.02);

  const adjustedCenter = new google.maps.LatLng(
    center.lat() - offsetLat,
    center.lng() + offsetLng
  );

  return {
    bounds,
    adjustedCenter,
    boundsWidth,
    boundsHeight,
  };
};

export const Map: React.FC<MapProps> = ({ pickup, dropoff }) => {
  const center = useMemo(() => {
    return { lat: -37.8136, lng: 144.9631 };
  }, []);

  const { route, distance, duration, error } = useDirections(pickup, dropoff);
  const map = useMap();

  const updateMapView = useCallback(() => {
    if (!map) return;

    const mapDiv = map.getDiv();
    const mapWidth = mapDiv.offsetWidth;
    const mapHeight = mapDiv.offsetHeight;

    if (pickup && dropoff) {
      const points = [pickup, dropoff];
      if (route) {
        route.forEach((point) =>
          points.push({ lat: point.lat(), lng: point.lng() })
        );
      }

      const { bounds, adjustedCenter, boundsWidth, boundsHeight } =
        calculateOptimalView(points, mapWidth, mapHeight);

      const dynamicPadding = {
        ...PADDING,
        right: PADDING.right + (boundsWidth > 0.1 ? 200 : 100),
        top: PADDING.top + (boundsHeight > 0.1 ? 100 : 50),
        bottom: PADDING.bottom + (boundsHeight > 0.1 ? 100 : 50),
        left: PADDING.left + (boundsWidth > 0.1 ? 100 : 50),
      };

      map.fitBounds(bounds, dynamicPadding);

      setTimeout(() => {
        map.panTo(adjustedCenter);
        const currentZoom = map.getZoom();
        if (currentZoom) {
          const zoomAdjustment = boundsWidth > 0.2 ? 1 : 0.5;
          const newZoom = Math.min(
            Math.max(currentZoom - zoomAdjustment, MIN_ZOOM),
            MAX_ZOOM
          );
          map.setZoom(newZoom);
        }
      }, 200);
    } else if (pickup) {
      const adjustedCenter = {
        lat: pickup.lat - 0.01,
        lng: pickup.lng + (0.06 * mapWidth) / SIDEBAR_WIDTH,
      };
      map.setCenter(adjustedCenter);
      map.setZoom(13);
    } else {
      const adjustedCenter = {
        lat: center.lat - 0.01,
        lng: center.lng + (0.06 * mapWidth) / SIDEBAR_WIDTH,
      };
      map.setCenter(adjustedCenter);
      map.setZoom(DEFAULT_ZOOM);
    }
  }, [map, pickup, dropoff, route, center]);

  useEffect(() => {
    updateMapView();
  }, [updateMapView]);

  useEffect(() => {
    const handleResize = () => {
      updateMapView();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateMapView]);



  return (
    <div className="relative w-full h-full">
      <GoogleMap
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
        center={center}
        defaultZoom={DEFAULT_ZOOM}
        disableDefaultUI={true}
        // options={mapOptions}
        style={{ width: "100%", height: "100%" }}
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

      {distance && duration && (
        <Card className="absolute top-20 right-4 p-4 bg-white shadow-lg">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Navigation2 className="w-4 h-4" />
              <span className="text-sm font-medium">{distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
          </div>
        </Card>
      )}

      {error && (
        <Card className="absolute top-20 left-4 p-4 bg-red-50 text-red-600">
          <p className="text-sm">{error}</p>
        </Card>
      )}
    </div>
  );
};
