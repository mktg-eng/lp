import Link from 'next/link'
import { Palette } from 'lucide-react'

import { COMPANY, SERVICE_NAME } from '@/lib/site'

const footerLinks = [
  { label: '課題', href: '#problems' },
  { label: 'できること', href: '#services' },
  { label: '進め方', href: '#flow' },
  { label: '料金', href: '#pricing' },
  { label: 'ルール', href: '#rules' },
  { label: 'FAQ', href: '#faq' },
  { label: 'お問い合わせ', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-ink/10 bg-brand-cream text-brand-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Palette className="size-4 text-brand-vermillion" aria-hidden />
            <span className="font-display text-base font-bold">{COMPANY}</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {SERVICE_NAME}。月額定額で、バナーからLP、営業資料まで、
            日々のデザイン業務をまとめてお任せいただけます。
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
          <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground/60 uppercase">
            Index
          </span>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground/60 uppercase">
            Colophon
          </span>
          <dl className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex gap-2">
              <dt className="text-brand-ink/50">発行</dt>
              <dd>{COMPANY}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-brand-ink/50">契約</dt>
              <dd>オンライン完結・月単位</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-brand-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <p className="font-mono">{SERVICE_NAME}</p>
        </div>
      </div>
    </footer>
  )
}
