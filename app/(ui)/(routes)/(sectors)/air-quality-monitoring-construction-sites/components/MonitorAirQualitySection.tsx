"use client"
import { motion } from 'motion/react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const MonitorAirQualitySection = () => {
    return (
        <>
            <div className='bg-blue-100'>
                <div className="max-w-7xl mx-auto px-8 mt-8 py-20">
                    <div className='flex justify-center flex-col gap-4'>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className='text-xl md:text-4xl font-semibold max-w-5xl mx-auto'
                        >
                            Why Monitor Air Quality on Construction Sites?
                        </motion.h2>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='text-center text-base md:text-xl text-zinc-400 max-w-5xl mx-auto'
                        >
                            Dust and emissions from construction sites can harm workers, delay projects, and violate Pollution Control Board regulations. Real-time air quality monitoring gives you the data to respond quickly and act responsibly.
                        </motion.span>
                    </div>
                    <HoverEffect items={projects} />
                </div>
            </div>
        </>
    )
}

export default MonitorAirQualitySection


export const projects = [
    {
        title: "High PM Levels",
        description:
            "Activities like demolition and excavation generate PM2.5 and PM10 far beyond safe limits.",
        link: "",
    },
    {
        title: "Health Hazards",
        description:
            "Prolonged dust exposure leads to respiratory issues and long-term health damage among workers.",
        link: "",
    },
    {
        title: "Compliance Risks",
        description:
            "Non-compliance with Pollution Control Board regulations can lead to heavy fines and shutdowns.",
        link: "",
    },
    {
        title: "Community Impact",
        description:
            "Nearby residents often raise complaints or initiate legal actions against polluting sites.",
        link: "",
    },
    {
        title: "Project Delays",
        description:
            "Fines or legal blocks can halt work and increase construction time and costs significantly.",
        link: "",
    },
    {
        title: "Lack of Data Visibility",
        description:
            "Without real-time data, contractors cannot respond proactively to pollution events on site.",
        link: "",
    },
];