# Inhouse App Bar

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/app-bar

# or

$ yarn add @pepabo-inhouse/app-bar
```

<!-- design-doc:start (自動生成。直接編集しないでください) -->

## デザインドキュメント (Design Documentation)

> App Bar コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは自動生成されています。直接編集しないでください。

App Bar は、アプリケーションの最上位に配置される [Header](../header/README.md) です。アプリケーション本体のタイトル（またはロゴ）を表示してブランドの印象を表現するとともに、アプリケーションの主要アクションとナビゲーションを提供します。

### 1. 概要 (Overview)

#### 説明

App Bar は **Leading**、**Body**、**Trailing** の3つの領域で構成されます。

- **Leading**: Menu アイコンの Button による Navigation 系コンポーネント（[Side Navigation](../side-navigation/README.md) / [Navigation Drawer](../navigation-drawer/README.md)）の開閉を担う領域。
- **Body**: アプリケーションの名前やロゴを左寄せで配置する領域。
- **Trailing**: アプリケーションの主要アクションを促す Button や、横方向のナビゲーションを配置できる領域。

[Header](../header/README.md) が逆方向の遷移のみ行えるのに対し、App Bar は Leading の Menu Button や Trailing に置いた Navigation で横方向のビュー遷移も行えます。

このコンポーネントは Web アプリケーションの場合のみ使用します。ネイティブアプリケーションでは、インタラクションの一貫性や実装コストに優れたプラットフォーム標準のコンポーネント（iOS: [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)、Android: [App bars](https://m3.material.io/components/app-bars/overview)）を使用します。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-appbar--tool)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/app-bar)

### 2. 構成要素 (Anatomy)

#### A. Leading

Menu アイコンの Button のクリックイベントで Navigation 系のコンポーネント（[Side Navigation](../side-navigation/README.md) または [Navigation Drawer](../navigation-drawer/README.md)）を開閉し、横方向のビュー遷移を行えます。Bottom Navigation で代わりが効く場合は必ず設置する必要はありません。

必須/任意: 任意

#### B. Body

アプリケーションの名前やロゴを左寄せで配置します。Title を常に表示してホームビュー（ホームスクリーン、トップページ）へのアクセスを容易にします。

モバイルサイズかつ Bottom Navigation でホームビューにアクセスできる場合は、常にロゴが表示されている必要はありません。その場合はロゴ以外の要素（色やアイコン）でブランドを表します。

必須/任意: 必須

#### C. Trailing

アプリケーションの主要アクションを促す Button や、横方向のナビゲーションを配置できる領域です。

- 一般的なアクションは Icon のみの Button を配置できます。一般的ではないアクションは、Icon だけではアクションの内容が伝わりにくいため、テキストが入った Button を検討します。表示領域との兼ね合いで、デスクトップとモバイルで Button のテキスト/Icon を切り替えることも検討します。
- アクションが多くモバイルなどで収まりきらない場合、Ellipsis Vertical または Ellipsis Horizontal のアイコンを用いて優先順位の低いアクションを格納できます。AppBar では Avatar の Button でログインユーザーに関する項目を格納することもできます。格納したアクションはドロップダウンメニューで表示します。
- 検索クエリを入力する Textfield を配置できます。検索アクションの優先順位が高い場合はデフォルトで表示し、低い場合は Magnifying Glass の Icon のクリックイベントで展開します。
- Trailing に Navigation を配置して横方向のビュー遷移を行うこともできます。情報の閲覧が大きな比重を占めるウェブサイトでのナビゲーション設計に有用です。

必須/任意: 任意

### 3. 使い分け (Usage)

#### いつ使うか

Web アプリケーションの最上位 [Header](../header/README.md) として、ブランドの表現と主要アクション・ナビゲーションへのアクセスを提供する場面で使います。

#### いつ使わないか

- **ネイティブアプリケーション**: インタラクションの一貫性や実装コストに優れたプラットフォーム標準のコンポーネント（iOS Toolbars / Android App bars）を使います。
- **サブアクションのみを並べる場合**: タスクの完了に必ずしも必要ではないサブアクションを並べる場合は [Header](../header/README.md) を使います。App Bar はアプリケーションの主要アクションを置く場所です。

#### 類似コンポーネントとの違い

- **[Header](../header/README.md)**: タスクの完了に必ずしも必要ではないサブアクションを並べる用途。App Bar はアプリケーションの主要アクションを配置できる点と、Trailing に Navigation を配置できる点が異なります。
- **[Side Navigation](../side-navigation/README.md) / [Navigation Drawer](../navigation-drawer/README.md)**: 縦並びの最上位ナビゲーション。App Bar の Leading に置いた Menu Button から開閉します。

### 4. バリエーション (Variants)

#### Appearance

App Bar の見た目を指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>White*</th>
      <td><code>.-appearance-white</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Filled</th>
      <td><code>.-appearance-filled</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Transparent</th>
      <td><code>.-appearance-transparent</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-appbar--tool&viewMode=story&args=appearance:white"
  style="width: 100%; min-height: 64px; border: none; background-color: #f7f8fa;"
></iframe>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-appbar--tool&viewMode=story&args=appearance:filled"
  style="width: 100%; min-height: 64px; border: none; background-color: #f7f8fa;"
></iframe>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-appbar--tool&viewMode=story&args=appearance:transparent"
  style="width: 100%; min-height: 64px; border: none; background-color: #f7f8fa;"
></iframe>

推奨される選び方の判断基準:

- **White**: 基本の見た目。背景が白く、文字色は暗色。
- **Filled**: ブランドカラーなどで塗りつぶした見た目。文字色は白色。
- **Transparent**: 背景が透明な見た目。ランディングページなどで背景にヒーローイメージがある場合に、スクロール前は Transparent、スクロール後は White/Filled に変化させる用途で使えます。

#### Brightness

背景が透明な Appearance（Transparent）では、App Bar を置く環境の輝度に応じた見た目を指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Light*</th>
      <td><code>.-brightness-light</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Dark</th>
      <td><code>.-brightness-dark</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Position

画面上での配置方法を指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Fixed*</th>
      <td><code>.-position-fixed</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 実装

##### Mixin-based

###### HTML

```html
<header class="app-bar-component">
  <div class="_content">
    <div class="_leading">
      <!-- Menu Button などを配置 -->
    </div>
    <div class="_body">
      <!-- アプリケーション名やロゴを配置 -->
    </div>
    <div class="_trailing">
      <!-- 主要アクションの Button や Navigation を配置 -->
    </div>
  </div>
</header>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.app-bar-component {
  @include inhouse.app-bar-style(
    $option: (
      appearance: white,
      brightness: light,
      position: fixed,
    )
  );
}
```

##### Class-based

###### HTML

```html
<header class="in-app-bar -appearance-white -brightness-light -position-fixed">
  <div class="_content">
              </div>
</header>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.app-bar-export;
```

### 5. ステート (States)

#### Default

App Bar が通常表示されている状態です。各内部要素（Button など）のステートは個々のコンポーネントに準じます。

#### スクロール時の変化

ランディングページなどで背景にヒーローイメージがある場合は、スクロールイベントに応じて Appearance を Transparent から White または Filled に変化させることができます。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- ルート要素に `<header>` を用いる
- Leading の Menu Button には `aria-label="メニュー"` などの分かりやすいラベルを設定し、`aria-expanded` で開閉状態、`aria-controls` で対応する Navigation を伝える
- Body のホームリンクは `<a>` 要素でマークアップし、`aria-label="ホーム"` などホームへ戻る意味が伝わるラベルにする
- Trailing の Icon のみの Button にはそれぞれ `aria-label` でアクションの内容を伝えるラベルを設定する
- Transparent Appearance を使う場合は、背景画像とのコントラスト比が WCAG 基準を満たすことを確認する

### 7. ライティング (Writing)

- Body のラベルはアプリケーション名・サービス名を入れる
- Trailing の Icon Button には `aria-label` でアクション名を補完する（例: 「検索」「通知」「お気に入り」）
- Trailing のテキスト付き Button は短く明確な動詞・名詞を使う（例: 「ログイン」「新規登録」）

<!-- design-doc:end -->
