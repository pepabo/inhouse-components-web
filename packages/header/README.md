# Inhouse Header

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/header

# or

$ yarn add @pepabo-inhouse/header
```

<!-- design-doc:start (scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> Header コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは scripts/sync_design_docs.mjs により生成されています。直接編集しないでください。

Header は、メジャースタック系コンポーネント（Dialog、Navigation Drawer、Sheet）の画面上部に配置するヘッダーコンポーネントです。タスクの目的を明確にするタイトルや、逆方向の遷移・サブアクションを行うためのボタンを配置します。

### 1. 概要 (Overview)

#### 説明

Header はメジャースタック系コンポーネントの画面のタイトルを表示し、タスクの目的を明確にします。あわせて、「検索」「絞り込み」「シェア」などのタスクの完了には必ずしも必要ではないサブアクションを行えるようにします。

さらに、逆方向の遷移を行えます。ただし、メジャースタック系コンポーネントの横方向の遷移はありえないため、横方向の遷移は行えません。

<div class="in-callout -color-notice -size-m">
<span class="_leading in-icon"></span>
<div class="_body">
<span>このProtoは<b>Webアプリケーションの場合のみ使用できます</b>。ネイティブアプリケーションでは実装コストの観点からAndroidでは[App bars](https://m3.material.io/components/app-bars/overview)を使用します。</span>
</div>
</div>

#### リンク

- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/header)

### 2. 構成要素 (Anatomy)

Header は Leading、Body、Trailing の3つの領域で構成されます。これらの領域を配置する順番はデフォルトでは左から右ですが、右から左への言語の場合は反転する必要があります。

#### Leading

逆方向の画面遷移を誘導する「戻る」「閉じる」「キャンセル」Button を配置できます。Button の Appearance は画面内の優先順位を考慮して Transparent を選択します。

| ナビゲーション | Button |
|---|---|
| 戻る | Arrow Back の Icon のみの Button |
| 閉じる | Cross の Icon のみの Button |
| キャンセル | Cross の Icon のみの Button、または「キャンセル」というテキストが入った Button |

必須/任意: 任意

#### Body

現在の画面のタスクの目的を明確にするタイトルを配置できます。タイトルはなるべく簡潔にして文字がはみ出さないようにします。入れられるのは一般名詞のみで、商品名などの固有名詞は変動する情報のため入れることができません。

必須/任意: 必須

#### Trailing

画面内のスコープに限定した「検索」「絞り込み」「シェア」「その他」などのサブアクションを促す Button を配置できます。「送信」や「保存」などタスクの完了に必ず必要なアクションは Header に配置できません(利用頻度が高く、コンテンツ内のフォーム入力の視線の先や、モバイルデバイスで指が届く範囲に配置するほうがアクセシブルなため)。

一般的なアクション（「検索」「絞り込み」「シェア」「その他」など）は Icon のみの Button を配置できます。一般的ではないアクションを配置する場合は、Icon だけではアクションの内容が伝わらない可能性が高いので、テキストが入った Button を検討します。または、表示領域との兼ね合いを考えてデスクトップとモバイルでテキスト付きボタンと Icon のみのボタンを切り替えることも検討します。

配置するアクションが4つ以上になる場合は、Ellipsis Vertical もしくは Ellipsis Horizontal の Icon のみの Button を最後尾に配置して、優先順位の低いアクションを Menu に格納できます。

また、Trailing には検索クエリを入力できる Textfield を配置できます。優先順位が高い場合およびデスクトップのように領域が十分ある場合はデフォルトで表示しますが、優先順位が低い場合は Magnifying Glass の Icon のクリックイベントで展開します。

必須/任意: 任意

### 3. 使い分け (Usage)

#### いつ使うか

アプリケーションの App Bar、および Mode をつくるメジャースタック系コンポーネント（Dialog、Navigation Drawer、Sheet）のヘッダーに使用します。

#### いつ使わないか

- メジャースタック系コンポーネント以外のヘッダー領域には使わない
- ネイティブアプリケーション（特に Android）では、プラットフォームの App bars を使用する

#### 類似コンポーネントとの違い

- **[App Bar](./app-bar)**: アプリケーションのトップレベルのヘッダー。Header は App Bar および Dialog / Navigation Drawer / Sheet のヘッダーとして使う。

### 4. バリエーション (Variants)

#### Position

スクロールした際の位置を決定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Fixed*</th>
      <td>上部に固定する。マイナースタック - Over 2 の Elevation Shadow がつく。</td>
    </tr>
    <tr>
      <th>Relative</th>
      <td>スクロールに追従する。Header に常にアクセスできる必要があまりないときに使用する。マイナースタック - Over 2 の Elevation Shadow がつく。</td>
    </tr>
  </tbody>
</table>

#### Appearance

外観を決定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>White*</th>
      <td>背景が白くなる。</td>
    </tr>
    <tr>
      <th>Filled</th>
      <td>ブランドカラーでブランドを主張したいときに使用する。</td>
    </tr>
    <tr>
      <th>Transparent</th>
      <td>背景にヒーローイメージなどがあって透明にしたいときに使用する。Position が Fixed の場合は例外的にマイナースタック - Over 0 の Elevation Shadow がつくが、スクロールイベントに応じて White または Filled に変化し、通常通りマイナースタック - Over 2 の Elevation Shadow がつく。</td>
    </tr>
  </tbody>
</table>

##### White

##### Filled

##### Transparent

#### Brightness

背景環境の輝度を指定します。Appearance が Transparent のときに、背景の輝度に応じて文字色のセットが切り替わります(明るい背景の上では暗い文字、暗い背景の上では明るい文字)。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Light*</th>
      <td><code>.-brightness-light</code></td>
      <td>明るい背景の上に置く場合に使う(文字色は暗側)。</td>
    </tr>
    <tr>
      <th>Dark</th>
      <td><code>.-brightness-dark</code></td>
      <td>暗い背景の上に置く場合に使う(文字色は明側)。</td>
    </tr>
  </tbody>
</table>

### 5. ステート (States)

#### スクロール

背景にヒーローイメージがある場合などはスクロールイベントに応じて Appearance を Transparent から White もしくは Filled に変化させることができます。

#### Leading の押下

- Arrow Back の Icon のみの Button のクリックイベントで、逆方向の画面への遷移を行う。
- Cross の Icon のみの Button、または「キャンセル」というテキストが入った Button のクリックイベントで、メジャースタックのコンポーネントを閉じる。

#### Trailing の押下（検索）

Textfield に検索クエリを入力して Submit することで検索を行います。検索の挙動について詳しくは検索のガイドラインを参照してください。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- Header のルート要素には `<header>` を用いる
- Icon のみの Button には `aria-label` でその機能を伝えるテキストを設定する
- Appearance が Transparent のときも、背景輝度に応じた文字色のコントラスト比を満たすようにする
- Position が Fixed の場合、Header に隠れるコンテンツがないよう、本文側に十分な上部余白を確保する

### 7. ライティング (Writing)

- Body のタイトルは画面のタスクの目的を端的に表す一般名詞にする
- 「○○ページ」「○○画面」のような UI への自己言及は避ける
- 商品名などの固有名詞や、ユーザーごとに変動する情報をタイトルに入れない
- Leading の「キャンセル」など、テキスト付きの Button は短いラベル（2〜5 文字程度）にする

<!-- design-doc:end -->
