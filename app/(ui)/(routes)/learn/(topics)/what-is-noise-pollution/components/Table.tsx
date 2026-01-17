import { Card } from "@/components/ui/card"

export const metadata = {
    title: "Noise Levels & Health Effects",
    description: "Learn about noise levels and their health impacts",
}

const soundExamples = [
    { db: "50-60 dB", indoor: "Normal conversation", outdoor: "Quiet suburb or light traffic on a highway" },
    { db: "50-60 dB", indoor: "Background music at a low volume", outdoor: "Normal conversation or a busy street" },
    {
        db: "70-80 dB",
        indoor: "Busy street noise heard from indoors",
        outdoor: "Traffic noise or a motorcycle passing by",
    },
    { db: "70-75 dB", indoor: "Vacuum cleaner", outdoor: "Noisy restaurant kitchen or a jackhammer" },
    { db: "85-100 dB", indoor: "Loud music from speakers", outdoor: "Concert music or a car horn" },
    { db: "90-120 dB", indoor: "Power tools", outdoor: "Thunder or a jet plane taking off" },
]

const Table = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 md:py-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                        What do the <span className="text-slate-400">noise levels</span> say?
                    </h1>
                </div>



                {/* Informational Text */}
                <Card className="p-6 md:p-8 bg-blue-50 border border-blue-200 shadow-lg mb-12">
                    <p className="text-slate-700 text-sm md:text-base text-center leading-relaxed">
                        It's important to note that these effects can vary depending on factors such as duration of exposure,
                        frequency of exposure, and individual susceptibility to noise. Therefore, it's crucial to take steps to
                        reduce noise pollution whenever possible, regardless of the noise level.
                    </p>
                </Card>

                {/* Sound Pressure Levels Table */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                        Some examples of different sound pressure levels measured in decibels (dB)
                    </h2>

                    {/* Desktop Table */}
                    <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-slate-200">
                                        <th className="px-6 py-4 text-left font-bold text-slate-900">Noise Levels</th>
                                        <th className="px-6 py-4 text-left font-bold text-slate-900">Indoor</th>
                                        <th className="px-6 py-4 text-left font-bold text-slate-900">Outdoor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {soundExamples.map((example, index) => (
                                        <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                                            <td className="px-6 py-4 text-slate-700 font-medium">{example.db}</td>
                                            <td className="px-6 py-4 text-slate-600">{example.indoor}</td>
                                            <td className="px-6 py-4 text-slate-600">{example.outdoor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-4">
                        {soundExamples.map((example, index) => (
                            <Card key={index} className="p-4 bg-white border border-slate-200 shadow-md">
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Noise Level</p>
                                        <p className="text-lg font-bold text-slate-900">{example.db}</p>
                                    </div>
                                    <div className="border-t border-slate-200 pt-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Indoor</p>
                                        <p className="text-slate-700">{example.indoor}</p>
                                    </div>
                                    <div className="border-t border-slate-200 pt-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Outdoor</p>
                                        <p className="text-slate-700">{example.outdoor}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Table
