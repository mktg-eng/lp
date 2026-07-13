'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: '対応できないジャンルはありますか？',
    answer:
      '違法性のある内容や極端に偏った内容を除けば、ほとんどのジャンルに対応できます。ニッチな領域や専門性の高いテーマも、まずはお気軽にご相談ください。',
  },
  {
    question: '納品された記事の権利はどうなりますか？',
    answer:
      '納品したコンテンツの知的財産権は、すべてお客様に帰属します。加工・転載・別媒体への転用など、二次利用にも制限はありません。',
  },
  {
    question: '代理店や協業のかたちでも依頼できますか？',
    answer:
      '当サービスと直接競合しない事業者様であれば可能です。たとえば「SEOの戦略は自社で持ち、記事制作だけ外部に任せたい」といったケースもお受けしています。',
  },
  {
    question: 'AIで作った記事を公開して問題ありませんか？',
    answer:
      'Googleは生成AIコンテンツに関する検索のガイダンスで、制作方法（AIか人間か）を問わず高品質なコンテンツを評価する旨を示しています。当サービスでは採点・書き直し・ファクトチェックの仕組みで品質を担保したうえで納品します。',
  },
  {
    question: '単発・都度の依頼はできますか？',
    answer:
      '基本的には月額でのご契約をお願いしています。毎月いただくフィードバックを採点基準やプロンプトに反映し、記事の品質を継続的に上げていく仕組みのためです。単発をご希望の場合も、まずはご相談ください。',
  },
  {
    question: '記事以外のSEO対策もお願いできますか？',
    answer:
      'はい。メディア改善プランでは、記事制作に加えてサイト監査・内部対策・外部対策・過去記事のリライトまで対応します。サイト全体を伸ばしたい場合はこちらをご検討ください。',
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
