# Inhouse Callout

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/callout

# or

$ yarn add @pepabo-inhouse/callout
```

<!-- design-doc:start (自動生成。直接編集しないでください) -->

## デザインドキュメント (Design Documentation)

> Callout コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは自動生成されています。直接編集しないでください。

Callout は、ユーザーに対して重要かつ簡潔な情報を効果的に伝え、必要に応じて行動を促すためのコンポーネントです。アイコン、メッセージ、必要に応じてアクションや閉じるボタンを含む構造を持ち、色の使い分けによって伝える状態のニュアンスを変えられます。

### 1. 概要 (Overview)

#### 説明

Callout は、システムの状態やユーザーが取るべき行動など、ページ内で見落としてはいけない情報を、コンテンツの流れに溶け込ませながらも明確に伝えるために使います。

- 通知の意味を補強するアイコン
- 状況や促したい行動を述べる本文メッセージ
- 必要に応じて、追加のアクションや閉じる操作のボタン

から構成されます。Snackbar が一時的なフィードバックを担うのに対し、Callout は継続的に表示し続ける情報伝達を担います。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-callout--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/callout)

### 2. 構成要素 (Anatomy)

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/iframe.html?args=&id=components-callout--index&viewMode=story"
  style="width: 100%;border: none;height: 88px;"
></iframe>

#### Leading

通知の意味を視覚的に補強するアイコンを配置する要素です。Color に対応した意味のアイコンを使用します。

必須/任意: 必須

#### Body

ユーザーに伝えたい本文メッセージを配置する要素です。状況、原因、ユーザーが取るべき行動を簡潔に記述します。

必須/任意: 必須

#### Trailing

追加のアクションを促すボタンや、Callout 自体を閉じるためのボタンを配置する要素です。

必須/任意: 任意

### 3. 使い分け (Usage)

#### いつ使うか

- システムの状態やエラーをユーザーに明確に伝えるとき
- ユーザーに必要なアクションを促すとき

利用例：ログイン処理に問題が発生している際に、ログインできないというシステムの状態を伝え、問題が解決するまで待ってから再度ログインするよう促す。

```html
<div class='in-callout -color-notice -size-m'>
  <span class="_leading in-icon" />
  <div class="_body">現在ログインしづらい状況です。ログインに失敗する場合は、しばらく待ってから再度お試しください。</div>
</div>
```

#### いつ使わないか

- 広告やサービスからの情報表示など、ユーザーの対応が必須でないものは、誤解を招かないよう Callout での表示を避ける
- 一時的なフィードバック（実行結果の通知など、自動で消えても構わない内容）は Snackbar を使う

#### 類似コンポーネントとの違い

- **[Snackbar](../snackbar/README.md)**: 揮発性の高い、一時的なフィードバックを担う。Callout は継続的に表示する情報伝達を担う。

### 4. バリエーション (Variants)

#### Color

伝えたい状態に応じて色を指定できます。

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

推奨される選び方の判断基準:

- **Neutral**: 補足情報や案内など、中立的な内容を伝えるときに使う。
- **Positive**: 操作の成功や肯定的な状態を伝えるときに使う。
- **Negative**: エラーや、ユーザーに不利益が生じる可能性のある状態を伝えるときに使う。
- **Notice**: 注意喚起や、ユーザーが認識しておくべき重要な状態を伝えるときに使う。

#### Size

サイズを指定できます。

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

#### 実装

##### Mixin-based

###### HTML

```html
<div class="callout-component">
  <span class="_leading in-icon" />
  <div class="_body">現在ログインしづらい状況です。ログインに失敗する場合は、しばらく待ってから再度お試しください。</div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.callout-component {
  @include inhouse.callout-style(
    $options: (
      color: notice,
      size: m,
    )
  );
}
```

##### Class-based

###### HTML

```html
<div class="in-callout -color-notice -size-m">
  <span class="_leading in-icon" />
  <div class="_body">現在ログインしづらい状況です。ログインに失敗する場合は、しばらく待ってから再度お試しください。</div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.callout-export;
```

### 5. ステート (States)

Callout は表示・非表示の状態を持ちます。閉じる操作を提供する場合は、ユーザーが閉じたら Callout を DOM から除去するか、`hidden` 属性などで非表示にします。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- 通知の重要度に応じて `role="status"`（控えめな通知）または `role="alert"`（緊急の通知）を設定する
- 色だけで情報を伝えない。アイコンとテキストの両方で意味を伝える
- 閉じるボタンには `aria-label` でその機能を伝えるテキスト（例: 「閉じる」）を設定する
- アクションボタンを含む場合は、キーボードでフォーカス・操作できるようにする

### 7. ライティング (Writing)

- メッセージは「何が起きているか」「ユーザーが何をすべきか」を簡潔に書く
- ユーザーを責めるトーンを避ける（例:「あなたが間違えました」ではなく「入力内容に誤りがあります」）
- 重要度が高くないのに Negative や Notice の色を使ってユーザーを不必要に不安にさせない
- 長文になる場合は、要点を最初に置き、補足は後ろにまわす

<!-- design-doc:end -->
