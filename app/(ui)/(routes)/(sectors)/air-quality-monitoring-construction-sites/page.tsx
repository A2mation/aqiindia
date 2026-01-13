import { FAQSection } from './components/FAQSection'
import { HeroSection } from './components/HeroSection'
import MonitorAirQualitySection from './components/MonitorAirQualitySection'
import { MonitorConstructionSites } from './components/MonitorConstructionSites'

const ConstructionSitePage = () => {
    return (
        <>
            <HeroSection />
            <MonitorAirQualitySection />
            <MonitorConstructionSites />
            <FAQSection />
        </>
    )
}

export default ConstructionSitePage
