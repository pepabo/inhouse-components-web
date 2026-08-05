# Inhouse Breadcrumb

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/breadcrumb

# or

$ yarn add @pepabo-inhouse/breadcrumb
```

<!-- design-doc:start (design.pepabo.com からの転載。scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Breadcrumb コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/breadcrumb/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/breadcrumb.mdx`

Breadcrumb は、サイトの全体構造と現在位置の関係を、ホームを起点とした階層表現によって示すナビゲーション系のコンポーネントです。ユーザーは Breadcrumb を利用することで、現在アクセスしているページの位置を把握したり、効率的に上位階層へ移動できます。

### 1. 概要 (Overview)

#### 説明

Breadcrumb はホームを起点とした階層表現であるため、ホームへのリンクを先頭に設けます。Breadcrumb は Side Navigation や Bottom Navigation など、他の Navigation コンポーネントを補完することを目的としており、主要な Navigation を強化しますが、完全に置き換えることはできません。

Breadcrumb は **Item** と、各 Item を区切る **Separator** で構成されます。

- **Item**: 各階層のページを指す要素。先頭はホーム、末尾は現在位置を示す。
- **Separator**: Item の間に置く区切りの記号。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--default)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/breadcrumb)

### 2. 構成要素 (Anatomy)

![](https://design.pepabo.com/images/inhouse/components/breadcrumb/dictionary.png)

#### Item

各階層のページを指す要素です。末尾の Item を除くすべての Item は、遷移可能なリンク（`<a>` 要素）を使用します。末尾の Item は現在位置を指すため、リンクではなくテキスト（`<span>` 要素）を使用します。

必須/任意: 必須（先頭はホーム、末尾は現在位置）

#### Separator

Item を区切る記号です。

必須/任意: 必須（Item と Item の間）

### 3. 使い分け (Usage)

#### いつ使うか

階層的に配置されたページを持つ大規模な Web サイト・Web アプリケーションで効果的です。特に、外部ソースからアクセスされる可能性が高いページでは Breadcrumb の使用を推奨します。

#### いつ使わないか

- **ホーム（ルートディレクトリ）**: 現在地を示す必要がないため、Breadcrumb を使用しない選択肢を検討できます。
- **ランディングページなど**: 階層構造全体の中における現在地を示す必要性が低いページでは、Breadcrumb を使用しない選択肢を検討できます。
- **ネイティブアプリケーション**: プラットフォームの原則的に通常 Breadcrumb が使用されないため、プラットフォームの原則に則ったナビゲーション表現を選びます。

#### 類似コンポーネントとの違い

- **[Side Navigation](https://design.pepabo.com/inhouse/components/side-navigation/) / [Navigation Drawer](https://design.pepabo.com/inhouse/components/navigation-drawer/)**: 主要なナビゲーションとしての役割を担います。Breadcrumb はそれらを補完するものであり、置き換えるものではありません。

### 4. バリエーション (Variants)

#### Size

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>S</th>
      <td><code>.-size-s</code></td>
      <td></td>
    </tr>
    <tr>
      <th>M*</th>
      <td><code>.-size-m</code></td>
      <td></td>
    </tr>
    <tr>
      <th>L</th>
      <td><code>.-size-l</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--default&viewMode=story&args=size:s"
  style="width: 100%;border: none; background-color: #f7f8fa;"
></iframe>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--default&viewMode=story&args=size:m"
  style="width: 100%;border: none; background-color: #f7f8fa;"
></iframe>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--default&viewMode=story&args=size:l"
  style="width: 100%;border: none; background-color: #f7f8fa;"
></iframe>

#### Density

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Dense</th>
      <td><code>.-density-dense</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Normal*</th>
      <td><code>.-density-normal</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Comfort</th>
      <td><code>.-density-comfort</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--default&viewMode=story&args=density:dense"
  style="width: 100%;border: none; background-color: #f7f8fa;"
></iframe>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--default&viewMode=story&args=density:normal"
  style="width: 100%;border: none; background-color: #f7f8fa;"
></iframe>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--default&viewMode=story&args=density:comfort"
  style="width: 100%;border: none; background-color: #f7f8fa;"
></iframe>

#### Overflow

Item の文字量が多く、幅が長い場合を考慮したオプションです。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Wrap*</th>
      <td><code>.-overflow-wrap</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Scroll</th>
      <td><code>.-overflow-scroll</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

アクセシビリティ確保の観点で、基本的には Wrap（親要素の幅で折り返される）をデフォルトとして推奨します。

Scroll（親要素の幅の中で横スクロール可能にする）を使用する場合は、

- そもそも Item 名（ページ名・パス名）が長くなり過ぎていないか、ディレクトリ階層が深過ぎないかを検討してから調整する
- メインコンテンツ上部ではヒーローエリア・メインビジュアルとのレイアウトの兼ね合いなどによりやむなく Scroll を使う場合でも、メインコンテンツ下部にも Wrap の Breadcrumb を配置する

といった対応で、アクセシビリティが損なわれないようにします。

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--long-text-wrap&viewMode=story"
  style="width: 100%;border: none; background-color: #f7f8fa;"
></iframe>

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-breadcrumb--long-text-scroll&viewMode=story"
  style="width: 100%;border: none; background-color: #f7f8fa;"
></iframe>

### 5. ステート (States)

Breadcrumb の Item には、Link と Text の2種類のステートがあります。

#### Link

末尾以外のすべての Item に適用される、遷移可能な状態です。`<a>` 要素でマークアップします。クリック／タップで該当ページへ遷移できます。

#### Text

末尾の Item に適用される、現在位置を示す状態です。リンクではなく `<span>` 要素でマークアップします。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- ルート要素に `<nav>` を用い、`aria-label="Breadcrumb"` を設定する
- 末尾の Item（現在位置）には `aria-current="page"` を設定する
- 末尾の Item を除く全 Item を `<a>` 要素でマークアップし、キーボードでフォーカス・遷移できるようにする
- `-overflow-scroll` を使う場合は、Wrap 表現の Breadcrumb をメインコンテンツ下部などに併設してアクセシビリティを担保する

### 7. ライティング (Writing)

- Item のラベルには各ページの正式名称、または短縮形を使う。極端に長くなる場合は省略を検討するが、ユーザーが何のページかを推測できる範囲に留める
- 先頭の Item は「Home」「ホーム」など、サービス全体のホームページであることが分かるラベルにする
- 末尾の Item は現在ページの名称を入れる

<!-- design-doc:end -->
