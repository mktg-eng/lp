'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: '対象年齢を教えてください。',
    answer:
      '小学生から高校生までを対象にしています。プログラミング未経験の方も歓迎です。Python文法の基礎から順番に学べるので、初めてでも安心して始められます。',
  },
  {
    question: '本当に無料で使えますか？',
    answer:
      'はい、完全無料です。アカウント登録や利用に費用は一切かかりません。中高生が競技プログラミングに出会うきっかけを増やしたいという思いで無料提供しています。',
  },
  {
    question: 'パソコンやプログラミングの経験がなくても大丈夫ですか？',
    answer:
      '大丈夫です。環境構築は不要で、ブラウザ上で講義を読みながらコードを書いて実行できます。print、変数、if、for といった基本から順番に学べる構成になっています。',
  },
  {
    question: '情報オリンピックを目指していなくても使えますか？',
    answer:
      'もちろんです。Python文法の基礎から学べるので、プログラミングそのものを学びたい方にもおすすめです。学習を進めるうちに、競技プログラミングや情報オリンピックにも興味が広がっていく設計にしています。',
  },
  {
    question: 'ログインしないと使えませんか？',
    answer:
      'ログイン前でも、トップページから簡単なコードを試して雰囲気を体験できます。ログインすると、解いた問題やタイピングの記録、道場の進捗が保存されるようになります。',
  },
  {
    question: 'スマートフォンでも使えますか？',
    answer:
      'コードを書く操作やタイピング練習があるため、キーボードで入力できるパソコン環境でのご利用を推奨しています。',
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
