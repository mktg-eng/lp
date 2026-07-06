'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: '月に何件まで依頼できますか？',
    answer:
      '依頼件数に上限はなく、キューにはいくつでも追加いただけます。着手は順番に進めるため、ひと月に完了できる件数はご依頼のボリュームにより変わります。想定される件数感は、ご契約前のヒアリングでご案内します。',
  },
  {
    question: '修正は何回までできますか？',
    answer:
      '初稿に対する調整・修正は、定額の範囲で対応します。当初のご依頼内容から大きく変わる場合（別案件相当の作り直しなど）は、新しい依頼としてキューに追加いただく形になります。',
  },
  {
    question: '対応できないものはありますか？',
    answer:
      '動画の撮影・編集、システム開発を伴うWeb実装、イラストの大量描き起こしなどは原則対象外です。判断に迷う場合は、依頼内容を添えてお気軽にお問い合わせください。対応可否を含めてお答えします。',
  },
  {
    question: '解約や休会はできますか？',
    answer:
      'はい。契約は月単位のため、翌月から解約いただけます。依頼が少ない時期は休会のご相談も可能です。解約金などはありません。',
  },
  {
    question: '納品物の著作権はどうなりますか？',
    answer:
      '納品したデザインデータの権利は、原則お客様に帰属します。広告・印刷・二次利用など、納品後は自由にご活用いただけます。制作事例としての公開は、事前にご了承いただいた場合のみ行います。',
  },
  {
    question: '初稿はどれくらいで届きますか？',
    answer:
      '着手から目安◯営業日で初稿をご提出します。バナーなど軽めのご依頼は早く、LPや資料一式など大きなご依頼はお時間をいただく場合があります。具体的な目安は依頼ごとにチャットでご案内します。',
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
