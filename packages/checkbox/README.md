# Inhouse Checkbox

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/checkbox

# or

$ yarn add @pepabo-inhouse/checkbox
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Checkbox コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/checkbox/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/checkbox.mdx`

Checkbox は、基本的に ON または OFF（true または false）の値を持ち、2つの値から1つを選択・切り替えるのに使うコンポーネントです。

### 1. 概要 (Overview)

#### 説明

ある機能やオプションなどを有効にするか否かの on/off をユーザーが選択する場面に使います。「他の項目に関心を持たず単体で完結する」性質を応用し、グループで配置することで「選択肢の中から任意で複数を選択する」場面でも使われます。

また、ネストした子階層の Checkbox の状態を親階層（テーブルヘッダーなど）側へ反映するため、`mixed` な状態の Checkbox として表現することもできます（後述の Variants > Selected を参照）。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-checkbox--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/checkbox)

### 2. 構成要素 (Anatomy)

Checkbox は HTML の `<input type="checkbox">` 要素1つで構成されます。

#### 補足

HTML では checkbox 型の `<input>` 要素でマークアップしますが、checked の値のみが送信され、default の値は送信する手段がないため、HTML フォームで使用する場合は個別に実装する必要があります。

### 3. 使い分け (Usage)

#### いつ使うか

ON/OFF の2つの値からどちらかを選択する場面で使います。2つの値に対してラベルは1つだけなので「ある項目を ON にするか」を表現する場合、つまり OFF の状態を意識しなくていい場合に有効です。

- ある機能やオプションなどを有効にするか否か（on/off）を切り替えるとき
- 「他の項目に関心を持たず単体で完結する」性質を活かし、複数の Checkbox を並べて「任意で複数を選択する」とき
- ネストした項目の集合状態を親階層（テーブルヘッダーなど）に反映したいとき。`mixed` な状態の Checkbox として表現します

#### いつ使わないか

- 2つ以上の値から単数選択する場合は [Radio](https://design.pepabo.com/inhouse/components/radio/) または [Select](https://design.pepabo.com/inhouse/components/select/) の使用を検討します。Checkbox は「OFF を意識しなくていい」前提で使うため、複数項目の単数選択には向きません。
- 別項目の enabled/disabled に作用させるなど、副作用としてモードが発生する操作には基本的に使いません。やむを得ず使う場合は、ある Checkbox の選択がどの要素に作用するか予測しやすいよう配慮します。

#### 類似コンポーネントとの違い

- **[Radio](https://design.pepabo.com/inhouse/components/radio/)**: 「2つ以上の値を並列にする」のが Radio です。「ある項目を ON にすると他の項目が OFF になる」排他選択であり、同じグループ内の他の Radio の値に関心を持つ点で Checkbox とは対照的です。Checkbox には「ラベルで明示されている ON と暗黙的な OFF」という順列が生じます。
- **[Select](https://design.pepabo.com/inhouse/components/select/)**: 複数項目から単数選択する Select は選択肢がドロップダウンメニューに格納されるため、表示領域の制約がある場合や選択肢が多い場合に有効です。

### 4. バリエーション (Variants)

#### Selected

Checkbox が選択されているか決定する値です。**false / true / mixed** の3種類から選択できます。

- **false（未選択）**: Checkbox がチェックされていない初期状態
- **true（選択済み）**: Checkbox がチェックされた状態
- **mixed（部分選択）**: 親階層の Checkbox において、子 Checkbox の一部だけが ON になっていることを表す状態。HTML の `<input>` 要素に対して JavaScript で `element.indeterminate = true` を設定することで表現します

`mixed` な親 Checkbox をクリック／タップしたときは、すべての子 Checkbox を OFF にする振る舞いを推奨します。Inhouse では indeterminate ではなく mixed と表現しており、「子 Checkbox が何か1つは ON になっている」という、個数以外は確定している状態を表現するものとしています。

#### 配置

複数の Checkbox は縦もしくは横に並べることが可能です。

#### 実装

##### Mixin-based

###### HTML

```html
<input class="checkbox-component" type="checkbox" value="" />
<input class="checkbox-component" type="checkbox" value="" checked />
<input class="checkbox-component" type="checkbox" value="" disabled />
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.checkbox-component {
  @include inhouse.checkbox-style();
}
```

##### Class-based

###### HTML

```html
<input class="in-checkbox" type="checkbox" value="" />
<input class="in-checkbox" type="checkbox" value="" checked />
<input class="in-checkbox" type="checkbox" value="" disabled />
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.checkbox-export;
```

### 5. ステート (States)

#### Default

特に何もアクションしていないデフォルトの状態です。

```html
<div>
  <input class="in-checkbox" type="checkbox" value="" />
</div>
```

#### Hover

Hover の Overlay Color を重ねて、選択しようとしていることを示します。

#### Focus

Focus の Overlay Color を重ねてフォーカスされていることを示し、Focus Ring をつけてフォーカスされていることを強調します。

#### Selected

```html
<div>
  <input class="in-checkbox" type="checkbox" value="" checked />
</div>
```

#### Disabled

透明度を上げて、インタラクションが不可能であることを示します。

```html
<div>
  <input class="in-checkbox" type="checkbox" value="" disabled />
</div>
```

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- HTML 標準の `<input type="checkbox">` 要素でマークアップする
- `<label>` 要素で Label をマークアップし、`<input>` と関連付ける（クリック可能領域を Label まで広げる）
- 親子関係の `mixed` 状態は、JavaScript で `element.indeterminate = true` を設定して表現する
- 複数の Checkbox をグループ化する場合は `<fieldset>` / `<legend>` を使い、グループの目的を伝える

<!-- design-doc:end -->
