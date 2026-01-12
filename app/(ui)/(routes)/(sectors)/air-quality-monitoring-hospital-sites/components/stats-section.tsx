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
                        
                        <h3 className="font-serif text-2xl font-semibold mb-4 text-blue-400 ">Critical Health Risks</h3>
                        <p className="text-muted-foreground font-sans leading-relaxed">
                            Air pollution causes nearly 1.67 million annual deaths in India, with diseases linked to poor indoor air and ambient conditions. 
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
                        <h3 className="font-serif text-2xl font-semibold mb-4 text-blue-400">Hospital Strain</h3>
                        <p className="text-muted-foreground font-sans leading-relaxed">
                            Increased pollution episodes lead to higher hospital admissions for respiratory and cardiovascular conditions. 
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
                        <h3 className="font-serif text-2xl font-semibold mb-4 text-blue-400">Health Complications</h3>
                        <p className="text-muted-foreground font-sans leading-relaxed">
                           Airborne pollutants deeply affect lungs and circulation, triggering chronic diseases and acute health crises. 
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
