import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const volumeRows = [
  { volume: '10記事/月', monthly: '20万円' },
  { volume: '15記事/月', monthly: '30万円' },
  { volume: '20記事/月', monthly: '40万円' },
  { volume: '30記事/月', monthly: '60万円' },
]

const contractBasics = [
  { label: '記事単価', value: '2万円/記事', note: '目安' },
  { label: '初期契約費用', value: '20万円', note: '初月のみ・目安' },
  { label: '最低発注月額', value: '20万円', note: '目安' },
  { label: '契約期間', value: '6ヶ月〜', note: '' },
]

const scopeItems = [
  '文字数：1記事あたり最大1万文字程度まで対応',
  '執筆：AIによる初稿作成＋校正',
  '画像：タイトル画像の制作（AI制作）',
  '納品：コピペ投稿できるHTMLタグ付き',
  '企画：キーワード選定・タイトル考案・記事内CTAの改善提案',
  '会議：キックオフ＋月次定例ミーティング',
  '連絡：Slackなどのチャットツールでやり取り',
  '分析：GA4・Google Search Console等で計測し、改善に活用',
]

const plans = [
  {
    name: '記事制作プラン',
    description: 'コンテンツSEO・AI検索対策の記事制作を任せたい方へ。',
    price: '記事単価のみ',
    priceNote: '2万円/記事（目安）',
    featured: true,
    features: [
      '企画〜執筆〜投稿までの記事制作一式',
      'キーワード選定・タイトル考案',
      '記事内CTAの改善提案',
      'キックオフ＋月次定例で振り返り',
    ],
  },
  {
    name: 'メディア改善プラン',
    description: '記事に加えて、サイト全体のSEO・AI検索対策まで任せたい方へ。',
    price: '＋月額20万円',
    priceNote: '記事単価に加算（目安）',
    featured: false,
    features: [
      'SEO・AI検索対策のためのサイト監査',
      '内部対策・外部対策までカバー',
      '過去記事のメンテナンス・リライト',
      'CV改善のためのメディア施策',
    ],
  },
  {
    name: '時間稼働プラン',
    description: '専任チームを、その時々の課題に合わせて柔軟に使いたい方へ。',
    price: '月額20万円',
    priceNote: '月20時間の稼働目安',
    featured: false,
    features: [
      '対応範囲を限定せず、時間内で施策を実行',
      'SEO・AI検索対策に長けた専任チーム',
      '課題の変化に合わせて稼働内容を調整',
      '月次でふりかえりと翌月の計画づくり',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="料金"
        title="記事単価2万円〜。本数で選べるシンプルな料金"
        description="料金は「記事単価×月間本数」が基本。以下はいずれも目安の金額です。"
      />

      {/* 契約の基本数字 */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contractBasics.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1.5 rounded-2xl border border-border bg-card p-6"
          >
            <span className="text-xs font-medium text-muted-foreground">
              {item.label}
            </span>
            <span className="text-2xl font-bold tracking-tight text-primary">
              {item.value}
            </span>
            {item.note ? (
              <span className="font-mono text-[11px] text-muted-foreground/70">
                {item.note}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      {/* 月間本数と月額の目安 */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_3fr]">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-primary">月間本数と月額の目安</h3>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[280px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-sm font-semibold text-muted-foreground sm:p-5">
                    月間の記事本数
                  </th>
                  <th className="p-4 text-sm font-semibold sm:p-5">
                    月額（目安）
                  </th>
                </tr>
              </thead>
              <tbody>
                {volumeRows.map((row) => (
                  <tr
                    key={row.volume}
                    className="border-b border-border/70 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="p-4 text-sm font-medium sm:p-5"
                    >
                      {row.volume}
                    </th>
                    <td className="p-4 sm:p-5">
                      <span className="font-mono text-sm font-semibold tracking-tight">
                        {row.monthly}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            ※ 月額はオプションを含めた合計で、最低発注月額20万円（目安）以上からご依頼いただけます。
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-primary">記事制作プランの対応範囲</h3>
          <div className="flex-1 rounded-2xl border border-border bg-card p-6 sm:p-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {scopeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3プラン比較 */}
      <div className="mt-16">
        <h3 className="text-center text-lg font-bold text-primary">
          ご状況に合わせた3つのプラン
        </h3>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col gap-6 rounded-2xl border p-7 sm:p-8',
                plan.featured
                  ? 'border-accent/60 bg-card shadow-lg shadow-accent/10'
                  : 'border-border bg-card',
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  基本プラン
                </span>
              ) : null}

              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-primary">{plan.name}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="flex flex-col gap-1 border-y border-border py-5">
                <span className="text-3xl font-bold tracking-tight text-primary">
                  {plan.price}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {plan.priceNote}
                </span>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.featured ? 'default' : 'outline'}
                className={cn(
                  'h-11 w-full rounded-full',
                  plan.featured && 'bg-accent text-accent-foreground hover:bg-accent/90',
                )}
                nativeButton={false}
                render={<Link href="#contact" />}
              >
                このプランを相談する
              </Button>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        ※ 金額・条件は目安です。正式なお見積りはヒアリング後にご案内します。
      </p>
    </section>
  )
}
