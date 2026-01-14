import { Hero } from './components/Hero'
import { ClientLogos } from './components/client-logos'
import { FAQSection } from './components/faq-section'
import { StatsSection } from './components/Challanges-section'
import { ApproachSection } from './components/approach-section'
import { CTASection } from './components/cta-section'

const IndustriesMonitorPage = () => {
    return (
        <>
            <Hero />
            <ClientLogos />
            <StatsSection />
            <FAQSection />
            <ApproachSection />
            <CTASection />
        </>
    )
}

export default IndustriesMonitorPage
