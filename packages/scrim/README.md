# Inhouse Scrim

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/scrim

# or

$ yarn add @pepabo-inhouse/scrim
```

<!-- design-doc:start (design.pepabo.com からの転載。scripts/sync_design_docs.mjs で再生成) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Scrim コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/scrim/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/scrim.mdx`

Scrim は、ページのコンテンツより上の面に重ねて表示する幕のコンポーネントです。

### 1. 概要 (Overview)

#### 説明

[Dialog](https://design.pepabo.com/inhouse/components/dialog/) などのコンポーネントの下に敷いてモードを作り、それより下のページのコンテンツが操作できないことを視覚的に伝えます。ページのコンテンツより上の面に表示されるコンポーネントは Scrim を持つかどうかで Modal と Non-Modal に分けられ、Scrim が存在するとそれより下のページのコンテンツは操作できません。

#### リンク

- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/scrim)

### 2. 構成要素 (Anatomy)

画面全体を覆う単一の幕で構成されます。半透明の黒で下のコンテンツを暗くする表現と、透明のまま操作だけを遮る表現があります。

### 3. 使い分け (Usage)

#### いつ使うか

- [Dialog](https://design.pepabo.com/inhouse/components/dialog/) など、モードを作って下の階層の操作を制限するコンポーネントを表示するとき

#### いつ使わないか

- [Snackbar](https://design.pepabo.com/inhouse/components/snackbar/) など、元からあったコンテンツの閲覧・操作を阻害しない形で情報を提示する Non-Modal なコンポーネントには使わない
- Scrim を重ねた上のコンテンツのアクションで元のページがリアルタイムに変化するなど、元のページとの関係をより強調させたい場合は Scrim を外すことを検討する

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
      <th>Hollow*</th>
      <td><code>.-appearance-hollow</code></td>
    </tr>
    <tr>
      <th>Transparent</th>
      <td><code>.-appearance-transparent</code></td>
    </tr>
  </tbody>
</table>

Hollow は半透明の黒で下のコンテンツを暗くし、モードが生じていることを強く伝えます。Transparent は下のコンテンツの見た目を保ったまま操作を遮ります。

#### Layer

重なり順（z-index のレイヤー）を決定します。Scrim の上に表示するコンポーネントに応じて適切なレイヤーを指定します。

### 5. ステート (States)

Scrim 自体はインタラクションを起こさないため、固有のステートは持ちません。なお、[Dialog](https://design.pepabo.com/inhouse/components/dialog/) の下に敷いた場合でも、Scrim を押して Dialog を閉じることはしません。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- Scrim で覆った下の階層のコンテンツは、`inert` などを用いて支援技術やキーボード操作からも到達できないようにし、見た目と支援技術の挙動を一致させる

<!-- design-doc:end -->
