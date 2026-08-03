# Inhouse Snackbar

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/snackbar

# or

$ yarn add @pepabo-inhouse/snackbar
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Snackbar コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/snackbar/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/snackbar.mdx`

Snackbar は、システムが実行した結果をユーザーに一時的にフィードバックするコンポーネントです。画面の下部に短時間表示され、一定時間で自動的に消えることで、比較的重要度の低い内容であることを示しつつフィードバックを伝えます。

### 1. 概要 (Overview)

#### 説明

Snackbar は、操作結果が GUI 上に現れにくい場面で、簡素な内容をユーザーに知覚させたいときに用います。1 行のテキストと、必要に応じて 1 つまでのアクショントリガーを内包できます。

一定時間で自動的に消えるため、エラーのような揮発性の低いフィードバックには使いません。エラーや継続的に注意を引きたい情報には Callout など他のコンポーネントを検討します。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-snackbar--neutral)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/snackbar)

### 2. 構成要素 (Anatomy)

#### Leading

通知の意味を視覚的に補強するアイコンを配置する要素です。

必須/任意: 任意

#### Body

ユーザーに伝えたい 1 行のフィードバックテキストです。

必須/任意: 必須

#### Trailing

操作を取り消すなど、フィードバックに紐づくアクションを 1 つだけ配置できます。

必須/任意: 任意

```html
<div
  class='in-snackbar -color-neutral --active -inline'
  aria-live="polite"
>
  <span class="in-icon" data-icon="check" />
  <span>アイテム1を削除しました</span>
  <div class="_trailing">
    <button class="in-button -size-s -appearance-transparent">
      <span class="_body">もとに戻す</span>
    </button>
  </div>
</div>
```

### 3. 使い分け (Usage)

#### いつ使うか

- 操作結果が GUI 上に直接現れず、システム側に隠蔽されているとき
- 詳しい読解を必要としない、簡素な内容のフィードバックを返したいとき
- フィードバックに紐づく軽い取り消し操作などを提示したいとき（例: 「もとに戻す」）

#### いつ使わないか

- エラーのように、ユーザーが認識し続ける必要のあるフィードバック → Callout を使う
- ユーザーの操作結果がそのままオブジェクトの変化として現れる場合（フィードバックを別立てする必要がない）
- 長い文章で説明が必要な情報伝達

#### 類似コンポーネントとの違い

- **[Callout](https://design.pepabo.com/inhouse/components/callout/)**: 継続的に表示する情報伝達に使う。Snackbar は一時的なフィードバックに使う。

### 4. バリエーション (Variants)

#### Color

色（状態）を指定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Neutral*</th>
      <td><code>.-color-neutral</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Positive</th>
      <td><code>.-color-positive</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Negative</th>
      <td><code>.-color-negative</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Notice</th>
      <td><code>.-color-notice</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div
  class='in-snackbar -color-neutral --active -inline'
  aria-live="polite"
>
  <span class="in-icon" data-icon="check" />
  <span>Neutral</span>
  <div class='_trailing'>
    <button class="in-button -size-s -appearance-transparent">
      <span class="_body">Action</span>
    </button>
  </div>
</div>
<br />
<br />
<div
  class='in-snackbar -color-positive --active -inline'
  aria-live="polite"
>
  <span class="in-icon" data-icon="check" />
  <span>Positive</span>
  <div class='_trailing'>
    <button class="in-button -size-s -appearance-transparent">
      <span class="_body">Action</span>
    </button>
  </div>
</div>
<br />
<br />
<div
  class='in-snackbar -color-negative --active -inline'
  aria-live="polite"
>
  <span class="in-icon" data-icon="check" />
  <span>Negative</span>
  <div class='_trailing'>
    <button class="in-button -size-s -appearance-transparent">
      <span class="_body">Action</span>
    </button>
  </div>
</div>
<br />
<br />
<div
  class='in-snackbar -color-notice --active -inline'
  aria-live="polite"
>
  <span class="in-icon" data-icon="check" />
  <span>Notice</span>
  <div class='_trailing'>
    <button class="in-button -size-s -appearance-transparent">
      <span class="_body">Action</span>
    </button>
  </div>
</div>
```

推奨される選び方の判断基準:

- **Neutral**: 基本のフィードバック。中立的な操作結果に使う。
- **Positive**: 操作の成功を伝えたいときに使う。
- **Negative**: 操作の失敗や、ユーザーに不利益が生じる可能性のある結果に使う（ただし揮発しても許容できる場合に限る）。
- **Notice**: ユーザーが認識しておくべき注意喚起に使う。

#### Inline

通常はブロック要素として表示しますが、コンテンツの中に inline 要素として配置することもできます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Inline</th>
      <td><code>.-inline</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div
  class='in-snackbar -color-neutral --active -inline'
  aria-live="polite"
>
  <span class="in-icon" data-icon="check" />
  <span>Inline</span>
</div>
<br />
<br />
<div
  class='in-snackbar -color-neutral --active'
  aria-live="polite"
>
  <span class="in-icon" data-icon="check" />
  <span>Block (default)</span>
</div>
```

#### 実装

##### Mixin-based

###### HTML

```html
<div
  class='snackbar-component'
  aria-live="polite"
>
  <span class="icon-component" data-icon="check" />
  <span>アイテム1を削除しました</span>
  <div class="_trailing">
    <button class="button-component">
      <span class="_body">もとに戻す</span>
    </button>
  </div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.snackbar-component {
  @include inhouse.snackbar-style(
    $options: (
      color: positive,
      size: l,
    )
  );
}
```

##### Class-based

###### HTML

```html
<div
  class='in-snackbar -color-neutral --active -inline'
  aria-live="polite"
>
  <span class="in-icon" data-icon="check" />
  <span>アイテム1を削除しました</span>
  <div class="_trailing">
    <button class="in-button -size-s -appearance-transparent">
      <span class="_body">もとに戻す</span>
    </button>
  </div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.snackbar-export;
```

### 5. ステート (States)

#### Active

Snackbar の表示状態です。`.--active` を付与することで画面に表示されます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Active</th>
      <td><code>.--active</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Inactive

`.--active` が付与されていない非表示状態です。Snackbar は一定時間で自動的に Inactive に遷移します。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- ルート要素に `aria-live="polite"` を設定し、スクリーンリーダーで表示時に内容が読み上げられるようにする
- アクションボタンを置く場合、Snackbar の表示時間内に押せるだけの時間（最低 5 秒以上）を確保するか、ホバー／フォーカス中は自動消去しないようにする
- 色だけで情報を伝えない。アイコンとテキストの両方で意味を伝える
- 重要度の高いエラーには Snackbar を使わず、Callout など揮発性の低いコンポーネントを使う

### 7. ライティング (Writing)

- 1 行で完結する内容にする
- 「何が起きたか」を過去形・受動形で簡潔に伝える（例: 「アイテム 1 を削除しました」）
- アクションボタンのラベルは、ユーザーが何を取り消す／実行するかが分かる動詞にする（例: 「もとに戻す」）
- 「成功しました」だけでなく、何に対する成功かが分かる文にする

<!-- design-doc:end -->
