import { SectionHeading } from '@/components/section-heading'
import { COMPANY } from '@/lib/site'

// NOTE: 「◯◯（確認中）」の項目は富田さんからの確定情報待ち。確定次第差し替える。
const companyRows = [
  { label: '社名', value: COMPANY },
  {
    label: '事業内容',
    value:
      'AIサービスの企画・開発・提供（Claude Code導入支援、AI受託開発、デジタルマーケティング ほか）',
  },
  { label: '所在地', value: '◯◯（確認中）' },
  { label: '代表者', value: '◯◯（確認中）' },
  { label: '設立', value: '◯◯（確認中）' },
]

export function CompanySection() {
  return (
    <section id="company" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <SectionHeading en="Company" ja="会社概要" />

        <dl className="mt-16 border-t border-border">
          {companyRows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 border-b border-border py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <dt className="text-sm text-muted-foreground">{row.label}</dt>
              <dd className="text-sm leading-relaxed sm:text-base">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
