'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: '対象年齢・レベルを教えてください。',
    answer:
      '小学生から高校生までを対象にしています。プログラミング未経験の方は初級コースから、すでに基礎がある方は習熟度に応じたコースからスタートできます。',
  },
  {
    question: 'プログラミング未経験でも大丈夫ですか？',
    answer:
      'はい、大丈夫です。初級コースでは変数・条件分岐・繰り返し処理といった基本から順番に学べる構成になっています。',
  },
  {
    question: '費用はいくらですか？',
    answer:
      'コース・受講形態によって異なるため、まずは無料相談にてお子さまの状況をお伺いしたうえでご案内しています。',
  },
  {
    question: '全コースを最後まで受講する必要がありますか？',
    answer:
      'いいえ。目標に応じて、途中のコースまでの受講も可能です。まずは無料相談で目指すレベルをお聞かせください。',
  },
  {
    question: 'どのくらいの期間で情報オリンピック本戦を目指せますか？',
    answer:
      'カリキュラム全体では初級から最上級まで合計で数年規模を想定していますが、お子さまの習熟度やスタート時点のレベルによって前後します。無料相談で目安をお伝えします。',
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
                    'size-5 shrink-0 text-primary transition-transform duration-200',
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
