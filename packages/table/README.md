# Inhouse Table

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/table

# or

$ yarn add @pepabo-inhouse/table
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Table コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/table/) からの転載です。
> 原本: https://design.pepabo.com/inhouse/components/table/

Table は、商品やユーザーなど、同じ種類のオブジェクトの集合を構造化して表示するコンポーネントです。最上部に見出しの Heading 行を配置し、その下に Description 行を垂直方向に並べて構成します。

### 1. 概要 (Overview)

#### 説明

![](https://design.pepabo.com/images/inhouse/components/table/dictionary.png)

Table は、同じ種類のオブジェクトを行として並べ、列ごとに同じ属性を表示する形式のデータ表現です。Heading 行と Description 行は視覚的に区別できるようにし、見出しは Bold、行同士の境界には Stroke を引きます。

行内の Heading や Description を配置する順番は、デフォルトでは左から右の順で配置されます。右から左へ読む言語の場合は配置を反転する必要があります。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-table--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/table)

### 2. 構成要素 (Anatomy)

#### Heading

見出しの役割を果たす行です。Font Weight は Bold にし、行の下側（Heading 行と Description 行の境界）には Primary の Stroke を引きます。

必須/任意: 必須

#### Description

データを表す行です。行の下側（行同士の境界）には Secondary の Stroke を引きます。

必須/任意: 必須（1 行以上）

#### Align

Heading と Description は、セルごとに Align を指定できます。Align は **Start / End** から選択でき、デフォルトでは Start（左揃え）です。扱うデータが数値型の場合は End（右揃え）にすることで可読性が高まります。

```html
<table className="in-table -density-normal -size-m" aria-label="国別データ">
  <thead>
    <tr>
      <th scope="col">国</th>
      <th scope="col" className="-align-end">人口</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>アメリカ合衆国</td>
      <td className="-align-end">390,000,000</td>
    </tr>
    <tr>
      <td>スウェーデン</td>
      <td className="-align-end">9,000,000</td>
    </tr>
    <tr>
      <td>日本</td>
      <td className="-align-end">120,000,000</td>
    </tr>
  </tbody>
</table>
```

### 3. 使い分け (Usage)

#### いつ使うか

- 同じ種類のオブジェクトの集合を、列単位で属性を揃えて表示したいとき
- 3 列以上の構造化されたデータを並べたいとき

#### いつ使わないか

##### Interactive Table を使用したほうがよい場合

オブジェクトの集合とユーザーがインタラクティブにやりとりする必要がある場合は、[Interactive Table](./interactive-table) の使用を検討します。

##### 異なるオブジェクトを同じ Table 内に混在させない

商品オブジェクトとユーザーオブジェクトなど、異なるオブジェクトを同じ Table に混在させることはできません。種類ごとに Table を分けます。

##### 画面サイズが大きい場合は適切な最大幅を設ける

Table の外側の領域の最大幅を調整せずに Table を極端に拡大しないでください。コンテンツの可読性が落ちる可能性があります。

#### 類似コンポーネントとの違い

- **[Interactive Table](./interactive-table)**: 行に対するインタラクション（選択・並べ替え・編集など）が必要な場合に使う。
- **[Description List](./description-list)**: 1 つのオブジェクトに対する Key と Value のペアの表示に使う。

### 4. バリエーション (Variants)

#### Density

密度を決定します。

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
    </tr>
    <tr>
      <th>Normal*</th>
      <td><code>.-density-normal</code></td>
    </tr>
    <tr>
      <th>Comfort</th>
      <td><code>.-density-comfort</code></td>
    </tr>
  </tbody>
</table>

```html
<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  <label htmlFor="table-density-select">
    Density:
  </label>
  <span className="in-select">
    <select
      id="table-density-select"
      className="_select"
    >
      <option value="dense">Dense</option>
      <option value="normal" selected>Normal</option>
      <option value="comfort">Comfort</option>
    </select>
    <span className="_icon"></span>
  </span>
</div>
<table id="table-density-demo" className="in-table -density-normal -size-m" aria-label="国別データ">
  <thead>
    <tr>
      <th scope="col">国</th>
      <th scope="col" className="-align-center">首都</th>
      <th scope="col" className="-align-end">人口</th>
      <th scope="col">言語</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>アメリカ合衆国</td>
      <td className="-align-center">ワシントンD.C.</td>
      <td className="-align-end">390,000,000</td>
      <td>英語</td>
    </tr>
    <tr>
      <td>スウェーデン</td>
      <td className="-align-center">ストックホルム</td>
      <td className="-align-end">9,000,000</td>
      <td>スウェーデン語</td>
    </tr>
    <tr>
      <td>日本</td>
      <td className="-align-center">東京</td>
      <td className="-align-end">120,000,000</td>
      <td>日本語</td>
    </tr>
  </tbody>
</table>
```

#### Size

サイズを決定します。

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
    </tr>
    <tr>
      <th>M*</th>
      <td><code>.-size-m</code></td>
    </tr>
    <tr>
      <th>L</th>
      <td><code>.-size-l</code></td>
    </tr>
  </tbody>
</table>

```html
<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  <label htmlFor="table-size-select">
    Size:
  </label>
  <span className="in-select">
    <select
      id="table-size-select"
      className="_select"
    >
      <option value="s">S</option>
      <option value="m" selected>M</option>
      <option value="l">L</option>
    </select>
    <span className="_icon"></span>
  </span>
</div>
<table id="table-size-demo" className="in-table -density-normal -size-m" aria-label="国別データ">
  <thead>
    <tr>
      <th scope="col">国</th>
      <th scope="col" className="-align-center">首都</th>
      <th scope="col" className="-align-end">人口</th>
      <th scope="col">言語</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>アメリカ合衆国</td>
      <td className="-align-center">ワシントンD.C.</td>
      <td className="-align-end">390,000,000</td>
      <td>英語</td>
    </tr>
    <tr>
      <td>スウェーデン</td>
      <td className="-align-center">ストックホルム</td>
      <td className="-align-end">9,000,000</td>
      <td>スウェーデン語</td>
    </tr>
    <tr>
      <td>日本</td>
      <td className="-align-center">東京</td>
      <td className="-align-end">120,000,000</td>
      <td>日本語</td>
    </tr>
  </tbody>
</table>
```

#### Background

行に交互の背景色を適用します。奇数行と偶数行で異なる背景色が表示されます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>なし*</th>
      <td>-</td>
    </tr>
    <tr>
      <th>あり</th>
      <td><code>.-has-background</code></td>
    </tr>
  </tbody>
</table>

```html
<table className="in-table -density-normal -size-m -has-background" aria-label="国別データ">
  <thead>
    <tr>
      <th scope="col">国</th>
      <th scope="col">首都</th>
      <th scope="col" className="-align-end">人口</th>
      <th scope="col">言語</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>アメリカ合衆国</td>
      <td>ワシントンD.C.</td>
      <td className="-align-end">390,000,000</td>
      <td>英語</td>
    </tr>
    <tr>
      <td>スウェーデン</td>
      <td>ストックホルム</td>
      <td className="-align-end">9,000,000</td>
      <td>スウェーデン語</td>
    </tr>
    <tr>
      <td>日本</td>
      <td>東京</td>
      <td className="-align-end">120,000,000</td>
      <td>日本語</td>
    </tr>
    <tr>
      <td>フランス</td>
      <td>パリ</td>
      <td className="-align-end">67,000,000</td>
      <td>フランス語</td>
    </tr>
  </tbody>
</table>
```

#### Grid Border

格子状のボーダーを表示します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>なし*</th>
      <td>-</td>
    </tr>
    <tr>
      <th>あり</th>
      <td><code>.-has-grid-border</code></td>
    </tr>
  </tbody>
</table>

```html
<table className="in-table -density-normal -size-m -has-grid-border" aria-label="国別データ">
  <thead>
    <tr>
      <th scope="col">国</th>
      <th scope="col">首都</th>
      <th scope="col" className="-align-end">人口</th>
      <th scope="col">言語</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>アメリカ合衆国</td>
      <td>ワシントンD.C.</td>
      <td className="-align-end">390,000,000</td>
      <td>英語</td>
    </tr>
    <tr>
      <td>スウェーデン</td>
      <td>ストックホルム</td>
      <td className="-align-end">9,000,000</td>
      <td>スウェーデン語</td>
    </tr>
    <tr>
      <td>日本</td>
      <td>東京</td>
      <td className="-align-end">120,000,000</td>
      <td>日本語</td>
    </tr>
  </tbody>
</table>
```

#### 実装

Table のセルは Cell を継承しています。詳細は[Cell](./cell)を参照してください。

##### Mixin-based

###### HTML

```html
<table class="table-component" aria-label="国別データ">
  <thead>
    <tr>
      <th scope="col">国</th>
      <th scope="col">首都</th>
      <th scope="col" class="-align-end">人口</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>アメリカ合衆国</td>
      <td>ワシントンD.C.</td>
      <td class="-align-end">390,000,000</td>
    </tr>
    <tr>
      <td>日本</td>
      <td>東京</td>
      <td class="-align-end">120,000,000</td>
    </tr>
  </tbody>
</table>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.table-component {
  @include inhouse.table-style(
    $option: (
      density: normal,
      size: m,
      hasBackground: false,
      hasGirdBorder: false,
    )
  );
}
```

###### オプション

- `density`: テーブルの密度（`dense` / `normal` / `comfort`）
- `size`: テーブルのサイズ（`s` / `m` / `l`）
- `hasBackground`: 行に交互の背景色を適用（`true` / `false`）
- `hasGirdBorder`: セルに格子状のボーダーを表示（`true` / `false`）

##### Class-based

###### HTML

```html
<table class="in-table -density-normal -size-m" aria-label="国別データ">
  <thead>
    <tr>
      <th scope="col">国</th>
      <th scope="col">首都</th>
      <th scope="col" class="-align-end">人口</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>アメリカ合衆国</td>
      <td>ワシントンD.C.</td>
      <td class="-align-end">390,000,000</td>
    </tr>
    <tr>
      <td>日本</td>
      <td>東京</td>
      <td class="-align-end">120,000,000</td>
    </tr>
  </tbody>
</table>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.table-export;
```

### 5. ステート (States)

Table 自体はインタラクションを起こさないため、固有のステートは持ちません。Table 内に含まれるテキストリンクなどは、それぞれのコンポーネントのステートに従います。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- ルート要素には `<table>` を用い、見た目を整える目的だけで `<div>` などに置き換えない
- Heading 行のセルには `<th scope="col">` を設定し、列見出しであることを伝える
- Table の目的が分かるように `aria-label` または `<caption>` を付与する
- 数値列の `text-align` を End にする場合も、Heading の `scope` と Description のアライメントは独立して指定する
- 横スクロールが必要な大きさになる場合は、スクロール領域を明示し、キーボードでもスクロールできるようにする

### 7. ライティング (Writing)

- Heading のラベルは列の内容を簡潔に示す名詞にする（例: 「商品名」「金額」「在庫」）
- 列ごとに文体・粒度を揃える（例: 数値の桁区切り、日付フォーマット、ステータスの語彙）
- 「-」「なし」「未設定」のような空値の表記をテーブル全体で統一する
- 「商品の名前」「商品名（表示用）」のような重複や冗長な表現は避ける

<!-- design-doc:end -->
