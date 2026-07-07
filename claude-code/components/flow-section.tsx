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
    <section
      id="flow"
      className="relative border-y border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="設定の流れ"
          title="ご相談から運用まで、5つのステップ"
          description="リモート中心で進めるため、遠隔地の企業でもスムーズに導入いただけます。"
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
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
      </div>
    </section>
  )
}
