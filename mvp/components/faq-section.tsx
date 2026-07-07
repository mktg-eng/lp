'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: '本当に無料ですか？裏はありませんか？',
    answer:
      'MVPの開発費は無料です。私たちは、本開発費が下がったときの成果報酬で成り立っています。下がらなければ報酬はいただきません。提携網を経由せず本開発する場合や中止する場合のみ、規模（S/M/L）と時点に応じた実費を頂戴します（詳細は「中止時の実費」の一覧表をご覧ください）。',
  },
  {
    question: 'MVPの品質はどの程度ですか？',
    answer:
      '要件の確認と完成イメージの共有を目的とした「動くプロトタイプ」です。本番運用を前提とした作り込みやセキュリティ対応は、本開発のフェーズで行います。',
  },
  {
    question: '紹介された会社で必ず発注しないといけませんか？',
    answer:
      'いいえ。相見積もりはあくまで判断材料です。発注するかどうか、どの会社に依頼するかはお客様が自由に決められます。',
  },
  {
    question: '既存の取引ベンダーで見積もってもOKですか？',
    answer:
      'はい。お客様の既存ベンダーを含めて比較いただけます。なお、提携システム会社を経由せずに本開発される場合は、規模（S/M/L）と時点に応じた実費のみ頂戴します（詳細は「中止時の実費」の一覧表をご覧ください）。',
  },
  {
    question: '途中でやめたくなったら？',
    answer:
      'いつでも中止できます。その場合は、進み具合とMVPの規模（S/M/L）に応じた実費のみを頂戴します。たとえばMVP納品後に中止する場合はS=10万円／M=20万円／L=30万円が目安です。違約金のような追加費用はありません。詳細は「中止時の実費」の一覧表をご覧ください。',
  },
  {
    question: '権利や機密はどうなりますか？',
    answer:
      'ヒアリングはNDA（秘密保持契約）を締結したうえで実施します。開発したMVPの所有権はお客様に帰属します。',
  },
  {
    question: 'どんな案件でも対応できますか？',
    answer:
      '新規事業・業務システム・業務アプリなど、幅広く対応します。内容によって向き不向きがあるため、まずはお気軽にご相談ください。',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="FAQ" title="よくあるご質問" />

      <div className="mt-12 flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={faq.question}
              className={cn(
                'rounded-xl border bg-card transition-colors',
                isOpen ? 'border-accent/40' : 'border-border',
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-medium sm:text-base">
                  {faq.question}
                </span>
                <Plus
                  className={cn(
                    'size-5 shrink-0 text-accent transition-transform duration-200',
                    isOpen && 'rotate-45',
                  )}
                  aria-hidden
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-200',
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
