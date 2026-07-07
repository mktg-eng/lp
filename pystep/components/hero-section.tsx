import Link from 'next/link'
import { ArrowRight, Gift, MonitorSmartphone, GraduationCap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { APP_URL } from '@/lib/site'

const badges = [
  { icon: Gift, label: '費用は完全無料' },
  { icon: MonitorSmartphone, label: 'Web完結・環境構築不要' },
  { icon: GraduationCap, label: '小学生〜高校生対象' },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              中高生向け・完全無料
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.32] tracking-tight sm:text-5xl">
              情報オリンピック本戦へ
              <br />
              <span className="text-accent">ここから</span>、はじめよう。
            </h1>

            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              PyStepは、Python文法の基礎から競技プログラミングの演習までを、自宅のブラウザだけで学べる無料の学習アプリです。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold shadow-sm"
                >
                  <badge.icon className="size-4 text-accent" aria-hidden />
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="h-12 px-6 text-base"
                nativeButton={false}
                render={<Link href={APP_URL} />}
              >
                無料で始める
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <span className="font-mono text-xs text-muted-foreground">
                登録は1分・クレジットカード不要
              </span>
            </div>
          </div>

          <div className="relative min-w-0">
            <CodePreview />
            <div className="absolute -top-5 -right-5 hidden w-40 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-xl sm:block">
              <div className="text-2xl font-extrabold tabular-nums text-primary">5</div>
              <div className="mt-0.5 text-xs text-muted-foreground">段階のロードマップ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[var(--navy-950)] shadow-lg shadow-black/10">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="ml-2 font-mono text-xs text-white/50">demo.py</span>
      </div>
      <div className="space-y-2 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed whitespace-nowrap">
        <p className="text-white/80">
          <span className="text-[var(--code-blue)]">name</span> = <span className="text-white">&quot;PyStep&quot;</span>
        </p>
        <p className="text-white/80">
          <span className="text-white">print</span>(name + <span className="text-white">&quot;へようこそ!&quot;</span>)
        </p>
        <p className="mt-3 text-white/55">実行結果</p>
        <p className="text-[var(--code-blue)]">
          PyStepへようこそ!
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-white/70 align-middle" aria-hidden />
        </p>
      </div>
    </div>
  )
}
