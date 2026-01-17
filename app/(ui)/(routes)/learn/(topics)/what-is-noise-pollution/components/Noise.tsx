import React from 'react'

const Noise = () => {
    return (
        <main className="min-h-screen bg-stone-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        When can <span className="text-blue-500">noise irritate you?</span>
                    </h1>

                    <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        When noise irritates you, it can cause physical and psychological discomfort, stress, and distraction. The
                        degree of irritation can vary depending on the type, intensity, duration, and frequency of the noise, as
                        well as individual factors such as personality, mood, and sensitivity to sound.
                    </p>
                </div>

                {/* Common Signs Section */}
                <div className="mb-8 sm:mb-12">
                    <h2 className="text-center text-2xl sm:text-3xl font-semibold text-blue-500 mb-8">
                        Common signs of noise irritation include:
                    </h2>

                    {/* Signs Grid - Responsive Layout */}
                    <div className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-8">
                            {/* Annoyance */}
                            <div className="text-center lg:col-span-1 lg:col-start-1 lg:row-start-1">
                                <h3 className="text-lg sm:text-3xl font-semibold text-blue-400 mb-2">Annoyance</h3>
                                <p className="text-sm md:text-2xl text-gray-700">Feeling agitated, frustrated, or impatient due to the noise.</p>
                            </div>

                            {/* Distraction */}
                            <div className="text-center lg:col-span-1 lg:col-start-4 lg:row-start-1">
                                <h3 className="text-lg sm:text-3xl font-semibold text-blue-400 mb-2">Distraction</h3>
                                <p className="text-sm md:text-2xl text-gray-700">
                                    Having difficulty focusing, concentrating, or completing tasks due to noise.
                                </p>
                            </div>

                            {/* Stress */}
                            <div className="text-center lg:col-span-1 lg:col-start-4 lg:row-start-2">
                                <h3 className="text-lg sm:text-3xl font-semibold text-blue-400 mb-2">Stress</h3>
                                <p className="text-sm md:text-2xl text-gray-700">Feeling tense, anxious, or overwhelmed due to the noise.</p>
                            </div>

                            {/* Sleep Disturbances */}
                            <div className="text-center lg:col-span-1 lg:col-start-1 lg:row-start-2">
                                <h3 className="text-lg sm:text-3xl font-semibold text-blue-400 mb-2">Sleep disturbances</h3>
                                <p className="text-sm md:text-2xl text-gray-700">Having difficulty falling or staying asleep due to the noise.</p>
                            </div>

                            {/* Discomfort */}
                            <div className="text-center lg:col-span-2 lg:col-start-2 lg:row-start-2">
                                <h3 className="text-lg sm:text-3xl font-semibold text-blue-400 mb-2">Discomfort</h3>
                                <p className="text-sm md:text-2xl text-gray-700">
                                    Experiencing physical discomforts, such as headaches, nausea, or muscle tension due to the noise.
                                </p>
                            </div>
                        </div>

                        {/* Illustration - Centered */}

                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
                    <p className="text-sm sm:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                        To avoid or reduce noise irritation, it is important to identify the sources of noise. As to minimize
                        exposure to them. And to use protective measures such as earplugs or noise-cancelling headphones.
                        Additionally, creating a quiet and peaceful environment, practicing relaxation techniques, and engaging in
                        stress-reducing activities can help alleviate the negative effects of noise on your well-being.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Noise
