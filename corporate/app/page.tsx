import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { NewsSection } from '@/components/news-section'
import { JoinSection } from '@/components/join-section'
import { CompanySection } from '@/components/company-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <NewsSection />
        <JoinSection />
        <CompanySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
