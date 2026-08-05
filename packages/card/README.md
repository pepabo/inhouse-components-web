# Inhouse Card

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/card

# or

$ yarn add @pepabo-inhouse/card
```

<!-- design-doc:start (design.pepabo.com からの転載。scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Card コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/card/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/card.mdx`

Card は、ある情報のチャンク（塊）を、枠線や背景・影などの視覚的なスタイルで囲って表現するコンポーネントです。複数の情報を一つの単位としてまとめ、一覧表示や詳細表示の構成要素として用います。

### 1. 概要 (Overview)

#### 説明

Card は、見た目（Appearance）と表面色（Color）の組み合わせで、囲うチャンクのトーンや重要度を表現します。内部には画像や本文などの任意の要素を配置でき、一覧での並べ替えやレイアウトを揃えるための基本ユニットとして使えます。

```html
<div class='in-card -color-primary -appearance-elevated'>
  body contents
</div>
```

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-card--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/card)

### 2. 構成要素 (Anatomy)

#### Container

Card のかたちをつくる外枠の要素です。Appearance / Color / Shape の指定によって視覚的なスタイルが決まります。

必須/任意: 必須

#### Media

Card 上部などに配置できる画像領域です。`<figure>` に `<img class="_thumbnail">` を含める形で配置します。

必須/任意: 任意

#### Body

Card 本体のコンテンツを配置する領域です。タイトルや本文、ボタンなど、Card で伝えたい情報を内包します。

必須/任意: 必須

### 3. 使い分け (Usage)

#### いつ使うか

- 関連する複数の情報を一つの単位としてまとめて見せたいとき
- 一覧として並べる際に、各オブジェクトの視覚的な区切りをつくりたいとき
- 詳細画面でセクションごとに視覚的にチャンク化したいとき

#### いつ使わないか

- 単なる枠線・余白だけが目的の場合は、Card ではなくレイアウト用の Container を使う
- 行ごとにインタラクション可能な一覧では Interactive List のほうが適している

### 4. バリエーション (Variants)

#### Appearance

見た目の種類を指定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Filled*</th>
      <td><code>.-appearance-filled</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Elevated</th>
      <td><code>.-appearance-elevated</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Outlined</th>
      <td><code>.-appearance-outlined</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div class="in-card -appearance-filled">
  <span>Card body</span>
</div>
<br />
<br />
<div class="in-card -appearance-elevated">
  <span>Card body</span>
</div>
<br />
<br />
<div class="in-card -appearance-outlined">
  <span>Card body</span>
</div>
```

推奨される選び方の判断基準:

ページ全体でチャンク（情報のかたまり）をどう表現するか（罫線・影・色面・余白のどれで区切るか）の方針にあわせて選びます。

- **Filled**: 色面で区切る時に使う。
- **Elevated**: 影で区切る時に使う。
- **Outlined**: 罫線で区切る時に使う。

#### Color

表面の色 (surface color) を指定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Primary*</th>
      <td><code>.-color-primary</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Secondary</th>
      <td><code>.-color-secondary</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Tertiary</th>
      <td><code>.-color-tertiary</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div class="in-card -color-primary">
  <span>Card body</span>
</div>
<br />
<br />
<div class="in-card -color-secondary">
  <span>Card body</span>
</div>
<br />
<br />
<div class="in-card -color-tertiary">
  <span>Card body</span>
</div>
```

#### isGapless

gap（内周の余白）の有無を指定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Active</th>
      <td><code>.-is-gapless</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div class="in-card">
  <span>Card body</span>
</div>
<br />
<br />
<div class="in-card -is-gapless">
  <span>Card body</span>
</div>
```

#### Shape

角の形状を指定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Circle*</th>
      <td><code>.-shape-circle</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Square</th>
      <td><code>.-shape-square</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div class="in-card -appearance-outlined -shape-circle">
  <span>Card body</span>
</div>
<br />
<br />
<div class="in-card -appearance-outlined -shape-square">
  <span>Card body</span>
</div>
```

#### 実装

##### Mixin-based

###### HTML

```html
<div class='card-component'>
  <figure class='_media'>
    <img class='_thumbnail' src='/images/sample.webp' />
  </figure>
  <div class='_body'>
    <h3>card item title</h3>
    <p>card item description</p>
  </div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.card-component {
  @include inhouse.card-style(
    $options: (
      appearance: Outlined,
      color: primary,
      gapless: true,
    )
  );

  > ._body {
    display: flex;
    flex-direction: column;
    gap: inhouse.get-spacing-size(xs);
    padding: inhouse.get-spacing-size(m);
  }
}
```

##### Class-based

###### HTML

```html
<div class='in-card -appearance-outlined -color-primary -is-gapless'>
  <figure class='_media'>
    <img class='_thumbnail' src='/images/sample.webp' />
  </figure>
  <div class='_body'>
    <h3>card item title</h3>
    <p>card item description</p>
  </div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.card-export;

.in-card {
    > ._body {
    display: flex;
    flex-direction: column;
    gap: inhouse.get-spacing-size(xs);
    padding: inhouse.get-spacing-size(m);
  }
}
```

### 5. ステート (States)

Card 自体はインタラクションを持たないため、固有のステートは持ちません。Card をクリック可能にする場合は、Card 全体を `<a>` や `<button>` で包むなど、内包させる要素のステートに従います。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- Card 内に画像のみを配置する場合は `<img>` の `alt` に内容を識別できる代替テキストを設定する
- Card 内に複数のリンクやボタンを配置する場合は、それぞれにフォーカスリングが見えるようにする
- Outlined を使うときも、枠線だけでなく内部のコントラストを確保する

### 7. ライティング (Writing)

- タイトルは Card で伝えたい情報の主題を端的に表現する
- 一覧で並べる場合は、各 Card のタイトルや見出しの構造を揃えると一覧性が高まる

<!-- design-doc:end -->
