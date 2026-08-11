# Inhouse Validation Message

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/validation-message

# or

$ yarn add @pepabo-inhouse/validation-message
```

<!-- design-doc:start (自動生成。直接編集しないでください) -->

## デザインドキュメント (Design Documentation)

> Validation Message コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは自動生成されています。直接編集しないでください。

Validation Message は、フォーム入力の検証結果をユーザーに伝えるテキストコンポーネントです。

### 1. 概要 (Overview)

#### 説明

[Textfield](../textfield/README.md) などの入力コントロールの下に配置し、入力が受け入れられない場合のエラーや、入力が有効であることなどの検証結果を伝えます。テキスト入力が受け入れられない場合、エラーメッセージはそれを修正する方法の指示を表示します。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-validation-message--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/validation-message)

### 2. 構成要素 (Anatomy)

検証結果を伝えるメッセージテキストで構成されます。対象の入力コントロールの下に配置します。

### 3. 使い分け (Usage)

#### いつ使うか

- 入力内容がバリデーションを通らなかったときに、エラーの内容と修正する方法を伝えるとき
- 入力内容が有効であることや、エラーではないものの注意があることを伝えるとき

#### いつ使わないか

- 使用方法など入力フィールドに関する永続的なガイダンスは、検証結果とぶつかって消えてしまわないよう Helper text として Label の直下に配置する（Form を参照）
- フォーム全体や画面レベルの通知には [Callout](../callout/README.md) や [Snackbar](../snackbar/README.md) を使用する

### 4. バリエーション (Variants)

#### Color

検証結果の意味に応じて色を決定します。

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

入力したテキストが有効な状態には Positive、無効な状態・エラーには Negative、無効やエラーではないものの注意がある場合には Notice を使用します。

```html
<div><span class="in-validation-message -color-neutral">10 文字以内で入力してください</span></div>
<div style="margin-top: 0.5rem;"><span class="in-validation-message -color-positive">この店舗名は使用できます</span></div>
<div style="margin-top: 0.5rem;"><span class="in-validation-message -color-notice">全角文字は自動的に半角へ変換されます</span></div>
<div style="margin-top: 0.5rem;"><span class="in-validation-message -color-negative">必須項目です。店舗名を入力してください</span></div>
```

### 5. ステート (States)

Validation Message 自体はインタラクションを起こさないため、固有のステートは持ちません。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- `aria-describedby` などで対象の入力コントロールとメッセージを関連付け、支援技術にも検証結果が伝わるようにする
- エラーであることを色だけで伝えず、メッセージのテキストでも伝える

### 7. ライティング (Writing)

- エラーメッセージには、何が受け入れられなかったかに加えて、それを修正する方法の指示を書く
- エラーを明確に説明するのに十分なスペースがない場合、長いメッセージは複数行に折り返される。周囲のレイアウトにぶつからないよう、できるだけ簡潔に書く

<!-- design-doc:end -->
