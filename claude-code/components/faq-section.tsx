'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Claude Code をまだ導入していなくても相談できますか？',
    answer:
      'はい、導入前のご相談から対応しています。現在の開発体制や課題をお伺いし、導入の進め方からご提案します。',
  },
  {
    question: '設定はどのように進めますか？',
    answer:
      'オンラインでのヒアリングと環境調査のうえ、Anydesk を用いたリモート操作で設定を進めます。遠隔地の企業でもご利用いただけます。',
  },
  {
    question: 'どのような開発チームが対象ですか？',
    answer:
      '社内に開発チームを持つ中小〜中堅企業や、Web・システム制作会社、AI開発を効率化したい事業会社などを想定しています。規模や言語については個別にご相談ください。',
  },
  {
    question: '導入後のサポートはありますか？',
    answer:
      'プランに応じて、運用しながらの調整や追加のご相談に継続的に対応します。詳細はお見積り時にご案内します。',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-muted/60">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
        <SectionHeading kicker="FAQ" eyebrow="FAQ" title="よくあるご質問" />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={cn(
                  'rounded-xl border bg-background transition-colors',
                  isOpen ? 'border-brand-orange/50' : 'border-border',
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
                      'size-5 shrink-0 text-brand-orange transition-transform duration-200',
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
      </div>
    </section>
  )
}
