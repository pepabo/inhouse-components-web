# Inhouse Grid

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/grid

# or

$ yarn add @pepabo-inhouse/grid
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Grid コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/grid/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/grid.mdx`

Grid（グリッド）は、コンテンツを行と列に分割してレイアウトするためのコンポーネントです。Row（行）と Column（列）、そして Column 間の Gap によって、一貫したリズムのレイアウトを組み立てられます。

### 1. 概要 (Overview)

#### 説明

Grid は、Row（行）の中に Column（列）を並べることで、コンテンツを格子状にレイアウトします。Column の分割数を組み合わせることで、柔軟なレイアウトを構成できます。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-grid-row--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/grid)

### 2. 構成要素 (Anatomy)

![](https://design.pepabo.com/images/inhouse/components/grid/dictionary.png)

#### A. Row

グリッドレイアウトの行にあたる要素で、Column の集合が Row です。垂直方向にスタッキングします。

必須/任意: 必須

#### B. Column

グリッドレイアウトの列にあたる要素で、水平方向に並びます。デフォルトの Column の幅は、Row の幅から Gap を引いた残りを 12 分割したサイズです。

ソースコード上では、 `col` と省略して表記します。複数形は `cols` です。

必須/任意: 必須

#### C. Gap

Column と Column の間隔です。Row の両端には Gap はありません。

必須/任意: 任意

### 3. 使い分け (Usage)

#### いつ使うか

- コンテンツを行と列の格子状にレイアウトしたいとき
- 画面幅に応じて列数や列幅を変えたいとき

#### いつ使わないか

- 最大幅と左右マージンを制御したいだけの場合は [Container](https://design.pepabo.com/inhouse/components/container/) を使用する
- リストや表など、意味を持つ構造には Grid ではなく対応するコンポーネント（List、Table など）を使用する

#### 類似コンポーネントとの違い

- **[Container](https://design.pepabo.com/inhouse/components/container/)**: コンテンツの最大幅と左右マージンを制御する。Grid を Container の中に置いて併用することが多い。

### 4. バリエーション (Variants)

#### Column のサイズ調整

Column は 12 分割を基準に、1 つの Column が占める分割数を指定できます。複数の分割数を組み合わせることで、さまざまな比率のレイアウトを構成できます。

### 5. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- Grid はレイアウトのための仕組みであり、視覚的な並びと DOM の読み上げ順が食い違わないようにする
- 列の並べ替えを視覚的に行う場合も、内容の論理的な順序が崩れないようにマークアップする

<!-- design-doc:end -->
