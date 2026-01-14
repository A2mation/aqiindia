"use client"

import { motion } from "framer-motion"

export function StatsSection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight text-blue-500"
                >
                    Addressable Challenges
                </motion.h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stat 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
                    >

                        <h3 className="font-serif text-2xl font-semibold mb-4 text-blue-400 ">Industrial Impact</h3>
                        <p className="text-muted-foreground font-sans leading-relaxed">
                            Economic Growth vs. Environmental Damage: Rapid industrialization boosts economies but also harms the environment, notably in manufacturing, energy, and transportation.
                        </p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
                    >
                        <h3 className="font-serif text-2xl font-semibold mb-4 text-blue-400">Pollutant Overload</h3>
                        <p className="text-muted-foreground font-sans leading-relaxed">
                            Industrial activities release numerous harmful substances, such as particulate matter, NOx, SOx, CO, VOCs, & greenhouse gases, contributing to acid rain, smog, respiratory diseases, and climate change.
                        </p>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
                    >
                        <h3 className="font-serif text-2xl font-semibold mb-4 text-blue-400">Challenges Ahead</h3>
                        <p className="text-muted-foreground font-sans leading-relaxed">
                            Industries face hurdles like outdated tech, weak regulations, scarce clean energy, and a lack of best practices awareness, impeding efforts to effectively reduce their environmental footprint.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
