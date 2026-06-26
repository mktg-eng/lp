import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProblemsSection } from '@/components/problems-section'
import { BenefitsSection } from '@/components/benefits-section'
import { LoopSection } from '@/components/loop-section'
import { CasesSection } from '@/components/cases-section'
import { ReasonsSection } from '@/components/reasons-section'
import { PricingSection } from '@/components/pricing-section'
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
        <BenefitsSection />
        <LoopSection />
        <CasesSection />
        <ReasonsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
