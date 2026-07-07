import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/site'
import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden />
      <div className="absolute -top-32 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-accent">
            <Sparkles className="size-3.5" aria-hidden />
            AI×人のハイブリッド記事制作
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
            検索にも、AIにも、
            <br className="hidden sm:block" />
            <span className="text-accent">見つかる記事</span>を。
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            SEOだけでなく、AI検索（AIO）からの流入も見据えた記事を、
            企画から執筆・投稿・公開後の改善まで丸ごと代行。
            記事単価2万円〜（目安）で、品質と本数を両立します。
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              無料相談する
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href="#services" />}
            >
              サービス内容を見る
            </Button>
          </div>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            提供：{COMPANY} ／ オンライン相談に対応
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <PipelineBoardPreview />
        </div>
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
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/5">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-destructive/70" aria-hidden />
        <span className="size-2.5 rounded-full bg-accent/60" aria-hidden />
        <span className="size-2.5 rounded-full bg-primary/60" aria-hidden />
        <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <FileText className="size-3.5" aria-hidden />
          記事パイプライン（進行イメージ）
        </span>
      </div>

      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        {pipelineStages.map((stage, index) => (
          <div key={stage} className="flex items-center gap-2">
            <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[11px] text-secondary-foreground">
              {stage}
            </span>
            {index < pipelineStages.length - 1 ? (
              <ArrowRight className="size-3 text-muted-foreground/50" aria-hidden />
            ) : null}
          </div>
        ))}
      </div>

      <ul className="divide-y divide-border">
        {pipelineRows.map((row) => (
          <li
            key={row.title}
            className="flex items-center justify-between gap-4 px-5 py-3.5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <FileText className="size-4 shrink-0 text-muted-foreground/70" aria-hidden />
              <span className="truncate text-sm">{row.title}</span>
            </div>
            <span
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px]',
                row.stage === 4
                  ? 'bg-accent/10 text-accent'
                  : 'bg-secondary text-muted-foreground',
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

      <p className="border-t border-border px-5 py-2.5 text-right font-mono text-[11px] text-muted-foreground/70">
        ※ 画面はイメージです
      </p>
    </div>
  )
}
