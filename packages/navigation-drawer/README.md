# Inhouse Navigation Drawer

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/navigation-drawer

# or

$ yarn add @pepabo-inhouse/navigation-drawer
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Navigation Drawer コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/navigation-drawer/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/navigation-drawer.mdx`

Navigation Drawer は、モバイルや小型タブレットなどの小さな画面で、Bottom Navigation に収まらない優先順位の低い遷移先を格納するドロワー型のナビゲーションコンポーネントです。普段は非表示で、ユーザーの操作によって展開されます。

### 1. 概要 (Overview)

#### 説明

Navigation Drawer は **Header**（オプション）と **Body** で構成されます。Body に Interactive List を持ち、タップすると Interactive List Item が示す最上位の遷移先に移動します。

- **Header**: アカウント切り替えなどに使用できる柔軟なスペース。
- **Body**: [Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/) を設置して横方向の画面遷移を促します。

ドロワーは画面を覆う Scrim（暗幕）の上に Content として表示されます。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-navigationdrawer--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/navigation-drawer)

### 2. 構成要素 (Anatomy)

![](https://design.pepabo.com/images/inhouse/components/navigation-drawer/dictionary.png)

#### Header

アカウント切り替えや閉じる Button など、柔軟に内容を配置できるスペースです。Body のスクロールに対して固定するかどうかを選択できます。

必須/任意: 任意

#### Body

最上位の遷移先を示す [Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/) を配置します。Drawer の高さよりコンテンツが長い場合は Body 内で垂直方向にスクロールできます。

必須/任意: 必須

#### Scrim

Drawer の背景に表示する半透明の覆いです。タップで Drawer を閉じます。

必須/任意: 必須（コンポーネント側で自動的に提供）

### 3. 使い分け (Usage)

#### いつ使うか

モバイルや小型タブレットなどの小さな画面で、横方向の画面遷移が必要かつ、優先順位が低い遷移先が Bottom Navigation に収まらない場合に使います。

#### いつ使わないか

- **モバイルなどの小さな画面で遷移先が5つまでに収まる場合**: Bottom Navigation のみを使います。
- **デスクトップや大型タブレットの場合**: アプリケーションのどこからでもアクセスできる必要がある最上位の遷移先が3つ以上あるなら、[Side Navigation](https://design.pepabo.com/inhouse/components/side-navigation/) を使います。

#### 類似コンポーネントとの違い

- **[Side Navigation](https://design.pepabo.com/inhouse/components/side-navigation/)**: 大きな画面で常時表示するナビゲーション。Navigation Drawer は小さな画面でユーザー操作により展開する点が異なります。
- **Bottom Navigation**: モバイルで上位5つの遷移先を画面下部に常時表示する。Navigation Drawer はそれに収まらない遷移先を格納します。

### 4. バリエーション (Variants)

#### Layer

Drawer の重ね順を指定できます。複数のオーバーレイ UI を同時に扱う際に、表示順序を制御するためのオプションです。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Layer 1*</th>
      <td><code>.-layer-1</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Layer 2</th>
      <td><code>.-layer-2</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Layer 3</th>
      <td><code>.-layer-3</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 実装

##### Mixin-based

###### HTML

```html
<div class="navigation-drawer-component --activated">
  <div class="_scrim"></div>
  <div class="_content">
    <div class="_header">
      <!-- ヘッダー領域（閉じるボタン、アカウント情報など） -->
    </div>
    <div class="_body">
      <!-- Interactive List をここに配置 -->
    </div>
  </div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.navigation-drawer-component {
  @include inhouse.navigation-drawer-style(
    $option: (
      layer: 1,
    )
  );
}
```

##### Class-based

###### HTML

```html
<div class="in-navigation-drawer -layer-1 --activated">
  <div class="_scrim"></div>
  <div class="_content">
    <div class="_header"></div>
    <div class="_body"></div>
  </div>
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.navigation-drawer-export;
```

### 5. ステート (States)

Body 内部の Interactive List のステートは [Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/) に準じます。

#### Default

Navigation Drawer が非表示の状態です。

#### Activated

Navigation Drawer が展開され、Scrim と Content が表示されている状態です。`--activated` クラスで切り替えます。Scrim をタップすると非表示の状態に戻ります。

<iframe
  src="https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-navigationdrawer--index&viewMode=story"
  style="width: 100%; min-height: 400px; border: none; background-color: #f7f8fa;"
></iframe>

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- ルート要素に `<nav>` を用い、`aria-label` で「メニュー」などの役割を伝えるラベルを設定する
- 開閉状態を `aria-expanded` で伝え、開閉操作を行う Button と `aria-controls` で関連付ける
- 展開時はフォーカスを Drawer 内に閉じ込め（フォーカストラップ）、Escape キーで閉じられるようにする
- 状態に応じて Interactive List の Item を削除したり Disabled にしない（一貫性を保ち、遷移先にコンテンツがない場合は Empty State で対応する）

### 7. ライティング (Writing)

- Item のラベルは画面の内容を端的に表す短い名詞を使う
- Item のラベルは画面遷移先のページ見出しと揃え、認識のずれを起こさない
- Drawer 上部の閉じる Button には `aria-label="閉じる"` を設定する

<!-- design-doc:end -->
