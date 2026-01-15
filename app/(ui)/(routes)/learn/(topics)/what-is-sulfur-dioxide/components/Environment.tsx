import React from 'react'

const Environment = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#b3e1eb] to-sky-100">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-3 text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">
                        Health & Environmental Impacts of SO₂ Gas
                    </h1>
                    <p className="text-base text-slate-700 sm:text-lg">
                        Let's find out the harmful effects of sulfur dioxide gas on our health.
                    </p>
                </div>

                {/* Health Impacts Section */}
                <HealthImpacts />

                {/* Environmental Impacts Section */}
                <EnvironmentalImpacts />
            </div>
        </main>
    )
}

export default Environment


function EnvironmentalImpactCard({ title, icon }: { title: string; icon: string }) {
    return (
        <div className="flex flex-col items-center rounded-lg bg-white bg-opacity-70 p-4 text-center shadow-sm transition-transform hover:scale-105 sm:p-5">
            <div className="mb-3 text-5xl sm:text-6xl">{icon}</div>
            <p className="text-xs font-medium text-slate-800 sm:text-sm">{title}</p>
        </div>
    )
}

function EnvironmentalImpacts() {
    const impacts = [
        {
            title: "Damages and stains stones including culturally important monuments and statues",
            icon: "🏛️",
        },
        {
            title: "Impact plant growth by damaging exposed tissues in leaves",
            icon: "🍃",
        },
        {
            title: "Increased chances of acid rain",
            icon: "🌧️",
        },
        {
            title: "Affects the vegetation, growth of plants",
            icon: "🌱",
        },
        {
            title: "Deteriorates leaves quality and color",
            icon: "🍂",
        },
        {
            title: "Affects marine life by acidifying the water ways",
            icon: "🐟",
        },
        {
            title: "Alters soil properties, agricultural land properties",
            icon: "🌾",
        },
        {
            title: "Destruction of parts of lungs and inflammation in the airways in animals",
            icon: "🦁",
        },
    ]

    return (
        <section>
            <h2 className="mb-4 text-center text-2xl font-bold text-slate-800 sm:text-3xl">Environmental Impact</h2>
            <p className="mb-8 text-center text-sm text-slate-700 sm:text-base">
                The impact of SO₂ on the environment is beyond comprehensible. It damages growth and also damages leaves turning
                them yellow. At a high concentration in the atmosphere, it reacts with atmospheric moisture to create an acidic
                compound responsible for acid rain and damaging soil properties.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {impacts.map((impact) => (
                    <EnvironmentalImpactCard key={impact.title} {...impact} />
                ))}
            </div>
        </section>
    )
}

function HealthImpactCard({ title, description, icon }: { title: string; description: string; icon: string }) {
    return (
        <div className="flex flex-col items-center rounded-lg bg-white bg-opacity-70 p-4 text-center shadow-sm transition-transform hover:scale-105 sm:p-5">
            <div className="mb-3 text-4xl sm:text-5xl">{icon}</div>
            <h3 className="mb-2 text-sm font-semibold text-slate-800 sm:text-base">{title}</h3>
            <p className="text-xs text-slate-600 sm:text-sm">{description}</p>
        </div>
    )
}

function HealthImpacts() {
    const impacts = [
        {
            title: "Eyes, nose, irritation",
            description: "High concentration can irritate sensitive areas",
            icon: "👁️",
        },
        {
            title: "Cough, wheezing",
            description: "Irritates respiratory passages",
            icon: "😮‍💨",
        },
        {
            title: "Respiratory tract inflammation & irritation",
            description: "Damages airways and reduces lung capacity",
            icon: "🫁",
        },
        {
            title: "Risk of asthma attacks increases in children",
            description: "Particularly vulnerable populations",
            icon: "🚨",
        },
        {
            title: "Heart diseases",
            description: "Long-term exposure increases cardiovascular risk",
            icon: "❤️",
        },
    ]

    return (
        <section className="mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-slate-800 sm:text-3xl">Health Impact</h2>
            <p className="mb-8 text-center text-sm text-slate-700 sm:text-base">
                If there is a high concentration of SO₂, you can easily inhale SO₂, which eventually sticks to the membrane of
                the nose and respiratory tract. Its short health impact on the body are very obvious even to the extent of
                reduced lung capacity. It results in difficulty in breathing and shortening of airways. People with
                comorbidities are at high risk as it can aggravate those conditions to a point of no return.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {impacts.map((impact) => (
                    <HealthImpactCard key={impact.title} {...impact} />
                ))}
            </div>
        </section>
    )
}