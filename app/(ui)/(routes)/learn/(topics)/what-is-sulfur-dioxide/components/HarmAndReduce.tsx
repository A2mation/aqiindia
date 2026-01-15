'use client'

import { motion } from 'motion/react'

import { Card } from "@/components/ui/card"
import { Lightbulb, Zap, Home, Sun, Droplets, Activity, Factory } from "lucide-react"

const measures = [
    {
        id: 1,
        icon: Lightbulb,
        title: "Sustainable Energy Sources",
        description:
            "Promote sustainable energy sources synergistic emission reduction includes the usage of water energy, wind energy, solar energy, etc. instead of fossil fuels to reduce SO2 emissions.",
    },
    {
        id: 2,
        icon: Zap,
        title: "Alternative Fuels",
        description:
            "Alternative fuels like hydrogen cells, electrical, etc. This will help in reducing emissions from fossil fuel burning that emits SO2. Air pollution can be reduced substantially when we use alternative fuels.",
    },
    {
        id: 3,
        icon: Home,
        title: "Away from Industrial Areas",
        description:
            "Accommodations away from industrial areas will help in reducing the effects of air pollution and harmful substances that can affect the residents, especially sensitive groups that live near industrial areas.",
    },
    {
        id: 4,
        icon: Sun,
        title: "Switch to Renewable Energy",
        description:
            "Switch to a renewable source of energy such as solar, wind, and hydropower. Air pollution and economic growth go hand-in-hand. Using renewable sources of energy would be an economic approach to reducing emissions.",
    },
    {
        id: 5,
        icon: Droplets,
        title: "Zero Sulfur Content Fuels",
        description:
            "Using zero sulfur content fuels in cars and other vehicles will help in reducing ambient air pollution. Reducing sulfur fuels will help in reducing tailpipe HC, CO, and NOx emissions.",
    },
    {
        id: 6,
        icon: Activity,
        title: "Avoid High-Pollution Days",
        description:
            "Avoid exercising during high-pollution days as when you work out you inhale more O2 than normal along with other air pollutants. This means you inhale more air pollution when you work out during high-pollution days.",
    },
    {
        id: 7,
        icon: Factory,
        title: "Power Plants with Scrubbers",
        description:
            "Installation of power plants with scrubbers. The smokestack scrubber helps in collecting harmful chemicals and toxins and then releases clean air into the atmosphere through the smokestack.",
    },
]

const HarmAndReduce = () => {
    const data = [
        { level: "Good", range: "0-40", effect: "Air is good to inhale", color: "bg-green-500" },
        {
            level: "Satisfactory",
            range: "41-80",
            effect: "Irritation in the eyes and respiratory tract experienced",
            color: "bg-green-400",
        },
        {
            level: "Moderate",
            range: "81-380",
            effect: "Reflex bronchoconstriction with increased pulmonary resistance experienced",
            color: "bg-yellow-400",
        },
        {
            level: "Poor",
            range: "381-800",
            effect: "Brain and lung damages after exposure of 3 hours",
            color: "bg-orange-500",
        },
        { level: "Very poor", range: "801-1600", effect: "Exposures can cause Skin and respiratory tract burns", color: "bg-red-500" },
        { level: "Severe", range: "1600+", effect: "Life-threatening, Fatal within 60 minutes of exposure", color: "bg-red-600" },
    ]
    return (
        <section className='max-w-7xl mx-auto my-20'>
            <div>
                <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
                    Carbon Monoxide (CO) and the harm it causes
                </h2>

                <div
                    className="hidden lg:block"
                >
                    <Card className="overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-3 gap-0 divide-x"
                        >
                            {/* Levels Column */}
                            <div className="p-6">
                                <h2 className="mb-4 text-2xl font-bold text-slate-900">Levels</h2>
                                <div className="space-y-3 flex items-start gap-5 flex-col">
                                    {data.map((item) => (
                                        <div key={item.level} className="py-2 text-lg font-medium text-slate-700">
                                            {item.level}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Range Column */}
                            <div className="p-6">
                                <h2 className="mb-4 text-2xl font-bold text-slate-900">(μg/m³)</h2>
                                <div className="space-y-3 flex items-start gap-5 flex-col">
                                    {data.map((item) => (
                                        <div key={item.level} className="py-2 text-lg font-medium text-slate-700">
                                            {item.range}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Health Effects Column */}
                            <div className="p-6">
                                <h2 className="mb-4 text-2xl font-bold text-slate-900">Health Effects</h2>
                                <div className="space-y-3 ">
                                    {data.map((item) => (
                                        <div
                                            key={item.level}
                                            className={`${item.color} rounded-lg px-4 py-2 text-center text-lg font-semibold text-white`}
                                        >
                                            {item.effect}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </Card>
                </div>

                {/* Responsive Card Layout - Visible on mobile and tablet */}
                <div className="lg:hidden space-y-4">
                    {data.map((item) => (
                        <Card key={item.level} className="overflow-hidden">
                            <div className="p-4 sm:p-6">
                                <div className="mb-3 flex items-baseline justify-between gap-4">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.level}</h3>
                                    <span className="text-sm font-medium text-slate-600">{item.range} mg/m³</span>
                                </div>
                                <div
                                    className={`${item.color} rounded-lg px-4 py-3 text-center text-sm sm:text-base font-semibold text-white`}
                                >
                                    {item.effect}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center text-xs sm:text-sm text-slate-600 italic">
                    *As per CBCB. 8-h hourly average values.
                </div>
            </div>

            <section className="min-h-screen bg-background mt-10">
                {/* Header Section */}
                <section className="w-full py-8 md:py-12 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6 text-balance">
                            Corrective Measures To Reduce SO<sub>2</sub> Gas
                        </h1>

                        <p className="text-base md:text-lg text-foreground/80 text-center leading-relaxed max-w-2xl mx-auto text-pretty">
                            For the solutions to contain so2 concentration, first we need to monitor it and identify the areas where its
                            concentration doesn't meet the recommended standards. After identifying the target areas, some of the below
                            mentioned corrective measures can be implemented:
                        </p>
                    </div>
                </section>

                {/* Measures Section */}
                <section className="w-full py-8 md:py-16 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
                        {measures.map((measure) => {
                            const IconComponent = measure.icon
                            return (
                                <div key={measure.id} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
                                    {/* Icon Container */}
                                    <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        <IconComponent
                                            className="w-12 h-12 md:w-16 md:h-16 text-blue-600 dark:text-blue-400"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 pt-2 sm:pt-0">
                                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed text-pretty">
                                            <span className="inline-block mr-2">–</span>
                                            <span>{measure.description}</span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </section>
        </section>
    )
}

export default HarmAndReduce



