'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="よくあるご質問" />

        <div className="mt-12 divide-y divide-brand-navy/10 overflow-hidden rounded-lg border border-brand-navy/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={cn(
                  'relative transition-colors',
                  isOpen ? 'bg-brand-sky/40' : 'bg-transparent',
                )}
              >
                <span
                  className={cn(
                    'absolute inset-y-0 left-0 w-0.5 bg-brand-orange transition-opacity',
                    isOpen ? 'opacity-100' : 'opacity-0',
                  )}
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="font-mono text-sm text-brand-navy/40" aria-hidden>
                    &gt;
                  </span>
                  <span className="flex-1 text-sm font-medium sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-4 shrink-0 text-brand-navy/40 transition-transform duration-200',
                      isOpen && 'rotate-180 text-brand-orange',
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
                    <p className="px-5 pb-5 pl-14 text-sm leading-relaxed text-muted-foreground">
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
