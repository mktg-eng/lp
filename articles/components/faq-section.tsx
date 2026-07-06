'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: '成果が出るまでどのくらいかかりますか？',
    answer:
      'SEOは一般に、効果が見え始めるまで半年〜1年程度かかると言われています。当サービスでも短期の順位保証は行わず、中長期での積み上げを前提に、月次で進捗をご報告します。時期はあくまで目安であり、サイトの状態や競合状況により変わります。',
  },
  {
    question: 'どんな業種でも対応できますか？',
    answer:
      'BtoB・BtoCを問わず幅広い業種に対応しています。医療・金融など専門性の高い領域（YMYL）は、専門家監修の体制を含めて個別にご相談ください。',
  },
  {
    question: '既存記事のリライトだけをお願いできますか？',
    answer:
      'はい、リライトのみのご依頼も承ります。既存記事の状況を拝見したうえで、優先順位をつけたリライト計画からご提案します。',
  },
  {
    question: 'AIっぽい文章になりませんか？',
    answer:
      'AIが作るのは下書きまでです。公開前に人の編集者が構成・事実関係・言い回しを整え、貴社のトーンに合わせて仕上げるため、生成したままの文章を納品することはありません。',
  },
  {
    question: '著作権や情報の正確性は大丈夫ですか？',
    answer:
      '納品記事の著作権は、検収後に貴社へ帰属します。制作時にはコピーコンテンツのチェックと事実確認を行い、YMYL領域では必要に応じて専門家監修を組み合わせるなど、正確性に配慮した体制で制作します。',
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
