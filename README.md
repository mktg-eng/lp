# cdc-ai-lp — 株式会社CDC AI 新規事業LP（モノレポ）

1つのリポジトリに、5事業のランディングページ（独立したNext.jsアプリ）を格納する。
Vercelでは「Root Directory」を各サブフォルダに指定して、**1リポジトリ→5プロジェクト（5URL）**として個別にデプロイする。

## 構成

| パス | 事業 | 概要 |
|---|---|---|
| `claude-code/` | ① Claude Code導入支援＋サブエージェント設定 | 導入・設定代行（Anydeskリモート） |
| `mvp/` | ② AI開発：MVP相見積もり | 動くMVPを無料→相見積もりで本開発費を下げる |
| `marketing/` | ③ デジタルマーケ：コピーできる集客 | AIでLP量産→フォーム営業（Sygnal連携） |
| `design/` | ④ 定額制デザインサービス | 月額定額でデザイン依頼し放題（サービス名は仮） |
| `articles/` | ⑤ SEO・AIO記事作成代行 | AI×人のハイブリッドで記事量産（サービス名は仮） |
| `pystep/` | PyStep（別案件） | 中高生向け無料の競技プログラミング学習アプリのLP。CDC AIの5事業とは別（岸田さん開発・富田さん経由の依頼）だが、同じデザイン・実装パターンで作成 |
| `programming-school/` | イエナアカデミー 情報オリンピック対策コース（別案件・PyStepと対） | PyStepと対になる、情報オリンピック本戦出場を目指す有料・レッスン制の本科カリキュラムLP。運営元は富田様が経営する塾「イエナアカデミー」。ロゴ・配色（紺#002b6b×赤#e63946）は同ブランドに準拠。CTAはフォーム→Slack Webhook通知（`SLACK_WEBHOOK_URL`要設定）。PyStep側から本コースへ片方向リンクあり（`pystep/components/jena-course-section.tsx`） |

各アプリは Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui。

## ローカル開発

```bash
cd claude-code   # または mvp / marketing
npm install
npm run dev
```

## Vercelへのデプロイ（各アプリを別プロジェクトに）

1. このリポジトリをGitHubにpush
2. Vercelで「New Project」→ 同じリポジトリを選択
3. **Root Directory** を `claude-code`（or `mvp` / `marketing` / `design` / `articles`）に設定
4. Deploy → 各アプリ専用のURLが発行される
5. 他のアプリも同様にプロジェクトを作成（計5プロジェクト）。環境変数 `SLACK_WEBHOOK_URL` を各プロジェクトに設定

push時はVercelのモノレポ検知で、変更があったアプリのみ再デプロイされる。

## 備考

- 問い合わせフォームの送信先（メール/スプレッドシート/Slack等）は別途実装・設定する。
- 数値（②の削減率・納期など）は富田様の仮説段階。LP上は「目安／想定」と表記。
