# Inhouse Thumbnail

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/thumbnail

# or

$ yarn add @pepabo-inhouse/thumbnail
```

<!-- design-doc:start (scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> Thumbnail コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは scripts/sync_design_docs.mjs により生成されています。直接編集しないでください。

Thumbnail は、対象のオブジェクトを画像を通して理解するのを助けるコンポーネントです。

### 1. 概要 (Overview)

#### 説明

Thumbnail は [Interactive List](../interactive-list/README.md) や [Interactive Table](../interactive-table/README.md) において対象のオブジェクトを画像を通して理解するのを助け、明確なメッセージを伝えるのに役立ちます。

#### リンク

- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/thumbnail)

### 2. 構成要素 (Anatomy)

対象のオブジェクトを表す画像で構成されます。画像は領域いっぱいにトリミングされ、角には一定の丸みがつきます。コンテンツの読み込み中は、同じ形状の [Skeleton](../skeleton/README.md) を表示できます。

### 3. 使い分け (Usage)

#### いつ使うか

- 商品オブジェクトなど、画像をアイキャッチとしてオブジェクトを識別しやすくしたいとき

#### いつ使わないか

- 画像を円形にトリミングするのは顔を強調するのに効果的なので、ユーザーオブジェクトを扱う場合は [Avatar](../avatar/README.md) の使用を検討する。

#### 類似コンポーネントとの違い

- **[Avatar](../avatar/README.md)**: ユーザーオブジェクトを表す円形の画像コンポーネント。商品などそれ以外のオブジェクトには Thumbnail を使用する。

### 4. バリエーション (Variants)

#### Size

サイズを決定します。コンテキストや Thumbnail を含めるコンポーネントのサイズに応じて選択します。

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

Thumbnail 単体でインタラクションを起こすことはできないため、固有のステートは持ちません。[Button](../button/README.md)、[Interactive List](../interactive-list/README.md)、[Interactive Table](../interactive-table/README.md) などの Interactive なコンポーネントに内包し、それらのコンポーネントにインタラクションを起こさせるべきです。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- 画像には対象のオブジェクトが伝わる代替テキストを設定する。隣接するテキストと重複するなど装飾的な場合は空の代替テキスト（`alt=""`）にする

<!-- design-doc:end -->
