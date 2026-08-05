# Inhouse Side Navigation

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/side-navigation

# or

$ yarn add @pepabo-inhouse/side-navigation
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Side Navigation コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/side-navigation/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/side-navigation.mdx`

Side Navigation は、デスクトップや大型タブレットなどの大きな画面で、横方向の画面遷移を提供するナビゲーションコンポーネントです。画面の端に最上位の遷移先を縦並びで表示し、アプリケーションのどこからでも主要な画面間を移動できるようにします。

### 1. 概要 (Overview)

#### 説明

Side Navigation は **Header**（オプション）と **Body** で構成されます。Body に Interactive List を持ち、タップすると Interactive List Item が示す最上位の遷移先に移動します。

- **Header**: アプリケーションのタイトル、ブランドロゴ、アカウント切り替えなどに使用できる柔軟なスペース。App Bar でブランド表現を行っている場合は役割が重複するため、Header にブランド表現を入れません。ただし App Bar に画面のタイトルが入っている場合は役割が重複しないため、この限りではありません。
- **Body**: [Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/) を設置して横方向の画面遷移を促します。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-sidenavigation--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/side-navigation)

### 2. 構成要素 (Anatomy)

![](https://design.pepabo.com/images/inhouse/components/side-navigation/dictionary.png)

#### Header

アプリケーションのタイトル、ブランドロゴ、アカウント切り替えなど、柔軟に内容を配置できるスペースです。Body のスクロールに対して固定するかどうかを選択できます。

必須/任意: 任意

#### Body

最上位の遷移先を示す [Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/) を配置します。タップ／クリックで該当の画面へ遷移します。

必須/任意: 必須

### 3. 使い分け (Usage)

#### いつ使うか

アプリケーションのどこからでもアクセスできる必要がある最上位の遷移先が3つ以上ある場合、かつデスクトップまたは大型タブレットの場合に使います。

#### いつ使わないか

- **モバイルなどの小さな画面で遷移先が5つまでに収まる場合**: Bottom Navigation を使います。
- **モバイルなどの小さな画面で遷移先が5つを超える場合**: 優先順位をつけて上位5つを Bottom Navigation に、それ以外を [Navigation Drawer](https://design.pepabo.com/inhouse/components/navigation-drawer/) に配置します。

#### 類似コンポーネントとの違い

- **[Navigation Drawer](https://design.pepabo.com/inhouse/components/navigation-drawer/)**: モバイルなどの小さな画面で、Bottom Navigation に収まらない優先順位の低い遷移先を格納するドロワー型のナビゲーション。常に表示される Side Navigation とは表示形態が異なります。
- **Bottom Navigation**: モバイルで最上位の遷移先（最大5つ）を画面下部に常時表示する。

### 4. バリエーション (Variants)

#### Header の Fixed

Header を Body のスクロールに対して固定するかどうかを指定できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Fixed</th>
      <td><code>fixed: true</code> / <code>false</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 子階層の表示

Navigation 系のコンポーネントのうち、Side Navigation だけは大きな画面サイズで使用する特性上、現在 Active になっている画面に限り、子階層をインデントして表示できます。これにより、各子階層にアクセスしやすくなります。

ただし、モバイルサイズのときには画面サイズの関係上、子階層を表示できません。そのため、子階層への遷移を Side Navigation だけに依存させず、Tab やコンテンツ内のリンクからも遷移できるようにします。あくまで補助的なナビゲーションとして捉えてください。

![](https://design.pepabo.com/images/inhouse/components/side-navigation/next-level-nav.png)

#### 実装

##### Mixin-based

###### HTML

```html
<nav class="side-navigation-component --activated" aria-label="メインナビゲーション">
  <div class="_header">
    <!-- アプリケーションタイトルやアカウント切り替えなど -->
  </div>
  <div class="_body">
    <!-- Interactive List をここに配置 -->
  </div>
</nav>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.side-navigation-component {
  @include inhouse.side-navigation-style;
}
```

##### Class-based

###### HTML

```html
<nav class="in-side-navigation --activated" aria-label="メインナビゲーション">
  <div class="_header"></div>
  <div class="_body"></div>
</nav>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.side-navigation-export;
```

### 5. ステート (States)

Body 内部の Interactive List のステートは [Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/) に準じます。

#### Default

Side Navigation が表示されている通常の状態です。

#### Activated

Side Navigation が開いており、幅を持って表示されている状態です。`--activated` クラスで切り替えます。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- ルート要素に `<nav>` を用い、`aria-label` で「メインナビゲーション」など役割を伝えるラベルを設定する
- 現在表示中のページに対応する Interactive List Item に `aria-current="page"` を設定する
- 状態に応じて Interactive List の Item を削除したり Disabled にしない（一貫性を保ち、遷移先にコンテンツがない場合は Empty State で対応する）
- 子階層のインデント表示はあくまで補助とし、子階層への遷移を Side Navigation だけに依存させない

### 7. ライティング (Writing)

- Item のラベルは画面の内容を端的に表す短い名詞を使う
- Item のラベルは画面遷移先のページ見出しと揃え、認識のずれを起こさない
- Badge を併用する場合は、通知数など数字を中心にした短い表現にする

<!-- design-doc:end -->
