import Link from 'next/link'
import { ArrowRight, Check, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { COMPANY, SERVICE_NAME } from '@/lib/site'

const categoryTags = [
  'バナー',
  'SNS投稿画像',
  'ランディングページ',
  '営業資料',
  'チラシ・パンフレット',
  '名刺',
  'ロゴ',
  'ポスター',
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-cream">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.35] mix-blend-multiply" aria-hidden />
      <span
        className="pointer-events-none absolute -top-10 right-[-2rem] hidden select-none font-display text-[22rem] leading-none font-bold text-brand-ink/[0.04] sm:block"
        aria-hidden
      >
        design
      </span>

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-10 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
          <div className="flex flex-col items-start text-left">
            <Reveal className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              <span className="h-px w-6 bg-brand-vermillion" aria-hidden />
              {SERVICE_NAME}
            </Reveal>

            <Reveal delay={80} as="span">
              <h1 className="mt-6 text-balance font-display text-[2.75rem] leading-[1.2] font-bold tracking-tight text-brand-ink sm:text-6xl md:text-[4.75rem]">
                デザインに
                <br />
                こだわる。
                <br />
                <span className="relative inline-block">
                  定額で、
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-brand-vermillion"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 8.5C40 3 100 2 198 7.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                バナーからLP、営業資料、印刷物まで。月額定額で、必要なデザインを必要なだけ依頼できるサービスです。
                都度の見積もりや発注のやり取りをなくし、「頼みたいとき、すぐ頼める」体制をつくります。
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-sm bg-brand-ink px-7 text-base text-brand-ink-foreground hover:bg-brand-ink/85"
                nativeButton={false}
                render={<Link href="#contact" />}
              >
                無料相談する
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-sm border-brand-ink/30 bg-transparent px-7 text-base text-brand-ink hover:bg-brand-ink/5"
                nativeButton={false}
                render={<Link href="#services" />}
              >
                対応範囲を見る
              </Button>
            </Reveal>

            <Reveal delay={300} className="mt-5 font-mono text-xs text-muted-foreground/80">
              提供：{COMPANY} ／ オンライン完結・月単位契約
            </Reveal>
          </div>

          <Reveal delay={200} className="hidden lg:block">
            <div className="border-l border-brand-ink/15 pl-6 font-display text-lg leading-[1.9] font-bold text-brand-ink/70 italic">
              &ldquo;良いデザインは、
              <br />
              待たせない。&rdquo;
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={120} className="relative mt-14 border-y border-brand-ink/10 py-3.5">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...categoryTags, ...categoryTags].map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="flex shrink-0 items-center gap-8 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase"
              >
                {tag}
                <span className="text-brand-vermillion/50" aria-hidden>
                  ／
                </span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-20 sm:pb-28">
        <Reveal delay={160} className="mx-auto max-w-3xl">
          <RequestQueuePreview />
        </Reveal>
      </div>
    </section>
  )
}

const queueItems = [
  {
    tag: 'バナー',
    title: '夏キャンペーン用バナー（サイズ違い3種）',
    status: '進行中',
    tone: 'active',
  },
  {
    tag: 'LP',
    title: '新サービス紹介LPのファーストビュー案',
    status: '順番待ち',
    tone: 'queued',
  },
  {
    tag: '資料',
    title: '営業資料の表紙・中面リデザイン',
    status: '順番待ち',
    tone: 'queued',
  },
  {
    tag: '印刷物',
    title: '展示会用チラシ（A4・両面）',
    status: '納品済み',
    tone: 'done',
  },
] as const

function RequestQueuePreview() {
  return (
    <div className="overflow-hidden rounded-sm border border-brand-ink/12 bg-brand-paper shadow-[0_1px_2px_rgba(36,31,26,0.04),0_16px_40px_-20px_rgba(36,31,26,0.35)]">
      <div className="flex items-center gap-2 border-b border-brand-ink/10 px-5 py-3.5">
        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/80 uppercase">
          依頼キュー — design-requests
        </span>
        <span className="ml-auto hidden rounded-sm bg-brand-vermillion px-2.5 py-0.5 font-mono text-[11px] font-bold text-brand-vermillion-foreground sm:inline">
          月額定額
        </span>
      </div>

      <ul className="divide-y divide-brand-ink/8">
        {queueItems.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="w-fit shrink-0 rounded-sm bg-secondary px-2 py-0.5 font-mono text-[11px] font-medium text-secondary-foreground sm:w-16 sm:text-center">
              {item.tag}
            </span>
            <span className="flex-1 text-left text-sm text-foreground">
              {item.title}
            </span>
            {item.tone === 'active' && (
              <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-brand-vermillion/10 px-2.5 py-0.5 text-xs font-medium text-brand-vermillion">
                <span className="size-1.5 animate-pulse rounded-full bg-brand-vermillion" aria-hidden />
                {item.status}
              </span>
            )}
            {item.tone === 'queued' && (
              <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
                {item.status}
              </span>
            )}
            {item.tone === 'done' && (
              <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
                <Check className="size-3" aria-hidden />
                {item.status}
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="border-t border-brand-ink/10 px-5 py-3.5">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Plus className="size-3.5 text-brand-vermillion" aria-hidden />
          新しい依頼はチャットに送るだけ。件数の上限はありません。
        </span>
      </div>
    </div>
  )
}
