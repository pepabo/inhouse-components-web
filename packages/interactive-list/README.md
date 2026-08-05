# Inhouse Interactive List

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/interactive-list

# or

$ yarn add @pepabo-inhouse/interactive-list
```

<!-- design-doc:start (design.pepabo.com からの転載。scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Interactive List コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/interactive-list/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/interactive-list.mdx`

Interactive List は、商品やユーザーなど、あるオブジェクトの集合と Interactive にやりとりするためのリストコンポーネントです。Item に Leading、Body、Trailing を組み合わせて、対象オブジェクトの情報を適切に伝達します。

### 1. 概要 (Overview)

#### 説明

![](https://design.pepabo.com/images/inhouse/components/interactive-list/dictionary.png)

商品やユーザーなど、あるオブジェクトの集合と Interactive にやりとりするために使用します。オブジェクトの集合名を明示的に示したい場合は簡潔な Title を付けます。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-interactivelist--single-line)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/interactive-list)

### 2. 構成要素 (Anatomy)

Interactive List を構成する Item は Leading、Body、Trailing を組み合わせて構成します。配置する順番はデフォルトでは左から右ですが、右から左への言語の場合は反転する必要があります。

#### Leading

Body の始まりにつく要素です。アイキャッチ及び、Checkbox や Radio などの対象オブジェクトの情報を視覚的に把握するための要素を内部に配置します。

##### Avatar

ユーザーオブジェクトを扱う場合に使用します。アバター画像をアイキャッチにするとユーザーを識別しやすくなります。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/avatar.png)

##### Thumbnail

商品オブジェクトなど、画像をアイキャッチとしてオブジェクトを識別しやすくしたい場合に使用します。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/thumbnail.png)

##### Icon

オブジェクトを表象・識別しやすくなる場合に使用します。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/icon.png)

##### Checkbox

List の中から複数の Item を選択できるようにする場合に使用します。タップターゲットは Checkbox だけではなく、Item 全体になります。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/checkbox-left.png)

##### Radio

List の中からどれか一つの Item を選択できるようにする場合に使用します。タップターゲットは Radio だけではなく、Item 全体になります。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/radio.png)

#### Body

Item の本体です。Title 及び Description といった対象オブジェクトの主要な情報を配置します。

##### Title

商品名、ユーザー名など対象オブジェクトの最も主要な情報を 2 行まで表示できます。2 行以上になった場合は三点リーダーで省略されます。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/title.png)

##### Description

在庫数、価格、ユーザー ID など対象オブジェクトの副次的な情報を 2 行まで表示できます。2 行以上になった場合は三点リーダーで省略されます。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/description.png)

#### Trailing

Body の終わりにつく要素です。Chevron Right Icon や Drag Handle Icon、Checkbox など、対象のオブジェクトが特定のインタラクションを誘発することを示す要素を内部に配置します。

##### Chevron Right Icon

画面遷移できることを示します。タップターゲットは Chevron Right Icon だけではなく、Item 全体になります。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/chevron-right-icon.png)

##### Drag Handle Icon

並び替えできることを示します。タップターゲットはコンテキストに応じて Drag Handle Icon のみの場合と Item 全体の場合があります。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/drag-handle-icon.png)

##### Checkbox

List の中から複数の Item を選択できます。タップターゲットは Checkbox だけではなく、Item 全体になります。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/checkbox-right.png)

### 3. 使い分け (Usage)

#### いつ使うか

- 商品やユーザーなど、あるオブジェクトの集合とユーザーが Interactive にやりとり（選択・詳細への遷移・並べ替え・アクションの実行など）する必要があるとき

#### いつ使わないか

- Interactive にやりとりする必要がない場合は [List](https://design.pepabo.com/inhouse/components/list/) を使用する
- 画像が対象オブジェクトを表すメインの情報になる場合は [Card](https://design.pepabo.com/inhouse/components/card/) を使用する（モバイルでは Interactive List、デスクトップでは Card の方が情報が伝わりやすい場合は、画面サイズに応じて変換するパターンも検討する）
- 表形式で表示したほうが情報が伝わりやすい場合は [Interactive Table](https://design.pepabo.com/inhouse/components/interactive-table/) を使用する

#### 使用上の注意

- 商品とユーザーなど、異なるオブジェクトを同じ Interactive List 内に混在させない
- 一度に表示する情報を推敲する（情報量が多い場合は詳細画面を用意し、画面サイズに応じて表示項目を増減する）
- Interactive List が複数並ぶ場合は、区切りをわかりやすくするために Divider を使用する
- List に背景色があるため、上下が視覚的に詰まらないよう適切な余白を取る
- 画面サイズが大きい場合は適切な最大幅やオフセットを設け、極端に拡大しない（可読性が落ちるため）
- 画面サイズが大きいときは、詳細画面への遷移ではなくペインでの分割表示も検討する

### 4. バリエーション (Variants)

Interactive List は [Cell](https://design.pepabo.com/inhouse/components/cell/) を継承しています。

#### Density

密度を決定します。List の長さを加味して **Dense / Normal / Comfort** から適切な Density を選択します。

#### Line

行数に応じた適切なスタイルを決定します。

##### Single

Body の中に 1 行の Title のみがあるときは Single になります。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/avatar.png)

##### Multi

Multi になると、Leading 及び Trailing 内の Element の揃え位置が変化します。Body の中に Title と Description を含む場合は Multi になります。また、Title が 2 行になった場合も Multi になります。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/multi.png)

### 5. ステート (States)

Overlay Color を重ねて状態を表現します。

#### Enabled

特に何もアクションしていないデフォルトの状態です。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/enabled.png)

#### Hover

上に Hover の Overlay Color を重ねて選択しようとしていることを示します。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/hover.png)

#### Focused

上に Focus の Overlay Color を重ねてフォーカスされていることを示します。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/focused.png)

#### Selected

Checkbox や Radio などが Selected になっているときに対象の Item が選択されていることをわかりやすくします。上に Selected の Overlay Color を重ねて選択されていることを示します。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/selected.png)

#### Activated

Navigation などで該当する項目がアクティブになるような画面にいるときにアクティブなことがわかりやすくします。上に Activated の Overlay Color を重ねてアクティブであることを示します。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/activated.png)

#### Dragged

Drag しているときには Dragged の Overlay Color を重ね、Elevation を変化させて、Drag している状態をわかりやすくします。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/dragged.png)

#### Disabled

透明度を上げて、インタラクションが不可能なことを示します。

![](https://design.pepabo.com/images/inhouse/components/interactive-list/disabled.png)

#### インタラクション

##### 画面遷移を行う

対象オブジェクトの詳細画面へ遷移を行います。

##### 選択する

Checkbox を用いてオブジェクトの集合から対象のオブジェクトを複数選択することができます。また、Radio を用いてオブジェクトの集合から対象のオブジェクトを一つ選択することができます。

##### 左スワイプでアクションを選択する

モバイルアプリケーションでは左スワイプを行うことで、対象オブジェクトへのアクションを選択できます。ただしこのジェスチャーは不可視トリガーなので、必ず行わなければならないような主要アクションをこの中にのみ配置することはできません。

##### 並べ替えを行う

デスクトップはドラッグ、モバイルは長押し＆ドラッグで Item を並べ替えられます。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- リストの構造を `<ul>` / `<li>` などで適切にマークアップし、見た目だけでリストを表現しない
- Checkbox や Radio を含む場合、選択状態を支援技術に伝え、タップターゲットを Item 全体に広げる
- Icon のみで意味を伝える要素には代替テキストを設定する
- 並べ替えはドラッグだけでなくキーボードなどの代替手段でも操作できるようにする
- 左スワイプは不可視トリガーであるため、必ず行わなければならない主要アクションをスワイプの中にのみ配置しない

### 7. ライティング (Writing)

- Title には商品名・ユーザー名など対象オブジェクトの最も主要な情報を入れ、2 行までに収める
- Description には在庫数・価格・ユーザー ID など副次的な情報を入れ、2 行までに収める
- 同じ List 内では Title・Description の粒度や文体を揃える

<!-- design-doc:end -->
