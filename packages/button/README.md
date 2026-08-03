# Inhouse Button

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/button

# or

$ yarn add @pepabo-inhouse/button
```

### Mixins

#### `style($options: null)`

ボタンのスタイルを出力します。`$options` の指定の有無で出力される内容が変わります。

- `$options` を省略した場合は、デフォルトのスタイルに加えてすべてのmodifier（`-appearance-*`, `-color-*`, `-brightness-*`, `-shape-*`, `-size-*`, `-width-*`）のスタイルを出力します。`export` が出力する `.in-button` と同じ内容です。
- `$options` を明示的に指定した場合は、指定した値（未指定の属性はデフォルト値）のスタイルだけを出力し、modifierのスタイルは出力しません。mixinベース（エイリアシング）でスタイルを固定して使う場合は、こちらの使い方をすることで不要なCSSの出力を避けられます。

使用例は本 README 末尾の[デザインドキュメント内「実装」](#実装)を参照してください。

#### `skeleton-style($options: null)`

スケルトンボタンのスタイルを出力します。`style` と同様に、`$options` を省略した場合はすべてのmodifier（`-shape-*`, `-size-*`, `-width-*`）のスタイルを、明示的に指定した場合は指定した値（未指定の属性はデフォルト値）のスタイルだけを出力します。

#### `style-with-variants($variants: (), $default-style: ...)`

デフォルトのスタイルと、`$variants` で指定した属性・値の組み合わせをmodifierとして出力します。modifierとして利用したい値を絞りたい場合に使います。

```scss
@use '@pepabo-inhouse/button' as button;

.my-button {
  @include button.style-with-variants(
    $variants: (
      appearance: (flat, solid),
      color: (primary, neutral),
      size: (m, l)
    )
  );
}
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Button コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/button/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/button.mdx`

ボタンは、ユーザーが押すことで機能やアクションを発動するためのインタラクティブな UI 要素です。コンテキストに応じて Navigation（移動）、Confirmation（確認）、Execution（実行）、Cancellation（取消）、UI Operation（UI 操作）の5種類のロールを持ちます。

### 1. 概要 (Overview)

#### 説明

ボタンは使われ方やそのコンテキストに応じて、次の5種類のロールを持ちます。ボタンを使うときはそのボタンがどのロールを担うのかを意識します。

- **Navigation**: コンテンツの移動や表示
- **Confirmation**: ユーザーの意思表示や、内容を確認する画面への遷移
- **Execution**: データに変更が加わるような機能の実行（保存・登録・削除など）
- **Cancellation**: キャンセルや状態の解除といった消極的なアクション
- **UI Operation**: ダイアログを閉じるなど、UI の状態表示のみに変化を与え、データの状態には変更が発生しない操作

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-button--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/button)

### 2. 構成要素 (Anatomy)

![](https://design.pepabo.com/images/inhouse/components/button/dictionary.png)

#### A. Container

ボタンのかたちをつくる要素です。この要素の大きさが、ボタンをタップ/クリックできる範囲です。

必須/任意: 記載なし

#### B. Body

ボタンのインタラクションラベルです。そのボタンを押すことによって発動する機能、またはそのボタンを押すことによって得られる結果や、ボタンを押すことによって発生させたい本来のアクションを示します。インセンティブ/ベネフィットの提示はラベルでは行わず、必要であればボタンの外側で行います。

必須/任意: 記載なし

#### C. Leading, D. Trailing

ボタンの縁の要素です。インタラクションラベルの意味を伝わりやすくするために、情報を補完する機能を持ちます。原則的にLeadingにIconを配置しますが、画面の遷移を示す場合や、ページネーションでPrevとNextが対になっている場合など、文脈に応じてTrailingにIconを配置することもできます。

必須/任意: 任意

### 3. 使い分け (Usage)

#### いつ使うか

目的となるオブジェクトがあり、そのオブジェクトに対してユーザーが操作を行う場合（Navigation / Confirmation / Execution / Cancellation / UI Operation のいずれか）に使います。

#### いつ使わないか

操作する対象のオブジェクトが異なるアクションを並べる場合は使いません。

### 4. バリエーション (Variants)

#### Appearance

Buttonの見た目を指定できます。

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
      <td></td>
    </tr>
    <tr>
      <th>Outlined</th>
      <td><code>.-appearance-outlined</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Solid</th>
      <td><code>.-appearance-solid</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Transparent</th>
      <td><code>.-appearance-transparent</code></td>
      <td></td>
    </tr>
    <tr>
      <th>White</th>
      <td><code>.-appearance-white</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Hollow</th>
      <td><code>.-appearance-hollow</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div>
  <button class="in-button -appearance-flat">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -appearance-outlined">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -appearance-solid">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -appearance-transparent">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -appearance-white">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -appearance-hollow">
    <span class="_body">
      保存
    </span>
  </button>
</div>
```

推奨される選び方の判断基準:

- **Flat**: 基本のボタン。どのロールにも使える。
- **Outlined**: Primary（Flat / Solid）と組み合わせて Secondary 以下のオプションを提示するときに使う。重要度が低い場合や Cancellation のロールでは単独でも使える。
- **Solid**: 機能を発動する Execution / Confirmation のロールで使う。Flat と一緒に使わない。
- **Transparent**: テキストリンクと同等の外観で、サイズとクリッカブル領域は他のボタンと同等の控えめなボタン。Navigation / Cancellation のロールで使う。
- **White**: Polite トーンのコミュニケーションで、否定的または消極的なボタンとして Solid の代わりに使う。
- **Hollow**: 写真・イラスト・色面の上に乗せるときに使う。Navigation のロール。

#### Brightness

Appearanceの中でも背景色が透明なものはBrightness（環境の輝度）を指定できます。指定するとButtonを置く環境の輝度に応じた最適な見た目になります。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Light*</th>
      <td><code>.-brightness-light</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Dark</th>
      <td><code>.-brightness-dark</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

##### Light

```html
<div>
  <button class="in-button -appearance-transparent -brightness-light">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -appearance-hollow -brightness-light">
    <span class="_body">
      保存
    </span>
  </button>
</div>
```

##### Dark

```html
<div>
  <button class="in-button -appearance-transparent -brightness-dark">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -appearance-hollow -brightness-dark">
    <span class="_body">
      保存
    </span>
  </button>
</div>
```

推奨される選び方の判断基準: 記載なし

#### Color

ボタンの色は、意味に対応してSemantic colorの名前を指定することで配色します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
      <th>Pepper flavor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Neutral*</th>
      <td><code>.-color-neutral</code></td>
      <td>Pepper Gray (#767b85)</td>
    </tr>
    <tr>
      <th>Negative</th>
      <td><code>.-color-negative</code></td>
      <td>Pepper Red (#c25d5d)</td>
    </tr>
    <tr>
      <th>Interactive</th>
      <td><code>.-color-interactive</code></td>
      <td>Pepper Blue (#3e6f99)</td>
    </tr>
    <tr>
      <th>Favorite</th>
      <td><code>.-color-favorite</code></td>
      <td>Pepper Red (#c25d5d)</td>
    </tr>
  </tbody>
</table>

```html
<div>
  <button class="in-button -color-neutral">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -color-negative">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -color-interactive">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -color-favorite">
    <span class="_body">
      保存
    </span>
  </button>
</div>
```

推奨される選び方の判断基準:

- **Neutral**: 中立的な配色。クリッカブルであることが判断できる文脈（サイトナビゲーション、パンくず、定型的な操作エリアなど）で使う。
- **Negative**: 削除など破壊的なアクションに使う。
- **Interactive**: 基本のカラー。Navigation / Confirmation / Execution のロール全般で使える。
- **Favorite**: お気に入りなどブランド特有のアクションに使う。

#### Shape

形状を指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Square</th>
      <td><code>.-shape-square</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Circle</th>
      <td><code>.-shape-circle</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div>
  <button class="in-button -shape-square">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -shape-circle">
    <span class="_body">
      保存
    </span>
  </button>
</div>
```

推奨される選び方の判断基準: 記載なし

#### Size

どのくらいの大きさで表示するか指定できます。

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
      <td></td>
    </tr>
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
    <tr>
      <th>XL</th>
      <td><code>.-size-xl</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div style="text-align: left;">
  <button class="in-button -size-xs">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="text-align: left; margin-top: 0.5rem;">
  <button class="in-button -size-s">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="text-align: left; margin-top: 0.5rem;">
  <button class="in-button -size-m">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="text-align: left; margin-top: 0.5rem;">
  <button class="in-button -size-l">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="text-align: left; margin-top: 0.5rem;">
  <button class="in-button -size-xl">
    <span class="_body">
      保存
    </span>
  </button>
</div>
```

推奨される選び方の判断基準:

- 基本のサイズは **M**。
- **Hollow** は写真・イラストの上で使う特性上、XS / S は用意していない。
- **Solid** は小さくてもボタンと認識できるよう立体感を持たせているため、L / XL は用意していない。
- **Transparent** は目立たせない用途を想定しているため、L / XL は用意していない。

#### Width

親要素の幅に対してどのくらいの幅でContainerを表示するかを指定できます。

このModifierは、CardやDialogコンポーネントなど、限られた幅を持つ要素のなかにアクションボタンとしてButtonを配置することを想定して用意されました。HalfやThirdは、ブラウザのウィンドウの幅によっては想定より小さく表示されてしまう場合があります。そこで、まずFullでレイアウトを試してみて、Fullでは表示する領域が広すぎる場合に限り、HalfまたはThirdを選択することをおすすめします。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Auto*</th>
      <td><code>.-width-auto</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Full</th>
      <td><code>.-width-full</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Half</th>
      <td><code>.-width-half</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Third</th>
      <td><code>.-width-third</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div style="text-align: left;">
  <button class="in-button -width-auto">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="text-align: left; margin-top: 0.5rem;">
  <button class="in-button -width-full">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="text-align: left; margin-top: 0.5rem;">
  <button class="in-button -width-half">
    <span class="_body">
      保存
    </span>
  </button>
</div>
<div style="text-align: left; margin-top: 0.5rem;">
  <button class="in-button -width-third">
    <span class="_body">
      保存
    </span>
  </button>
</div>
```

推奨される選び方の判断基準:

- 基本は **Auto**（ラベルの文字量に合わせた成り行きの幅）。可能であれば 16px の倍数サイズとする。同列に並ぶボタンの大きさを揃えたい場合は固定幅を使う。
- **Full** は M サイズ以上のボタンで、カラムなどのレイアウト領域に対して 100% にしたいときに使う。
- L サイズのボタンは全幅レイアウトコンテナで 100% にできるが、スクリーンサイズ M 以上では最大でも 50% の幅（Half）になる。
- Inhouse では Auto / Full / Half / Third の4種類を用意している。

#### Leading

Bodyの前に要素を挿入することができます。Iconが入ったLeadingのみの場合はIconが大きくなります。デバイスサイズに応じて切り替えることができます。

```html
<div>
  <button class="in-button" aria-label="閉じる">
    <span class="_leading">
      <span class="in-icon" data-icon="cross"></span>
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -appearance-outlined -color-favorite">
    <span class="_leading">
      <span class="in-icon" data-icon="heart"></span>
    </span>
    <span class="_body">
      お気に入り
    </span>
  </button>
</div>
<div style="margin-top: 0.5rem;">
  <button class="in-button -shape-circle -appearance-transparent -size-l" aria-label="サンプルのサムネイル" >
    <span class="_leading">
      <span class="in-avatar -size-m">
        <img src="https://picsum.photos/id/177/200/300" alt="sample thumbnail" />
      </span>
    </span>
  </button>
</div>
```

#### Trailing

Bodyの後に要素を挿入することができます。

```html
<button class="in-button -appearance-transparent -color-interactive">
  <span class="_body">
    すべての記事
  </span>
  <span class="_trailing">
    <span class="in-icon" data-icon="chevron_right"></span>
  </span>
</button>
```

#### 実装

##### Mixin-based

###### HTML

```html
<button class="button-submit">
  <span class="_body">保存</span>
</button>

<button class="button-favorite">
  <span class="_leading">
    <span class="in-icon" data-icon="heart"></span>
  </span>
  <span class="_body">お気に入り</span>
</button>

<button class="button-nav-next">
  <span class="_body">すべての記事</span>
  <span class="_trailing">
    <span class="in-icon" data-icon="chevron_right"></span>
  </span>
</button>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.button-submit {
  @include inhouse.button-style(
    $options: (
      appearance: flat,
      color: neutral,
      shape: circle,
      size: m,
      width: auto,
    )
  );
}

.button-favorite {
  @include inhouse.button-style(
    $options: (
      appearance: flat,
      color: favorite,
      shape: circle,
    )
  );
}

.button-nav-next {
  @include inhouse.button-style(
    $options: (
      appearance: transparent,
      brightness: light,
      color: interactive,
    )
  );
}
```

##### Class-based

###### HTML

```html
<button class="in-button -appearance-flat -color-neutral -shape-square -size-m -width-auto">
  <span class="_body">保存</span>
</button>

<button class="in-button -appearance-flat -color-favorite -shape-circle">
  <span class="_leading">
    <span class="in-icon" data-icon="heart"></span>
  </span>
  <span class="_body">お気に入り</span>
</button>

<button class="in-button -appearance-transparent -color-interactive">
  <span class="_body">すべての記事</span>
  <span class="_trailing">
    <span class="in-icon" data-icon="chevron_right"></span>
  </span>
</button>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.button-export;
```

### 5. ステート (States)

#### Default

```html
<button class="in-button">
  <span class="_body">
    保存
  </span>
</button>
```

#### Hover

マウスカーソルを重ねたときの表示。

#### Focus

キーボード操作などでフォーカスを得たときの表示。

#### Active

クリック／タップで押下しているときの表示。

#### Disabled

`disabled` 属性が設定された無効状態の表示。

```html
<button class="in-button" disabled>
  <span class="_body">
    保存
  </span>
</button>
```

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- `<div>` や `<span>` ではなく、用途に応じて `<button>` 要素または `<a>` 要素でマークアップする
- アイコンのみで構成されるボタンには、`aria-label` でボタンの機能を伝えるテキストを設定する
- ホバー / フォーカス / 押下（active）の各ステートが視覚的に区別できる
- フォーカスリングを消したり、アウトラインを 0 幅にしたりしない

### 7. ライティング (Writing)

- ラベルは、ボタンを押すことで発動させたい機能・アクションを示す
- ユーザー視点の行為を表す動詞を用いる。慣用的なラベル（保存、削除、ログインなど）はそのまま採用する
- 熟語＋「する」となるラベルでは「する」を省く（例: 「ログインする」→「ログイン」、「確認する」→「確認」）
- UI 操作自体に自己言及するラベルを使わない（例: ボタンに「押す」、ダイアログを閉じるボタンに「閉じる」、選択 UI に「選択する」）
- インセンティブやベネフィットの提示はラベルでは行わず、ボタンの外側で行う（例: ラベルを「無料新規登録」ではなく「新規登録」とし、無料であることはボタンの外で伝える）
- ラベルを2行にしない（短く、明確に）
- 即時に処理が完了せず追加入力や手続きが必要な Execution ボタンでは、ラベル末尾にエリプシス（…）を付ける。ただし CTA や主要ゴールへのクリティカルパス上のボタンには付けない

<!-- design-doc:end -->
