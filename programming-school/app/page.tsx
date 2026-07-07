import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ValueStripSection } from '@/components/value-strip-section'
import { ProblemsSection } from '@/components/problems-section'
import { ConceptSection } from '@/components/concept-section'
import { CurriculumSection } from '@/components/curriculum-section'
import { ReasonsSection } from '@/components/reasons-section'
import { ValuesBandSection } from '@/components/values-band-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
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
        <CurriculumSection />
        <ReasonsSection />
        <ValuesBandSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
