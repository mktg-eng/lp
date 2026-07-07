import Link from 'next/link'
import { ArrowRight, Check, Palette, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/site'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden />
      <div className="absolute -top-32 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
            <Palette className="size-3.5 text-accent" aria-hidden />
            AI×プロデザイナーの定額制
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
            デザインの外注を、
            <br className="hidden sm:block" />
            <span className="text-accent">“毎月定額”</span>にする。
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            バナーからLP、営業資料、印刷物まで。月額定額で、必要なデザインを必要なだけ依頼できるサービスです。
            都度の見積もりや発注のやり取りをなくし、「頼みたいとき、すぐ頼める」体制をつくります。
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
              対応範囲を見る
            </Button>
          </div>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            提供：{COMPANY} ／ オンライン完結・月単位契約
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <RequestQueuePreview />
        </div>
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
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/5">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" aria-hidden />
        <span className="size-2.5 rounded-full bg-border" aria-hidden />
        <span className="size-2.5 rounded-full bg-border" aria-hidden />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          依頼キュー · design-requests
        </span>
        <span className="ml-auto hidden rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent sm:inline">
          月額定額
        </span>
      </div>

      <ul className="divide-y divide-border">
        {queueItems.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-5"
          >
            <span className="w-fit shrink-0 rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground sm:w-16 sm:text-center">
              {item.tag}
            </span>
            <span className="flex-1 text-left text-sm text-foreground">
              {item.title}
            </span>
            {item.tone === 'active' && (
              <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
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

      <div className="border-t border-border px-4 py-3 sm:px-5">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Plus className="size-3.5 text-accent" aria-hidden />
          新しい依頼はチャットに送るだけ。件数の上限はありません。
        </span>
      </div>
    </div>
  )
}
