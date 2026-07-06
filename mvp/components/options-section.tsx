import { MonitorCog, KeyRound, Wrench } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const options: {
  icon: typeof MonitorCog
  badge: string
  title: string
  description: string
  items: string[]
  featured: boolean
}[] = [
  {
    icon: MonitorCog,
    badge: 'OPTION 01',
    title: 'お客様専用の開発環境',
    description:
      'お客様専用の開発環境をご用意し、VPN接続で開発中のMVPをいつでも動作確認・改修いただけます。「何がどこまで進んでいるか」が見える状態で開発が進みます。',
    items: [
      'VPN接続でいつでも動作確認',
      '開発プロセスがリアルタイムに見える',
      '納品後もそのまま改修に使える',
    ],
    featured: true,
  },
  {
    icon: KeyRound,
    badge: 'OPTION 02',
    title: 'Claude Codeアカウント提供',
    description:
      '「社内決裁の壁でAI開発ツールを契約できない」という方向けに、Claude Codeのアカウントをご提供します。納品後もご自分の手でMVPに触れて、改善を続けられます。',
    items: [
      '社内でツール契約が通らない場合の受け皿',
      '納品後も自分の手でMVPを触れる',
      '使い方の初期レクチャー付き',
    ],
    featured: false,
  },
  {
    icon: Wrench,
    badge: 'OPTION 03',
    title: 'MVP納品後の継続改修',
    description:
      '本開発を前提にせず、MVPのまま使いながら改善を続けたい場合の継続改修プランです。実際の利用で見えた課題を、小さく速く反映していきます。',
    items: [
      '本開発に進まなくても改善を継続',
      '利用状況に合わせた小さな改修',
      '本開発への移行はいつでも相談可',
    ],
    featured: false,
  },
]

export function OptionsSection() {
  return (
    <section id="options" className="relative border-y border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="オプション"
          title="MVPのその先も、選べるオプション"
          description="開発の透明性を高めたい方、納品後も自分の手で育てたい方向けの追加メニューです。"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.title}
              className={cn(
                'relative flex flex-col gap-5 rounded-2xl border p-7 sm:p-8',
                option.featured
                  ? 'border-accent/60 bg-background shadow-lg shadow-black/5'
                  : 'border-border bg-background',
              )}
            >
              {option.featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  おすすめ
                </span>
              ) : null}

              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'flex size-12 items-center justify-center rounded-xl',
                    option.featured
                      ? 'bg-accent/15 text-accent'
                      : 'bg-primary/10 text-primary',
                  )}
                >
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
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ※ オプションはいずれも任意です。内容・料金はヒアリングのうえ個別にご案内します。
        </p>
      </div>
    </section>
  )
}
