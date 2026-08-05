# Inhouse Bottom Navigation

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/bottom-navigation

# or

$ yarn add @pepabo-inhouse/bottom-navigation
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Bottom Navigation コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/bottom-navigation/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/bottom-navigation.mdx`

Bottom Navigation は、画面の下部に 3〜5 つの最上位の遷移先を表示するナビゲーションコンポーネントです。

### 1. 概要 (Overview)

#### 説明

画面の下部に 3〜5 つの遷移先が表示されます。各 Item は Icon または画像とテキストラベルで構成され、Item をタップするとその Item が示す最上位の遷移先に移動します。

![画面下部にホーム・検索・お気に入り・通知・あなたの5つのItemが並んだBottom Navigationのキャプチャ](https://design.pepabo.com/images/inhouse/components/bottom-navigation/fv.png)

なお、このコンポーネントは Web アプリケーションの場合のみ使用できます。ネイティブアプリケーションでは実装コストの観点から、iOS では [Tab Bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)、Android では [Navigation Bar](https://m3.material.io/components/navigation-bar/overview) を使用します。使用方法は各プラットフォームのガイドラインを参照してください。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-bottomnavigation--white)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/bottom-navigation)

### 2. 構成要素 (Anatomy)

画面下部に固定されるバーの中に、3〜5 つの Item を等幅で配置します。

- **Item**: 最上位の遷移先を表します。Icon または画像と、テキストラベルで構成されます
- **Badge**: Item のアイコンや画像の右上に配置できます。通知数などの動的な情報を表示できます

ユーザーはその遷移先が何を指しているか Icon だけでは確信を持てないため、テキストラベルはできるだけ表示するべきです。Item を上限（5 個）まで配置していてスペースが足りない、かつユーザーが継続的な学習を通してオブジェクトを識別できていると断言できる場合のみテキストラベルを省略できますが、推奨はされません。

### 3. 使い分け (Usage)

#### いつ使うか

アプリケーションのどこからでもアクセスできる必要がある最上位の遷移先が 3〜5 つあるかつ、モバイルまたは小型タブレットの場合に Bottom Navigation を使用します。

#### いつ使わないか

- デスクトップや大型タブレットなどの大きな画面では、大きな画面のコンテキストにより適した [Side Navigation](https://design.pepabo.com/inhouse/components/side-navigation/) を使用する
- モバイルなどの小さな画面でかつ遷移先が 5 つを超える場合は、優先順位をつけた上で上位 5 つを Bottom Navigation、それ以外のものを [Navigation Drawer](https://design.pepabo.com/inhouse/components/navigation-drawer/) に配置する

#### 使用上の注意

- 適切なタップターゲットを確保できなくなるため、5 つより多い遷移先を設置しない。一度遷移先を追加してしまうとユーザーの学習が進み、外したり変更するのが難しくなってしまうため、遷移先はなるべく少なめに設計する
- オブジェクト作成アクションはナビゲーションではないため、Bottom Navigation に含めない
- 横スクロールさせると見えない遷移先にアクセスしづらくなるため、スクロールさせない
- モバイルの横向きまたはタブレットサイズの場合は、全体に均等に分散すると Navigation を認識しづらくなってしまうため、最大幅を設けてモバイルの縦向きで使用されるのと同じ間隔を維持する

### 4. バリエーション (Variants)

#### Appearance

外観を決定します。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>White*</th>
      <td><code>.-appearance-white</code></td>
    </tr>
    <tr>
      <th>Filled</th>
      <td><code>.-appearance-filled</code></td>
    </tr>
  </tbody>
</table>

### 5. ステート (States)

Overlay Color を重ねて状態を表現します。Activated のとき、White では Foreground を Informative な色にし、Filled では不透明度を 100% にしてアクティブになっていることを伝えます。

![WhiteとFilledそれぞれのBottom Navigationで、先頭のItemがアクティブになっている様子](https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_top.png)

#### Enabled

特に何もアクションしていないデフォルトの状態です。White では Light Overlay Color の Enabled を重ね、Filled では Dark Overlay Color の Enabled を重ねます。

アクティブの場合:

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_enabled_is-active_true_white.png" alt="WhiteのEnabled（アクティブ）のItem" style="width: 150px; height: auto;" />
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_enabled_is-active_true_filled.png" alt="FilledのEnabled（アクティブ）のItem" style="width: 150px; height: auto;" />
</div>

非アクティブの場合:

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_enabled_is-active_false_white.png" alt="WhiteのEnabled（非アクティブ）のItem" style="width: 150px; height: auto;" />
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_enabled_is-active_false_filled.png" alt="FilledのEnabled（非アクティブ）のItem" style="width: 150px; height: auto;" />
</div>

#### Hover

White では Light Overlay Color の Hover を重ね、Filled では Dark Overlay Color の Hover を重ねます。

アクティブの場合:

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_hover_is-active_true_white.png" alt="WhiteのHover（アクティブ）のItem" style="width: 150px; height: auto;" />
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_hover_is-active_true_filled.png" alt="FilledのHover（アクティブ）のItem" style="width: 150px; height: auto;" />
</div>

非アクティブの場合:

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_hover_is-active_false_white.png" alt="WhiteのHover（非アクティブ）のItem" style="width: 150px; height: auto;" />
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_hover_is-active_false_filled.png" alt="FilledのHover（非アクティブ）のItem" style="width: 150px; height: auto;" />
</div>

#### Focused

White では Light Overlay Color の Focused を重ね、Filled では Dark Overlay Color の Focused を重ねます。色で Focus されていることが十分に伝わるため、Focus Ring はつけなくても構いません。

アクティブの場合:

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_focused_is-active_true_white.png" alt="WhiteのFocused（アクティブ）のItem" style="width: 150px; height: auto;" />
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_focused_is-active_true_filled.png" alt="FilledのFocused（アクティブ）のItem" style="width: 150px; height: auto;" />
</div>

非アクティブの場合:

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_focused_is-active_false_white.png" alt="WhiteのFocused（非アクティブ）のItem" style="width: 150px; height: auto;" />
  <img src="https://design.pepabo.com/images/inhouse/components/bottom-navigation/states_focused_is-active_false_filled.png" alt="FilledのFocused（非アクティブ）のItem" style="width: 150px; height: auto;" />
</div>

#### Disabled

Disabled にすることはできません。Navigation はなくなったり、場所が変わったり、使用できる場合と使用できない場合があると、一貫性がなくなり、ユーザーが予測しづらくなります。すべての Item を常に有効にし、遷移先にコンテンツがない場合は適切な Empty State を用意します。

#### インタラクション

##### 遷移する

Item をタップするとその Item が示す最上位の遷移先に移動します。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- `<nav>` 要素でマークアップし、ナビゲーションであることを支援技術に伝える
- 現在地にあたる Item には `aria-current` を設定し、アクティブな状態を視覚的な意匠だけで表現しない
- Icon だけで意味を伝えず、テキストラベルをできるだけ表示する
- 各 Item に十分なタップターゲットを確保する

### 7. ライティング (Writing)

- テキストラベルは遷移先の内容を簡潔に言い表す短い名詞にする
- 同じ Bottom Navigation 内でラベルの粒度や文体を揃える

<!-- design-doc:end -->
