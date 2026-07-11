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
    <footer className="bg-brand-navy-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-brand-teal text-brand-teal-foreground">
              <Newspaper className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-bold text-white">{COMPANY}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/50">
            {SERVICE_NAME}。検索エンジンとAI検索の両方を見据えた記事を、
            採点とファクトチェックを通った品質で継続的にお届けします。
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
          <span className="text-xs font-medium text-white/30">メニュー</span>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
          <p className="font-mono">{SERVICE_NAME}</p>
        </div>
      </div>
    </footer>
  )
}
