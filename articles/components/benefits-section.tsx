import { Search, Coins, MousePointerClick, LineChart } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: Search,
    title: 'SEO×AIOの両取りを想定',
    description:
      '検索エンジン向けの構成に加えて、AIが引用しやすい結論先出し・要約・Q&Aの形も意識して執筆。検索結果とAIの回答、両方からの流入を狙います（想定）。',
  },
  {
    icon: Coins,
    title: '低コストで本数を確保（目安）',
    description:
      'AIが下書きを担うことで、人がゼロから書くより制作コストを抑えやすく、月あたりの本数も確保しやすくなります（目安であり、内容により変動します）。',
  },
  {
    icon: MousePointerClick,
    title: 'CVまでの動線を設計',
    description:
      '記事単体で終わらせず、CTAの配置や比較表・診断コンテンツなど、問い合わせ・購入までの道筋をセットで設計します。',
  },
  {
    icon: LineChart,
    title: '公開後も月次で改善',
    description:
      '順位や流入の状況を見ながら、リライトや内部リンクの調整を毎月継続。記事を出しっぱなしにしません。',
  },
]

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative border-y border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="提供価値"
          title="「量産」と「品質」を、両立させる"
          description="AIと人の分業を前提に設計しているから、スピードと確かさを同時に追えます。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-xl border border-border bg-background p-6 sm:p-7"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
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
