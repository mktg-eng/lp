import Link from 'next/link'

import { CdcLogo } from '@/components/logos'
import { COMPANY, TAGLINE } from '@/lib/site'

// NOTE: マルチページ構成のため、トップページのセクションへのリンクは
// どのページからでも動くよう '/#...' 形式にしている。
const footerLinks = [
  { label: '私たちについて', href: '/#about' },
  { label: 'サービス', href: '/service' },
  { label: 'お知らせ', href: '/#news' },
  { label: '会社概要', href: '/#company' },
  { label: 'お問い合わせ', href: '/#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-4">
          <span className="flex items-center gap-2.5">
            <CdcLogo className="size-8" gradientId="logo-grad-cdc-ft" />
            <span className="text-lg font-semibold tracking-[0.08em] text-primary">
              CDC&nbsp;AI
            </span>
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {TAGLINE}
            <br />
            AIの力を企業の現場で成果につなげるサービスカンパニー。
          </p>
        </div>

        <nav
          className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-1"
          aria-label="フッターナビゲーション"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
          <p className="tracking-[0.2em]">AI SERVICE COMPANY</p>
        </div>
      </div>
    </footer>
  )
}
