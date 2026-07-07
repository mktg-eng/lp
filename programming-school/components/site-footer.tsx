import Link from 'next/link'
import { Trophy } from 'lucide-react'

const footerLinks = [
  { label: 'お悩み', href: '#problems' },
  { label: 'カリキュラム', href: '#curriculum' },
  { label: '選ばれる理由', href: '#reason' },
  { label: 'よくある質問', href: '#faq' },
  { label: '無料相談', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--navy-950)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-[var(--gold-500)] text-[var(--navy-950)]">
              <Trophy className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-semibold">競技プログラミング教室</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            プログラミング未経験から情報オリンピック本戦出場まで。
            Python基礎からC++実装力まで、全7コースで段階的に導きます。
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
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 競技プログラミング教室. All rights reserved.</p>
          <p className="font-mono">情報オリンピック本戦対策コース</p>
        </div>
      </div>
    </footer>
  )
}
