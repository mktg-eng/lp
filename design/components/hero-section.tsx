import Link from 'next/link'
import { ArrowRight, Check, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { COMPANY, SERVICE_NAME } from '@/lib/site'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-yellow">
      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto flex max-w-3xl flex-col items-start text-left">
          <h1 className="text-balance text-[2.6rem] font-black leading-[1.15] tracking-tight text-brand-yellow-foreground sm:text-6xl md:text-7xl">
            デザインに
            <br />
            こだわる。
            <br />
            <span className="relative">
              定額で、
              <span className="absolute -bottom-1 left-0 h-3 w-full bg-brand-coral/40" aria-hidden />
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span className="flex flex-col items-center rounded-sm bg-black px-2.5 py-1.5 text-[10px] font-black leading-tight text-white">
              <span>定額制</span>
              <span>デザイン</span>
              <span>制作サービス</span>
            </span>
            <span className="text-lg font-black tracking-tight text-brand-yellow-foreground sm:text-xl">
              {SERVICE_NAME}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-brand-yellow-foreground/80 sm:text-lg">
            バナーからLP、営業資料、印刷物まで。月額定額で、必要なデザインを必要なだけ依頼できるサービスです。
            都度の見積もりや発注のやり取りをなくし、「頼みたいとき、すぐ頼める」体制をつくります。
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-md bg-brand-coral px-6 text-base text-brand-coral-foreground hover:bg-brand-coral/85"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              無料相談する
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-md border-black/70 bg-transparent px-6 text-base text-brand-yellow-foreground hover:bg-black/5"
              nativeButton={false}
              render={<Link href="#services" />}
            >
              対応範囲を見る
            </Button>
          </div>

          <p className="mt-4 font-mono text-xs text-brand-yellow-foreground/60">
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
    <div className="overflow-hidden rounded-lg border-2 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b-2 border-black px-4 py-3">
        <span className="size-2.5 rounded-full bg-black/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-black/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-black/20" aria-hidden />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          依頼キュー · design-requests
        </span>
        <span className="ml-auto hidden rounded-sm bg-brand-coral px-2.5 py-0.5 font-mono text-[11px] font-bold text-brand-coral-foreground sm:inline">
          月額定額
        </span>
      </div>

      <ul className="divide-y divide-border">
        {queueItems.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-5"
          >
            <span className="w-fit shrink-0 rounded-sm border border-black/80 bg-brand-yellow px-2 py-0.5 font-mono text-[11px] font-bold text-brand-yellow-foreground sm:w-16 sm:text-center">
              {item.tag}
            </span>
            <span className="flex-1 text-left text-sm text-foreground">
              {item.title}
            </span>
            {item.tone === 'active' && (
              <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-brand-coral/10 px-2.5 py-0.5 text-xs font-medium text-brand-coral">
                <span className="size-1.5 animate-pulse rounded-full bg-brand-coral" aria-hidden />
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

      <div className="border-t-2 border-black px-4 py-3 sm:px-5">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Plus className="size-3.5 text-brand-coral" aria-hidden />
          新しい依頼はチャットに送るだけ。件数の上限はありません。
        </span>
      </div>
    </div>
  )
}
