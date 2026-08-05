# Inhouse Interactive Table

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/interactive-table

# or

$ yarn add @pepabo-inhouse/interactive-table
```

<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Interactive Table コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/interactive-table/) からの転載です。
> 原本: https://design.pepabo.com/inhouse/components/interactive-table/

Interactive Table は、商品やユーザーなど、あるオブジェクトの集合と Interactive にやりとりするための Table コンポーネントです。一番上に Heading を組み合わせた Row を配置し、その下に Description を組み合わせた Row を垂直に並べて構成します。

### 1. 概要 (Overview)

#### 説明

![](https://design.pepabo.com/images/inhouse/components/interactive-table/dictionary.png)

商品やユーザーなど、あるオブジェクトの集合と Interactive にやりとりするための Table です。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-interactivetable--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/interactive-table)

### 2. 構成要素 (Anatomy)

Interactive Table は、Heading を組み合わせた Row と、Description を組み合わせた Row で構成されます。Row 内の Heading や Description を配置する順番はデフォルトでは左から右ですが、右から左への言語の場合は反転する必要があります。

#### Heading

Heading の Row と Description の Row の区切りをわかりやすくするため、下に Primary の Stroke を引きます。Sticky の場合は上部に固定されます。

##### Text

Align を **Start / End** から選択できます。デフォルトでは左揃えですが、右から左への言語の場合は反転する必要があります。扱うデータが数値型の場合は End にしたほうが可読性が高まるため End にすべきです。見出しの役割を果たし、Description と視覚的に差別化するため、Font Weight は Bold にします。テキストが長くなった場合は三点リーダーで省略します。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/heading-text.png)

##### Text with Sort Button

Align を Start / End から選択できます。デフォルトでは左揃えですが、右から左への言語の場合は反転する必要があります。扱うデータが数値型の場合は End にしたほうが可読性が高まるため End にすべきです。また、Arrow Downward Icon の Button をタップすることで、昇順 / 降順を回転のアニメーションで切り替えることができます。Start の場合は Arrow Icon は最後につけ、End の場合は最初につけます。見出しの役割を果たし、Description と視覚的に差別化するため、Font Weight は Bold にします。テキストが長くなった場合は三点リーダーで省略します。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/heading-text-with-sort-button.png)

##### Checkbox

Align は常に Center です。false / true / mixed から選択します。mixed は Selected が混在していることを表します。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/heading-checkbox.png)

#### Description

Description Row 同士の区切りをわかりやすくするため、下に Secondary の Stroke を引きます。

##### Text

Align を Start / End から選択できます。扱うデータが数値型の場合は End にしたほうが可読性が高まるため End にすべきです。テキストが長くなった場合は三点リーダーで省略します。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/description-text.png)

##### Button

Button を配置できます。対象のオブジェクトを操作するのに使います。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/description-button.png)

##### Checkbox

Align は常に Center です。false / true から選択します。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/description-checkbox.png)

##### Image

Align は常に Center です。商品オブジェクトなど対象のオブジェクトがアイキャッチ画像によって識別しやすくなると考えられる場合に使用します。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/description-img.png)

### 3. 使い分け (Usage)

#### いつ使うか

商品やユーザーなど、あるオブジェクトの集合をユーザーが表形式で把握しながら、選択・ソート・並べ替え・詳細への遷移などを Interactive に行う必要がある場合に使用します。

#### いつ使わないか

##### Table を使用したほうがよい場合

オブジェクトの集合とユーザーが Interactive にやりとりする必要がない場合は [Table](https://design.pepabo.com/inhouse/components/table/) の使用を検討します。

##### Card を使用したほうがよい場合

画像が対象オブジェクトを表すメインの情報になる場合は [Card](https://design.pepabo.com/inhouse/components/card/) の使用を検討します。また、モバイルサイズの場合は Interactive Table の方が情報が伝わりやすいが、デスクトップサイズのときは Card の方が情報が伝わりやすい場合は、画面サイズに応じて Card へ変換するパターンも検討します。

##### Interactive List を使用したほうがよい場合

垂直なリスト形式で表示したほうが対象オブジェクトの情報が伝わりやすい場合は [Interactive List](https://design.pepabo.com/inhouse/components/interactive-list/) の使用を検討します。

#### 使用上の注意

##### 異なるオブジェクトを同じ Interactive Table 内に混在させない

商品オブジェクトとユーザーオブジェクトなど、異なるオブジェクトを同じ Interactive Table に混在させることはできません。

##### 表示すべき情報を推敲する

一度にたくさんの情報が表示されていてもユーザーは処理しきれません。情報量が多い場合は適切な詳細画面を用意します。また、画面サイズの違いに応じて、表示する項目を増やしたり減らしたりすることも検討します。

### 4. バリエーション (Variants)

#### Sticky

Heading の Row を画面上部に固定するかを決定します。スクロールしても各列の見出しを参照し続けられるようにしたいときに使用します。

### 5. ステート (States)

#### ページ遷移・ビュー展開

対象オブジェクトの詳細ビューを開きます。

ページ単位での遷移と、ページ遷移を伴わないビュー展開の 2 パターンがあります。それぞれのトリガー・クリッカブル領域は適切に選択します。

##### Table から右側に詳細ビューとなるペインを展開するようなマルチペイン UI の場合

元のコンテクストと展開後のコンテクストが密接で、かつマルチペインであれば詳細ビューを展開したままモードレスに Table での操作も行えます。そのため、操作の誤りに対する意識は希薄になります。詳細ビュー展開の操作効率を向上させるため、行全体をクリッカブルなトリガーとします。

##### Table から対象オブジェクトの詳細ページへ遷移するようなハイパーリンクベースな UI の場合

遷移前は Table 全体での操作に最適化し、遷移後はオブジェクトの詳細ページを別で切り分ける設計の場合、遷移前と後でコンテクストに隔たりがあります。その違いを自然に学習できるよう、また遷移前の Table 全体における操作をコンテクスト切り替えの遷移トリガーが阻害しないよう、行の中の一部（セルやセル内のリンク）のみを詳細ページへの遷移トリガーとしてクリッカブルにする設計を検討します。

##### コレクションビューとシングルビューの関係を率直に表現した UI の場合

コレクションビュー「契約商品」とシングルビュー「詳細」をドリルダウン式に行き来できる UI のモックアップです。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/collection-view.png)

コレクションビューでは列ヘッダーからのフィルター・ソートといったテーブル操作の他に、オブジェクト行のアクションとしては行全体のクリックによるシングルビューへの遷移を行います。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/single-view.png)

シングルビュー側に「契約期間の変更」「サブスクリプション解除」など低頻度・破壊的なアクションを配置することで、コレクションビュー側は行全体をクリックしてシングルビューへ遷移するアクションのみに絞り込むことができます。

![](https://design.pepabo.com/images/inhouse/components/interactive-table/collection-view_sp.png)

モバイル端末では横スクロールと行のタップが競合する可能性がありますが、実際の使用においては大きな問題にはなりません。そのため、行全体をタップする設計を採用できます。

遷移先のシングルビュー側でより詳細な情報の表示やアクションの実行を行い、コレクションビュー側ではオブジェクトの一覧表示とシングルビューへの遷移のみを行うケースでは、オブジェクトの集合としてのコレクションビューであることを直接的に表現するため、行全体を 1 つの操作単位として扱うことが適切です。

「契約期間」など行の中の各属性については遷移先のシングルビュー側で操作するようにし、コレクションビューのアクションをシンプルに保つ設計例です。

#### 選択

Checkbox を用いてオブジェクトの集合から対象のオブジェクトを複数選択することができます。Description 側に Selected とそうではないものが混在している場合、Heading の Checkbox は mixed になります。

#### 一括選択

Heading の Checkbox にチェックを入れることで、Description 側の Checkbox を一括でチェックすることができます。

#### 並べ替え

デスクトップはドラッグ、モバイルは長押し＆ドラッグで Row を並べ替えられます。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- `<table>` / `<thead>` / `<tbody>` / `<th>` / `<td>` を意味通りに使い、`<th>` には `scope` を設定して行・列の対応を支援技術に伝える
- ソート可能な列の状態は `aria-sort` などで支援技術に伝える
- Heading の Checkbox が mixed（一部選択）の状態を支援技術に伝える
- 横スクロールが発生する場合も、キーボードでテーブル全体を操作できるようにする
- 並べ替えはドラッグだけでなくキーボードなどの代替手段でも操作できるようにする

### 7. ライティング (Writing)

- Heading のテキストは列の内容を簡潔に表す見出しにする
- 数値型のデータは End 揃えにし、桁の比較をしやすくする
- テキストが長くなる場合は三点リーダーで省略し、行の高さが揃うようにする

<!-- design-doc:end -->
