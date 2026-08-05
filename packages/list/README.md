# Inhouse List

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/list

# or

$ yarn add @pepabo-inhouse/list
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [List コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/list/) からの転載です。
> 原本: https://design.pepabo.com/inhouse/components/list/

List は、あるオブジェクトの集合を順序なしリスト（unordered list）または順序つきリスト（ordered list）として表示するコンポーネントです。リストは入れ子にすることもでき、順序なしと順序つきを混在させた入れ子も可能です。

### 1. 概要 (Overview)

#### 説明

List は、関連する項目を縦に並べて伝えるためのもっとも基本的なコンポーネントです。項目の順序に意味がある場合は順序つきリスト（`<ol>`）、意味がない場合は順序なしリスト（`<ul>`）を使います。

リストの開始位置はデフォルトでは左から右ですが、右から左への言語の場合は反転する必要があります。

```html
<ul class="in-ul" role="list">
  <li>Fundamental Design Principle</li>
  <li>Product Design Principle</li>
  <li>Communication Design Principle</li>
</ul>
```

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-list--unordered-list)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/list)

### 2. 構成要素 (Anatomy)

#### Container

`<ol>` もしくは `<ul>` のルート要素です。Density / Size / Background などのモディファイアを指定します。

必須/任意: 必須

#### Item

リストの各項目です。`<li>` で記述します。テキストだけでなく、他のコンポーネントを内包させることもできます。

必須/任意: 必須（1 つ以上）

### 3. 使い分け (Usage)

#### いつ使うか

- 関連する項目を縦に並べて伝えたいとき
- 項目が順序を持つ場合は順序つきリスト、持たない場合は順序なしリストを使う
- 入れ子の階層構造を表現したいとき

#### いつ使わないか

- 各項目がインタラクションを持つ（クリック・選択・ドラッグなど）場合は Interactive List を使う
- Key と Value のペアを並べる場合は Description List を使う
- 横方向に並べたいだけの場合は List ではなくレイアウト用の Grid / Container を使う

#### 類似コンポーネントとの違い

- **[Interactive List](./interactive-list)**: 行単位でインタラクションが必要な場合に使う。
- **[Description List](./description-list)**: Key と Value のペアを並べる場合に使う。

### 4. バリエーション (Variants)

#### Tag

`<ol>`（順序つきリスト）もしくは `<ul>`（順序なしリスト）のどちらかを指定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Ordered List</th>
      <td><code>.in-ol</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Unordered List</th>
      <td><code>.in-ul</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div>
  <p>Ordered List</p>
  <ol class="in-ol" role="list">
    <li>Fundamental Design Principle</li>
    <li>Product Design Principle</li>
    <li>Communication Design Principle</li>
  </ol>
</div>
<div style="margin-top: 0.5rem;">
  <p>Unordered List</p>
  <ul class="in-ul" role="list">
    <li>Fundamental Design Principle</li>
    <li>Product Design Principle</li>
    <li>Communication Design Principle</li>
  </ul>
</div>
```

#### Density

要素間の密度を決定します。

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

```html
<div>
  <p>Dense</p>
  <ul class="in-ul -density-dense" role="list">
    <li>Fundamental Design Principle</li>
    <li>Product Design Principle</li>
    <li>Communication Design Principle</li>
  </ul>
</div>
<div style="margin-top: 0.5rem;">
  <p>Normal</p>
  <ul class="in-ul -density-normal" role="list">
    <li>Fundamental Design Principle</li>
    <li>Product Design Principle</li>
    <li>Communication Design Principle</li>
  </ul>
</div>
<div style="margin-top: 0.5rem;">
  <p>Comfort</p>
  <ul class="in-ul -density-comfort" role="list">
    <li>Fundamental Design Principle</li>
    <li>Product Design Principle</li>
    <li>Communication Design Principle</li>
  </ul>
</div>
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

```html
<div>
  <p>S</p>
  <ul class="in-ul -size-s" role="list">
    <li>Fundamental Design Principle</li>
    <li>Product Design Principle</li>
    <li>Communication Design Principle</li>
  </ul>
</div>
<div style="margin-top: 0.5rem;">
  <p>M</p>
  <ul class="in-ul -size-m" role="list">
    <li>Fundamental Design Principle</li>
    <li>Product Design Principle</li>
    <li>Communication Design Principle</li>
  </ul>
</div>
<div style="margin-top: 0.5rem;">
  <p>L</p>
  <ul class="in-ul -size-l" role="list">
    <li>Fundamental Design Principle</li>
    <li>Product Design Principle</li>
    <li>Communication Design Principle</li>
  </ul>
</div>
```

#### Background

上下のスペースを確保するかどうかを選択できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Background</th>
      <td><code>.-has-background</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<p>Background</p>
<ul class="in-ul -density-dense -has-background" role="list">
  <li>Fundamental Design Principle</li>
  <li>Product Design Principle</li>
  <li>Communication Design Principle</li>
</ul>
<ul class="in-ul -density-normal -has-background" role="list">
  <li>Fundamental Design Principle</li>
  <li>Product Design Principle</li>
  <li>Communication Design Principle</li>
</ul>
<ul class="in-ul -density-comfort -has-background" role="list">
  <li>Fundamental Design Principle</li>
  <li>Product Design Principle</li>
  <li>Communication Design Principle</li>
</ul>
```

#### 実装

##### Mixin-based

###### HTML

```html
<ul class="list-component" role="list">
  <li>Fundamental Design Principle</li>
  <li>Product Design Principle</li>
  <li>Communication Design Principle</li>
</ul>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.list-component {
  @include inhouse.list-style(
    $options: (
      density: dense,
      list-style-type: disc,
      size: l,
    )
  );
}
```

##### Class-based

###### HTML

```html
<ul class="in-ul -size-l -density-dense -has-background" role="list">
  <li>Fundamental Design Principle</li>
  <li>Product Design Principle</li>
  <li>Communication Design Principle</li>
</ul>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.list-export;
```

### 5. ステート (States)

List 自体はインタラクションを持たないため、固有のステートは持ちません。List の各項目内にリンクなどを内包する場合、そのリンクのステートに従います。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- 番号(マーカー)をブラウザに自動生成させたい場合は `<ol>`、そうでない場合は `<ul>` を使う
- 項目に紐づく番号自体が情報として永続的な意味を持つ場合(法令の条文番号など、項目の追加・削除で繰り上がると参照が壊れるもの)は `<ul>` を使い、番号は項目テキストの先頭に書く
- スクリーンリーダーが項目数を読み上げられるように、CSS のリセットでリストの semantics が外れている場合は `role="list"` を付与する
- 入れ子のリストは構造を素直に反映し、見た目だけのインデントで階層を表現しない

### 7. ライティング (Writing)

- 各項目の文体・粒度を揃える（例: 体言止め同士、文末「です・ます」調同士）
- 順序つきリストでは、その順序に意味があることを文脈で示す
- リストの先頭にイントロ文を置き、リストが何を列挙しているかが明確になるようにする

<!-- design-doc:end -->
