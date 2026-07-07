import { BookOpen, Code2, LineChart, Keyboard } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: BookOpen,
    title: '講義を読む',
    description:
      '短い解説を読みながら、必要な考え方を少しずつ積み上げます。専門用語も一つずつ丁寧に噛み砕いて説明します。',
  },
  {
    icon: Code2,
    title: 'コードを書く',
    description:
      'ブラウザ上でPythonのコードを書いて、その場で実行。環境構築は不要で、結果を見ながら理解を深められます。',
  },
  {
    icon: LineChart,
    title: '進捗を見る',
    description:
      'クリア状況やタイピング記録が一目でわかるので、次に何をやればいいか迷いません。続ける仕組みが最初から整っています。',
  },
  {
    icon: Keyboard,
    title: 'タイピングも練習',
    description:
      '日本語入力やPythonタイピングを2分間で練習。コードを書く手の動きそのものも同時に鍛えられます。',
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative border-y border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="使い方はシンプル"
          title="コースを選び、講義を読み、コードを書いて、問題で試す"
          description="学習の流れが一つの画面にまとまっているので、次に何をすればいいか迷いにくくなっています。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-xl border border-border bg-background p-6 sm:p-7"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-5.5" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
