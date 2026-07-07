import Link from 'next/link'

import { APP_URL } from '@/lib/site'

const footerLinks = [
  { label: 'お悩み', href: '#problems' },
  { label: 'できること', href: '#benefits' },
  { label: 'ロードマップ', href: '#roadmap' },
  { label: '料金', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--navy-950)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-[var(--gold-500)] font-mono text-xs font-bold text-[var(--navy-950)]">
              Py
            </span>
            <span className="text-sm font-semibold">PyStep</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            中高生のための、完全無料の競技プログラミング学習アプリ。
            Python文法から情報オリンピック本戦レベルまで、一歩ずつ。
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
          <span className="text-xs font-medium text-white/40">メニュー</span>
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

        <nav className="flex flex-col gap-3" aria-label="アプリへのリンク">
          <span className="text-xs font-medium text-white/40">アプリ</span>
          <Link
            href={APP_URL}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            PyStepを開く
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PyStep. All rights reserved.</p>
          <p className="font-mono">PyStep — Python × 競技プログラミング学習アプリ</p>
        </div>
      </div>
    </footer>
  )
}
