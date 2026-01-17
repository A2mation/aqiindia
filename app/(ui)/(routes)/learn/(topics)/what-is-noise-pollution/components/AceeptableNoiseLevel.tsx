import React from 'react'
import { Volume2, Heart, Zap, AlertCircle, Brain, Wind } from "lucide-react"

const AceeptableNoiseLevel = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header Section */}
            <section className="py-8 md:py-16 px-4 md:px-8 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">
                    Acceptable <span className="text-blue-500">noise levels</span>
                    <span className="text-slate-900">for indoor environment:</span>
                </h1>
            </section>

            {/* Noise Level Bars */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
                <div className="space-y-4">
                    {/* Sleeping Areas */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="h-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full w-full sm:w-48 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm md:text-2xl">
                            <span className="font-semibold text-slate-900">Noise levels in sleeping areas</span> should be kept below
                            35 dB(A).
                        </p>
                    </div>

                    {/* Living Areas */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="h-4 bg-gradient-to-r from-green-400 to-lime-400 rounded-full w-full sm:w-48 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm md:text-2xl">
                            <span className="font-semibold text-slate-900">The Noise levels in living areas</span> should be kept
                            below 45 dB(A).
                        </p>
                    </div>

                    {/* Work Areas */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="h-4 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full w-full sm:w-48 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm md:text-2xl">
                            <span className="font-semibold text-slate-900">Noise levels in work areas</span> should be kept below 55
                            dB(A).
                        </p>
                    </div>
                </div>
            </section>

            {/* Fun Fact Section */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-20 bg-blue-50 rounded-xl p-6 md:p-8">
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 text-center mb-4">Fun Fact</h2>
                <p className="text-slate-700 text-sm md:text-2xl leading-relaxed text-center">
                    Humans can typically hear sounds between 20 Hz and 20,000 Hz, but some animals can hear sounds at much higher
                    or lower frequencies. For example, dogs can hear frequencies up to 65,000 Hz, while whales can communicate
                    with sounds at frequencies as low as 10 Hz.
                </p>
            </section>

            {/* What Can Excessive Noise Do Section */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 pb-12 md:pb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-3">
                    What can <span className="text-blue-500">excessive noise</span> do?
                </h2>
                <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 text-sm md:text-2xl">
                    High noise levels can cause various negative effects on humans, animals, wildlife, and the overall ecosystem.
                    Noise in excessive levels can cause:
                </p>

                {/* Effects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Stress and Anxiety Card */}
                    <EffectCard
                        icon={<Brain className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />}
                        title="Stress and anxiety"
                        description="Prolonged exposure to excessive noise can cause stress and anxiety, leading to physical and mental health problems."
                    />

                    {/* Interference with Communication Card */}
                    <EffectCard
                        icon={<Volume2 className="w-12 h-12 md:w-16 md:h-16 text-purple-500" />}
                        title="Interference with communication"
                        description="Excessive noise can make it difficult to communicate, leading to social and psychological problems."
                    />

                    {/* Deafness Card */}
                    <EffectCard
                        icon={<AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-red-500" />}
                        title="Deafness"
                        description="Exposure to high levels of noise can damage the cells in the inner ear, which can lead to hearing loss and deafness."
                    />

                    {/* Troubled Sleep Card */}
                    <EffectCard
                        icon={<Zap className="w-12 h-12 md:w-16 md:h-16 text-orange-500" />}
                        title="Troubled Sleep"
                        description="Prolonged exposure to excessive noise can cause trouble in sleeping which leads to insomnia and sleep disturbances."
                    />

                    {/* High Blood Pressure Card */}
                    <EffectCard
                        icon={<Heart className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />}
                        title="High Blood Pressure"
                        description="Excessive noise can cause hypertension and various cardiovascular problems, especially in older people."
                    />

                    {/* Wildlife Card */}
                    <EffectCard
                        icon={<Wind className="w-12 h-12 md:w-16 md:h-16 text-teal-500" />}
                        title="Wildlife"
                        description="High levels of noise can cause disturbances among wildlife. This includes disturbance in mating calls, breeding patterns, etc."
                    />
                </div>
            </section>
        </main>
    )
}

export default AceeptableNoiseLevel



interface EffectCardProps {
    icon: React.ReactNode
    title: string
    description: string
}

function EffectCard({ icon, title, description }: EffectCardProps) {
    return (
        <div className="bg-white rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 text-sm md:text-2xl leading-relaxed">{description}</p>
        </div>
    )
}
