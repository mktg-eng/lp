import Link from 'next/link'
import { ArrowRight, Sparkles, TrendingUp, Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden />
      <div className="absolute -top-32 left-1/4 -z-0 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" aria-hidden />
      <div className="absolute -top-24 right-1/4 -z-0 h-64 w-[30rem] translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 font-mono text-xs text-accent">
            <Sparkles className="size-3.5" aria-hidden />
            AI × フォーム営業で新規開拓
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
            “当たる集客”を、
            <br className="hidden sm:block" />
            <span className="text-gradient">コピーして増やす。</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            AIでLP・オファーを高速量産 → フォーム営業で検証 → 当たった型を横展開。
            低コストで新規リードを回す仕組みを提供します。
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
              render={<Link href="#flow" />}
            >
              仕組みを見る
            </Button>
          </div>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            提供：株式会社CDC AI ／ 配信基盤：Sygnal
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <GrowthPreview />
        </div>
      </div>
    </section>
  )
}

const metrics = [
  { label: '量産したLP', value: '24', unit: '本/月', accent: false },
  { label: '検証中の訴求', value: '7', unit: '種', accent: false },
  { label: '獲得リード', value: '+38%', unit: '前月比', accent: true },
]

const bars = [34, 46, 41, 58, 52, 70, 66, 84, 92]

function GrowthPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl shadow-primary/10">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-primary/70" aria-hidden />
          <span className="size-2.5 rounded-full bg-accent/60" aria-hidden />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            sygnal · campaign dashboard
          </span>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-xs text-accent">
          <TrendingUp className="size-3.5" aria-hidden />
          growth
        </span>
      </div>

      <div className="grid gap-px bg-border/60 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="bg-card px-5 py-4">
            <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
              {m.label}
            </p>
            <p className="mt-1.5 flex items-baseline gap-1">
              <span
                className={
                  m.accent
                    ? 'text-2xl font-semibold tracking-tight text-accent'
                    : 'text-2xl font-semibold tracking-tight'
                }
              >
                {m.value}
              </span>
              <span className="text-xs text-muted-foreground">{m.unit}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-border p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <Copy className="size-3.5 text-primary" aria-hidden />
            当たった型を横展開中
          </span>
          <span className="font-mono text-[11px] text-muted-foreground/70">
            週次リード推移
          </span>
        </div>
        <div className="flex h-28 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-brand-gradient"
              style={{ height: `${h}%`, opacity: 0.45 + (i / bars.length) * 0.55 }}
              aria-hidden
            />
          ))}
        </div>
      </div>

      <p className="border-t border-border px-5 py-2.5 text-center font-mono text-[10px] text-muted-foreground/60">
        ※ 画面はイメージです（数値はサンプル）
      </p>
    </div>
  )
}
