'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'フォーム営業は法的に大丈夫ですか？',
    answer:
      '各サービスの利用規約や関連する配信ルール・マナーに配慮して運用します。送信先や頻度、内容の設計を含めてご相談のうえ進めますので、運用方針が気になる場合も遠慮なくお問い合わせください。',
  },
  {
    question: 'どんな業種で使えますか？',
    answer:
      '事業会社・士業・スクール・人材など、新規開拓に課題を持つBtoB企業を幅広く想定しています。ターゲットや商材に合わせて、訴求や進め方を個別に設計します。',
  },
  {
    question: '既存サイトがなくても始められますか？',
    answer:
      'はい。AIでLPを量産するため、サイトをお持ちでなくても始められます。むしろ「まず当たる型を見つけたい」段階のご相談を得意としています。',
  },
  {
    question: '成果が出るまでどれくらいかかりますか？',
    answer:
      'ターゲットや訴求によって異なるため一概には言えませんが、量産・配信・分析を素早く回して検証することで、早い段階から反応の良し悪しを見極めていきます。成果を保証するものではありません。',
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
