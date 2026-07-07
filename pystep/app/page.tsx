import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProblemsSection } from '@/components/problems-section'
import { BenefitsSection } from '@/components/benefits-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { ReasonsSection } from '@/components/reasons-section'
import { PricingSection } from '@/components/pricing-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCtaSection } from '@/components/final-cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemsSection />
        <BenefitsSection />
        <RoadmapSection />
        <ReasonsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
