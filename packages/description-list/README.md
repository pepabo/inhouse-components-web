# Inhouse Description List

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/description-list

# or

$ yarn add @pepabo-inhouse/description-list
```

<!-- design-doc:start (design.pepabo.com からの転載。scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Description List コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/description-list/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/description-list.mdx`

Description List は、Key と Value のペアの集合を説明リストとして表示するコンポーネントです。用語集の作成や、オブジェクトのメタデータ表示などに用います。

### 1. 概要 (Overview)

#### 説明

![](https://design.pepabo.com/images/inhouse/components/description-list/dictionary.png)

Description List は、Term（Key）と Description（Value）のペアを並べて表示します。Cell の表現を継承しており、Density / Size などのモディファイアによって密度や大きさを調整できます。

ペアの並べ方は、デスクトップサイズで横並びにする Tabular 表示と、縦並び（デフォルト）の表示を切り替えられます。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-descriptionlist--default-description-list)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/description-list)

### 2. 構成要素 (Anatomy)

Description List は HTML の `<dl>` / `<dt>` / `<dd>` を用いてマークアップします。表現は Cell を継承しています。詳細は[Cell](./cell)を参照してください。

#### Term

Key にあたる要素で、`<dt>` を用います。

必須/任意: 必須

#### Description

Value にあたる要素で、`<dd>` を用います。1 つの Term に対して複数の Description を持つこともできます。

必須/任意: 必須

### 3. 使い分け (Usage)

#### いつ使うか

- 用語集を作成するとき
- オブジェクトのメタデータ（Key と Value のペアのリスト）を表示するとき
- ラベルと値のペアを構造的に並べたいとき

#### いつ使わないか

##### List を使ったほうがよい場合

Key と Value のペアではなく、単純なリストを表示する場合は [List](./list) の使用を検討します。

#### 類似コンポーネントとの違い

- **[List](./list)**: 順序つき / 順序なしの単純なリストを表示する場合に使う。
- **[Table](./table)**: 3 列以上の構造化されたデータを表示する場合に使う。

### 4. バリエーション (Variants)

#### Bullet

黒丸をつけるかどうかを決定します。Tabular と併用はできません。

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

![](https://design.pepabo.com/images/inhouse/components/description-list/bullet.png)

#### Density

密度を決定します。

<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Dense</th>
    </tr>
    <tr>
      <th>Normal*</th>
    </tr>
    <tr>
      <th>Comfort</th>
    </tr>
  </tbody>
</table>

![](https://design.pepabo.com/images/inhouse/components/description-list/density.png)

#### Size

サイズを決定します。

<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>S</th>
    </tr>
    <tr>
      <th>M*</th>
    </tr>
    <tr>
      <th>L</th>
    </tr>
  </tbody>
</table>

![](https://design.pepabo.com/images/inhouse/components/description-list/size.png)

#### Tabular

デスクトップサイズのときに Term と Description を横並びにするかを決定します。Bullet と併用はできません。

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

![](https://design.pepabo.com/images/inhouse/components/description-list/tabular.png)

### 5. ステート (States)

Description List 自体はインタラクションを持たないため、固有のステートは持ちません。内部にテキストリンクなどを内包する場合は、そのリンクのステートに従います。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- `<dl>` / `<dt>` / `<dd>` を意味通りに使い、見た目だけで横並び・縦並びを実現するために他のタグに置き換えない
- Tabular 表示でも、Term と Description の対応関係がスクリーンリーダーで読み上げ可能になるよう、構造を崩さない
- Term と Description のコントラスト比を確保し、Term が周囲のテキストと混在しないようにする

### 7. ライティング (Writing)

- Term は短く、対応関係が明確になる単位にする（例: 「ステータス」「公開日」「金額」）
- 1 つの Term に対する Description が複数ある場合は、関連性が高いものをまとめる
- Term 同士の粒度・文体を揃える（体言止め同士など）

<!-- design-doc:end -->
