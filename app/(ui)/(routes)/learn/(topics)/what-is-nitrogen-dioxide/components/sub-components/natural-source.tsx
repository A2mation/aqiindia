'use client'

interface NaturalSourceProps {
    icon: string
    isHovered: boolean
}

export default function NaturalSource({ icon, isHovered }: NaturalSourceProps) {
    const commonAnimationClass = isHovered ? 'animate-float' : ''

    switch (icon) {
        case 'volcano':
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
                    {/* Mountain base */}
                    <path d="M 50 140 L 100 60 L 150 140 Z" className="animate-pulse-glow" />
                    {/* Crater */}
                    <ellipse cx="100" cy="65" rx="20" ry="15" />
                    {/* Smoke/eruption */}
                    <circle cx="90" cy="45" r="12" className={isHovered ? 'animate-pulse' : ''} />
                    <circle cx="110" cy="35" r="15" className={isHovered ? 'animate-pulse' : ''} />
                    <circle cx="100" cy="20" r="14" className={isHovered ? 'animate-pulse' : ''} />
                    {/* Lava flow */}
                    <path d="M 100 75 Q 95 95 90 130" strokeWidth="3" />
                    <path d="M 100 75 Q 105 95 110 130" strokeWidth="3" />
                </svg>
            )

        case 'decay':
            return (
                <svg
                    viewBox="0 0 200 200"
                    className={`w-full h-full text-gray-600 dark:text-gray-400 ${commonAnimationClass}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Cloud/decay */}
                    <path d="M 60 100 Q 55 80 75 70 Q 90 65 100 70 Q 120 60 130 80 Q 145 85 140 105 Q 145 120 125 130 Q 100 140 75 130 Q 55 125 60 100 Z" className="animate-pulse-glow" />
                    {/* Particles */}
                    <circle cx="80" cy="85" r="4" />
                    <circle cx="100" cy="75" r="5" />
                    <circle cx="120" cy="95" r="4" />
                    <circle cx="90" cy="110" r="4" />
                    {/* Decay lines */}
                    <path d="M 85 70 L 85 60" className={isHovered ? 'animate-pulse' : ''} />
                    <path d="M 110 65 L 115 50" className={isHovered ? 'animate-pulse' : ''} />
                    <path d="M 125 100 L 140 110" className={isHovered ? 'animate-pulse' : ''} />
                </svg>
            )

        case 'lightning':
            return (
                <svg
                    viewBox="0 0 200 200"
                    className={`w-full h-full text-yellow-500 dark:text-yellow-400 ${commonAnimationClass}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Cloud */}
                    <path d="M 60 80 Q 55 60 75 50 Q 90 45 100 50 Q 120 40 130 60 Q 145 65 140 85 Q 145 100 125 110 L 75 110 Q 55 105 60 85 Z" />
                    {/* Lightning bolt */}
                    <path
                        d="M 100 110 L 85 145 L 95 145 L 75 180 M 100 110 L 115 145 L 105 145 L 125 180"
                        strokeWidth="3"
                        className={isHovered ? 'animate-pulse' : ''}
                    />
                    {/* Tree/ground */}
                    <path d="M 70 180 L 70 195" strokeWidth="2" />
                    <path d="M 80 190 L 80 195" strokeWidth="2" />
                    <path d="M 90 190 L 90 195" strokeWidth="2" />
                    <path d="M 100 185 L 100 195" strokeWidth="2" />
                </svg>
            )

        case 'ocean':
            return (
                <svg
                    viewBox="0 0 200 200"
                    className={`w-full h-full text-blue-500 dark:text-blue-400 ${commonAnimationClass}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Water waves */}
                    <path d="M 40 100 Q 50 90 60 100 T 80 100 T 100 100 T 120 100 T 140 100 T 160 100" className={isHovered ? 'animate-pulse' : ''} />
                    <path d="M 40 120 Q 50 110 60 120 T 80 120 T 100 120 T 120 120 T 140 120 T 160 120" />
                    <path d="M 40 140 Q 50 130 60 140 T 80 140 T 100 140 T 120 140 T 140 140 T 160 140" />

                    {/* Fish */}
                    <ellipse cx="75" cy="95" rx="12" ry="8" />
                    <path d="M 88 95 L 100 90 L 100 100" fill="currentColor" />
                    <circle cx="70" cy="92" r="2" fill="white" />

                    <ellipse cx="120" cy="115" rx="14" ry="9" />
                    <path d="M 134 115 L 148 108 L 148 122" fill="currentColor" />
                    <circle cx="114" cy="111" r="2" fill="white" />

                    {/* Bubbles */}
                    <circle cx="60" cy="75" r="3" className="animate-float" style={{ animationDelay: '0s' }} />
                    <circle cx="100" cy="70" r="2" className="animate-float" style={{ animationDelay: '0.5s' }} />
                    <circle cx="140" cy="80" r="2.5" className="animate-float" style={{ animationDelay: '1s' }} />
                </svg>
            )

        default:
            return null
    }
}
