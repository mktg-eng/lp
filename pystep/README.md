# pystep

PyStep（中高生向け・無料の競技プログラミング学習アプリ）のランディングページ。

- アプリ本体: https://pystep-seven.vercel.app/
- サービス提供元: 岸田さん（学生が開発）。富田さん経由での依頼。CDC AIの5事業とは別の案件だが、このリポジトリのデザイン・実装パターンを踏襲して作成。
- デザイン: 他フォルダ（`claude-code/` など）と同じ構成・実装パターンをベースに、PyStep本体のブランド（スカイブルー基調）に合わせて配色・コピーを作り直したもの。
- 構成: Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui + base-ui/react + lucide-react

## ローカル開発

```bash
cd pystep
npm install
npm run dev
```

## 構成

- `app/page.tsx` — ページ本体（Header〜Footerまでの1ページ構成）
- `components/*-section.tsx` — 各セクション（Hero / お悩み / できること / ロードマップ / 選ばれる理由 / 料金 / FAQ / 最終CTA）
- `components/ui/*` — shadcn/ui由来の共通UIパーツ
- `lib/site.ts` — アプリ本体へのリンク（ログイン導線）の定数
