import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-sky via-white to-white">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden />
      <div className="absolute -top-32 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-orange/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-balance text-4xl font-black leading-[1.2] tracking-tight text-brand-navy sm:text-5xl md:text-6xl">
            Claude Code、
            <br className="hidden sm:block" />
            入れて終わりになって
            <span className="text-brand-orange">いませんか？</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            設定・運用まで丸ごと代行。チームの開発をAIエージェントで自動化します。
            導入の最初の一歩から、現場に定着するまでを伴走します。
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="h-12 rounded-full bg-brand-orange px-8 text-base text-brand-orange-foreground hover:bg-brand-orange/85"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              無料相談する
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Link
              href="#services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline decoration-brand-navy/25 underline-offset-4 transition-colors hover:text-brand-navy hover:decoration-brand-navy/60"
            >
              サービス内容を見る
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            提供：株式会社CDC AI ／ オンライン相談に対応
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <ClientLogoStrip />
        </div>
      </div>
    </section>
  )
}

const placeholderClients = ['A社', 'B社', 'C社', 'D社', 'E社', 'F社']

function ClientLogoStrip() {
  return (
    <div>
      <p className="text-center font-mono text-xs tracking-[0.1em] text-muted-foreground">
        導入企業ロゴ例（イメージ）
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {placeholderClients.map((name) => (
          <span
            key={name}
            className="flex h-12 min-w-28 items-center justify-center rounded-lg border border-brand-navy/10 bg-white px-5 text-sm font-bold tracking-wide text-brand-navy/40 shadow-sm"
          >
            {name}
          </span>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
        ※ 実在の導入企業ロゴではなく、掲載イメージのプレースホルダーです。
      </p>
    </div>
  )
}
