# Inhouse Radio

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/radio

# or

$ yarn add @pepabo-inhouse/radio
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Radio コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/radio/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/radio.mdx`

Radioは、一般的にラジオボタン（ラジオボタングループ）と呼ばれ、複数の項目から1つだけ選択するコンポーネントです。

### 1. 概要 (Overview)

#### 説明

ある項目をon（checked）にすると、それまで選択されていた別の項目がoffになります。この排他的な制御ができる一方で、onのRadioをさらに選択してもoffには戻りません。1つのRadio単体では使えないので、2つ以上のRadioをグループにして使いましょう。

Radioグループには初期値が必要です。初期状態で何か1つ選択されているようにしてください。初期値のない（何も選択されていない）Radioグループは、何か選択した状態から何も選択していない状態へ戻せないためユーザーにとって気軽に操作できないコントロールとなってしまい、ユーザビリティおよびアクセシビリティの課題が懸念されます。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-radio--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/radio)

### 2. 構成要素 (Anatomy)

1つの Radio は HTML の `<input type="radio">` 要素と、対応するラベルテキストで構成されます。

#### 補足

複数の Radio をグループ化するには、各 Radio に同じ `name` 属性を指定します。同じ `name` を持つ Radio 同士で排他選択が成立します。必要に応じて `<fieldset>` でグループ化し、グループの見出しは `<legend>`（あるいは見出し要素）で示します。

### 3. 使い分け (Usage)

#### いつ使うか

- 複数の項目から排他的に1つだけ選択するとき
- 2つ以上のRadioをグループにして配置するとき（初期状態で何か1つを選択した状態にする）

#### いつ使わないか

- 1つの Radio を単体で配置するとき（排他制御ができないため）
- 初期値を設定できない／何も選択されていない状態を許容したいとき
- 選択肢が一つしかない（ON/OFF）場合は、[Checkbox](https://design.pepabo.com/inhouse/components/checkbox/) を使います。
- リストから2つ以上のアイテムを選択したい場合は、[Checkbox](https://design.pepabo.com/inhouse/components/checkbox/) を使います。
- リストの数が多く、選択肢を折りたためる場合は、スペース削減のため [Select](https://design.pepabo.com/inhouse/components/select/) を使います。

#### 類似コンポーネントとの違い

- **[Checkbox](https://design.pepabo.com/inhouse/components/checkbox/)**: 「ある項目を ON にすると他の項目が OFF になる」排他選択である Radio と異なり、Checkbox は単体で完結し他に影響しません。ON/OFF の2値の切り替えや、複数項目を任意で選択する場面に向きます。
- **[Select](https://design.pepabo.com/inhouse/components/select/)**: リストの数が多く、使用可能なオプションを折りたためる場合はスペースを削減できる Select を検討します。

### 4. バリエーション (Variants)

#### Selected

Radio が選択されているかを決定する値です。**false / true** の2種類があります。

- **false（未選択）**: Radio がチェックされていない状態
- **true（選択済み）**: Radio がチェックされた状態

#### 配置

複数の Radio は縦もしくは横に並べることが可能です。

#### ラベルの折返し

表示エリアの状況によってラベルを折り返して表示することも可能ですが、テキストの可読性が下がり選択の意思決定に要する時間が増えるため、なるべく短いラベルが望ましいです。折返しが発生しないレイアウトや文字数を検討します。

#### 実装

##### Mixin-based

###### HTML

```html
<input class="radio-button" type="radio" name="option" value="" checked />
<input class="radio-button" type="radio" name="option" value="" />
<input class="radio-button" type="radio" name="option" value="" disabled />
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.radio-button {
  @include inhouse.radio-style();
}
```

##### Class-based

###### HTML

```html
<input class="in-radio" type="radio" name="option" value="" checked />
<input class="in-radio" type="radio" name="option" value="" />
<input class="in-radio" type="radio" name="option" value="" disabled />
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.radio-export;
```

### 5. ステート (States)

#### Default

特に何もアクションしていないデフォルトの状態です。

```html
<div>
  <input class="in-radio" type="radio" name="option-default" value="" />
</div>
```

#### Hover

Hover の Overlay Color を重ねて、選択しようとしていることを示します。

#### Focus

Focus の Overlay Color を重ねてフォーカスされていることを示し、Focus Ring をつけてフォーカスされていることを強調します。

#### Selected

```html
<div>
  <input class="in-radio" type="radio" name="option-selected" value="" checked />
</div>
```

#### Disabled

透明度を上げて、インタラクションが不可能であることを示します。

```html
<div>
  <input class="in-radio" type="radio" name="option-disabled" value="" disabled />
</div>
```

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- HTML 標準の `<input type="radio">` 要素でマークアップする
- グループ化するすべての Radio に同じ `name` 属性を指定する
- 複数の Radio をグループ化する場合は `<fieldset>` / `<legend>` を使い、グループの目的を伝える
- 初期状態で何か1つが選択されている状態にする（何も選択されていない状態を避ける）

<!-- design-doc:end -->
