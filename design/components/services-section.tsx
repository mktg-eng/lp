import { Image, LayoutTemplate, Presentation, Printer } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

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
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          kicker="Index"
          eyebrow="対応範囲"
          title="日々のデザイン業務を、まとめて任せられる"
          description="よくいただくご依頼の例です。この他のデザインも、まずはお気軽にご相談ください。"
        />
      </Reveal>

      <div className="mt-14 flex flex-col border-y border-brand-ink/10">
        {categories.map((category, index) => (
          <Reveal
            key={category.title}
            delay={index * 100}
            className={index !== 0 ? 'border-t border-brand-ink/10' : ''}
          >
            <div className="group grid gap-5 py-8 sm:grid-cols-[88px_1fr] sm:items-start sm:gap-8 lg:grid-cols-[120px_1fr_300px] lg:items-center">
              <span className="font-display text-6xl leading-none font-bold text-brand-ink/[0.07] transition-colors duration-300 group-hover:text-brand-vermillion/[0.14] lg:text-7xl">
                {category.badge}
              </span>

              <div className="flex flex-col gap-2.5">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-brand-vermillion uppercase">
                  <category.icon className="size-3.5" aria-hidden />
                  {category.label}
                </span>
                <h3 className="font-display text-2xl font-bold text-brand-ink">
                  {category.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:col-span-2 lg:col-span-1 lg:justify-end">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-brand-ink/15 px-2.5 py-1 text-[11px] font-medium text-brand-ink/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        ※ 動画編集や、システム開発を伴う実装は原則対象外です。対応可否は個別にご相談ください。
      </p>
    </section>
  )
}
