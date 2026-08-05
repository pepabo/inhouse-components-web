# Inhouse Sticker

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/sticker

# or

$ yarn add @pepabo-inhouse/sticker
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Sticker コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/sticker/) からの転載です。
> 原本: https://design.pepabo.com/inhouse/components/sticker/

Sticker は、オブジェクト（メインの情報）に対する付加的な情報を表示するコンポーネントです。

### 1. 概要 (Overview)

#### 説明

ステータス、おすすめ、カテゴライズ、ハッシュタグなど、オブジェクトに対する付加的な情報を表示します。インタラクティブな [Chip](https://design.pepabo.com/inhouse/components/chip/) に対して、静的な Sticker という位置付けです。Chip と区別するため、矩形寄りの角丸としています。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-sticker--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/sticker)

### 2. 構成要素 (Anatomy)

付加情報を言い表すラベルテキストを、角丸のコンテナで囲んで構成します。付加情報には基本的に Value が入り、Key は入りません。表示領域への最適化のため、チェックマークなどアイコンのみで表現する柔軟性を持たせても構いません。

### 3. 使い分け (Usage)

#### いつ使うか

- 公開状態などのステータスを表示するとき
- NEW や SALE のような強調的な情報を表示するとき
- カテゴリーやハッシュタグなど、オブジェクトを分類する付加情報を表示するとき

#### いつ使わないか

- 絞り込みや解除などのインタラクションを受け付ける場合は [Chip](https://design.pepabo.com/inhouse/components/chip/) を使用する
- Key と Value のペアで情報を並べる場合は [Description List](https://design.pepabo.com/inhouse/components/description-list/) を使用する

#### 類似コンポーネントとの違い

- **[Chip](https://design.pepabo.com/inhouse/components/chip/)**: ラベルのような見た目でインタラクションを受け付けるコンポーネント。押せる感の強調のため丸く、静的な Sticker は区別のため矩形寄りの角丸とする。

### 4. バリエーション (Variants)

#### Color

色を決定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Informative*</th>
      <td><code>.-color-informative</code></td>
    </tr>
    <tr>
      <th>Neutral</th>
      <td><code>.-color-neutral</code></td>
    </tr>
    <tr>
      <th>Positive</th>
      <td><code>.-color-positive</code></td>
    </tr>
    <tr>
      <th>Notice</th>
      <td><code>.-color-notice</code></td>
    </tr>
    <tr>
      <th>Negative</th>
      <td><code>.-color-negative</code></td>
    </tr>
    <tr>
      <th>Attention</th>
      <td><code>.-color-attention</code></td>
    </tr>
  </tbody>
</table>

```html
<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
  <span class="in-sticker -color-informative">
    <span class="_body">Informative</span>
  </span>
  <span class="in-sticker -color-neutral">
    <span class="_body">Neutral</span>
  </span>
  <span class="in-sticker -color-positive">
    <span class="_body">Positive</span>
  </span>
  <span class="in-sticker -color-notice">
    <span class="_body">Notice</span>
  </span>
  <span class="in-sticker -color-negative">
    <span class="_body">Negative</span>
  </span>
  <span class="in-sticker -color-attention">
    <span class="_body">Attention</span>
  </span>
</div>
```

#### Appearance

外観を決定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Flat*</th>
      <td><code>.-appearance-flat</code></td>
    </tr>
    <tr>
      <th>Tinted</th>
      <td><code>.-appearance-tinted</code></td>
    </tr>
    <tr>
      <th>Outlined</th>
      <td><code>.-appearance-outlined</code></td>
    </tr>
    <tr>
      <th>Transparent</th>
      <td><code>.-appearance-transparent</code></td>
    </tr>
  </tbody>
</table>

```html
<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
  <span class="in-sticker -appearance-flat">
    <span class="_body">Flat</span>
  </span>
  <span class="in-sticker -appearance-tinted">
    <span class="_body">Tinted</span>
  </span>
  <span class="in-sticker -appearance-outlined">
    <span class="_body">Outlined</span>
  </span>
  <span class="in-sticker -appearance-transparent">
    <span class="_body">Transparent</span>
  </span>
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
      <th>XS</th>
      <td><code>.-size-xs</code></td>
    </tr>
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
    <tr>
      <th>XL</th>
      <td><code>.-size-xl</code></td>
    </tr>
  </tbody>
</table>

```html
<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
  <span class="in-sticker -size-xs">
    <span class="_body">XS</span>
  </span>
  <span class="in-sticker -size-s">
    <span class="_body">S</span>
  </span>
  <span class="in-sticker -size-m">
    <span class="_body">M</span>
  </span>
  <span class="in-sticker -size-l">
    <span class="_body">L</span>
  </span>
  <span class="in-sticker -size-xl">
    <span class="_body">XL</span>
  </span>
</div>
```

#### Skeleton

コンテンツの読み込み中は、Sticker と同じ形状の [Skeleton](https://design.pepabo.com/inhouse/components/skeleton/) を表示できます。

### 5. ステート (States)

Sticker は静的なコンポーネントであり、インタラクションを起こさないため、固有のステートは持ちません。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- ステータスなどの意味を色だけで伝えず、ラベルテキストでも伝える
- アイコンのみで表現する場合は代替テキストを設定する

### 7. ライティング (Writing)

- ラベルには付加情報の Value（「公開」「下書き」など）を入れ、Key（「ステータス:」など）は入れない
- ラベルは表示領域を圧迫しない簡潔なテキストにする
- NEW や SALE のような強調的な情報は乱用せず、本当に強調すべき場合に限って用いる

<!-- design-doc:end -->
