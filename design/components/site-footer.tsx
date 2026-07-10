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
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-brand-yellow text-brand-yellow-foreground">
              <Palette className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-bold">{COMPANY}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            {SERVICE_NAME}。月額定額で、バナーからLP、営業資料まで、
            日々のデザイン業務をまとめてお任せいただけます。
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
          <span className="text-xs font-medium text-white/40">メニュー</span>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
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
