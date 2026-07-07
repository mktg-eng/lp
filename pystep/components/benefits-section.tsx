import { BookOpen, Code2, LineChart, Keyboard, ChevronRight } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: BookOpen,
    title: '講義を読む',
    description: '短い解説を読みながら、必要な考え方を少しずつ積み上げます。',
  },
  {
    icon: Code2,
    title: 'コードを書く',
    description: 'ブラウザ上でPythonを書いて、その場で実行できます。',
  },
  {
    icon: LineChart,
    title: '進捗を見る',
    description: 'クリア状況やタイピング記録が一目でわかります。',
  },
  {
    icon: Keyboard,
    title: 'タイピングも練習',
    description: '日本語入力やPythonタイピングで手の動きも鍛えます。',
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="使い方はシンプル"
        title="学習の流れ 4 STEP"
        description="コースを選び、講義を読み、コードを書いて、問題で試す。学習の流れが一つの画面にまとまっています。"
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => (
          <div key={item.title} className="relative px-1 text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary font-mono text-lg font-bold text-accent">
              0{index + 1}
            </span>
            <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {index !== benefits.length - 1 ? (
              <ChevronRight
                className="absolute top-4 -right-4 hidden size-5 text-border lg:block"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
