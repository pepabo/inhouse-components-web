# Inhouse Progress Indicator

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/progress-indicator

# or

$ yarn add @pepabo-inhouse/progress-indicator
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Progress Indicator コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/progress-indicator/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/progress-indicator.mdx`

Progress Indicator は、アプリケーションの読み込み、フォームの送信、更新の保存など、進行中のプロセスのステータスをユーザーに通知するコンポーネントです。現在のアプリケーションの状態を伝え、ユーザーが現在の画面から移動できるかどうかを示します。

### 1. 概要 (Overview)

#### 説明

Progress Indicator は、進行中の処理がどの程度進んでいるか、あるいはまだ進行中であることをユーザーに伝えます。プロセスの進捗率を把握できるかどうかで表現を切り替えます。

- **読み込みの完了率が検出できる場合**: プロセスにかかる時間を計算し、割合を Indicator で示す
- **読み込みの完了率が検出できない場合 / かかる時間を示す必要がない場合**: 不特定の待機時間を表すアニメーションを表示する

途中で完了率を検出できるようになった場合は、そのタイミングで割合を示す表現に切り替えることが望ましいです。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-progressindicator-circular--indeterminate)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/progress-indicator)

### 2. 構成要素 (Anatomy)

![](https://design.pepabo.com/images/inhouse/components/progress-indicator/about.png)

#### Indicator

進捗そのものを表現する、動きを持つ可視要素です。Linear ではトラックに沿って伸びるバーとして、Circular では円弧として表現します。

必須/任意: 必須

#### Track

Indicator の動きの基準となる、進捗が及ぶ範囲を示す要素です。Linear では水平の帯、Circular では円のかたちを取ります。

必須/任意: 必須

#### Caption

何を読み込んでいるかをテキストで補足する要素です。読み込み内容が明確に分かるようにしたいときに併用します。

必須/任意: 任意

![](https://design.pepabo.com/images/inhouse/components/progress-indicator/with_caption.png)

### 3. 使い分け (Usage)

#### いつ使うか

進行中の処理があり、それが完了するまでユーザーに待機を求めるときに使います。代表的な場面は次のとおりです。

##### 画面コンテンツの初期読み込みを示す

![](https://design.pepabo.com/images/inhouse/components/progress-indicator/initial_content_loading.png)

画面の中央に Linear / Circular の Progress Indicator を配置することで、画面コンテンツの初期読み込みを示します。

##### スワイプして更新

![](https://design.pepabo.com/images/inhouse/components/progress-indicator/swipe_to_refresh_indicator.png)

「スワイプして更新」ジェスチャによって UI が更新されていることを示す目的で、Circular の Progress Indicator を表示します。

##### 新しいコンテンツが表示される場所を示す

![](https://design.pepabo.com/images/inhouse/components/progress-indicator/new_content_appears_area.png)

既存のコンテンツの上または下に Circular の Progress Indicator を配置すると、新しいコンテンツが表示される場所に注意が向けられます。

##### 他のコンポーネントと組み合わせる

- **Linear をオーバーレイする**: コンポーネントの最下部に Linear Progress Indicator をオーバーレイすることで、対象のコンポーネントが進行中の状態であることを表現できます。この場合、対象のコンポーネント（例: Button）は Disabled にします。
- **アイコンを Circular Progress Indicator に置き換える**: 状態をアイコンで表現している場合は、進行中という状態を Circular Progress Indicator に置き換えて表現することができます。

![](https://design.pepabo.com/images/inhouse/components/progress-indicator/shortcut.gif)

#### いつ使わないか

##### Skeleton を使用したほうがよい場合

描画されるコンポーネントの形状がある程度定まっている場合は、読み込みの体感速度を向上させるため、Progress Indicator ではなく Skeleton を使用します。読み込みの途中で形状が定まる場合は、Skeleton への切り替えも検討します。

##### Button のラベルを置き換えない

Button のラベルを Progress Indicator に置き換えると、そのボタンが何をするものかが分からなくなります。ラベルの置き換えは避け、Linear のオーバーレイなど別の表現を使います。

#### 類似コンポーネントとの違い

- **[Skeleton](https://design.pepabo.com/inhouse/components/skeleton/)**: 描画される要素の形状が定まっている場合に使う。Progress Indicator は形状が未定の場合や、進捗を示したい場合に使う。

### 4. バリエーション (Variants)

#### Type

配置する箇所の面積に応じて、Linear と Circular を使い分けます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Linear</th>
      <td><code>.-type-linear</code></td>
      <td></td>
    </tr>
    <tr>
      <th>Circular</th>
      <td><code>.-type-circular</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

##### Linear

![](https://design.pepabo.com/images/inhouse/components/progress-indicator/linear.png)

固定された表示可能なトラックの長さに沿って Indicator をアニメーション化することで、進行状況を表示します。

- 完了率が検出できる場合: プロセスの進行状況に同期して、トラックの 0 から 100% まで幅が増加する Indicator が表示される
- 完了率が検出できない場合: プロセスが完了するまで、トラックに沿って Indicator が継続的にアニメーションする

##### Circular

![](https://design.pepabo.com/images/inhouse/components/progress-indicator/circular.png)

見えない円形のトラックに沿って時計回りに Indicator をアニメーションすることで、進行状況を表示します。

- 完了率が検出できる場合: Indicator が 0 度から 360 度にアニメーションし、円形 Indicator が非表示の円形トラックを色で塗りつぶす
- 完了率が検出できない場合: 円形 Indicator が見えないトラックに沿って移動しながらアニメーションする

#### カスタムの Progress Indicator

ペパポンなどブランドを表すマーク、忍者スリスリくんなどのキャラクターを Progress Indicator として使用できます。アプリケーションごとにカスタマイズすることで、ブランドをより強調できます。

カスタムを使用する場合も、完了率の表現に関する原則は守ります。また、形状が適さない箇所での挙動などのルールも、検証のうえ妥当だと判断した場合に限って使用します。

### 5. ステート (States)

#### 読み込みの開始

Progress Indicator を表示します。

#### 読み込み中

Progress Indicator がアニメーションし、処理が継続していることを示します。完了率が検出できる場合は、進捗に応じて Indicator を更新します。

#### 読み込みの完了

Progress Indicator を非表示にし、読み込み結果のコンテンツを表示します。

#### 読み込みの失敗

Progress Indicator を非表示にし、失敗した理由を通知して、次に行うべきアクションを明確に伝えます。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- ルート要素に `role="progressbar"` を設定する
- 完了率が検出できる場合は `aria-valuenow` / `aria-valuemin` / `aria-valuemax` を設定する
- 完了率が検出できない場合は `aria-valuenow` を省略し、不確定状態として扱う
- 何を読み込んでいるかが画面上で分かりにくい場合は、`aria-label` または Caption で内容を補足する
- アニメーションが激しくなりすぎないようにし、`prefers-reduced-motion` 設定を尊重する

### 7. ライティング (Writing)

- Caption を併用する場合は、「読み込み中」だけでなく「何を読み込んでいるか」が分かる文にする（例: 「商品データを読み込み中…」）
- 失敗時のメッセージは、原因と次のアクション（再試行、別の操作の案内など）をセットで伝える
- 完了率を示す場合は「○○%」のように具体的な数値で示し、抽象的な「もう少しです」などは避ける

<!-- design-doc:end -->
