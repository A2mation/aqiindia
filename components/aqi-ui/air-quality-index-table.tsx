"use client"

import { useState } from "react"

type TabType = "aqi" | "pm" | "ozone" | "co" | "so2" | "no2"

interface AirQualityLevel {
    level: string
    range: string
    color: string
    icon: string
    description: string
}



const AirQualityIndexTable = () => {

    const [activeTab, setActiveTab] = useState<TabType>("aqi")

    const tabs: TabType[] = ["aqi", "pm", "ozone", "co", "so2", "no2"]
    const tabLabels: Record<TabType, string> = {
        aqi: "AQI",
        pm: "PM",
        ozone: "Ozone",
        co: "CO",
        so2: "SO2",
        no2: "NO2",
    }


    return (
        <>
            <div className="max-w-7xl mx-auto p-4 mt-5">
                {/* Tab Navigation */}
                <div className="bg-white ">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">{TAB_CONTENT[activeTab].title}</h2>
                    <p className="text-slate-600 text-base md:text-lg mb-6">{TAB_CONTENT[activeTab].description}</p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quality Levels Guide */}
                    <div className="lg:col-span-2 space-y-4 ">
                        <div className="bg-slate-100 rounded-3xl shadow-lg p-3 md:p-1 mb-8 flex gap-1 flex-wrap justify-between">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={` md:mx-1 my-1 md:my-4 px-2 md:px-10 py-2 rounded-full font-medium transition-all ${activeTab === tab ? "bg-slate-200 text-blue-500 shadow-md" : "text-slate-600 hover:text-slate-900"
                                        }`}
                                >
                                    {tabLabels[tab]}
                                </button>
                            ))}
                        </div>


                        <div className="space-y-4">
                            {QUALITY_LEVELS_BY_TAB[activeTab].map((level, index) => (
                                <div key={index} className="flex gap-6 items-start bg-slate-100 px-4 py-2 rounded-2xl">
                                    {/* Color Box */}
                                    <div className="pt-1">
                                        <div className={`w-12 h-12 rounded-lg ${level.color} flex-shrink-0`}></div>

                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-4">
                                            <h3 className="font-bold text-slate-900 text-lg">{level.level}</h3>
                                            <p className="text-slate-500 text-sm">({level.range})</p>
                                        </div>
                                        <p className="text-slate-600 mt-1 text-base leading-relaxed">{level.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Showcase */}
                    <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl overflow-hidden shadow-xl h-full">
                        <div className="relative aspect-square bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center">
                            <svg className="w-32 h-32 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2m15-11c0 1.105-1.343 2-3 2s-3-.895-3-2m3-11v2m0 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0"
                                />
                            </svg>
                        </div>
                        <div className="p-6 text-white">
                            <h3 className="text-xl font-bold mb-2">Cair +</h3>
                            <p className="text-amber-100">Indoor Air Quality Monitor</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AirQualityIndexTable



const QUALITY_LEVELS_BY_TAB: Record<TabType, AirQualityLevel[]> = {
    aqi: [
        {
            level: "Good",
            range: "0 to 50",
            color: "bg-green-500",
            icon: "😊",
            description: "The air is fresh and free from toxins. Enjoy outdoor activities without any health concerns.",
        },
        {
            level: "Moderate",
            range: "51 to 100",
            color: "bg-yellow-400",
            icon: "😐",
            description: "Air quality is acceptable for most, but sensitive individuals might experience mild discomfort.",
        },
        {
            level: "Poor",
            range: "101 to 150",
            color: "bg-orange-500",
            icon: "😷",
            description: "Breathing may become slightly uncomfortable, especially for those with respiratory issues.",
        },
        {
            level: "Unhealthy",
            range: "151 to 200",
            color: "bg-red-500",
            icon: "😢",
            description: "This air quality is particularly risky for children, pregnant women, and the elderly.",
        },
        {
            level: "Severe",
            range: "201 to 300",
            color: "bg-purple-600",
            icon: "😰",
            description: "Prolonged exposure can cause chronic health issues. Avoid outdoor activities.",
        },
        {
            level: "Hazardous",
            range: "301+",
            color: "bg-purple-800",
            icon: "🚨",
            description: "Life-threatening pollution levels. Stay indoors.",
        },
    ],

    pm: [
        {
            level: "Good",
            range: "0–12 µg/m³",
            color: "bg-green-500",
            icon: "😊",
            description: "PM2.5 concentration is low and poses minimal risk.",
        },
        {
            level: "Moderate",
            range: "12.1–35.4 µg/m³",
            color: "bg-yellow-400",
            icon: "😐",
            description: "Sensitive individuals may experience minor symptoms.",
        },
        {
            level: "Poor",
            range: "35.5–55.4 µg/m³",
            color: "bg-orange-500",
            icon: "😷",
            description: "Children, elderly, and asthmatics should limit exposure.",
        },
        {
            level: "Unhealthy",
            range: "55.5–150.4 µg/m³",
            color: "bg-red-500",
            icon: "😢",
            description: "Everyone may experience respiratory discomfort.",
        },
        {
            level: "Severe",
            range: "150.5–250.4 µg/m³",
            color: "bg-purple-600",
            icon: "😰",
            description: "Serious health effects with prolonged exposure.",
        },
        {
            level: "Hazardous",
            range: "250.5+ µg/m³",
            color: "bg-purple-800",
            icon: "🚨",
            description: "Emergency conditions. Avoid all outdoor activity.",
        },
    ],

    ozone: [
        {
            level: "Good",
            range: "0–54 ppb",
            color: "bg-green-500",
            icon: "😊",
            description: "Ozone levels are safe.",
        },
        {
            level: "Moderate",
            range: "55–100 ppb",
            color: "bg-yellow-400",
            icon: "😐",
            description: "Sensitive people may notice breathing discomfort.",
        },
        {
            level: "Poor",
            range: "101-168 ppb",
            color: "bg-orange-500",
            icon: "😷",
            description: "Sensitive individuals may experience more serious effects on the lungs and heart.",
        },
        {
            level: "Unhealthy",
            range: "169-208 ppb",
            color: "bg-red-500",
            icon: "😷",
            description: "Lung irritation and reduced lung function possible.",
        },
        {
            level: "Severe",
            range: "209-748 ppb",
            color: "bg-purple-600",
            icon: "😢",
            description: "Increased risk of respiratory damage.",
        },
        {
            level: "Hazardous",
            range: "749-1250+ ppb",
            color: "bg-purple-800",
            icon: "🚨",
            description: "Severe health effects for all populations.",
        },
    ],

    co: [
        {
            level: "Good",
            range: "0–4.4 ppm",
            color: "bg-green-500",
            icon: "😊",
            description: "No immediate health risk.",
        },
        {
            level: "Moderate",
            range: "4.5–9.4 ppm",
            color: "bg-yellow-400",
            icon: "😐",
            description: "Sensitive individuals may feel mild effects.",
        },
        {
            level: "Poor",
            range: "9.5–12.4 ppb",
            color: "bg-orange-500",
            icon: "😷",
            description: "Prolonged exposure may cause mild headaches and fatigue, especially in vulnerable groups.",
        },
        {
            level: "Unhealthy",
            range: "12.5–15.4 ppm",
            color: "bg-red-500",
            icon: "😷",
            description: "Reduced oxygen delivery to organs.",
        },
        {
            level: "Severe",
            range: "15.5-20.5 ppm",
            color: "bg-purple-600",
            icon: "😢",
            description: "Risk of heart and neurological issues.",
        },
        {
            level: "Hazardous",
            range: "20.6+ ppm",
            color: "bg-purple-800",
            icon: "🚨",
            description: "Potentially fatal exposure.",
        },
    ],

    so2: [
        {
            level: "Good",
            range: "0–35 ppb",
            color: "bg-green-500",
            icon: "😊",
            description: "No expected health effects.",
        },
        {
            level: "Moderate",
            range: "36–75 ppb",
            color: "bg-yellow-400",
            icon: "😐",
            description: "Sensitive individuals may experience irritation.",
        },
        {
            level: "Poor",
            range: "76–185 ppb",
            color: "bg-orange-500",
            icon: "😷",
            description: "Increased likelihood of respiratory symptoms and lung disease in sensitive individuals.",
        },
        {
            level: "Unhealthy",
            range: "186–304 ppb",
            color: "bg-red-500",
            icon: "😷",
            description: "Breathing difficulty for vulnerable groups.",
        },
        {
            level: "Severe",
            range: "305-400 ppb",
            color: "bg-purple-600",
            icon: "😢",
            description: "Increased respiratory symptoms.",
        },
        {
            level: "Hazardous",
            range: "401+ ppb",
            color: "bg-purple-800",
            icon: "🚨",
            description: "Severe respiratory distress.",
        },
    ],

    no2: [
        {
            level: "Good",
            range: "0–53 ppb",
            color: "bg-green-500",
            icon: "😊",
            description: "Normal background levels.",
        },
        {
            level: "Moderate",
            range: "54–100 ppb",
            color: "bg-yellow-400",
            icon: "😐",
            description: "Minor airway irritation possible.",
        },
        {
            level: "Poor",
            range: "101–360 ppb",
            color: "bg-orange-500",
            icon: "😷",
            description: "Increased risk of respiratory infections and reduced lung function in sensitive groups.",
        },
        {
            level: "Unhealthy",
            range: "361–649 ppb",
            color: "bg-red-500",
            icon: "😷",
            description: "Increased asthma symptoms.",
        },
        {
            level: "Very Unhealthy",
            range: "650-700 ppb",
            color: "bg-purple-600",
            icon: "😢",
            description: "Significant respiratory inflammation.",
        },
        {
            level: "Hazardous",
            range: "701+ ppb",
            color: "bg-purple-800",
            icon: "🚨",
            description: "Emergency-level exposure.",
        },
    ],
}

const TAB_CONTENT: Record<TabType, { title: string; description: string }> = {
    aqi: {
        title: "Air Quality Index",
        description: "The AQI is a measure of overall air quality and its effects on health.",
    },
    pm: {
        title: "PM 2.5 & PM 10",
        description:
            "Particulate Matter - fine particles suspended in the air that affect visibility and respiratory health.",
    },
    ozone: {
        title: "Ozone",
        description:
            "Ground-level ozone is a harmful air pollutant that reduces lung function and increases respiratory diseases.",
    },
    co: {
        title: "Carbon Monoxide",
        description: "A colorless, odorless gas that reduces oxygen carrying capacity of the blood.",
    },
    so2: {
        title: "Sulfur Dioxide",
        description: "A toxic gas that affects the respiratory system and cardiovascular health.",
    },
    no2: {
        title: "Nitrogen Dioxide",
        description: "A harmful gas that contributes to smog and poses respiratory health risks.",
    },
}