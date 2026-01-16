'use client'

import { motion } from 'motion/react'


const Info = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white">
            {/* Hero Section */}
            <section className="px-4 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-purple-100">
                        <motion.h1
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="mb-4 text-center text-2xl font-bold text-purple-900 sm:text-3xl md:text-4xl lg:text-5xl text-balance"
                        >
                            Is Ozone (O₃) an Indoor Air Pollutant?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center text-lg text-gray-700 sm:text-2xl leading-relaxed"
                        >
                            Ozone in the indoor environment can be exceedingly dangerous. Especially if it is confined indoors and
                            fresh air from outside cannot enter via ventilation. It can have a detrimental effect on the occupants'
                            health.
                        </motion.p>
                    </div>

                    {/* Question Section */}
                    <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 p-6 sm:p-8 shadow-sm">
                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2}}
                            className="mb-4 text-center text-2xl font-bold text-purple-900 sm:text-3xl md:text-4xl lg:text-5xl"
                        >
                            Is ozone harmful to humans?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center text-lg text-gray-800 sm:text-2xl leading-relaxed"
                        >
                            When exposed to O3, it can induce a variety of diseases and discomforts. Ozone in high quantities can
                            irritate the skin and cause cellular damage. For example, O3 can cause cellular damage in the same way as
                            chlorine can cause skin damage in a swimming pool if used at high concentrations. Ozone can cause various
                            health effects on the human body.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-8 sm:py-12 md:py-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-balance">
                        Health Effects of Ozone Exposure
                    </h2>

                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {healthEffects.map((effect) => (
                            <div
                                key={effect.id}
                                className="group rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-purple-100 transition-all duration-300 hover:shadow-md hover:ring-purple-200"
                            >
                                {/* Number Badge */}
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-center font-bold text-white text-lg sm:h-12 sm:w-12">
                                    {effect.id}
                                </div>

                                {/* Icon */}
                                <div className="mb-4 text-4xl sm:text-5xl">{effect.icon}</div>

                                {/* Title */}
                                <h3 className="mb-3 text-lg font-semibold text-gray-900 md:text-3xl">{effect.title}</h3>

                                {/* Description */}
                                <p className="leading-relaxed text-gray-700 text-xl ">{effect.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <section className="px-4 py-12 sm:py-16 md:py-20">
                <div className="mx-auto max-w-4xl rounded-xl bg-blue-50 p-6 sm:p-8 md:p-10 ring-1 ring-blue-200">
                    <h3 className="mb-4 text-xl font-semibold text-blue-900 sm:text-2xl">Protect Your Indoor Air Quality</h3>
                    <ul className="space-y-3 text-xl text-blue-800 sm:text-2xl leading-relaxed">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 text-blue-600">✓</span>
                            <span>Ensure proper ventilation in indoor spaces to reduce ozone concentration</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 text-blue-600">✓</span>
                            <span>Use air purifiers with activated carbon filters to help reduce ozone levels</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 text-blue-600">✓</span>
                            <span>Monitor indoor air quality regularly, especially if you have respiratory conditions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 text-blue-600">✓</span>
                            <span>Limit the use of ozone-generating devices in indoor environments</span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Info



interface HealthEffect {
    id: number
    title: string
    description: string
    icon: string
}

const healthEffects: HealthEffect[] = [
    {
        id: 1,
        title: "Respiratory tract irritation",
        description:
            "Ozone exposure can cause airway constriction. As causing air to become trapped in the alveoli and irritating the respiratory tract.",
        icon: "🫁",
    },
    {
        id: 2,
        title: "Cough",
        description:
            "Depending upon the levels of exposure, ozone can cause coughing, soreness, and scratchiness in the throat.",
        icon: "💬",
    },
    {
        id: 3,
        title: "Chest Tightness",
        description:
            "Ozone exposure can cause tightness in the chest and the person may experience difficulty in breathing as well.",
        icon: "👕",
    },
    {
        id: 4,
        title: "Skin Irritation",
        description:
            "O3 is one of the most hazardous pollutants. As it capable of initiating oxidative processes and activating inflammatory reactions. And it resulting in the start of a variety of skin issues.",
        icon: "🔴",
    },
    {
        id: 5,
        title: "Reduced lung function",
        description:
            "Ozone exposure can cause emphysema. And it obstructiveness restricts the lungs from functioning normally, reducing lung function.",
        icon: "📉",
    },
    {
        id: 6,
        title: "Cellular Damages",
        description:
            "Excess ozone exposure for a longer duration may trigger cell damage and dysfunction. Thus, it is leading to metabolic alterations.",
        icon: "⚛️",
    },
]