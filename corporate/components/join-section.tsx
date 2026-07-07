import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

export function JoinSection() {
  return (
    <section id="join" className="border-t border-border">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <SectionHeading en="Join us" ja="採用" align="center" />

          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-8 text-center">
            <h3 className="text-balance text-2xl font-light leading-relaxed tracking-wide sm:text-3xl">
              サービスを一緒に立ち上げる
              <br className="hidden sm:block" />
              PMを探しています
            </h3>
            <p className="text-pretty text-sm leading-loose text-muted-foreground sm:text-base">
              CDC AIは「1サービス＝1PM」体制。各サービスの顧客対応から進行管理までを担うPMを募集しています。
              たとえばデザインサービスなら、デザインの背景知識とコミュニケーション力を持つ方。
              あなたの得意分野を軸に、サービスを一緒に育てていきましょう。
            </p>
            <Link
              href="/#contact"
              className="inline-flex h-13 items-center gap-2 rounded-full bg-warm-gradient px-8 text-base font-medium text-primary transition-opacity hover:opacity-90"
            >
              お問い合わせから「PM応募」と添えてご連絡ください
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
