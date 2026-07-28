# Inhouse Avatar

> **使い方のルール:** このコンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、本 README 末尾の[デザインドキュメント](#デザインドキュメント-design-documentation)を参照してください。

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/avatar

# or

$ yarn add @pepabo-inhouse/avatar
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Avatar コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/avatar/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/avatar.mdx`

Avatar は、対象のオブジェクトがユーザー（人）に関するものであることを示すための、円形を基本とした画像コンポーネントです。プロフィール画像やユーザーアイコンとして用い、対象がユーザーに紐づいていることを視覚的に明確にします。

### 1. 概要 (Overview)

#### 説明

Avatar は、表示する対象がユーザーに関連するオブジェクトであることを示すために使います。基本は円形で表示し、内側にユーザーの顔写真などを配置します。

円形のプロフィール写真は、顔を強調するために効果的です。円の中心からすべての端までの距離が等距離であるため、ユーザーは中央を見るだけで対象を捉えることができます。また、コーナーの背景領域がカットされることで、顔への集中度が高まります。

Avatar 単体ではインタラクションを持ちません。クリック／タップなどのインタラクションが必要な場合は、Button や Interactive List、Interactive Table など、インタラクションを担うコンポーネントの中に内包させて使用します。

#### リンク

- [Storybook](https://pepabo.github.io/inhouse-components-web/stories-web/?path=/story/components-avatar--index)
- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/avatar)

### 2. 構成要素 (Anatomy)

#### Container

Avatar のかたちをつくる要素です。内側のメディアを円形にクリッピングする範囲を定義します。

必須/任意: 必須

#### Media

Container の内側に配置する画像です。原則としてユーザーの顔写真を `<img>` で配置します。

必須/任意: 必須

### 3. 使い分け (Usage)

#### いつ使うか

対象のオブジェクトがユーザー（人）に関するものであることを示すときに使います。プロフィール画像、コメントの投稿者アイコン、ユーザー一覧の項目などに用います。

#### いつ使わないか

顔以外のオブジェクト（商品・場所・モノなど）を表現する場合は、円形の Avatar は適していません。コーナーをカットすることで奥行きやディテールが失われる可能性があるため、ユーザーオブジェクト以外を扱う場合は円形の Avatar ではなく、四角形のサムネイル画像で表現します。

#### 類似コンポーネントとの違い

- **サムネイル画像**: モノやコンテンツのプレビューを示す場合は、円形の Avatar ではなく四角形のサムネイル画像を用います。

### 4. バリエーション (Variants)

#### Size

サイズを指定できます。コンテキストや Avatar を含めるコンポーネントのサイズに応じて XS / S / M / L の4種類から選択します。

![](https://design.pepabo.com/images/inhouse/components/avatar/about.png)

<table>
  <thead>
    <tr>
      <th></th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>XS</th>
      <td><code>.-size-xs</code></td>
      <td></td>
    </tr>
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
  <div class="in-avatar -size-xs">
    <img src="https://picsum.photos/id/177/200/300" alt="sample avatar" />
  </div>
</div>
<div style="margin-top: 0.5rem;">
  <div class="in-avatar -size-s">
    <img src="https://picsum.photos/id/177/200/300" alt="sample avatar" />
  </div>
</div>
<div style="margin-top: 0.5rem;">
  <div class="in-avatar -size-m">
    <img src="https://picsum.photos/id/177/200/300" alt="sample avatar" />
  </div>
</div>
<div style="margin-top: 0.5rem;">
  <div class="in-avatar -size-l">
    <img src="https://picsum.photos/id/177/200/300" alt="sample avatar" />
  </div>
</div>
```

#### 実装

##### Mixin-based

###### HTML

```html
<div class="avatar-component">
  <img src="https://design.pepabo.com/images/partners/example.png" alt="ユーザー名" />
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.avatar-component {
  @include inhouse.avatar-style(
    $option: (
      size: m,
    )
  );
}
```

##### Class-based

###### HTML

```html
<div class="in-avatar -size-m">
  <img src="https://design.pepabo.com/images/partners/example.png" alt="ユーザー名" />
</div>
```

###### SCSS

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

@include inhouse.avatar-export;
```

### 5. ステート (States)

Avatar 単体はインタラクションを持たないため、固有のステートは持ちません。Avatar をインタラクティブにしたい場合は、Button や Interactive List など、インタラクションを担うコンポーネントに内包させ、そのコンポーネントのステートに従います。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- `<img>` の `alt` 属性には、対象のユーザー名など Avatar が示す人物を識別できるテキストを設定する
- 装飾目的で Avatar を使う場合は `alt=""` とし、スクリーンリーダーから読み上げられないようにする
- Avatar 単体ではフォーカスを取らない。インタラクション可能にしたい場合は Button や Interactive List などに内包させる

### 7. ライティング (Writing)

- `alt` テキストには、ユーザーの表示名や識別できる名称を入れる
- 「アバター」「プロフィール画像」のような種別を示すテキストは `alt` には入れず、対象人物の名前のみを記述する

<!-- design-doc:end -->
