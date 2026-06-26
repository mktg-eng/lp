import Link from 'next/link'
import { ExternalLink, Send, BarChart3, Database, Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'

const features = [
  { icon: Database, label: 'リスト管理' },
  { icon: Send, label: '配信・実行' },
  { icon: BarChart3, label: '効果分析' },
  { icon: Filter, label: '改善・最適化' },
]

export function SygnalSection() {
  return (
    <section id="sygnal" className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-brand-soft p-8 sm:p-12">
        <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]" aria-hidden />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" aria-hidden />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-xs text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              連携プラットフォーム
            </span>
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              配信から効果分析まで、
              <span className="text-gradient">Sygnal</span> で一気通貫
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              新規開拓の実行・分析プラットフォーム「Sygnal」を基盤に、フォーム営業の配信から反応の計測・改善までをワンストップで運用。
              当たった型を、止めずに横展開していきます。
            </p>

            <div className="mt-1 flex flex-wrap gap-2.5">
              {features.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-foreground"
                >
                  <f.icon className="size-3.5 text-accent" aria-hidden />
                  {f.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={
                <Link
                  href="https://start.sygnal-ai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Sygnal を見る
              <ExternalLink className="size-4" aria-hidden />
            </Button>
            <p className="font-mono text-xs text-muted-foreground">
              start.sygnal-ai.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
