import Link from 'next/link'
import { Terminal } from 'lucide-react'

const footerLinks = [
  { label: 'お悩み', href: '#problems' },
  { label: 'サービス', href: '#services' },
  { label: '料金', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'お問い合わせ', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/60 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-brand-orange text-brand-orange-foreground">
              <Terminal className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-bold text-brand-navy">株式会社CDC AI</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Claude Code 導入支援＋サブエージェント設定サービス。
            AIエージェントで開発チームの生産性向上を支援します。
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
          <span className="text-xs font-medium text-muted-foreground">メニュー</span>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 株式会社CDC AI. All rights reserved.</p>
          <p className="font-mono">Claude Code 導入支援サービス</p>
        </div>
      </div>
    </footer>
  )
}
