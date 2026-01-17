'use client'
import type React from "react"

import { Drill, Speaker, Loader, Wind, Home } from "lucide-react"

import { motion } from "motion/react"

const Cause = () => {
    return (
        <section className='bg-[#8789ab]'>
            <main className='mx-auto max-w-7xl'>
                <div
                    className='flex items-center justify-center flex-col px-10 py-20'
                >


                    <div className='py-10 text-center'>
                        <motion.h2
                            id="hero-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="heading-xl text-3xl font-semibold md:text-6xl text-white py-5 "
                        >
                            {`What is noise pollution?`}
                        </motion.h2>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className=" text-base lg:text-2xl  text-white"
                        >
                            Unwanted, disturbing, and distractive levels of sound that can cause discomfort to humans and animals is called noise pollution. It can also affect wildlife by interfering with their communication, migration patterns, and feeding habits. Moreover, it can also have ecological effects, such as the disruption of animal behavior, communication, and migration patterns.
                        </motion.span>
                    </div>

                    <img
                        src={"https://www.acoustiblok.co.uk/wp-content/uploads/2025/07/What-is-Noise-Pollution.jpg"}
                        width={600}
                        height={400}
                        alt="Picture of the author"
                    />

                </div>
            </main>

            <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    <span className="text-blue-500">Causes</span>
                    <span className="text-white"> of noise pollution</span>
                </h1>

                <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed px-2">
                    Various human activities cause noise pollution. This can result in discomfort experienced by humans especially
                    small children and the elderly and animals. Some common sources of noise pollution include:
                </p>
            </section>

            {/* Causes Section */}
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="space-y-8 sm:space-y-10">
                    {causes.map((cause, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                            {/* Icon Container - Mobile centered, Desktop left */}
                            <div className="flex justify-center sm:justify-start flex-shrink-0">
                                <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                    {cause.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center flex-grow">
                                <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 text-center sm:text-left">
                                    {cause.title}
                                </h2>
                                <p className="text-sm sm:text-2xl text-white leading-relaxed text-center sm:text-left">
                                    {cause.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border/40 mt-8 sm:mt-12">
                <p className="max-w-4xl mx-auto text-center text-sm sm:text-base text-white leading-relaxed">
                    To mitigate the negative effects of noise pollution, various strategies have been used. As by including noise
                    barriers, soundproofing, and regulations to limit noise levels from various sources.
                </p>
            </section>
        </section>
    )
}

export default Cause


interface CauseItem {
    icon: React.ReactNode
    title: string
    description: string
}

const causes: CauseItem[] = [
    {
        icon: <Drill className="w-12 h-12 sm:w-14 sm:h-14 text-blue-400" />,
        title: "Industrial Activities",
        description:
            "C&D activities, industrial processes, loud machinery processes, etc. can generate noise. Moreover, excessive noise from industrial processes can reduce productivity and increase worker safety risks.",
    },
    {
        icon: <Speaker className="w-12 h-12 sm:w-14 sm:h-14 text-blue-400" />,
        title: "Entertainment activities",
        description:
            "Loud music, fireworks, etc. can cause an excessive amount of noise. Long-term exposure to loud noise from recreational activities can also cause hearing loss and other related health problems.",
    },
    {
        icon: <Loader className="w-12 h-12 sm:w-14 sm:h-14 text-blue-400" />,
        title: "Urbanization",
        description:
            "Increased urbanization, including the construction of buildings and roads, can lead to increased noise pollution. Noise pollution in urban areas can also have an impact on wildlife. As by changing their behaviour and communication patterns.",
    },
    {
        icon: <Wind className="w-12 h-12 sm:w-14 sm:h-14 text-blue-400" />,
        title: "Natural disasters",
        description:
            "Natural disasters such as earthquakes, hurricanes, volcanic eruptions, tornadoes, and thunderstorms can also cause noise pollution. As through the sound of strong winds, thunder, and other related sounds.",
    },
    {
        icon: <Home className="w-12 h-12 sm:w-14 sm:h-14 text-blue-400" />,
        title: "Household activities",
        description:
            "Various household activities such as vacuum cleaning, blenders, and certain household appliances can generate noise. Noise can be annoying to family members, neighbours, and even pets, resulting in increased stress.",
    },
]