# Inhouse Tab

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/tab

# or

$ yarn add @pepabo-inhouse/tab
```

<!-- design-doc:start (scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> Tab コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約です。
> このセクションは scripts/sync_design_docs.mjs により生成されています。直接編集しないでください。

Tab は、コンテンツを特定の条件で分類し個々にラベルを付けて、ユーザーが選択した項目に紐付くコンテンツのみを表示するコンポーネントです。同一コンテキスト内で表示内容を切り替える目的で使用し、別画面への遷移には Navigation 系のコンポーネントを使います。

### 1. 概要 (Overview)

#### 説明

Tab はコンテンツをある軸で分類し、表示領域の肥大化を抑制します。コンテンツに意味付けして区分することで、タブ項目を参照するだけでコンテンツ全体の概要を把握でき、必要な情報への到達が容易になります。

Tab は **List**、**Item**、**Panel** の3つの要素で構成されます。

- **List**: タブ項目を横一列に並べる領域
- **Item**: タブの一項目。それぞれが分類されたコンテンツのラベル
- **Panel**: 選択中のタブ項目に紐付くコンテンツを表示する領域

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-tab--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/tab)

### 2. 構成要素 (Anatomy)

#### List

タブ項目を横一列に並べる領域です。

必須/任意: 必須

#### Item

タブの一項目です。それぞれが分類されたコンテンツのラベルになります。コンテンツの表示領域幅に収まる範囲で、できるだけ少ない数に抑えます。

必須/任意: 必須（2 つ以上）

#### Panel

選択中のタブ項目に紐付くコンテンツを表示する領域です。

必須/任意: 必須

### 3. 使い分け (Usage)

#### いつ使うか

コンテンツをある特定の軸で並列に分類し、同じコンテキスト内で表示内容を切り替えたい場面で使います。

- コンテンツの分類は、すべての項目が互いに関連性を持ち、かつ並列の関係となるようにします。
- 項目はコンテンツの最上部に一列で配置し、見出しとしての役割を持たせます。項目は折り返さず一行で配置します（折り返しは分類したコンテンツに階層構造があると誤認されるおそれがあるため）。
- Tab の幅がコンテンツ幅を上回る場合は、まず Tab が幅を取りすぎない命名を検討します。モバイルなどで幅がはみ出る場合は `overflow-x` による横スクロールで対応します。

#### いつ使わないか

- 別画面への遷移には Tab ではなく Navigation 系のコンポーネント（[Side Navigation](../side-navigation/README.md) / [Navigation Drawer](../navigation-drawer/README.md) など）を使います。Tab は同一コンテキスト内での切り替え専用です。
- 分類した項目に明確な序列（順序）が存在する場合は、Pagination の使用を検討します。並列ではないコンテンツを Tab に並べると、ユーザーが恣意性を推し量る必要が生じ、予測可能性が低下します。

#### 類似コンポーネントとの違い

- **[Side Navigation](../side-navigation/README.md) / [Navigation Drawer](../navigation-drawer/README.md)**: 別画面への遷移を伴う場合に使います。Tab は同一コンテキスト内での切り替え専用です。

### 4. バリエーション (Variants)

#### Appearance

Tab の見た目を指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Transparent*</th>
      <td><code>.-appearance-transparent</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Outlined</th>
      <td><code>.-appearance-outlined</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

```html
<div class="in-tab -appearance-transparent">
  <div class="_list" role="tablist">
    <button class="_item --activated" role="tab" aria-selected="true">
      <span class="_body">タブ1</span>
    </button>
    <button class="_item" role="tab" aria-selected="false">
      <span class="_body">タブ2</span>
    </button>
    <button class="_item" role="tab" aria-selected="false">
      <span class="_body">タブ3</span>
    </button>
  </div>
</div>
<div style="margin-top: 1rem;">
  <div class="in-tab -appearance-outlined">
    <div class="_list" role="tablist">
      <button class="_item --activated" role="tab" aria-selected="true">
        <span class="_body">タブ1</span>
      </button>
      <button class="_item" role="tab" aria-selected="false">
        <span class="_body">タブ2</span>
      </button>
      <button class="_item" role="tab" aria-selected="false">
        <span class="_body">タブ3</span>
      </button>
    </div>
  </div>
</div>
```

推奨される選び方の判断基準:

- **Transparent**: アクティブな項目にのみ形状の変化を付ける表現。タブらしさは控えめだが、視覚的に情報量が多い場面に向く。
- **Outlined**: すべてのタブ項目に border や background-color による装飾を施し、アクティブな項目とそれ以外を明確に区別する。よりタブらしさが出る。

#### Align

タブ項目の配置を指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Start*</th>
      <td><code>.-align-start</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Center</th>
      <td><code>.-align-center</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

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

#### Density

タブ項目の余白の密度を指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Dense</th>
      <td><code>.-density-dense</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Normal*</th>
      <td><code>.-density-normal</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Comfort</th>
      <td><code>.-density-comfort</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### ラベル

##### テキストのみ

Tab におけるデフォルトです。

##### アイコン + テキスト

アイコンがテキストの補足情報として有効な場合に使用します。配置は左寄せと中央寄せの2パターンがあり、審美性や視線移動の負担などを考慮して選択します。

- タブ項目間でアイコンの使用・不使用を混在させない。
- アイコンのみのパターンは推奨しません。区分したユニークなコンテンツをそれぞれ象徴するアイコンを新たに用意するよりも、テキストで表現するほうが効果的かつ適切です。

#### 実装

##### Mixin-based

###### HTML

```html
<div class="tab-component">
  <div class="_list" role="tablist">
    <button class="_item --activated" role="tab" aria-selected="true">
      <span class="_body">タブ1</span>
    </button>
    <button class="_item" role="tab" aria-selected="false">
      <span class="_body">タブ2</span>
    </button>
  </div>
  <div class="_panel --activated" role="tabpanel">タブ1のコンテンツ</div>
  <div class="_panel" role="tabpanel">タブ2のコンテンツ</div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.tab-component {
  @include inhouse.tab-style(
    $options: (
      appearance: transparent,
      align: start,
      density: normal,
      size: m,
    )
  );
}
```

##### Class-based

###### HTML

```html
<div class="in-tab -appearance-transparent -align-start -density-normal -size-m">
  <div class="_list" role="tablist">
    <button class="_item --activated" role="tab" aria-selected="true">
      <span class="_body">タブ1</span>
    </button>
    <button class="_item" role="tab" aria-selected="false">
      <span class="_body">タブ2</span>
    </button>
  </div>
  <div class="_panel --activated" role="tabpanel">タブ1のコンテンツ</div>
  <div class="_panel" role="tabpanel">タブ2のコンテンツ</div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.tab-export;
```

### 5. ステート (States)

タブ項目（Item）の形状ごとに以下のステートを用意します。

#### Default

タブ項目が選択されていない通常の状態です。

```html
<div class="in-tab -appearance-outlined">
  <div class="_list" role="tablist">
    <button class="_item" role="tab" aria-selected="false">
      <span class="_body">Default</span>
    </button>
  </div>
</div>
```

#### Hover

タブ項目にマウスカーソルが重なっている状態です。非選択状態のタブ項目では背景色の変化などが発生します。選択状態のタブ項目では装飾的な変化は発生しません。

#### Focus

キーボード操作などでフォーカスを得たときの状態です。Focus Ring を表示します。

#### Active (Selected)

タブ項目が選択されている状態です。選択されたタブに紐付くコンテンツが Panel に表示されます。

```html
<div class="in-tab -appearance-outlined">
  <div class="_list" role="tablist">
    <button class="_item --activated" role="tab" aria-selected="true">
      <span class="_body">Active</span>
    </button>
  </div>
</div>
```

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則はアクセシビリティガイドラインを参照してください。

- List 要素に `role="tablist"`、各 Item 要素に `role="tab"`、Panel 要素に `role="tabpanel"` を設定する
- 選択中の Item に `aria-selected="true"`、非選択の Item に `aria-selected="false"` を設定する
- 各 Item と対応する Panel を `aria-controls` / `aria-labelledby` で関連付ける
- 左右の矢印キーで Item 間を移動できるようキーボード操作をサポートする

### 7. ライティング (Writing)

- ラベルは短く明瞭で、内包する情報をユーザーが容易に推測できる内容にする
- ラベルとコンテンツの見出しは原則として揃え、コンテンツの切り替わりを関連付けやすくする
- ラベルが長くなる場合は略称や3点リーダーで省略してもよいが、コンテンツの内容を推測できる範囲に留める
- タブ項目によってアイコンの使用・不使用を混在させない

<!-- design-doc:end -->
