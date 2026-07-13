import Link from 'next/link'
import { Newspaper } from 'lucide-react'

import { COMPANY, SERVICE_NAME } from '@/lib/site'

const footerLinks = [
  { label: 'お悩み', href: '#problems' },
  { label: 'サービス', href: '#services' },
  { label: '料金', href: '#pricing' },
  { label: 'オプション', href: '#options' },
  { label: 'FAQ', href: '#faq' },
  { label: 'お問い合わせ', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-brand-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white">
              <Newspaper className="size-4.5" aria-hidden />
            </span>
            <span className="text-base font-bold tracking-tight text-white">
              {SERVICE_NAME}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            検索エンジンとAI検索の両方を見据えた記事を、
            採点とファクトチェックを通った品質で継続的にお届けします。
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
          <span className="font-mono text-xs font-medium tracking-wide text-white/40 uppercase">
            メニュー
          </span>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-brand-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs font-medium tracking-wide text-white/40 uppercase">
            運営
          </span>
          <dl className="flex flex-col gap-2 text-sm text-white/70">
            <div className="flex gap-2">
              <dt className="shrink-0 text-white/40">運営会社</dt>
              <dd>{COMPANY}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 text-white/40">サービス</dt>
              <dd>{SERVICE_NAME}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
          <p className="font-mono text-brand-teal/80">{SERVICE_NAME}</p>
        </div>
      </div>
    </footer>
  )
}
