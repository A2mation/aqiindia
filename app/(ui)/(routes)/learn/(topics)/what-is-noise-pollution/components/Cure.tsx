import { Card } from "@/components/ui/card"

const Cure = () => {
    const solutions = [
        {
            id: 1,
            title: "Use noise barriers",
            description: "Noise barriers can be used to reduce noise pollution from highways, railways, and other sources.",
            icon: "🏗️",
        },
        {
            id: 2,
            title: "Plant trees",
            description:
                "Trees and vegetation can help absorb sound waves, reducing the amount of noise that reaches people.",
            icon: "🌳",
        },
        {
            id: 3,
            title: "Govt. Regulations",
            description:
                "Governments can enforce regulations and standards for noise levels, which can include limits on noise emissions from various sources, and can require noise-reducing technologies to be used.",
            icon: "📋",
        },
        {
            id: 4,
            title: "Insulate buildings",
            description:
                "Insulating buildings can reduce the amount of noise that enters them. This can be done by using double-glazed windows, soundproof curtains, and acoustic panels.",
            icon: "🏢",
        },
        {
            id: 5,
            title: "Educate people",
            description:
                "Educating people about the negative impacts of noise pollution and the ways to control it can be an effective way to raise awareness and encourage action. Overall, controlling noise pollution requires a combination of efforts from individuals, businesses, and governments.",
            icon: "💻",
        },
    ]

    return (
        <section className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12">
            {/* Header */}
            <div className="mb-8 text-center md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
                    <span className="text-purple-500">Reducing</span> noise pollution
                </h1>
            </div>

            {/* Description */}
            <div className="mb-12 max-w-3xl mx-auto text-center">
                <p className="text-sm sm:text-base text-red-600">
                    Noise pollution can have negative effects on the environment, including wildlife and ecosystems. Some of these
                    negative effects include:
                </p>
            </div>

            {/* Solutions Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
                    {solutions.slice(0, 4).map((solution) => (
                        <Card key={solution.id} className="flex flex-col p-6 md:p-8 hover:shadow-lg transition-shadow">
                            <div className="mb-4 text-5xl sm:text-6xl">{solution.icon}</div>
                            <h3 className="text-lg md:text-4xl font-bold mb-3 text-foreground">{solution.title}</h3>
                            <p className="text-sm sm:text-2xl text-muted-foreground leading-relaxed">{solution.description}</p>
                        </Card>
                    ))}
                </div>

                {/* Fifth Card - Centered */}
                <div className="flex justify-center">
                    <Card className="w-full sm:w-full lg:w-1/2 flex flex-col p-6 md:p-8 hover:shadow-lg transition-shadow">
                        <div className="mb-4 text-5xl sm:text-6xl text-center">{solutions[4].icon}</div>
                        <h3 className="text-lg md:text-4xl font-bold mb-3 text-center text-foreground">{solutions[4].title}</h3>
                        <p className="text-sm sm:text-2xl text-muted-foreground leading-relaxed text-center">
                            {solutions[4].description}
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Cure
