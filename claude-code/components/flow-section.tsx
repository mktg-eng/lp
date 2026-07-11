import { MessagesSquare, Search, MonitorSmartphone, GraduationCap, LifeBuoy } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: MessagesSquare,
    title: 'ヒアリング',
    description: '開発体制や課題、目指したい状態をお伺いします。',
  },
  {
    icon: Search,
    title: '環境調査',
    description: '既存のツールやコードベース、権限構成を確認します。',
  },
  {
    icon: MonitorSmartphone,
    title: 'リモート設定',
    description: 'Anydesk を用いてリモートで環境・設定を構築します。',
  },
  {
    icon: GraduationCap,
    title: 'レクチャー',
    description: '操作方法や運用のポイントをチームへご説明します。',
  },
  {
    icon: LifeBuoy,
    title: '運用サポート',
    description: '導入後の調整やご相談にも継続して対応します。',
  },
]

export function FlowSection() {
  return (
    <section id="flow" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          kicker="FLOW"
          eyebrow="設定の流れ"
          title="ご相談から運用まで、5つのステップ"
          description="リモート中心で進めるため、遠隔地の企業でもスムーズに導入いただけます。"
        />

        <ol className="mt-16 grid gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center gap-4 text-center">
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-7 left-1/2 hidden h-px w-full bg-border lg:block"
                  aria-hidden
                />
              ) : null}
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-orange text-brand-orange-foreground">
                <step.icon className="size-6" aria-hidden />
              </span>
              <span className="font-mono text-xs font-bold tracking-[0.1em] text-brand-orange">
                STEP.0{index + 1}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
