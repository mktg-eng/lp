import type { ReactNode, SVGProps } from 'react'

import type { ServiceLogoId } from '@/lib/services'

/**
 * サービスロゴファミリー。
 * 共通ルール: 64x64 viewBox / 角丸タイル rx=14 / サービスカラーの2段グラデーション /
 * 白の幾何学グリフ（線幅4相当）。public/logos/*.svg と同一アートワーク。
 *
 * NOTE: 同一ロゴを同じページで複数回描画すると gradient id が重複するが、
 * defs の中身が同一のため描画結果には影響しない。
 */

interface LogoDef {
  /** グラデーション開始色（oklch から変換した近似hex） */
  from: string
  /** グラデーション終了色 */
  to: string
  glyph: ReactNode
}

const STROKE = {
  stroke: '#ffffff',
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
} as const

const LOGOS: Record<ServiceLogoId, LogoDef> = {
  // ターミナルプロンプト: '>' シェブロン + '_' アンダースコア
  'claude-code': {
    from: '#d97757', // oklch(0.65 0.15 40) - Claudeのテラコッタオレンジ
    to: '#b85c3e', // oklch(0.56 0.16 35)
    glyph: (
      <g {...STROKE}>
        <polyline points="19,21 30,31.5 19,42" />
        <line x1="34" y1="42" x2="46" y2="42" />
      </g>
    ),
  },
  // 天秤の抽象形: 中央支柱の上に水平バー、両端に吊り皿のアーク
  mvp: {
    from: '#cd9130', // oklch(0.7 0.13 75)
    to: '#bb731b', // oklch(0.62 0.13 65)
    glyph: (
      <g {...STROKE}>
        <line x1="32" y1="15" x2="32" y2="46" />
        <line x1="25" y1="46" x2="39" y2="46" />
        <line x1="18" y1="23" x2="46" y2="23" />
        <path d="M11.5 29 A6.5 6.5 0 0 0 24.5 29" />
        <path d="M39.5 29 A6.5 6.5 0 0 0 52.5 29" />
      </g>
    ),
  },
  // コピー＆グロース: 重なる2枚の角丸矩形 + 右上矢印
  marketing: {
    from: '#8359e3', // oklch(0.58 0.2 293)
    to: '#7935c6', // oklch(0.5 0.21 300)
    glyph: (
      <g {...STROKE}>
        <rect x="14" y="20" width="21" height="21" rx="5" />
        <rect x="22" y="28" width="21" height="21" rx="5" />
        <line x1="39" y1="23" x2="49" y2="13" />
        <polyline points="42,13 49,13 49,20" />
      </g>
    ),
  },
  // ベン図: 重なる3つの円（fill-opacityで重なりを表現）
  design: {
    from: '#e55551', // oklch(0.64 0.18 25)
    to: '#cc3143', // oklch(0.56 0.19 20)
    glyph: (
      <g fill="#ffffff" fillOpacity="0.5">
        <circle cx="25.5" cy="26" r="11.5" />
        <circle cx="38.5" cy="26" r="11.5" />
        <circle cx="32" cy="38" r="11.5" />
      </g>
    ),
  },
  // ドキュメント（角丸矩形 + 3本のテキスト行）+ 右上の4点スパークル
  articles: {
    from: '#1c985a', // oklch(0.6 0.14 155)
    to: '#007b44', // oklch(0.5 0.15 160)
    glyph: (
      <g>
        <g {...STROKE}>
          <rect x="13" y="16" width="25" height="34" rx="5" />
          <line x1="20" y1="27" x2="31" y2="27" />
          <line x1="20" y1="34" x2="31" y2="34" />
          <line x1="20" y1="41" x2="27" y2="41" />
        </g>
        <path
          d="M49 11 C49.8 15.5 52.5 18.2 57 19 C52.5 19.8 49.8 22.5 49 27 C48.2 22.5 45.5 19.8 41 19 C45.5 18.2 48.2 15.5 49 11 Z"
          fill="#ffffff"
        />
      </g>
    ),
  },
}

interface ServiceLogoProps extends SVGProps<SVGSVGElement> {
  service: ServiceLogoId
}

/** サービスカラーの角丸タイル + 白グリフのロゴ。標準では装飾扱い（aria-hidden）。 */
export function ServiceLogo({ service, className, ...props }: ServiceLogoProps) {
  const { from, to, glyph } = LOGOS[service]
  const gradId = `logo-grad-${service}`
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${gradId})`} />
      {glyph}
    </svg>
  )
}

/**
 * CDC AI コーポレートマーク。
 * 濃紺タイルに白の「3本の上昇バー」+ アンバーのドット（成長の軌跡）。
 * favicon（public/icon.svg）・public/logos/cdc-ai.svg と同一アートワーク。
 */
export function CdcLogo({
  className,
  gradientId = 'logo-grad-cdc',
  ...props
}: SVGProps<SVGSVGElement> & { gradientId?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#223954" />
          <stop offset="1" stopColor="#14243c" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${gradientId})`} />
      <g stroke="#ffffff" strokeWidth="7" strokeLinecap="round">
        <line x1="16" y1="45" x2="16" y2="36" />
        <line x1="28" y1="45" x2="28" y2="27" />
        <line x1="40" y1="45" x2="40" y2="18" />
      </g>
      <circle cx="49.5" cy="11.5" r="3.5" fill="#eaa950" />
    </svg>
  )
}
