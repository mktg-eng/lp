import { Check, Image, LayoutTemplate, Presentation, Printer } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const categories = [
  {
    badge: '01',
    icon: Image,
    title: 'バナー・SNS画像',
    description: '日々の運用で数が必要になる画像類を、スピーディに制作します。',
    items: [
      '広告・キャンペーン用バナー',
      'SNS投稿画像・ヘッダー画像',
      'サイズ違い・パターン違いの展開',
      'ECサイト用の商品訴求画像',
    ],
  },
  {
    badge: '02',
    icon: LayoutTemplate,
    title: 'LP・Webデザイン',
    description: '集客の要になるページのデザインを、目的から逆算して設計します。',
    items: [
      'LP（ランディングページ）のデザイン',
      'Webサイトのページデザイン',
      'ファーストビューの改善案',
      'バナーとLPのトーン統一',
    ],
  },
  {
    badge: '03',
    icon: Presentation,
    title: '営業資料・プレゼン資料',
    description: '「伝わる資料」へ。構成を活かしたまま見た目を磨き上げます。',
    items: [
      '会社紹介・サービス紹介資料',
      '提案書・ピッチ資料のデザイン',
      '資料テンプレートの整備',
      '既存資料のリデザイン',
    ],
  },
  {
    badge: '04',
    icon: Printer,
    title: '印刷物',
    description: '紙もののデザインも、入稿データの作成まで対応します。',
    items: [
      'チラシ・フライヤー',
      'パンフレット・リーフレット',
      '名刺・ショップカード',
      'ポスター・展示会用パネル',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="対応範囲"
        title="日々のデザイン業務を、まとめて任せられる"
        description="よくいただくご依頼の例です。この他のデザインも、まずはお気軽にご相談ください。"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <category.icon className="size-5" aria-hidden />
              </span>
              <div>
                <span className="font-mono text-xs text-accent">
                  RANGE {category.badge}
                </span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>

            <ul className="flex flex-col gap-3 border-t border-border pt-6">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        ※ 動画編集や、システム開発を伴う実装は原則対象外です。対応可否は個別にご相談ください。
      </p>
    </section>
  )
}
