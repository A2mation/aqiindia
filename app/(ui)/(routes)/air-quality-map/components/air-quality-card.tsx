"use client";

import { useEffect } from "react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CircularLevel } from "@/components/ui/circularLevel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Graph } from "./graph";
import "@/styles/graph-scrollbar.css";

import { AQIMarker } from "../page";
import { cn } from "@/lib/utils";
import {
    getAQIBgColor,
    getAQITextColor,
    getAQITheme,
} from "@/helpers/aqi-color-pallet";
import { useLocationStore } from "@/store/location.store";
import { detectGpsLocation } from "@/store/location.actions";

type AirQualityCardProps = {
    station: AQIMarker | null;
};

export function AirQualityCard({ station }: AirQualityCardProps) {
    const store = useLocationStore();

    /* ---------------- GPS fallback (SAFE) ---------------- */
    useEffect(() => {
        if (!station && !store.city) {
            detectGpsLocation();
        }
    }, [station, store.city]);

    /* ---------------- Normalize data ---------------- */
    const data = {
        name: station?.name ?? store.city ?? "Unknown location",
        aqi: station?.aqi ?? store.aqi ?? 0,
        pm25: station?.pm25 ?? store.pm25 ?? 0,
        pm10: station?.pm10 ?? store.pm10 ?? 0,
        co: station?.co ?? store.co ?? 0,
        no2: station?.no2 ?? store.no2 ?? 0,
        so2: station?.so2 ?? store.so2 ?? 0,
        o3: station?.o3 ?? store.o3 ?? 0,
    };

    const theme = getAQITheme(data.aqi);

    /* ---------------- UI ---------------- */
    return (
        <Card className="w-80 h-[75vh] max-h-[680px] bg-primary text-secondary border-gray-800 flex flex-col overflow-hidden">
            {/* ================= HEADER ================= */}
            <CardHeader className="space-y-4 pb-4">
                <h1 className="text-xl font-semibold">
                    <span className="text-gray-400">AQI</span> Air Quality Map
                </h1>

                <div className="flex items-center gap-1.5 text-blue-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{data.name}</span>
                </div>

                <div className="pt-4 border-t border-gray-800">
                    <span className="text-xs text-gray-400">
                        🌫️ Air Quality Index
                    </span>

                    <div className="flex items-center gap-3 mt-2">
                        <div
                            className={cn(
                                "text-6xl font-bold",
                                getAQITextColor(data.aqi)
                            )}
                        >
                            {data.aqi}
                        </div>

                        <Badge
                            className={cn(
                                "text-white",
                                getAQIBgColor(data.aqi)
                            )}
                        >
                            {theme.label}
                        </Badge>
                    </div>
                </div>
            </CardHeader>

            {/* ================= CONTENT ================= */}
            <CardContent className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scroll">
                {/* POLLUTANTS TABLE */}
                <table className="w-full max-w-[260px] mx-auto border-separate border-spacing-y-3">
                    <thead>
                        <tr className="text-xs text-gray-400">
                            <th className="px-3 text-center">Pollutant</th>
                            <th className="px-3 text-center">Value</th>
                            <th className="px-3 text-center">Unit</th>
                            <th className="px-3 text-center">Level</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[
                            { name: "PM2.5", value: data.pm25, unit: "μg/m³" },
                            { name: "PM10", value: data.pm10, unit: "μg/m³" },
                            { name: "CO", value: data.co, unit: "ppm" },
                            { name: "NO₂", value: data.no2, unit: "ppb" },
                            { name: "SO₂", value: data.so2, unit: "ppb" },
                            { name: "O₃", value: data.o3, unit: "ppb" },
                        ].map((p) => (
                            <tr key={p.name} className="bg-gray-900/40">
                                <td className="px-3 py-2 text-center">{p.name}</td>
                                <td className="px-3 py-2 text-center">{p.value}</td>
                                <td className="px-3 py-2 text-center">{p.unit}</td>
                                <td className="px-3 py-2 text-center">
                                    <CircularLevel
                                        value={p.value}
                                        max={200}
                                        colorClass={getAQITextColor(p.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* TREND GRAPH */}
                <div className="pt-4 border-t border-gray-800">
                    <h3 className="text-sm text-gray-300">
                        AQI (US) Trend – Last 24 hours
                    </h3>
                    <div className="h-32">
                        <Graph />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
