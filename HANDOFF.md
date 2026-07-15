# さとうさん向け運用手順書

## 0. ターミナルの準備とリポジトリの取得(初回のみ)

### 0-1. gitを入れる(まだの場合)
Windowsには標準で「git」というソフトが入っていないので、これだけは追加インストールが必要です(その他はWindows標準のものだけで進められます)。

1. ブラウザで **https://git-scm.com/download/win** を開く
2. 「64-bit Git for Windows Setup」をダウンロード
3. ダウンロードした`.exe`を実行し、表示される画面はすべて「Next」のままインストールを進める

これをインストールすると、後述するWindows標準の「PowerShell」から`git`コマンドが使えるようになります。専用の別ターミナル(Git Bash)を開く必要はありません。

### 0-2. ターミナルを開く
スタートメニューで「**PowerShell**」と検索して起動します(Windowsに標準で入っているアプリです)。

### 0-3. 作業フォルダに移動する
```powershell
cd ~
mkdir -Force dev
cd dev
```

### 0-4. リポジトリをclone(取得)する
```powershell
git clone https://github.com/mktg-eng/lp.git
```
実行すると、初回だけブラウザが自動で開いてGitHubへのログインを求められることがあります。その場合はGitHubアカウントでログインしてください。

完了すると、`dev`フォルダの中に`lp`という名前のフォルダが作られ、その中に各サービスのフォルダ(`design/`, `investor/`など)が入っています。

### 0-5. 担当フォルダに移動してClaude Codeを起動する
```powershell
cd lp/<担当フォルダ名>
claude
```
例えば投資家サイト(`investor`)の担当なら
```powershell
cd lp/investor
claude
```
次回以降は、PowerShellを開いて`cd dev/lp/<担当フォルダ名>`→`claude`で作業いただけます。

## 1. 全体の流れ

```
①ワイヤーを元に本番デザインを作る(Claude Codeと一緒に)
  ↓
②「mainにプッシュして」とClaude Codeに言う
  ↓
③Vercelにプレビューが自動で反映される(既存サービスの場合)
  ↓ 新規サービスの場合だけ、Vercel側の設定がもう1つ必要(3章)
④富田さんがデザインを確認してOKが出る
  ↓
⑤WordPressの新規サイトを用意する(4章)
  ↓
⑥「WordPressに反映して」とClaude Codeに言う
```

## 2. デザイン作業とpush

普段通り、担当フォルダ(`design/`, `investor/`など)でClaude Codeに指示を出しながらデザインを直します。

> 「変更をmainにプッシュして」

これで、変更の保存からGitHubへのアップロードまで自動で行われます。

## 3. Vercelへの反映(新規サービスのときだけ)

既存のサービス(design, mvp, articles等)を直しているだけなら、pushするだけで自動的にVercel側に反映されます。何もしなくてOKです。

**新しいサービスフォルダ(投資家サイト、IR LEAD、オウンドメディア等)を初めて作った直後だけ**、Vercel側で1回だけ設定が必要です。

1. https://vercel.com にログイン（https://vercel.com/mktg-engs-projects）
2. 「Add New」→「Project」
3. `mktg-eng/lp` リポジトリを選択
4. 「Root Directory」の項目で、対象のフォルダ名(例: `investor`)を指定
5. Framework Presetは「Other」のままでOK(ビルドコマンド不要な静的サイトのため)
6. 「Deploy」をクリック

これで、そのフォルダ専用のURLが発行され、以降はそのフォルダをpushするたびに自動で反映されるようになります。

## 4. WordPressの新規サイト準備

富田さんのデザインチェックでOKが出たら、本番のWordPressサイトを用意します。

### 4-1. XServer for WordPressで新規サイト作成
1. XServer for WordPressの管理画面にログイン
2. 「サイトを追加」>「WordPressを新規インストール」を選択
3. 設定値は下記の通り
  - サイトURL：指示がフォルダ名と同じにする（例：design）
  - 管理者ユーザー名：mktg
  - パスワード：生成して控えておく
  - 管理者メールアドレス：mktg@jena-academy.com
  - テーマ：指示がなければXwrite
  - セキュリティ設定：ON
  - リソース設定はデフォルトのまま

### 4-2. SSH鍵を作る(全サイト共通で使うため、最初の1回だけでよい)
```powershell
cd ~
mkdir -Force .ssh
cd .ssh
ssh-keygen -t ed25519 -C "wordpress"
```
質問は全部Enterでよい。実行後、以下のコマンドで公開鍵の中身を表示してコピーする

```powershell
cat id_ed25519.pub
```

### 4-3. 公開鍵をWordPress側に登録(新しいサイトを作るたびに行う)
1. XServer for WordPressの管理画面 → 対象サイトの「設定画面」 → 「サーバー管理ツール」→「SSH設定」→「公開鍵を登録」
2. 設定値は下記の通り
  - 登録方式：手動
  - ラベル：わかりやすいもの
  - 公開鍵：4-2でコピーした公開鍵

登録後、SSH設定画面の「SSHソフト設定」タブを開き、ホスト名、ユーザー名、接続ポートを控えておく。（次のステップで必要）

### 4-4. Claude Codeに反映を頼む
接続情報が揃ったら、Claude Codeにこう伝えるだけです。

> 「WordPressに反映して。ホストは〇〇、ポートは〇〇、ユーザー名は〇〇、鍵は`~/.ssh/id_ed25519`です」

あとは自動でアップロード・設定・見た目の確認まで行われます。

