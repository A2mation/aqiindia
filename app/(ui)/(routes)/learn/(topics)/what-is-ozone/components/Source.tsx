'use client'
import { motion } from 'motion/react'

const Source = () => {
    return (
        <div className="min-h-screen bg-[#5c87ba] py-8 px-4 md:py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 text-balance">
                        Sources of Ozone (O₃) Indoors
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto text-balance">
                        Ozone can come from outdoor smog via ventilation, but it also has indoor sources. These include:
                    </p>
                </div>

                {/* Sources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Photocopiers */}
                    <SourceCard
                        icon={<PrinterIcon />}
                        title="Photocopiers"
                        description="A standard approach was used in a study by the AIHA to determine the O3 emission from 69 different photocopying machines. The emission rates ranged from 0 to 350 g/min, with a mean of 259 and a standard deviation of 302."
                        number="1"
                    />

                    {/* Electronic Air Cleaners */}
                    <SourceCard
                        icon={<AirCleanerIcon />}
                        title="Some Electronic Air Cleaners"
                        description="Some air cleaning systems can generate O3. Which can be hazardous to one's health. A few machines marketed as air purifiers purposefully release high levels of O3, the major contributor to smog."
                        number="2"
                    />

                    {/* Home Electrical Appliances */}
                    <SourceCard
                        icon={<AppliancesIcon />}
                        title="Home Electrical Appliances"
                        description="Many appliances used in homes such as refrigerators, air conditioners, vegetable washers, facial steamers, etc. use built-in ozone generators also known as ionizers."
                        number="3"
                    />

                    {/* UV Lights/Lamps */}
                    <SourceCard
                        icon={<LampIcon />}
                        title="UV Lights/Lamps"
                        description="UV light ranging from 160-240nm can create O3 from O2 by disrupting the O2 molecules by splitting them into two atoms. They further attach to other O2 molecules. And it creates ozone (O3)."
                        number="4"
                    />

                    {/* Disinfectants */}
                    <SourceCard
                        icon={<DisinfectantIcon />}
                        title="Disinfectants"
                        description="Ozone has a great oxidizing nature. Due to which it is utilized in many sterilizing agents and disinfectants that are generally used in hospitals. But these disinfectants aren't ozone gas, and if trapped, this can be hazardous."
                        number="5"
                        colSpan="md:col-span-2 lg:col-span-1"
                    />
                </div>
            </div>
        </div>
    )
}

export default Source


interface SourceCardProps {
    icon: React.ReactNode
    title: string
    description: string
    number: string
    colSpan?: string
}

function SourceCard({ icon, title, description, number, colSpan = "" }: SourceCardProps) {
    return (
        <motion.div
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col items-center text-center ${colSpan}`}
        >
            {/* Icon Container */}
            <div className="mb-4 md:mb-6 h-32 md:h-40 flex items-center justify-center">
                <div className="text-white opacity-90">{icon}</div>
            </div>

            {/* Title with Number */}
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {number}. {title}
            </h3>

            {/* Description */}
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed line-clamp-6">{description}</p>
        </motion.div>
    )
}

// Custom Icons for better visual representation
function PrinterIcon() {
    return (
        <svg className="w-24 md:w-32 h-24 md:h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="20" y="15" width="60" height="45" rx="3" />
            <path d="M 30 25 L 70 25" />
            <path d="M 30 35 L 70 35" />
            <path d="M 30 40 L 70 40" />
            <rect x="25" y="65" width="50" height="15" rx="2" />
            <circle cx="35" cy="72" r="2" fill="currentColor" />
            <circle cx="65" cy="72" r="2" fill="currentColor" />
        </svg>
    )
}

function AirCleanerIcon() {
    return (
        <svg className="w-24 md:w-32 h-24 md:h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="35" y="15" width="30" height="50" rx="3" />
            <circle cx="45" cy="30" r="5" />
            <circle cx="55" cy="30" r="5" />
            <rect x="38" y="45" width="24" height="15" fill="currentColor" opacity="0.3" />
            <rect x="30" y="65" width="40" height="8" rx="2" />
            <path d="M 40 75 L 60 75" />
        </svg>
    )
}

function AppliancesIcon() {
    return (
        <svg className="w-24 md:w-32 h-24 md:h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="15" y="20" width="70" height="50" rx="3" />
            <rect x="20" y="25" width="60" height="35" rx="2" />
            <line x1="35" y1="70" x2="35" y2="80" />
            <line x1="65" y1="70" x2="65" y2="80" />
            <circle cx="45" cy="55" r="3" fill="currentColor" />
            <circle cx="55" cy="55" r="3" fill="currentColor" />
        </svg>
    )
}

function LampIcon() {
    return (
        <svg className="w-24 md:w-32 h-24 md:h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M 50 15 Q 35 30 35 45 L 65 45 Q 65 30 50 15" />
            <line x1="40" y1="45" x2="60" y2="45" />
            <rect x="42" y="45" width="16" height="8" />
            <line x1="45" y1="53" x2="55" y2="53" />
            {/* Rays */}
            <line x1="50" y1="5" x2="50" y2="0" />
            <line x1="70" y1="20" x2="73" y2="16" />
            <line x1="30" y1="20" x2="27" y2="16" />
        </svg>
    )
}

function DisinfectantIcon() {
    return (
        <svg className="w-24 md:w-32 h-24 md:h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M 50 20 L 45 35 L 55 35 Z" />
            <rect x="40" y="35" width="20" height="40" rx="3" />
            <line x1="45" y1="40" x2="55" y2="40" />
            <line x1="45" y1="48" x2="55" y2="48" />
            <line x1="45" y1="56" x2="55" y2="56" />
            <line x1="45" y1="64" x2="55" y2="64" />
            {/* Radiating lines */}
            <line x1="30" y1="50" x2="20" y2="50" strokeLinecap="round" />
            <line x1="70" y1="50" x2="80" y2="50" strokeLinecap="round" />
            <line x1="35" y1="30" x2="28" y2="22" strokeLinecap="round" />
            <line x1="65" y1="70" x2="72" y2="78" strokeLinecap="round" />
        </svg>
    )
}

