'use client'
import { http } from "@/lib/http";
import { detectIpLocation } from "@/store/location.actions";
import { useLocationStore } from "@/store/location.store"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { AirQualityCard } from "./components/air-quality-card";

export type AQIMarker = {
    id: string;
    name: string;
    lat: number;
    lng: number;
    aqi: number;
    pm25: number;
    pm10: number;
    o3: number;
    no2: number;
    so2: number;
    co: number;
};

const Map = dynamic(() => import("./components/map"), { ssr: false })

const AirQualityPage = () => {
    const [markers, setMarkers] = useState<AQIMarker[]>([]);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false)
    const {
        lat,
        lng,
    } = useLocationStore();

    useEffect(() => {
        console.log("Map coordinates changed:", { lat, lng });
        async function fetchAQIData() {
            if (lat == null || lng == null) return;
            try {
                const res = await http.get(
                    `/api/location/nearby-cities?lat=${lat}&lon=${lng}`
                );
                const data = res.data;
                console.log("Fetching nearby cities AQI data...", data);
                console.log("Nearby cities AQI data:", res);

                const normalized: AQIMarker[] = data.map((city: any) => ({
                    id: city.name,
                    name: city.name,
                    lat: city.lat,
                    lng: city.lon,
                    aqi: city.aqi?.data.aqi ?? 0,
                    pm25: city.aqi?.data.iaqi.pm25?.v ?? 0,
                    pm10: city.aqi?.data.iaqi.pm10?.v ?? 0,
                    o3: city.aqi?.data.iaqi.o3?.v ?? 0,
                    no2: city.aqi?.data.iaqi.no2?.v ?? 0,
                    so2: city.aqi?.data.iaqi.so2?.v ?? 0,
                    co: city.aqi?.data.iaqi.co?.v ?? 0,

                }));

                setMarkers(normalized);
            } catch (err) {
                console.error("Failed to load AQI data", err);
            } finally {
                setLoading(false);
            }
        }

        fetchAQIData();
    }, [lat, lng]);


    useEffect(() => {
        setMounted(true)
        if (lat == null && lng == null) {
            detectIpLocation();
        }
    }, [])

    if (!mounted) return null

    return (
        <>
            <Map
                markers={markers}
                loading={loading}
                lat={lat}
                lng={lng}
                setMarkers = {setMarkers}
            />

        </>
    )
}
export default AirQualityPage
