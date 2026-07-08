import Link from 'next/link'
import Image from 'next/image'

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
          <div className="w-fit rounded-lg bg-white px-3 py-2">
            <Image
              src="/jena-academy-logo.jpg"
              alt="イエナアカデミー"
              width={945}
              height={248}
              className="h-6 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            イエナアカデミー 情報オリンピック対策コース。
            プログラミング未経験から情報オリンピック本戦出場まで、全7コースで段階的に導きます。
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
          <p>© {new Date().getFullYear()} イエナアカデミー. All rights reserved.</p>
          <p className="font-mono">情報オリンピック対策コース</p>
        </div>
      </div>
    </footer>
  )
}
