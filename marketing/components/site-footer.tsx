import Link from 'next/link'
import { CopyPlus } from 'lucide-react'

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
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-brand-gradient text-primary-foreground">
              <CopyPlus className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-semibold">株式会社CDC AI</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            「コピーできる集客」— AIでLPを量産し、フォーム営業で検証・横展開。
            低コストで新規リードを回す仕組みを提供します。配信基盤：Sygnal。
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
          <span className="text-xs font-medium text-muted-foreground/70">メニュー</span>
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
          <p>© {new Date().getFullYear()} 株式会社CDC AI. All rights reserved.</p>
          <p className="font-mono">コピーできる集客 ／ Powered by Sygnal</p>
        </div>
      </div>
    </footer>
  )
}
