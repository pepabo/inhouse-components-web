# Inhouse Dialog

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/dialog

# or

$ yarn add @pepabo-inhouse/dialog
```

<!-- design-doc:start (scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> Dialog コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは scripts/sync_design_docs.mjs により生成されています。直接編集しないでください。

Dialog は、ユーザーの操作に介入して、操作実行の確認などを行う対話型のコンポーネントです。

### 1. 概要 (Overview)

#### 説明

ユーザーの操作に介入することで、操作実行の確認などを行います。[Scrim](../scrim/README.md) を伴って元のページのコンテンツより上の面に表示され、基本的にはモードを生じさせます。モードの間、下の階層のコンテンツは操作できません。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-dialog--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/dialog)

### 2. 構成要素 (Anatomy)

#### Header

Dialog の問いかけを示す Title を配置します。

#### Content

問いかけの補足や、操作の対象・影響範囲などを伝えるコンテンツを配置します。

#### Footer

アクションを実行するボタンとキャンセルするボタンを配置します。ボタンの並びは横方向・縦方向から選択できます。

#### Scrim

Dialog の下に [Scrim](../scrim/README.md) を敷いてモードを作り、下の階層が操作できないことを示します。

### 3. 使い分け (Usage)

#### いつ使うか

- 使用頻度が低く、かつ元に戻せない破壊的な操作（アカウントの削除・退会など）の実行を確認するとき

使わないで済むならなるべく使わない方が学習性・予測可能性を保ちやすく操作感をスポイルしない（GUIとして望ましい設計を保ちやすい）コンポーネントです。

#### いつ使わないか

- お気に入りからの削除など、使用頻度が多い操作には使わない。ダイアログでのトリガー押下までがフローの1セットとして学習されるため、操作の確認として機能せず、操作の効率までもが落ちる（フローが1ステップ増えるだけになってしまう）
- 元に戻せるような非破壊的な操作にも使わない

### 4. バリエーション (Variants)

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
  </tbody>
</table>

#### Alignment

Header・Content・Footer の揃え位置を決定します。**Left / Center / Right** から選択できます（デフォルトは Center）。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Left</th>
      <td><code>.-alignment-left</code></td>
    </tr>
    <tr>
      <th>Center*</th>
      <td><code>.-alignment-center</code></td>
    </tr>
    <tr>
      <th>Right</th>
      <td><code>.-alignment-right</code></td>
    </tr>
  </tbody>
</table>

#### Button Flow

Footer のボタンの並び方向を決定します。**Row / Column** から選択できます（デフォルトは Row）。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row*</th>
      <td><code>.-button-flow-row</code></td>
    </tr>
    <tr>
      <th>Column</th>
      <td><code>.-button-flow-column</code></td>
    </tr>
  </tbody>
</table>

以下は Dialog 本体（`.in-dialog`）の表示例です。実際の使用時は [Scrim](../scrim/README.md) を含む `.in-modal` に内包し、画面中央に表示します。

```html
<div class="in-dialog">
  <div class="_header">
    <p class="_title">商品を削除しますか？</p>
  </div>
  <div class="_content">この操作は元に戻せません。</div>
  <div class="_footer">
    <button class="in-button -appearance-outlined">
      <span class="_body">キャンセル</span>
    </button>
    <button class="in-button -appearance-flat -color-negative">
      <span class="_body">削除する</span>
    </button>
  </div>
</div>
```

```html
<div class="in-dialog -button-flow-column">
  <div class="_header">
    <p class="_title">商品を削除しますか？</p>
  </div>
  <div class="_content">この操作は元に戻せません。</div>
  <div class="_footer">
    <button class="in-button -appearance-flat -color-negative">
      <span class="_body">削除する</span>
    </button>
    <button class="in-button -appearance-outlined">
      <span class="_body">キャンセル</span>
    </button>
  </div>
</div>
```

### 5. ステート (States)

Dialog は開いているか閉じているかの状態を持ちます。開くときはアニメーションで表示され、モードが生じたことを伝えます。

#### インタラクション

##### アクションを実行する・キャンセルする

送信・削除などのアクション実行とキャンセルの 2 択をデフォルトとします。アクションが 1 つしかない Dialog にはしません（できることが 1 つしかないなら自動化・省略します）。キャンセルのトリガーは左側に配置します。

##### 領域外を押しても閉じない

領域外を押して閉じられるのは、Dialog 自体の問いかけ・対話をそもそも無視・拒否するような意味の行動です。それと Dialog 内のキャンセルを押す（無視ではなく Dialog に応答する）行為が同じ結果になるのは適切ではないため、領域外を押しても閉じず、キャンセルを押したら閉じます。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- `<dialog>` 要素または `role="dialog"` と `aria-modal="true"` でマークアップし、モーダルであることを支援技術に伝える
- Title と Dialog を `aria-labelledby` などで関連付ける
- 開いている間はフォーカスを Dialog 内に留め、閉じたときは元のトリガーにフォーカスを戻す

### 7. ライティング (Writing)

- Title は操作の確認内容が伝わる簡潔な問いかけにする
- アクションを実行するボタンのラベルは「削除する」など実行される操作がわかる動詞にし、「はい / いいえ」のような結果が予測しづらいラベルを避ける

<!-- design-doc:end -->
