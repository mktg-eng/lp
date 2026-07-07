import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { ServiceLogo } from '@/components/logos'
import { SERVICES } from '@/lib/services'

/**
 * トップページ用のサービスダイジェスト。
 * 5つのロゴタイル＋1行紹介を並べ、詳細は /service ページへ誘導する。
 */
export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <SectionHeading
          en="Services"
          ja="サービス"
          description="CDC AIが立ち上げ、運営している5つのサービス。"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="flex flex-col gap-5 bg-card p-6 sm:p-7"
            >
              <ServiceLogo service={service.logo} className="size-12" />
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-medium leading-snug">
                  {service.name}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/service"
            className="inline-flex h-13 items-center gap-2 rounded-full bg-warm-gradient px-8 text-base font-medium text-primary transition-opacity hover:opacity-90"
          >
            サービス一覧を見る
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
