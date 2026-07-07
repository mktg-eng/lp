import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { ServiceLogo } from '@/components/logos'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'サービス一覧 | 株式会社CDC AI',
  description:
    '株式会社CDC AIが立ち上げ、運営しているサービスの一覧。Claude Code導入支援、MVP相見積もり、BtoBリード獲得支援、定額制デザイン、SEO・AIO記事作成代行を提供しています。',
}

export default function ServicePage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        {/* ページヒーロー（トップより軽量なhero-lite） */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-20">
            <h1 className="text-6xl font-light tracking-wide sm:text-7xl">
              Services
            </h1>
            <p className="mt-6 max-w-2xl text-pretty leading-loose text-muted-foreground sm:text-lg">
              私たちが立ち上げ、運営しているサービス
            </p>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
            {SERVICES.map((service, index) => (
              <article
                key={service.name}
                className="grid gap-7 border-b border-border py-14 first:pt-0 sm:grid-cols-[auto_1fr] sm:gap-10 sm:py-16"
              >
                <ServiceLogo
                  service={service.logo}
                  className="size-[72px] shrink-0"
                />

                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-sm text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl font-light tracking-wide sm:text-4xl">
                      {service.name}
                    </h2>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {service.en}
                    </span>
                  </div>

                  <p className="max-w-3xl text-pretty text-sm leading-loose text-muted-foreground sm:text-base">
                    {service.detail}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* NOTE: 各LPの公開URL（Vercel）確定後、lib/services.ts の href を差し替える */}
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/70"
                  >
                    サービスサイトへ
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </div>
              </article>
            ))}

            <p className="mt-6 text-xs text-muted-foreground">
              ※サービス名は一部仮称です。
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
