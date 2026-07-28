# Inhouse Cell

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/cell

# or

$ yarn add @pepabo-inhouse/cell
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Cell コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/cell/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/cell.mdx`

Cell は、List、Description List、Table、Interactive List、Interactive Table などのプロトタイプ（基底）として機能するコンポーネントです。

### 1. 概要 (Overview)

#### 説明

Cell は、Density と Size の組み合わせで単体の大きさが決定します。この Cell を継承したコンポーネントを 1 次元的、または 2 次元的に複数並べることで、タイポグラフィーベースの一貫性のある美しいコンポーネントが形作られます。

#### リンク

- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/cell)

### 2. 構成要素 (Anatomy)

Cell の内部にはテキストはもちろん、Icon、Checkbox、Radio、Thumbnail、Avatar など様々なコンポーネントを含めることができます。テキストのサイズや上下の余白は Density および Size の組み合わせをもとに、Flavor で指定した Typography の設定から自動的に算出されます。

また、Cell 自体は左右の余白を持ちません。左右の余白はコンポーネントのコンテキストに応じて変化するため、継承先のコンポーネント側で実装します。

### 3. 使い分け (Usage)

#### いつ使うか

List や Table のように、Size や Density が一貫したボックスが 1 次元的、または 2 次元的に複数並ぶ場合は、Cell を継承してコンポーネントを設計することを検討します。

#### いつ使わないか

- Cell はあくまで継承元のプロトタイプであるため、単体で UI として完結する要素には使わない
- バーティカルリズムが揃わなくなるため、Size やDensity が異なるCell を同じグループ内に混在させることはできない

#### 類似コンポーネントとの違い

Cell は次のコンポーネントのプロトタイプとして継承されます。

- **[List](https://design.pepabo.com/inhouse/components/list/)** / **[Description List](https://design.pepabo.com/inhouse/components/description-list/)** / **[Table](https://design.pepabo.com/inhouse/components/table/)**: 1 次元・2 次元の静的なリストや表。
- **[Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/)** / **[Interactive Table](https://design.pepabo.com/inhouse/components/interactive-table/)**: ユーザーと Interactive にやりとりするリストや表。

### 4. バリエーション (Variants)

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

### 5. ステート (States)

Cell を継承したコンポーネントで Interactive なものはインタラクションを起こしますが、Cell 自体はインタラクションを起こさないため、固有のステートは持ちません。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- Cell に含めるテキストのコントラスト比を確保する
- 継承先のコンポーネントの意味に応じて適切な HTML 要素（リストなら `<li>` など）でマークアップし、見た目だけで構造を表現しない

<!-- design-doc:end -->
