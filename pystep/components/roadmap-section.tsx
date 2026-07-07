import { BookOpen, Code2, ListChecks, Trophy, Swords } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: BookOpen,
    title: 'Python文法',
    description:
      'print、変数、リスト、if、for など、プログラムを書くための土台を順番に学びます。',
  },
  {
    icon: Code2,
    title: '競プロ入門',
    description:
      '入力、出力、全探索など、競技プログラミングで最初に必要になる考え方に慣れます。',
  },
  {
    icon: ListChecks,
    title: '競プロ基礎編',
    description:
      '配列、累積和、二分探索など、問題を速く正確に解くための定番技術へ進みます。',
  },
  {
    icon: Trophy,
    title: '競プロ上級編',
    description:
      'より難しいアルゴリズムや実装が必要なテーマに挑戦し、解法の幅を広げます。',
  },
  {
    icon: Swords,
    title: 'PyStep道場',
    description:
      '学んだ内容を実際の問題で使い、できなかった問題を復習しながら力を定着させます。',
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="ロードマップ"
        title="おすすめの進め方"
        description="まずは文法で土台を作り、入門・基礎・上級へ進み、最後に道場で実戦力を育てます。情報オリンピック本戦やAtCoder水色・青色を目指す最初のステップです。"
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-primary">
                <step.icon className="size-5" aria-hidden />
              </span>
              <span className="font-mono text-2xl font-semibold text-muted-foreground/50">
                0{index + 1}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
