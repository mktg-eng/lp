import { ArrowRight, Image, LayoutTemplate, Presentation, Printer } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const categories = [
  {
    badge: '01',
    label: 'Graphic design',
    icon: Image,
    title: 'バナー・SNS画像',
    description: '日々の運用で数が必要になる画像類を、スピーディに制作します。',
    items: [
      '広告バナー',
      'キャンペーン画像',
      'SNS投稿画像',
      'ヘッダー画像',
      'ECサイト商品画像',
    ],
  },
  {
    badge: '02',
    label: 'Web design',
    icon: LayoutTemplate,
    title: 'LP・Webデザイン',
    description: '集客の要になるページのデザインを、目的から逆算して設計します。',
    items: [
      'ランディングページ',
      'Webサイトデザイン',
      'ファーストビュー改善',
      'コーディング',
    ],
  },
  {
    badge: '03',
    label: 'Document design',
    icon: Presentation,
    title: '営業資料・プレゼン資料',
    description: '「伝わる資料」へ。構成を活かしたまま見た目を磨き上げます。',
    items: [
      '会社紹介資料',
      '提案書・ピッチ資料',
      '資料テンプレート',
      '既存資料のリデザイン',
    ],
  },
  {
    badge: '04',
    label: 'Print design',
    icon: Printer,
    title: '印刷物',
    description: '紙もののデザインも、入稿データの作成まで対応します。',
    items: ['チラシ', 'パンフレット', '名刺', 'ポスター', '入稿データ作成'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        kicker="EXAMPLE"
        eyebrow="対応範囲"
        title="日々のデザイン業務を、まとめて任せられる"
        description="よくいただくご依頼の例です。この他のデザインも、まずはお気軽にご相談ください。"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col overflow-hidden rounded-lg border-2 border-black bg-white"
          >
            <div className="relative flex h-28 items-center justify-center bg-brand-yellow">
              <category.icon className="size-10 text-black/70" aria-hidden />
              <span className="absolute top-2 right-2.5 font-mono text-[10px] tracking-wide text-black/50">
                {category.label}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <span className="font-mono text-[11px] text-brand-coral">
                  RANGE {category.badge}
                </span>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border pt-4">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-black/70 px-2 py-0.5 text-[11px] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-brand-coral">
                More
                <ArrowRight className="size-3.5" aria-hidden />
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        ※ 動画編集や、システム開発を伴う実装は原則対象外です。対応可否は個別にご相談ください。
      </p>
    </section>
  )
}
