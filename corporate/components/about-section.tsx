import { SectionHeading } from '@/components/section-heading'

// お客様に対する3つの約束。
const promises = [
  {
    number: '01',
    title: '速さ',
    desc: '企画から公開まで、AIで最短距離を進みます。数ヶ月かかっていた立ち上げを、週単位に短縮します。',
  },
  {
    number: '02',
    title: '実践知',
    desc: '私たち自身が、複数のAIサービスを開発・運用する実践者です。机上の提案ではなく、現場で効く形でご支援します。',
  },
  {
    number: '03',
    title: '成果起点',
    desc: '成果報酬型・月額定額など、成果と費用が結びつく料金設計。試しやすい入口から始められます。',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <SectionHeading
          en="About"
          ja="私たちについて"
          description="お客様への3つの約束。すべてのサービスに共通する、私たちの仕事の進め方です。"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {promises.map((p) => (
            <div key={p.number} className="flex flex-col gap-6 bg-card p-8 sm:p-10">
              <span className="font-mono text-sm text-accent">{p.number}</span>
              <h3 className="text-2xl font-light tracking-wide">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
