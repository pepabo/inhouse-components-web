# Inhouse Select

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/select

# or

$ yarn add @pepabo-inhouse/select
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Select コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/select/) からの転載です。
> 原本: https://design.pepabo.com/inhouse/components/select/

セレクトボックスは、複数の選択肢から一つを選ぶための入力要素です。ドロップダウンリストとも呼ばれ、限られたスペースで多くの選択肢を提示できる利点があります。

### 1. 概要 (Overview)

#### 説明

Select はフォーム入力におけるプリミティブな項目選択のために用いる、単数選択のコンポーネントです。サブ階層を持つナビゲーションメニューのようなリッチな機能は持ちません。

HTML 標準の `<select>` 要素の `multiple` 属性による複数選択は、ブラウザ間の差が大きく操作が暗黙的なため Inhouse では扱わず、複数選択には Checkbox を並べる、または Interactive List の利用を検討します。

Select を使用する際は、デフォルト値の設定に注意してください。ユーザーが意図せず誤った選択をしてしまうことを防ぐため、適切なデフォルト値を設定するか、「選択してください」などの指示テキストを初期表示することが推奨されます。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-select--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/select)

### 2. 構成要素 (Anatomy)

![](https://design.pepabo.com/images/inhouse/components/select/dictionary.png)

#### A. Container

セレクトボックスのかたちをつくる要素です。この要素の大きさが、セレクトボックスをタップ/クリックできる範囲です。

必須/任意: 必須

#### B. Input text

セレクトボックスで選べる選択肢のうちのひとつをテキストで表示します。選択していない、または空の選択肢（HTMLのvalue属性が空のoption要素）を選択している場合は、表示しません。

必須/任意: 任意（未選択時は表示されない）

#### C. Trailing icon

セレクトボックスの機能を伝えるためのアイコンです。下向きの三角形の形をしていて、アイコンの形は変えられません。

必須/任意: 必須（形状は変更不可）

### 3. 使い分け (Usage)

#### いつ使うか

- 選択肢が多く、Radio などで一覧表示するとスペースを取りすぎる場合に、選択肢リストを格納して表示面積を抑える用途で使います。
- 選択肢が明確に定義されており、ユーザーが自由入力する必要がない場面で使います。
- 選択肢を提示しつつデフォルト値を強調したい場面で使います。

#### いつ使わないか

- 選択肢の数が4個程度までの場合は、[Radio](https://design.pepabo.com/inhouse/components/radio/) の利用を検討します。すべての選択肢を一度に確認でき、選択時の操作回数も減らせます。
- 複数選択をさせたい場合は、[Checkbox](https://design.pepabo.com/inhouse/components/checkbox/) を並べて使います。HTML 標準の `<select>` 要素には `multiple` 属性で複数選択する機能もありますが、ブラウザ間の差が大きく操作が暗黙的なため、Inhouse では Select を単数選択に絞っています。
- 選択肢が極端に多く一覧として扱いきれない場合は、Select 単体では完結させず、インクリメンタルサーチなど別のフィルタリング手段との併用を検討します。

#### 類似コンポーネントとの違い

- **[Radio](https://design.pepabo.com/inhouse/components/radio/)**: 選択肢が少ない場合は、すべての選択肢を一度に確認できるため、ユーザーの認知負荷を減らすことができます。
- **[Checkbox](https://design.pepabo.com/inhouse/components/checkbox/)**: 複数選択や ON/OFF の切り替えには Checkbox を使います。

#### 選択肢の並び順

option の並び順は、操作頻度ではなく予測可能性を優先します。たとえば日本の都道府県の選択肢は、出現頻度ではなく地理的に規則的な順序（北から南など）で並べます。これにより、ユーザーは規則性を手がかりに目的の選択肢の位置を予測しやすくなります。

#### 未選択状態について

HTML の `<select>` 要素には未選択状態を表す option が標準では存在しませんが、Inhouse では未選択状態を表す選択肢を用意することを許容します。

例として、`value` が空（かつ `disabled`）でラベルが「未選択」のような option を用意します。Radio と異なり、Select では選択された option 以外の選択肢が常時見えないため、ユーザーの意図的な選択が必須な場面でも Select の存在自体が見落とされる場合があるためです。

**未選択状態を設定すべき場合**

- 意図しない値が選択された状態でユーザーが Select の存在に気付かず submit すると、問題が発生する場合。

**未選択状態が不要な場合**

- ほとんどのユーザーが選択するような優先度の高い選択肢がある場合。
- 後から変更可能で、かつ初期値のまま submit されても問題を引き起こさない選択肢を初期値に設定できる場合。

### 4. バリエーション (Variants)

#### Appearance

Selectの見た目を指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Outlined*</th>
      <td><code>.-appearance-outlined</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Filled</th>
      <td><code>.-appearance-filled</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div>
  <span class="in-select -appearance-outlined">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
<div style="margin-top: 0.5rem;">
  <span class="in-select -appearance-filled -color-neutral">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
```

推奨される選び方の判断基準:

- どちらの Appearance も同じ機能を提供します。サービスのスタイルに最適なものを選択してください。
- 同一の画面内で使用する場合は、同じセクション内で異なる Appearance を混在させず、セクション内では一貫した Appearance を使います。
- スタイルの指針は [Textfield](https://design.pepabo.com/inhouse/components/textfield/) と共通です。

#### Color

Semantic Colorを指定して配色できます。

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
      <td>Pepper Gray</td>
    </tr>
    <tr>
      <th>Negative</th>
      <td><code>.-color-negative</code></td>
      <td>Pepper Red</td>
    </tr>
  </tbody>
</table>

```html
<div>
  <span class="in-select -appearance-outlined -color-neutral">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
<div style="margin-top: 0.5rem;">
  <span class="in-select -appearance-outlined -color-negative">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
```

推奨される選び方の判断基準:

- **Neutral**: 通常の状態。
- **Negative**: 入力が必須にもかかわらず選択が行われていない、または選択された値が無効な状態を表します。

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

```html
<div>
  <span class="in-select -size-s">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
<div style="margin-top: 0.5rem;">
  <span class="in-select -size-m">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
<div style="margin-top: 0.5rem;">
  <span class="in-select -size-l">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
```

推奨される選び方の判断基準:

- 基本のサイズは **M**。

#### Width

親要素の幅に対してどのくらいの幅で表示するか指定できます。

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
<div>
  <span class="in-select -width-auto">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
<div style="margin-top: 0.5rem;">
  <span class="in-select -width-full">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
<div style="margin-top: 0.5rem;">
  <span class="in-select -width-half">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
<div style="margin-top: 0.5rem;">
  <span class="in-select -width-third">
    <select class="_select">
      <option class="_option">Option A</option>
      <option class="_option">Option B</option>
      <option class="_option">Option C</option>
    </select>
    <span class="_icon"></span>
  </span>
</div>
```

推奨される選び方の判断基準:

- ラベルの文字量や配置領域に応じて選びます。
- **Auto**: 内容に応じた幅で表示する。
- **Full**: 親要素の幅いっぱいに広げる。
- **Half** / **Third**: 親要素に対して 1/2、1/3 の幅で表示する。

#### 実装

##### Mixin-based

###### HTML

```html
<span class="select-component">
  <select class="_select">
    <option class="_option">Option A</option>
    <option class="_option">Option B</option>
    <option class="_option">Option C</option>
  </select>
  <span class="_icon"></span>
</span>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.select-component {
  @include inhouse.select-style(
    $options: (
      appearance: outlined,
      color: neutral,
      size: m,
      width: auto,
    )
  );
}
```

##### Class-based

###### HTML

```html
<span class="in-select -appearance-outlined -color-neutral -size-m -width-auto">
  <select class="_select">
    <option class="_option">Option A</option>
    <option class="_option">Option B</option>
    <option class="_option">Option C</option>
  </select>
  <span class="_icon"></span>
</span>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.select-export;
```

### 5. ステート (States)

#### Default

特に何もアクションしていないデフォルトの状態です。

```html
<span class="in-select -appearance-outlined -color-neutral -size-m -width-auto">
  <select class="_select">
    <option class="_option">Option A</option>
    <option class="_option">Option B</option>
    <option class="_option">Option C</option>
  </select>
  <span class="_icon"></span>
</span>
```

#### Hover

線に Hover の Overlay Color を重ねて、選択しようとしていることを示します。

#### Focus

線に Focus の Overlay Color を重ねてフォーカスされていることを示し、Focus Ring をつけてフォーカスされていることを強調します。

#### Disabled

透明度を上げて、インタラクションが不可能であることを示します。

```html
<span class="in-select -appearance-outlined -color-neutral -size-m -width-auto">
  <select class="_select" disabled>
    <option class="_option">Option A</option>
    <option class="_option">Option B</option>
    <option class="_option">Option C</option>
  </select>
  <span class="_icon"></span>
</span>
```

#### Error

`.-color-negative` モディファイアを適用し、入力が必須にもかかわらず選択が行われていない、または選択された値が無効な状態を表します。

```html
<span class="in-select -appearance-outlined -color-negative -size-m -width-auto">
  <select class="_select">
    <option class="_option">Option A</option>
    <option class="_option">Option B</option>
    <option class="_option">Option C</option>
  </select>
  <span class="_icon"></span>
</span>
```

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- HTML 標準の `<select>` 要素でマークアップする（独自実装でドロップダウンを再現しない）
- `<label>` 要素で Label をマークアップし、`<select>` と関連付ける
- ユーザーの意図的な選択が必須な場面では、`value` が空（かつ `disabled`）の「未選択」option を用意し、誤って初期値のまま submit されないようにする

<!-- design-doc:end -->
