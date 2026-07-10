import { Sparkles, Lightbulb, HeartHandshake, Plus } from 'lucide-react'

const reasons = [
  {
    label: 'AI × Pro',
    icon: Sparkles,
    title: 'AI×プロの制作体制',
    description:
      'AIで制作プロセスを効率化し、仕上げはプロのデザイナーが担当。スピードと品質の両立を目指した体制で、定額でも量に対応できます。',
  },
  {
    label: '+α Proposal',
    icon: Lightbulb,
    title: '言われた通り、で終わらせない',
    description:
      'ご依頼の背景や目的をふまえて、代案やサイズ展開など「＋α」のご提案を心がけます。丸投げに近い依頼でも形にします。',
  },
  {
    label: 'No Hesitation',
    icon: HeartHandshake,
    title: '定額だから、気軽に相談できる',
    description:
      '追加費用を気にせず相談できるのが定額制の良さ。「これも頼めますか？」から始まる小さな相談を歓迎します。',
  },
]

export function ReasonsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          <div className="flex flex-col items-start gap-5 lg:sticky lg:top-24 lg:self-start">
            <span className="flex size-14 items-center justify-center rounded-full border-2 border-black text-brand-coral">
              <Sparkles className="size-6" aria-hidden />
            </span>
            <p className="text-2xl leading-snug font-black">
              他の定額サービスと
              <br />
              <span className="text-brand-coral">ここが違う!!</span>
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {reasons.map((item, index) => (
              <div
                key={item.title}
                className="relative flex flex-col gap-4 rounded-lg border-2 border-black bg-brand-yellow p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
              >
                <span className="text-6xl leading-none font-black text-black/15 sm:w-16 sm:shrink-0 sm:text-7xl">
                  {index + 1}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-black sm:text-xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-black/70">
                    {item.description}
                  </p>
                </div>
                <span className="hidden shrink-0 font-mono text-[11px] tracking-widest text-black/40 sm:block">
                  {item.label}
                </span>
                <span className="absolute right-5 bottom-5 flex size-8 shrink-0 items-center justify-center rounded-full bg-black text-brand-yellow sm:static">
                  <Plus className="size-4" aria-hidden />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
