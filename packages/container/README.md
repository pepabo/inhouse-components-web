# Inhouse Container

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/container

# or

$ yarn add @pepabo-inhouse/container
```

<!-- design-doc:start (自動生成。直接編集しないでください) -->

## デザインドキュメント (Design Documentation)

> Container コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは自動生成されています。直接編集しないでください。

Container（コンテナ）は、コンテンツの領域を示すコンポーネントです。サイズを指定するとコンテンツが広がる最大幅を決定でき、コンテンツに最大幅および左右のマージンを設けたい場合に使用します。

### 1. 概要 (Overview)

#### 説明

Container は、コンテンツの領域を示します。また、サイズを指定するとコンテンツが広がる最大幅を決定できます。

マージンは、コンテンツと画面の左端および右端の間のスペースです。画面にうまく適応するために、マージン幅はさまざまなブレークポイントで変更されます。余白を広くすると、コンテンツの周囲により多くの空白が作成されるため、より大きな画面に適しています。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-container--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/container)

### 2. 構成要素 (Anatomy)

Container は、コンテンツを内包する領域と、その左右に設けるマージンで構成されます。

#### Content

コンテンツを配置する領域です。Size で指定した最大幅まで広がります。

必須/任意: 必須

#### Margin

コンテンツと画面の左端・右端の間のスペースです。ブレークポイントに応じて幅が変化します。Gapless を `true` にすると、このマージンを取り除けます。

必須/任意: 任意

### 3. 使い分け (Usage)

#### いつ使うか

- コンテンツに最大幅を設け、大画面でも行長が広がりすぎないようにしたいとき
- コンテンツの左右に一貫したマージンを設けたいとき
- コンテンツを画面中央に揃えたいとき

#### いつ使わないか

- 画面いっぱいに広げたい要素（ヒーローイメージ、全幅の背景など）には使わない
- グリッドによる列分割が目的の場合は [Grid](../grid/README.md) を使用する

#### 類似コンポーネントとの違い

- **[Grid](../grid/README.md)**: コンテンツを列に分割してレイアウトする。Container は最大幅と左右マージンの制御に使う。両者は併用できる。

### 4. バリエーション (Variants)

#### Gapless

Gap（両サイドのマージン）の有無を指定します。

<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>false*</th>
    </tr>
    <tr>
      <th>true</th>
    </tr>
  </tbody>
</table>

#### Size

大きさを決定します。指定したサイズより画面幅が大きくなった場合は中央揃えになります。サイズは Flavor から任意の値に変更できます。

<table>
  <thead>
    <tr>
      <th>Level</th>
      <th>Content Width Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>XS</th>
      <td>480px</td>
    </tr>
    <tr>
      <th>S</th>
      <td>640px</td>
    </tr>
    <tr>
      <th>M*</th>
      <td>960px</td>
    </tr>
    <tr>
      <th>L</th>
      <td>1200px</td>
    </tr>
    <tr>
      <th>XL</th>
      <td>1440px</td>
    </tr>
  </tbody>
</table>

### 5. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- Container はレイアウトのための領域であり、視覚的な余白の調整のみに用いる。意味を持つランドマーク（`<main>` `<section>` など）は内包するコンテンツ側で適切に設定する
- 最大幅を設けることで一行あたりの文字数が長くなりすぎないようにし、本文の可読性を確保する

<!-- design-doc:end -->
