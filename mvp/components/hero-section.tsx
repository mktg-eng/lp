import Link from 'next/link'
import { ArrowRight, TrendingDown, ArrowDown } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden />
      <div className="absolute -top-32 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute -top-20 right-1/4 -z-0 h-56 w-[28rem] rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 font-mono text-xs text-accent">
            <TrendingDown className="size-3.5" aria-hidden />
            成果報酬型 MVP相見積もりサービス
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.14] tracking-tight sm:text-5xl md:text-6xl">
            「いきなり高額発注」から、
            <br className="hidden sm:block" />
            「先に試して、
            <span className="text-accent">安く・正確に</span>」へ。
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            動くMVPを無料でお渡し。それを材料に相見積もりし、本開発費を下げます。
            <span className="font-medium text-foreground">
              下がらなければ、報酬も無料。
            </span>
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              無料で相談する
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href="#value" />}
            >
              提供価値を見る
            </Button>
          </div>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            提供：株式会社CDC AI ／ NDA締結のうえヒアリング
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <ArbitragePreview />
        </div>
      </div>
    </section>
  )
}

function ArbitragePreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl shadow-primary/5">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <span className="font-mono text-xs text-muted-foreground">
          本開発費の見積もり（計算例・目安）
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[11px] text-accent">
          <TrendingDown className="size-3" aria-hidden />
          ARBITRAGE
        </span>
      </div>

      <div className="grid gap-4 p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-xs text-muted-foreground">いきなり発注</p>
            <p className="mt-1 font-mono text-2xl font-semibold tracking-tight text-muted-foreground line-through decoration-destructive/50 decoration-2">
              ¥2,000,000
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground/70">当初見積もり（目安）</p>
          </div>
          <div className="rounded-xl border border-accent/40 bg-accent/5 p-4">
            <p className="text-xs text-accent">相見積もり後</p>
            <p className="mt-1 font-mono text-2xl font-semibold tracking-tight text-foreground">
              ¥1,500,000
            </p>
            <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-accent">
              <ArrowDown className="size-3" aria-hidden />
              ¥500,000 ダウン（目安）
            </p>
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-3 rounded-xl border border-border bg-secondary/40 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-muted-foreground">成果報酬</span>
            <span className="font-mono text-lg font-semibold text-foreground">¥150,000</span>
            <span className="text-[11px] text-muted-foreground/70">（差額の30%）</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-muted-foreground">実質お得</span>
            <span className="font-mono text-lg font-semibold text-accent">¥350,000</span>
          </div>
        </div>
      </div>
    </div>
  )
}
