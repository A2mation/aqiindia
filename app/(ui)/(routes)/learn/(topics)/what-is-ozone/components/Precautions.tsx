'use client'

import { motion } from 'motion/react'

import { Card } from '@/components/ui/card'


const Precautions = () => {
    return (
        <section className='max-w-5xl mx-auto my-20'>
            <div className='p-5'>
                <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
                    How to detect ozone (O3)?
                </h1>

                <span className="mb-12 text-center text-lg leading-relaxed sm:text-xl text-balance">
                    How to know if one of these above-mentioned appliances is producing Ozone? Ozone has a distinct odor that
                    could describe as a fresh bleach-like smell. If you can smell it then theres too much O3 gas present in the
                    air to be breathing continuously. It can also be measured using advanced instruments. Such as, Prana Air
                    monitors to measure O3 in the air:
                </span>
            </div>
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl p-5">
                Carbon Monoxide (CO) and the harm it causes
            </h2>

            <div
                className="hidden lg:block"
            >
                <Card className="overflow-hidden p-2">
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
                            <div className="space-y-3 flex items-start flex-col">
                                {data.map((item) => (
                                    <div key={item.label} className="py-2 text-lg font-medium text-slate-700">
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Range Column */}
                        <div className="p-6">
                            <h2 className="mb-4 text-2xl font-bold text-slate-900">(mg/m³)</h2>
                            <div className="space-y-3 flex items-start flex-col">
                                {data.map((item) => (
                                    <div key={item.label} className="py-2 text-lg font-medium text-slate-700">
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
                                        key={item.label}
                                        className={`${item.color} rounded-lg px-4 py-2 text-center text-lg font-semibold text-white`}
                                    >
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </Card>
            </div>

            {/* Responsive Card Layout - Visible on mobile and tablet */}
            <div className="lg:hidden space-y-4 p-2">
                {data.map((item) => (
                    <Card key={item.label} className="overflow-hidden">
                        <div className="p-4 sm:p-6">
                            <div className="mb-3 flex items-baseline justify-between gap-4">
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.label}</h3>
                                <span className="text-sm font-medium text-slate-600">{item.range} mg/m³</span>
                            </div>
                            <div
                                className={`${item.color} rounded-lg px-4 py-3 text-center text-sm sm:text-base font-semibold text-white`}
                            >
                                {item.label}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Footer Note */}
            <div className="mt-5 text-center text-xs sm:text-sm text-slate-600 italic">
                *As per CBCB. 8-h hourly average values.
            </div>
        </section>
    )
}

export default Precautions


const data = [
    { label: "Good", range: "0-0.05", color: "bg-green-500", className: "bg-green-500" },
    { label: "Moderate", range: "0.6-0.9", color: "bg-yellow-400", className: "bg-yellow-400" },
    { label: "Poor", range: "0.10-0.12", color: "bg-orange-500", className: "bg-orange-500" },
    { label: "Unhealthy", range: "0.13-0.16", color: "bg-red-500", className: "bg-red-500" },
    { label: "Severe", range: "0.17-0.20", color: "bg-purple-600", className: "bg-purple-600" },
    { label: "Hazardous", range: "Above 0.21", color: "bg-purple-900", className: "bg-purple-900" },
]