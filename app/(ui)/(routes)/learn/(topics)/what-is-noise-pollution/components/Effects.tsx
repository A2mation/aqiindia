"use client"
import { Cloud, Zap, Leaf, BarChart3 } from "lucide-react"

const Effects = () => {
    const effects = [
        {
            icon: Cloud,
            title: "Changes in community",
            description:
                "Noise pollution can alter the composition of animal communities. As some species are more sensitive to noise than others.",
            color: "text-blue-600",
        },
        {
            icon: Zap,
            title: "Habitat loss",
            description:
                "Noise pollution can cause animals to avoid certain areas. It can lead to habitat loss and fragmentation.",
            color: "text-yellow-600",
        },
        {
            icon: Leaf,
            title: "Changes in plant growth",
            description:
                "Excessive noise can affect the growth and development of plants. It leads to the changes in the structure of ecosystems.",
            color: "text-green-600",
        },
        {
            icon: BarChart3,
            title: "Ecosystem imbalance",
            description:
                "The negative effects of noise pollution on animals and plants can lead to imbalances in ecosystems.",
            color: "text-purple-600",
        },
    ]

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Header Section */}
            <section className="w-full px-4 py-8 sm:py-12 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">How does noise pollution</h1>
                        <p className="text-xl sm:text-2xl md:text-4xl text-slate-400 font-medium">affects the environment?</p>
                    </div>

                    <p className="text-center text-sm sm:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Noise pollution can have negative effects on the environment, including wildlife and ecosystems. Some of
                        these negative effects include:
                    </p>
                </div>
            </section>

            {/* Illustration Section */}
            <section className="w-full px-4 py-8 sm:py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Placeholder for illustration - using a styled SVG representation */}
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">

                        <div className="text-center">
                            <img
                                src="https://www.marineinsight.com/wp-content/uploads/2011/09/underwater-noise-effect-on-animals.png"
                                width={800}
                                height={500}
                                alt=""
                            />

                        </div>
                    </div>
                </div>
            </section>

            {/* Effects Grid Section */}
            <section className="w-full px-4 py-8 sm:py-12 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {effects.map((effect, index) => {
                            const Icon = effect.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 sm:p-6 text-center"
                                >
                                    <div className="flex justify-center mb-4">
                                        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${effect.color}`} />
                                    </div>
                                    <h3 className="text-2xl sm:text-lg font-bold text-slate-900 mb-3">{effect.title}</h3>
                                    <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">{effect.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Did You Know Section */}
            <section className="w-full px-4 py-8 sm:py-12 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                            <div className="flex-shrink-0">
                                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                                    Did you
                                    <br />
                                    know?
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm sm:text-2xl text-slate-700 leading-relaxed">
                                    According to a study conducted by experts at California Polytechnic State University, human noise
                                    pollution has an impact on the diversity of plant life in an environment even after the noise is
                                    eliminated.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Spacing */}
            <div className="h-8 sm:h-12 md:h-16" />
        </main>
    )
}

export default Effects
