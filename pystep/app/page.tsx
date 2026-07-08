import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ValueStripSection } from '@/components/value-strip-section'
import { ProblemsSection } from '@/components/problems-section'
import { ConceptSection } from '@/components/concept-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { BenefitsSection } from '@/components/benefits-section'
import { ReasonsSection } from '@/components/reasons-section'
import { ValuesBandSection } from '@/components/values-band-section'
import { FaqSection } from '@/components/faq-section'
import { PricingSection } from '@/components/pricing-section'
import { JenaCourseSection } from '@/components/jena-course-section'
import { FinalCtaSection } from '@/components/final-cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ValueStripSection />
        <ProblemsSection />
        <ConceptSection />
        <RoadmapSection />
        <BenefitsSection />
        <ReasonsSection />
        <ValuesBandSection />
        <FaqSection />
        <PricingSection />
        <JenaCourseSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
