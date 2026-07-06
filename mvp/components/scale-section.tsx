import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const sizes = [
  {
    size: 'S',
    lead: '最短 1〜2週間',
    description: '小さく試したい・単機能のMVP',
    featured: false,
    scope: [
      '画面数：1〜3画面ほど',
      '主要機能はひとつに絞って検証',
      'ログイン・外部連携なし',
    ],
    example: '想定例：予約フォーム、簡単な診断ツール、問い合わせ受付など',
    cancelFee: '10万円',
  },
  {
    size: 'M',
    lead: '約 3〜4週間',
    description: '主要機能を一通り備えたMVP',
    featured: true,
    scope: [
      '画面数：4〜8画面ほど',
      '複数機能＋基本的な業務フロー',
      '簡易ログイン・外部連携はモックで想定',
    ],
    example: '想定例：顧客管理、案件管理、社内向けの申請・承認アプリなど',
    cancelFee: '20万円',
  },
  {
    size: 'L',
    lead: '約 5〜8週間',
    description: '機能・画面の多いMVP',
    featured: false,
    scope: [
      '画面数：9画面以上',
      '複数ロール・込み入った業務フロー',
      '権限管理あり・外部連携はモックで想定',
    ],
    example: '想定例：業務基幹システムの一部、複数部署をまたぐ業務アプリなど',
    cancelFee: '30万円',
  },
]

export function ScaleSection() {
  return (
    <section id="scale" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="MVPの規模と納期の目安"
        title="規模に応じた、開発内容と納期の目安"
        description="MVPの規模はS/M/Lの3段階。開発内容・納期・中止時の実費が規模で決まります。いずれも目安です。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {sizes.map((item) => (
          <div
            key={item.size}
            className={cn(
              'relative flex flex-col gap-6 rounded-2xl border p-7 sm:p-8',
              item.featured
                ? 'border-accent/60 bg-card shadow-lg shadow-black/5'
                : 'border-border bg-card',
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
                    : 'bg-secondary text-foreground',
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

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <span className="text-xs font-medium text-muted-foreground">
                開発内容（目安）
              </span>
              <ul className="flex flex-col gap-3">
                {item.scope.map((ex) => (
                  <li key={ex} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="leading-relaxed">{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              {item.example}
            </p>

            <Link
              href="#cancellation"
              className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
            >
              中止時の実費：{item.cancelFee}〜（目安）
              <ArrowRight className="size-3" aria-hidden />
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        ※ バイブコーディング（AIを活用した高速開発）前提・外部連携はモック想定の目安です。実際の納期・内容は要件により異なります。中止時の実費は時点によって変わります（詳細は実費の一覧表へ）。
      </p>
    </section>
  )
}
