'use client'

interface ManmadeSourceProps {
    icon: string
    isHovered: boolean
}

export default function ManmadeSource({ icon, isHovered }: ManmadeSourceProps) {
    const commonAnimationClass = isHovered ? 'animate-float' : ''

    switch (icon) {
        case 'car':
            return (
                <svg
                    viewBox="0 0 200 200"
                    className={`w-full h-full text-gray-700 dark:text-gray-300 ${commonAnimationClass}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Car body */}
                    <path d="M 40 120 L 50 80 Q 50 60 70 60 L 130 60 Q 150 60 150 80 L 160 120" />
                    {/* Car top */}
                    <rect x="65" y="70" width="70" height="25" rx="3" />
                    {/* Wheels */}
                    <circle cx="70" cy="125" r="12" />
                    <circle cx="130" cy="125" r="12" />
                    {/* Hub caps */}
                    <circle cx="70" cy="125" r="6" fill="none" />
                    <circle cx="130" cy="125" r="6" fill="none" />
                    {/* Windows */}
                    <rect x="70" y="72" width="20" height="20" rx="2" fill="none" />
                    <rect x="110" y="72" width="20" height="20" rx="2" fill="none" />
                    {/* Exhaust smoke */}
                    <circle cx="165" cy="100" r="6" className={isHovered ? 'animate-pulse' : ''} opacity="0.7" />
                    <circle cx="170" cy="90" r="5" className={isHovered ? 'animate-pulse' : ''} opacity="0.5" />
                    <circle cx="168" cy="110" r="5" className={isHovered ? 'animate-pulse' : ''} opacity="0.5" />
                </svg>
            )

        case 'factory':
            return (
                <svg
                    viewBox="0 0 200 200"
                    className={`w-full h-full text-red-600 dark:text-red-500 ${commonAnimationClass}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Main building */}
                    <rect x="50" y="90" width="100" height="70" />
                    {/* Door */}
                    <rect x="85" y="130" width="30" height="30" />
                    {/* Windows */}
                    <rect x="60" y="100" width="15" height="15" />
                    <rect x="85" y="100" width="15" height="15" />
                    <rect x="110" y="100" width="15" height="15" />
                    <rect x="135" y="100" width="15" height="15" />

                    {/* Smokestacks */}
                    <rect x="65" y="60" width="12" height="30" />
                    <rect x="95" y="50" width="12" height="40" />
                    <rect x="125" y="65" width="12" height="25" />

                    {/* Smoke */}
                    <circle cx="71" cy="50" r="8" className={isHovered ? 'animate-pulse' : ''} opacity="0.7" />
                    <circle cx="68" cy="35" r="6" className={isHovered ? 'animate-pulse' : ''} opacity="0.5" />
                    <circle cx="101" cy="40" r="10" className={isHovered ? 'animate-pulse' : ''} opacity="0.7" />
                    <circle cx="98" cy="20" r="8" className={isHovered ? 'animate-pulse' : ''} opacity="0.5" />
                    <circle cx="131" cy="55" r="7" className={isHovered ? 'animate-pulse' : ''} opacity="0.7" />
                </svg>
            )

        case 'fertilizer':
            return (
                <svg
                    viewBox="0 0 200 200"
                    className={`w-full h-full text-amber-600 dark:text-amber-500 ${commonAnimationClass}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Bag/container */}
                    <path d="M 60 160 L 65 80 Q 65 60 85 60 L 115 60 Q 135 60 135 80 L 140 160 Z" />
                    {/* Folded top */}
                    <path d="M 65 80 L 135 80" />
                    <path d="M 70 75 L 130 75" />

                    {/* Contents */}
                    <circle cx="85" cy="110" r="6" fill="currentColor" opacity="0.6" />
                    <circle cx="100" cy="120" r="5" fill="currentColor" opacity="0.6" />
                    <circle cx="115" cy="115" r="6" fill="currentColor" opacity="0.6" />
                    <circle cx="90" cy="135" r="5" fill="currentColor" opacity="0.6" />
                    <circle cx="110" cy="140" r="5" fill="currentColor" opacity="0.6" />

                    {/* Particles rising */}
                    <circle cx="75" cy="40" r="3" className={isHovered ? 'animate-pulse' : ''} opacity="0.7" />
                    <circle cx="100" cy="30" r="2.5" className={isHovered ? 'animate-pulse' : ''} opacity="0.6" />
                    <circle cx="125" cy="45" r="3" className={isHovered ? 'animate-pulse' : ''} opacity="0.7" />
                </svg>
            )

        case 'machinery':
            return (
                <svg
                    viewBox="0 0 200 200"
                    className={`w-full h-full text-gray-700 dark:text-gray-300 ${commonAnimationClass}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Main body */}
                    <rect x="50" y="100" width="100" height="60" rx="4" />
                    {/* Cabin */}
                    <rect x="70" y="65" width="60" height="35" rx="3" />
                    {/* Windows */}
                    <rect x="80" y="75" width="15" height="15" rx="2" />
                    <rect x="105" y="75" width="15" height="15" rx="2" />
                    {/* Wheels */}
                    <circle cx="70" cy="165" r="15" />
                    <circle cx="130" cy="165" r="15" />
                    {/* Hub details */}
                    <circle cx="70" cy="165" r="7" fill="none" />
                    <circle cx="130" cy="165" r="7" fill="none" />
                    {/* Exhaust pipe */}
                    <path d="M 150 120 L 165 115 L 165 140 L 150 135 Z" />
                    {/* Exhaust smoke */}
                    <circle cx="170" cy="105" r="5" className={isHovered ? 'animate-pulse' : ''} opacity="0.7" />
                    <circle cx="175" cy="95" r="4" className={isHovered ? 'animate-pulse' : ''} opacity="0.5" />
                </svg>
            )

        case 'stove':
            return (
                <svg
                    viewBox="0 0 200 200"
                    className={`w-full h-full text-orange-600 dark:text-orange-500 ${commonAnimationClass}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Stove body */}
                    <rect x="45" y="70" width="110" height="90" rx="4" />
                    {/* Oven door */}
                    <rect x="55" y="110" width="60" height="40" rx="2" />
                    {/* Window */}
                    <rect x="62" y="118" width="46" height="24" rx="1" fill="none" />
                    {/* Burners */}
                    <circle cx="75" cy="85" r="8" />
                    <circle cx="85" cy="85" r="8" />
                    <circle cx="95" cy="85" r="8" />
                    <circle cx="105" cy="85" r="8" />
                    {/* Burner details */}
                    <circle cx="75" cy="85" r="5" fill="none" />
                    <circle cx="85" cy="85" r="5" fill="none" />
                    <circle cx="95" cy="85" r="5" fill="none" />
                    <circle cx="105" cy="85" r="5" fill="none" />
                    {/* Handles */}
                    <line x1="118" y1="90" x2="130" y2="85" />
                    <line x1="118" y1="130" x2="130" y2="130" />
                    {/* Heat/steam */}
                    <path d="M 70 55 Q 70 50 75 55" className={isHovered ? 'animate-pulse' : ''} strokeWidth="2" />
                    <path d="M 85 50 Q 85 45 90 50" className={isHovered ? 'animate-pulse' : ''} strokeWidth="2" />
                    <path d="M 100 55 Q 100 50 105 55" className={isHovered ? 'animate-pulse' : ''} strokeWidth="2" />
                </svg>
            )

        default:
            return null
    }
}
