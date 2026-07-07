import { MonitorCog } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const option = {
  icon: MonitorCog,
  badge: 'OPTION',
  title: 'お客様専用の開発環境',
  description:
    'お客様専用の開発環境をご用意し、VPN接続で開発中のMVPをいつでも動作確認・改修いただけます。「何がどこまで進んでいるか」が見える状態で開発が進みます。',
  items: [
    'VPN接続でいつでも動作確認',
    '開発プロセスがリアルタイムに見える',
    '納品後もそのまま改修に使える',
    '社内決裁が通らずAI開発ツールを使えない方の受け皿にも',
  ],
}

export function OptionsSection() {
  return (
    <section id="options" className="relative border-y border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="オプション"
          title="MVPのその先も、選べるオプション"
          description="開発の透明性を高めたい方、納品後も自分の手で育てたい方向けの追加メニューです。"
        />

        <div className="mt-12 flex justify-center">
          <div className="relative flex w-full max-w-xl flex-col gap-5 rounded-2xl border border-accent/60 bg-background p-7 shadow-lg shadow-black/5 sm:p-8">
            <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              おすすめ
            </span>

            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <option.icon className="size-5.5" aria-hidden />
              </span>
              <span className="font-mono text-xs text-muted-foreground/60">
                {option.badge}
              </span>
            </div>

            <h3 className="text-lg font-semibold">{option.title}</h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {option.description}
            </p>

            <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
              {option.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-auto pt-1 text-sm font-medium text-foreground">
              料金：要お見積り
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ※ オプションは任意です。内容・料金はヒアリングのうえ個別にご案内します。
        </p>
      </div>
    </section>
  )
}
