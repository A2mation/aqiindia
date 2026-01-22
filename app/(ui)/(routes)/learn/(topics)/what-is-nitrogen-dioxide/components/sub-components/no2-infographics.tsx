'use client'

import { useState } from 'react'

import { Card } from '@/components/ui/card'
import NaturalSource from './natural-source'
import ManmadeSource from './manmade-source'

export default function NO2Infographic() {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    const naturalSources = [
        {
            id: 'volcano',
            title: 'Volcano eruption',
            description: 'Volcano eruption or active volcanic sites.',
            icon: 'volcano',
        },
        {
            id: 'decay',
            title: 'Biological decay',
            description: 'Biological decay of waste for fertilizer',
            icon: 'decay',
        },
        {
            id: 'lightning',
            title: 'Lightning strikes',
            description: 'Lightning strikes- facilitates the formation of the NO₂ gas.',
            icon: 'lightning',
        },
        {
            id: 'oceans',
            title: 'Oceans',
            description: 'Natural processes in oceans produce NO₂',
            icon: 'ocean',
        },
    ]

    const manmadeSources = [
        {
            id: 'vehicles',
            title: 'Vehicle emissions',
            description: 'Car, truck, boats, and airplane emissions',
            icon: 'car',
        },
        {
            id: 'power',
            title: 'Power plants',
            description: 'Power plants',
            icon: 'factory',
        },
        {
            id: 'fertilizer',
            title: 'Ammonia-emitting',
            description: 'Ammonia-emitting fertilizers',
            icon: 'fertilizer',
        },
        {
            id: 'diesel',
            title: 'Diesel machines',
            description: 'Diesel-powered heavy machines',
            icon: 'machinery',
        },
        {
            id: 'stoves',
            title: 'Gas stoves',
            description: 'Kerosene and gas stoves',
            icon: 'stove',
        },
    ]

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-balance">
                    Sources Of Nitrogen Dioxide (NO<span className="text-sm align-super">2</span>) Gas
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance">
                    NO<span className="text-sm align-super">2</span> is present in the environment in a very small quantity. But due to our excessive use of resources and other activities, nitrogen dioxide level is increasing to a troublesome level. There are both natural and men-made causes of the formation of the no<span className="text-sm align-super">2</span> gas.
                </p>
            </div>

            {/* Natural Sources Section */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 lg:mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    Natural causes include:
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {naturalSources.map((source, index) => (
                        <div
                            key={source.id}
                            className="animate-fade-in"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            onMouseEnter={() => setHoveredId(source.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Card className="h-full flex flex-col items-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 cursor-pointer border-gray-200 dark:border-gray-700">
                                <div className="mb-6 sm:mb-8 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                                    <NaturalSource icon={source.icon} isHovered={hoveredId === source.id} />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
                                    {source.title}
                                </h3>
                                <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 text-center">
                                    {source.description}
                                </p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Manmade Sources Section */}
            <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 lg:mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    Manmade means of production of Nitrogen Dioxide (NO<span className="text-sm align-super">2</span>) gas are:
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-6">
                    {manmadeSources.map((source, index) => (
                        <div
                            key={source.id}
                            className="animate-fade-in"
                            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                            onMouseEnter={() => setHoveredId(source.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Card className="h-full flex flex-col items-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 cursor-pointer border-gray-200 dark:border-gray-700">
                                <div className="mb-6 sm:mb-8 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                                    <ManmadeSource icon={source.icon} isHovered={hoveredId === source.id} />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
                                    {source.title}
                                </h3>
                                <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 text-center">
                                    {source.description}
                                </p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animations in CSS */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}
