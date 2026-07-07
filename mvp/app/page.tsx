import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProblemsSection } from '@/components/problems-section'
import { ServicesSection } from '@/components/services-section'
import { FlowSection } from '@/components/flow-section'
import { FeeExampleSection } from '@/components/fee-example-section'
import { PricingSection } from '@/components/pricing-section'
import { CancellationSection } from '@/components/cancellation-section'
import { ReasonsSection } from '@/components/reasons-section'
import { ComparisonSection } from '@/components/comparison-section'
import { BenefitsSection } from '@/components/benefits-section'
import { ScaleSection } from '@/components/scale-section'
import { OptionsSection } from '@/components/options-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <FlowSection />
        <FeeExampleSection />
        <PricingSection />
        <CancellationSection />
        <ReasonsSection />
        <ComparisonSection />
        <BenefitsSection />
        <ScaleSection />
        <OptionsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
