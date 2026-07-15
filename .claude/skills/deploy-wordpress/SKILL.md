---
name: deploy-wordpress
description: 現在のサービスフォルダ(静的HTML/CSS/JS)を、XServer for WordPressにSSH経由でデプロイする。富田さんのデザインチェックでOKが出た後、「WordPressに反映して」「本番にあげて」と言われたら使う。
---

# WordPressへのデプロイ

対象は、`git clone`したこのリポジトリ内の1サービスフォルダ(例: `investor/`, `design/`等)。中身は `index.html` / `style.css` / `script.js` / (あれば)`fonts/`・画像アセットのプレーンな静的サイト。

## 事前に必要な情報(揃っていなければユーザーに確認する)

- WordPressのSSHホスト名(例: `xxxxx.xwp.jp`)
- SSHポート番号(例: `10022`)
- SSHユーザー名
- SSH秘密鍵のファイルパス(例: `~/.ssh/xserver_<サービス名>`)
- デプロイ対象のサービスフォルダ名

情報が1つでも欠けていたら、進める前に必ずユーザーに確認する。特にSSH鍵は、事前にXServer for WordPress側のSSH設定に公開鍵が登録されている必要がある(まだなら、ユーザーに「XServer for WordPressの管理画面 → 対象サイト → SSH設定 → 公開鍵を登録」してもらうよう案内する)。

## 手順

### 1. 疎通確認
```bash
ssh -i <鍵パス> -p <ポート> <ユーザー名>@<ホスト> "pwd && ls"
```
接続できない場合は、SSH設定(公開鍵の登録)が完了していない可能性が高いので、そこをユーザーに確認する。

### 2. XWRITE子テーマの雛形を作成
ローカルの `wp-theme/<サービス名>-child/` に以下を作る(既にある場合は上書きでよい)。

```
wp-theme/<サービス名>-child/
├── style.css
├── functions.php
├── page-lp.php
└── assets/
    ├── lp.css      ← サービスフォルダの style.css をコピー
    ├── lp.js       ← サービスフォルダの script.js をコピー
    ├── icon.svg    ← あれば
    └── fonts/      ← あれば、フォントファイル一式をコピー
```

**style.css**
```css
/*
Theme Name: <サービス名> Child
Template: xwrite
Version: 1.0
*/
```

**functions.php**（重要: XWRITE本体のCSS/JSと配色・レイアウトが競合するため、このLPページ表示時は全部dequeueする。これは過去の実装で実際に発生したバグ＝配色が勝手に変わる・謎のメニューが出る、への対策）
```php
<?php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('xwrite-parent-style', get_template_directory_uri() . '/style.css');
});

add_action('wp_enqueue_scripts', function () {
    if (is_page_template('page-lp.php')) {
        foreach (wp_styles()->queue as $handle) {
            wp_dequeue_style($handle);
        }
        foreach (wp_scripts()->queue as $handle) {
            wp_dequeue_script($handle);
        }
        wp_enqueue_style('lp-style', get_stylesheet_directory_uri() . '/assets/lp.css');
        wp_enqueue_script('lp-script', get_stylesheet_directory_uri() . '/assets/lp.js', [], null, true);
    }
}, 999);
```

**page-lp.php**（サービスフォルダの`index.html`の`<body>`〜`</body>`の中身を、`<!-- ここから -->`〜`<!-- ここまで -->`の位置に移植する）
```php
<?php
/**
 * Template Name: サービスLP
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php echo esc_html(get_the_title()); ?></title>
<link rel="icon" href="<?php echo esc_url(get_stylesheet_directory_uri()); ?>/assets/icon.svg" type="image/svg+xml">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!-- ここから -->
<!-- ここまで -->
<?php wp_footer(); ?>
</body>
</html>
```

### 3. アップロード(初回デプロイ・再デプロイどちらも共通)
```bash
scp -i <鍵パス> -P <ポート> -r wp-theme/<サービス名>-child <ユーザー名>@<ホスト>:<リモートのWordPressパス>/wp-content/themes/
```
`<リモートのWordPressパス>`は手順1の疎通確認で`pwd`/`ls`した際に見える、`public_html`のあるディレクトリ。

既にデプロイ済みのサービスをアップデートする場合、**ページの中身は`page-lp.php`というファイルなので、このscpで上書きした時点で表示内容は更新される**。次の手順4は「まだ固定ページが無い場合の初回セットアップ」なので、既にデプロイ済みなら基本的にスキップしてよい。

### 4. WordPress側の設定(wp-cliをSSH経由で実行)

**まず、このテンプレートを使う固定ページが既に存在するか確認する(再デプロイかどうかの判定)**
```bash
ssh -i <鍵パス> -p <ポート> <ユーザー名>@<ホスト> "wp --path=<リモートパス>/public_html post list --post_type=page --meta_key=_wp_page_template --meta_value=page-lp.php --field=ID"
```

**何も出力されない(初回デプロイ)場合のみ、以下を実行してページを新規作成する**
```bash
ssh -i <鍵パス> -p <ポート> <ユーザー名>@<ホスト> "wp --path=<リモートパス>/public_html theme activate <サービス名>-child"
ssh -i <鍵パス> -p <ポート> <ユーザー名>@<ホスト> "wp --path=<リモートパス>/public_html post create --post_type=page --post_title='トップページ' --post_status=publish --page_template='page-lp.php' --porcelain"
```
↑で出力されたページID(数字)を使って、フロントページに設定する
```bash
ssh -i <鍵パス> -p <ポート> <ユーザー名>@<ホスト> "wp --path=<リモートパス>/public_html option update show_on_front page"
ssh -i <鍵パス> -p <ポート> <ユーザー名>@<ホスト> "wp --path=<リモートパス>/public_html option update page_on_front <ページID>"
```

**既にIDが1件以上出力された(再デプロイ)場合は、上記のページ作成・フロントページ設定は一切実行しない**(重複ページができてしまうため)。念のため`wp --path=<リモートパス>/public_html theme activate <サービス名>-child`(テーマの有効化)だけは再実行して問題ない(既に有効でも無害)。

### 5. 検証(必須・省略しない)

**まずcurlでの構造チェックを必ず行う(OS・ブラウザの有無に関係なく、どの環境でも実行できる)**
```bash
curl -s "https://<公開ドメイン>/" | grep -o "<link[^>]*stylesheet[^>]*>"
curl -s "https://<公開ドメイン>/" | grep -o "<script[^>]*src[^>]*>"
```
- `<link rel="stylesheet">`が自作の`lp-style`1本だけになっているか(XWRITE本体のCSSが混ざっていたら競合の恐れ→functions.phpのdequeueが効いていない)
- `<script src>`も同様に自作の`lp-script`1本だけになっているか
- ここがずれていたら、`<link>`/`<script>`の混入元を確認し、functions.phpのdequeue処理を調整して再アップロードする

**見た目のスクリーンショット確認は、使える手段がある場合のみ行う(必須ではない)**

このスキルはSSH/wp-cliだけで完結させる設計で、特定のブラウザや自動化ツールの導入は前提にしていない。もし今使っているClaude Code環境にブラウザを操作できるツール(claude-in-chrome、chrome-devtools、playwright等のMCPツール)が既に使える状態であれば、それを使って公開URLのスクリーンショットを撮り、ローカルで見ていたデザインと一致するか確認してよい。

- ツールが無い・エラーになる場合は無理に導入しようとせず、この工程は省略し、curlでの構造チェックの結果とともに「見た目は公開URLを実際にブラウザで開いて確認してください」とユーザーに伝える
- OS依存のコマンド(特定パスのブラウザを直接実行する等)は使わないこと。Windows/Macどちらでも同じ手順で進められることを優先する

### 6. 完了報告
公開URLと、確認できた内容(見た目一致、フォーム動作等)をユーザーに伝える。

## 注意

- git操作はこのスキルでは行わない(pushは別スキル`push-main`)
- お問い合わせフォームの送信先が `/wp-json/cdc/v1/contact` のような仮エンドポイントのままの場合、実際にはまだ動作しない旨を必ずユーザーに伝える(HubSpot連携等、別途バックエンドの実装が必要)
- SSH鍵やホスト名などの接続情報は、チャットに貼られたものをそのまま使ってよいが、`wp-config.php`や外部に漏らすような扱いはしないこと
