import { Check } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const sizes = [
  {
    size: 'S',
    lead: '最短 1〜2週間',
    description: '小さく試したい・単機能のMVP',
    featured: false,
    examples: [
      '1〜2画面ほどの試作',
      '単一の主要機能を検証',
      'アイデアの当たり確認',
    ],
  },
  {
    size: 'M',
    lead: '約 3〜4週間',
    description: '主要機能を一通り備えたMVP',
    featured: true,
    examples: [
      '複数画面・基本的な操作フロー',
      '主要機能をまとめて検証',
      '相見積もりの精度を高めやすい',
    ],
  },
  {
    size: 'L',
    lead: '約 5〜8週間',
    description: '機能・画面の多いMVP',
    featured: false,
    examples: [
      '複数機能・込み入った画面',
      '業務フローに沿った検証',
      '外部連携はモックで想定',
    ],
  },
]

export function ScaleSection() {
  return (
    <section id="scale" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="MVPの規模と納期の目安"
        title="規模に応じた、納期の目安"
        description="案件の規模感に合わせて、おおよその納期をご案内します。いずれも目安です。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {sizes.map((item) => (
          <div
            key={item.size}
            className={cn(
              'relative flex flex-col gap-6 rounded-2xl border p-7 sm:p-8',
              item.featured
                ? 'border-accent/60 bg-card shadow-xl shadow-primary/10'
                : 'border-border bg-card/50',
            )}
          >
            {item.featured ? (
              <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                よくある規模
              </span>
            ) : null}

            <div className="flex items-center gap-4">
              <span
                className={cn(
                  'flex size-14 items-center justify-center rounded-xl font-mono text-2xl font-semibold',
                  item.featured
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary/60 text-foreground',
                )}
              >
                {item.size}
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-tight">
                  {item.lead}
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    （目安）
                  </span>
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.description}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-3 border-t border-border pt-6">
              {item.examples.map((ex) => (
                <li key={ex} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed">{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        ※ バイブコーディング（AIを活用した高速開発）前提・外部連携はモック想定の目安です。実際の納期は要件により異なります。
      </p>
    </section>
  )
}
