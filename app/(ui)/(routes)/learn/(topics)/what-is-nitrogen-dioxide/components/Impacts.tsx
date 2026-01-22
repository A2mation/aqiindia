import React from 'react'
import { Header } from './sub-components/no2-infographic/header'
import { HealthImpacts } from './sub-components/no2-infographic/health-impacts'
import { EnvironmentalEffects } from './sub-components/no2-infographic/environmental-effects'

const Impacts = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <HealthImpacts />
            <EnvironmentalEffects />
        </main>
    )
}

export default Impacts
