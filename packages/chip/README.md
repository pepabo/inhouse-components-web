# Inhouse Chip

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/chip

# or

$ yarn add @pepabo-inhouse/chip
```

<!-- design-doc:start (scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> Chip コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは scripts/sync_design_docs.mjs により生成されています。直接編集しないでください。

Chip は、ラベルのような見た目でユーザーのインタラクションを受け付けるコンポーネントです。

### 1. 概要 (Overview)

#### 説明

コンテンツなど流動性の高いものに対するアクションを表現します。静的な [Sticker](../sticker/README.md) に対して、Chip はインタラクティブなコンポーネントという位置付けです。押せる感・手元感を強調するため、Sticker よりも丸い形状をしています。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-chip--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/chip)

### 2. 構成要素 (Anatomy)

対象を簡潔に言い表すラベルテキストを、角の丸いコンテナで囲んで構成します。テキストのサイズや余白は Size をもとに、Flavor で指定した Typography の設定から自動的に算出されます。

### 3. 使い分け (Usage)

#### いつ使うか

- カテゴリーやタグによる絞り込み、検索条件の表示・解除、入力値の候補の提示など、コンテンツに応じて動的に変化する選択肢やアクションを提示するとき

#### いつ使わないか

- インタラクションを持たない付加的な情報の表示には [Sticker](../sticker/README.md) を使用する
- 送信や削除など、画面に対して固定的な主要アクションには [Button](../button/README.md) を使用する

#### 類似コンポーネントとの違い

- **[Sticker](../sticker/README.md)**: オブジェクトに対する付加的な情報を表示する静的なコンポーネント。区別のため Sticker は矩形寄りの角丸、Chip はより丸い形状とする。
- **[Button](../button/README.md)**: 画面に対して固定的なアクションのトリガー。Chip はコンテンツなど流動性の高いものに対するアクションに用いる。

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
      <th>Informative</th>
      <td><code>.-color-informative</code></td>
    </tr>
    <tr>
      <th>Neutral*</th>
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
  <button class="in-chip -color-informative">
    <span class="_body">Informative</span>
  </button>
  <button class="in-chip -color-neutral">
    <span class="_body">Neutral</span>
  </button>
  <button class="in-chip -color-positive">
    <span class="_body">Positive</span>
  </button>
  <button class="in-chip -color-notice">
    <span class="_body">Notice</span>
  </button>
  <button class="in-chip -color-negative">
    <span class="_body">Negative</span>
  </button>
  <button class="in-chip -color-attention">
    <span class="_body">Attention</span>
  </button>
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
  <button class="in-chip -size-xs">
    <span class="_body">XS</span>
  </button>
  <button class="in-chip -size-s">
    <span class="_body">S</span>
  </button>
  <button class="in-chip -size-m">
    <span class="_body">M</span>
  </button>
  <button class="in-chip -size-l">
    <span class="_body">L</span>
  </button>
  <button class="in-chip -size-xl">
    <span class="_body">XL</span>
  </button>
</div>
```

#### Skeleton

コンテンツの読み込み中は、Chip と同じ形状の [Skeleton](../skeleton/README.md) を表示できます。

### 5. ステート (States)

#### Enabled

特に何もアクションしていないデフォルトの状態です。

```html
<button class="in-chip">
  <span class="_body">ラベル</span>
</button>
```

#### Hover

Overlay Color を重ねて選択しようとしていることを示します。

```html
<button class="in-chip --hover">
  <span class="_body">ラベル</span>
</button>
```

#### Active

押下されている状態を示します。

```html
<button class="in-chip --active">
  <span class="_body">ラベル</span>
</button>
```

#### Focused

フォーカスされていることを示します。

```html
<button class="in-chip --focused">
  <span class="_body">ラベル</span>
</button>
```

#### Disabled

透明度を上げて、インタラクションが不可能なことを示します。

```html
<button class="in-chip --disabled" disabled>
  <span class="_body">ラベル</span>
</button>
```

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- 役割に応じて `<button>` や `<a>` など適切なインタラクティブ要素でマークアップし、見た目だけでボタンやリンクを表現しない
- 絞り込みなどで選択状態を持つ場合は、`aria-pressed` などで選択状態を支援技術に伝え、色だけで選択状態を表現しない
- 十分なタップターゲットを確保する

### 7. ライティング (Writing)

- ラベルは対象のカテゴリーや条件を簡潔に言い表す短い名詞にする
- 同じグループ内の Chip はラベルの粒度や文体を揃える

<!-- design-doc:end -->
