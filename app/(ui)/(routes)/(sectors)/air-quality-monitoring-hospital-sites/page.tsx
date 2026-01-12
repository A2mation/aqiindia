import { ApproachSection } from './components/approach-section'
import { ClientLogos } from './components/client-logos'
import { CTASection } from './components/cta-section'
import { FAQSection } from './components/faq-section'
import { Hero } from './components/Hero'
import { PortfolioShowcase } from './components/portfolio-showcase'
import { StatsSection } from './components/stats-section'
import { TestimonialsSection } from './components/testimonial-section'

const HospitalSitePage = () => {
    return (
        <>
            <Hero />
            <PortfolioShowcase />
            <ClientLogos />
            <FAQSection />
            <StatsSection />
            <ApproachSection />
            <CTASection />
        </>
    )
}

export default HospitalSitePage
