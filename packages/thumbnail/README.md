# Inhouse Thumbnail

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/thumbnail

# or

$ yarn add @pepabo-inhouse/thumbnail
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Thumbnail コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/thumbnail/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/thumbnail.mdx`

Thumbnail は、対象のオブジェクトを画像を通して理解するのを助けるコンポーネントです。

### 1. 概要 (Overview)

#### 説明

Thumbnail は [Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/) や [Interactive Table](https://design.pepabo.com/inhouse/components/interactive-table/) において対象のオブジェクトを画像を通して理解するのを助け、明確なメッセージを伝えるのに役立ちます。

#### リンク

- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/thumbnail)

### 2. 構成要素 (Anatomy)

対象のオブジェクトを表す画像で構成されます。画像は領域いっぱいにトリミングされ、角には一定の丸みがつきます。コンテンツの読み込み中は、同じ形状の [Skeleton](https://design.pepabo.com/inhouse/components/skeleton/) を表示できます。

### 3. 使い分け (Usage)

#### いつ使うか

- 商品オブジェクトなど、画像をアイキャッチとしてオブジェクトを識別しやすくしたいとき

#### いつ使わないか

- 画像を円形にトリミングするのは顔を強調するのに効果的なので、ユーザーオブジェクトを扱う場合は [Avatar](https://design.pepabo.com/inhouse/components/avatar/) の使用を検討する。

#### 類似コンポーネントとの違い

- **[Avatar](https://design.pepabo.com/inhouse/components/avatar/)**: ユーザーオブジェクトを表す円形の画像コンポーネント。商品などそれ以外のオブジェクトには Thumbnail を使用する。

### 4. バリエーション (Variants)

#### Size

サイズを決定します。コンテキストや Thumbnail を含めるコンポーネントのサイズに応じて選択します。

<div style="max-width: 640px;">
  ![S・M・Lの3つのサイズのThumbnailを並べた比較](https://design.pepabo.com/images/inhouse/components/thumbnail/fv.png)
</div>

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

Thumbnail 単体でインタラクションを起こすことはできないため、固有のステートは持ちません。[Button](https://design.pepabo.com/inhouse/components/button/)、[Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/)、[Interactive Table](https://design.pepabo.com/inhouse/components/interactive-table/) などの Interactive なコンポーネントに内包し、それらのコンポーネントにインタラクションを起こさせるべきです。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- 画像には対象のオブジェクトが伝わる代替テキストを設定する。隣接するテキストと重複するなど装飾的な場合は空の代替テキスト（`alt=""`）にする

<!-- design-doc:end -->
