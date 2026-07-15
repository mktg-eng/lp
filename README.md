# cdc-ai-lp — 株式会社CDC AI 新規事業LP（モノレポ）

1つのリポジトリに、CDC AIの複数サービスのランディングページを格納する。
Vercelでは「Root Directory」を各サブフォルダに指定して、**1リポジトリ→複数プロジェクト（複数URL）**として個別にデプロイする。

さとうさん向けの実運用手順（push・WordPress反映のやり方）は `HANDOFF.md` を参照。

## 構成

全フォルダ、参照サイトのデザインを視覚的に再現した**プレーンなHTML/CSS/JS**（`index.html` / `style.css` / `script.js`）。Next.jsは使用していない。

| パス | 事業 | 参照デザイン |
|---|---|---|
| `claude-code/` | ① Claude Code導入支援＋サブエージェント設定 | なし（独自デザイン） |
| `mvp/` | ② AI開発：MVP相見積もり | https://start.sygnal-ai.com/（本デザイン反映は今後） |
| `marketing/` | ③ デジタルマーケ：コピーできる集客 | なし（独自デザイン） |
| `design/` | ④ 定額制デザインサービス | https://depo.design/ |
| `articles/` | ⑤ SEO・AIO記事作成代行 | https://bakuyasu.techsuite.co.jp/lp/ |
| `corporate/` | CDC AIコーポレートサイト | https://algomatic.jp/ |
| `investor/` | 投資家向けサイト | https://investor.co.jp/（内容含め完全再現） |
| `ir-lead/` | IR LEAD（IR資料作成支援） | https://www.virtual-planner.com/ir/ |
| `owned-media/` | オウンドメディア立ち上げ・運用代行 | https://media-partners.techsuite.co.jp/lp/ |

上記以外に、CDC AIの5事業とは別の案件が同居している（デザイン・文言は変更せず、フォーマットのみHTML/CSS/JSへ変換済み）。

| パス | 事業 | 概要 |
|---|---|---|
| `pystep/` | PyStep（別案件） | 中高生向け無料の競技プログラミング学習アプリのLP。CDC AIの事業とは別（岸田さん開発・富田さん経由の依頼） |
| `programming-school/` | イエナアカデミー 情報オリンピック対策コース（別案件・PyStepと対） | PyStepと対になる、情報オリンピック本戦出場を目指す有料・レッスン制の本科カリキュラムLP。運営元は富田様が経営する塾「イエナアカデミー」 |

## ローカル確認

どのフォルダも、フォルダ内で簡易サーバーを立てるだけで確認できる。

```bash
cd design   # 確認したいフォルダ
python3 -m http.server 8080
# http://localhost:8080/ をブラウザで開く
```

## Vercelへのデプロイ

各フォルダを個別のVercelプロジェクトとして登録する。静的サイト側は **Framework Preset: Other**（ビルドコマンド不要）。手順の詳細は `HANDOFF.md` を参照。

push時はVercelのモノレポ検知で、変更があったフォルダのみ再デプロイされる。

## 備考

- 問い合わせフォームの送信先は現状すべて `/wp-json/cdc/v1/contact`（WordPress REST APIの仮エンドポイント）。実際の転送先（HubSpot連携を予定）は未確定で、WordPress側の`functions.php`にTODOとして残してある。Slack通知は使わない方針。
- 数値（②の削減率・納期など）は富田様の仮説段階。LP上は「目安／想定」と表記。
