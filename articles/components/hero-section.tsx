import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/site'
import { cn } from '@/lib/utils'

const heroHighlight = { label: '2万円〜', note: '記事単価（目安）' }

const heroStats = [
  { label: 'SEO', note: '検索エンジン対策' },
  { label: 'AIO', note: 'AI検索対策' },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden />
      <div className="absolute -top-32 right-0 -z-0 h-72 w-[40rem] rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2.5 border-l-2 border-accent pl-3">
            <Sparkles className="size-3.5 text-accent" aria-hidden />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              AI×人のハイブリッド記事制作
            </span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.25] tracking-tight text-primary sm:text-5xl">
            検索にも、AIにも、
            <br />
            <span className="text-accent">見つかる記事</span>を。
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            SEOだけでなく、AI検索（AIO）からの流入も見据えた記事を、
            企画から執筆・投稿・公開後の改善まで丸ごと代行。
            記事単価2万円〜（目安）で、品質と本数を両立します。
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 rounded-full bg-accent px-7 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              無料相談する
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Link
              href="#services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              サービス内容を見る
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>

          <div className="mt-9 flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-0.5 rounded-2xl border-2 border-accent/30 bg-accent/5 px-5 py-3.5">
              <span className="text-3xl font-black leading-none tracking-tight text-accent sm:text-4xl">
                {heroHighlight.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {heroHighlight.note}
              </span>
            </div>
            <div className="flex gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-0.5 rounded-xl border border-border bg-card px-4 py-2.5"
                >
                  <span className="text-lg font-bold tracking-tight text-primary">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {stat.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 font-mono text-xs text-muted-foreground">
            提供：{COMPANY} ／ オンライン相談に対応
          </p>
        </div>

        <PipelineBoardPreview />
      </div>
    </section>
  )
}

const pipelineStages = ['企画', '執筆', '採点', '校閲', '公開']

const pipelineRows = [
  { title: '基礎解説：はじめての◯◯', stage: 4, label: '公開済み' },
  { title: '比較ガイド：◯◯の選び方', stage: 3, label: '校閲中' },
  { title: '事例解説：◯◯導入の流れ', stage: 2, label: '採点中' },
  { title: 'Q&A：◯◯のよくある疑問', stage: 1, label: '執筆中' },
]

function PipelineBoardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl bg-primary shadow-xl shadow-primary/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-white/60">
          <FileText className="size-3.5" aria-hidden />
          記事パイプライン（進行イメージ）
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-5 py-3">
        {pipelineStages.map((stage, index) => (
          <div key={stage} className="flex items-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-white/80">
              {stage}
            </span>
            {index < pipelineStages.length - 1 ? (
              <ArrowRight className="size-3 text-white/25" aria-hidden />
            ) : null}
          </div>
        ))}
      </div>

      <ul className="divide-y divide-white/10">
        {pipelineRows.map((row) => (
          <li
            key={row.title}
            className="flex items-center justify-between gap-4 px-5 py-3.5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <FileText className="size-4 shrink-0 text-white/40" aria-hidden />
              <span className="truncate text-sm text-white/85">{row.title}</span>
            </div>
            <span
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px]',
                row.stage === 4
                  ? 'bg-brand-teal text-brand-teal-foreground'
                  : 'bg-white/10 text-white/60',
              )}
            >
              {row.stage === 4 ? (
                <CheckCircle2 className="size-3" aria-hidden />
              ) : (
                <span className="size-1.5 rounded-full bg-current" aria-hidden />
              )}
              {row.label}
            </span>
          </li>
        ))}
      </ul>

      <p className="border-t border-white/10 px-5 py-2.5 text-right font-mono text-[11px] text-white/40">
        ※ 画面はイメージです
      </p>
    </div>
  )
}
