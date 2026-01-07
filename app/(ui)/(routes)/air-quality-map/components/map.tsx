"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { getAQIBgColor } from "@/helpers/aqi-color-pallet";
import { AirQualityCard } from "./air-quality-card";
import { Popup } from "react-leaflet";
import { AQIMarker } from "../page";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const aqiIcon = (value: number) =>
  L.divIcon({
    className: "bg-transparent",
    html: `
      <div class="relative flex items-center justify-center">
        <span class="absolute inline-flex h-10 w-10 rounded-full ${getAQIBgColor(
          value
        )} opacity-60 animate-ping"></span>
        <span class="relative inline-flex items-center justify-center px-2 py-2 rounded-full ${getAQIBgColor(
          value
        )} text-white text-sm font-bold shadow-md">
          ${value}
        </span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

export default function Map({
  markers,
  loading,
  lat,
  lng,
}: {
  markers: AQIMarker[];
  loading: boolean;
  lat: number | null;
  lng: number | null;
}) {
  const [mounted, setMounted] = useState(false);
  const [selectedStation, setSelectedStation] =
    useState<AQIMarker | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || loading || lat == null || lng == null) return null;

  return (
    <div className=" w-full h-full rounded-2xl overflow-hidden bg-white shadow">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((station) => (
          <Marker
            key={station.id}
            position={[station.lat, station.lng]}
            icon={aqiIcon(station.aqi)}
            eventHandlers={{
              click: () => setSelectedStation(station),
            }}
          >
            <Popup offset={[0, -10]}>
              <strong>{station.name}</strong>
              <br />
              AQI: <b>{station.aqi}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* CARD OVERLAY */}
      <div className="absolute top-3/4 md:top-1/4 left-8 md:left-15 z-80">
        <AirQualityCard station={selectedStation} />
      </div>
    </div>
  );
}
