# cdc-ai-lp — 株式会社CDC AI 新規事業LP（モノレポ）

1つのリポジトリに、3事業のランディングページ（独立したNext.jsアプリ）を格納する。
Vercelでは「Root Directory」を各サブフォルダに指定して、**1リポジトリ→3プロジェクト（3URL）**として個別にデプロイする。

## 構成

| パス | 事業 | 概要 |
|---|---|---|
| `claude-code/` | ① Claude Code導入支援＋サブエージェント設定 | 導入・設定代行（Anydeskリモート） |
| `mvp/` | ② AI開発：MVP相見積もり | 動くMVPを無料→相見積もりで本開発費を下げる |
| `marketing/` | ③ デジタルマーケ：コピーできる集客 | AIでLP量産→フォーム営業（Sygnal連携） |

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
3. **Root Directory** を `claude-code`（or `mvp` / `marketing`）に設定
4. Deploy → 各アプリ専用のURLが発行される
5. ②③も同様にプロジェクトを作成（計3プロジェクト）

push時はVercelのモノレポ検知で、変更があったアプリのみ再デプロイされる。

## 備考

- 問い合わせフォームの送信先（メール/スプレッドシート/Slack等）は別途実装・設定する。
- 数値（②の削減率・納期など）は富田様の仮説段階。LP上は「目安／想定」と表記。
