'use client'

import React from "react"

import { motion } from 'framer-motion'

interface HealthEffect {
    id: number
    title: string
    icon: React.ReactNode
    description: string
    cause: string
}

const healthEffects: HealthEffect[] = [
    {
        id: 1,
        title: 'Lower productivity',
        icon: '💼',
        description:
            'High CO₂ affects concentration and attention and in turn productivity.',
        cause: 'High CO₂ levels can impact cognitive function',
    },
    {
        id: 2,
        title: 'Disturbed sleep',
        icon: '😴',
        description:
            'When limits exceed, one can have difficulty in their sleeping patterns as well.',
        cause: 'CO₂ elevation disrupts sleep quality',
    },
    {
        id: 3,
        title: 'Increased blood pressure & heart rate',
        icon: '🫀',
        description:
            'High CO₂ levels can trigger high BP problems due to the vasodilating effect.',
        cause: 'CO₂ causes blood vessel dilation',
    },
    {
        id: 4,
        title: 'Headache',
        icon: '🤕',
        description:
            'CO₂ levels highly influence cerebral blood flow, which can cause headache problems.',
        cause: 'High CO₂ affects blood flow to the brain',
    },
    {
        id: 5,
        title: 'Restlessness',
        icon: '😞',
        description:
            'Disorders such as hypercarpia can happen when CO₂ levels are high.',
        cause: 'Elevated CO₂ causes general discomfort',
    },
    {
        id: 6,
        title: 'Dizziness',
        icon: '🌀',
        description:
            'At high levels, CO₂ is known to cause dizziness, vertigo, and other symptoms.',
        cause: 'High CO₂ affects inner ear and balance',
    },
]

export default function HealthEffects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const iconVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.15,
            transition: {
                duration: 0.3,
            },
        },
    }

    const pulse = {
        initial: { opacity: 0.6 },
        animate: {
            opacity: [0.6, 1, 0.6],
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white m-5">
            {/* Header */}
            <motion.div
                className="py-12 px-4 sm:py-16 sm:px-8 text-center"
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.7,
                            ease: 'easeOut',
                        },
                    },
                }}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl sm:text-7xl font-bold text-slate-900 mb-4">
                    Health Effects
                </h1>
                <p className="text-xl text-blue-600 font-semibold">
                    High levels of CO₂ are responsible for
                </p>
            </motion.div>

            {/* Grid Container */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-8 pb-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {healthEffects.map((effect) => (
                        <motion.div
                            key={effect.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: 'easeOut',
                                    },
                                },
                            }}
                            className="group"
                        >
                            <motion.div
                                className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl p-6 sm:p-8 transition-shadow duration-300 border border-slate-100"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="mb-6 flex justify-center"
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="text-5xl sm:text-6xl"
                                        variants={pulse}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        {effect.icon}
                                    </motion.div>
                                </motion.div>

                                {/* Number and Title */}
                                <div className="text-center mb-4">
                                    <p className="text-base font-semibold text-slate-500 mb-2">
                                        {effect.id}. {effect.title}
                                    </p>
                                    <h3 className="text-xl sm:text-3xl font-bold text-slate-900">
                                        {effect.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="space-y-4">
                                    <p className="text-sm sm:text-lg text-orange-600 font-medium">
                                        {effect.cause}
                                    </p>
                                    <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
                                        {effect.description}
                                    </p>
                                </div>

                                {/* Bottom accent */}
                                <motion.div
                                    className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
