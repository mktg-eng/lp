import Link from 'next/link'
import { CopyPlus } from 'lucide-react'

import { COMPANY, SERVICE_NAME, SERVICE_TAGLINE } from '@/lib/site'

const footerLinks = [
  { label: '課題', href: '#problems' },
  { label: '解決', href: '#solution' },
  { label: '仕組み', href: '#flow' },
  { label: '事例', href: '#cases' },
  { label: '料金', href: '#pricing' },
  { label: 'お問い合わせ', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-brand-gradient text-brand-lime-foreground">
              <CopyPlus className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-semibold">{COMPANY}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            「{SERVICE_NAME}」— {SERVICE_TAGLINE}
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
          <span className="font-mono text-xs font-medium tracking-wide text-muted-foreground/70 uppercase">
            メニュー
          </span>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
          <p className="font-mono text-primary">{SERVICE_NAME}</p>
        </div>
      </div>
    </footer>
  )
}
