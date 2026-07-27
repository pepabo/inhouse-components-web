# Inhouse Skeleton

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/skeleton

# or

$ yarn add @pepabo-inhouse/skeleton
```

<!-- design-doc:start (design.pepabo.com から自動転載。手動編集しないでください) -->

## デザインドキュメント (Design Documentation)

> このセクションは Pepabo Design [Skeleton コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/skeleton/) からの転載です。
> 原本: design.pepabo.com リポジトリの `src/pages/inhouse/components/skeleton.mdx`

Skeleton は、画面の読み込み中であることを、読み込み完了後に表示される要素の形状を模したプレースホルダーとして示すコンポーネントです。形状を事前に提示することで、ユーザーの待機時間に対する体感を改善します。

### 1. 概要 (Overview)

#### 説明

Skeleton は、読み込み完了後に表示される要素の輪郭をあらかじめ示すことで、ユーザーが「この場所に何が表示されるのか」を予測できるようにします。

明滅するアニメーションを継続的に表示することで「いま読み込み中である」ことを伝え、読み込み完了とともに実際のコンテンツに差し替わります。

![](https://design.pepabo.com/images/inhouse/components/skeleton/dictionary.png)

#### リンク

- [GitHub](https://github.com/pepabo/inhouse-components-web/tree/main/packages/skeleton)

### 2. 構成要素 (Anatomy)

Skeleton は、読み込み完了後に表示される要素の形状を模したシェイプによって構成されます。各コンポーネントに対応する形状を組み合わせることで、ページ全体のレイアウトを再現します。

#### Shape

矩形・円・テーブル行など、読み込み完了後に表示される要素の輪郭を表す図形です。表面には明滅するアニメーションを繰り返し表示します。

必須/任意: 必須

### 3. 使い分け (Usage)

#### いつ使うか

- 読み込み完了後に表示される要素の形状がある程度定まっている場合
- 平均的な読み込み時間が 0.5 秒以上かかる場合
- 読み込みの体感速度を改善したい場合

#### いつ使わないか

##### Progress Indicator を使用したほうがよい場合

読み込み完了後に表示される要素の形状が未定の場合、適切な Skeleton を決定できないため、Progress Indicator の使用を推奨します。

##### 画像のみを読み込む場合

画像単体の読み込みには、低解像度の画像を事前に表示する手法（LQIP: Low Quality Image Placeholder）を推奨します。ソフトでぼやけた見た目の低解像度画像を事前に表示することで、画像の読み込みが完了するまでのプレースホルダーの役割を担います。

##### 読み込みが 0.5 秒未満で完了する場合

Skeleton が瞬間的にのみ表示されると、画面の点滅として認識される可能性があります。平均的な読み込み時間が 0.5 秒以上かかる場合にのみ Skeleton を使用してください。

#### 類似コンポーネントとの違い

- **[Progress Indicator](https://design.pepabo.com/inhouse/components/progress-indicator/)**: 読み込み完了後の要素の形状が未定の場合や、進捗を示したい場合に使う。Skeleton は形状が定まっている場合に使う。

### 4. バリエーション (Variants)

各コンポーネントに対応する Skeleton が用意されています。読み込み完了後に表示するコンポーネントに合わせて選択します。

#### Avatar

```html
<div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
  <div className='in-skeleton-avatar -size-xs'></div>
  <div className='in-skeleton-avatar -size-s'></div>
  <div className='in-skeleton-avatar -size-m'></div>
  <div className='in-skeleton-avatar -size-l'></div>
</div>
```

#### Button

```html
<div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
  <div className='in-skeleton-button -size-xs -width-third'></div>
  <div className='in-skeleton-button -size-s -width-third'></div>
  <div className='in-skeleton-button -size-m -width-third'></div>
  <div className='in-skeleton-button -size-l -width-third'></div>
  <div className='in-skeleton-button -size-xl -width-third'></div>
</div>
```

#### Checkbox

```html
<div className='in-skeleton-checkbox'></div>
```

#### Radio

```html
<div className='in-skeleton-radio'></div>
```

#### Interactive List

##### Single line

```html
<div className='in-skeleton-interactive-list -density-default -has-background'>
  <ul className='_list'>
    <li className='_item'>
      <div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </div>
    </li>
    <li className='_item'>
      <div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
        </div>
        <div className='_trailing'>
          <div className='_input'>
            <div className='in-skeleton-checkbox'></div>
          </div>
        </div>
      </div>
    </li>
    <li className='_item'>
      <div>
        <div className='_leading'>
          <div className='_input'>
            <div className='in-skeleton-checkbox'></div>
          </div>
        </div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </div>
    </li>
    <li className='_item'>
      <div>
        <div className='_leading'>
          <div className='_avatar'>
            <div className='in-skeleton-avatar -size-m'></div>
          </div>
        </div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
        </div>
        <div className='_trailing'>
          <div className='_input'>
            <div className='in-skeleton-checkbox'></div>
          </div>
        </div>
      </div>
    </li>
    <li className='_item'>
      <div>
        <div className='_leading'>
          <div className='_media -size-m'>
            <div className='_thumbnail'>
              <span className='_skeleton'></span>
            </div>
          </div>
        </div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
        </div>
        <div className='_trailing'>
          <div className='_input'>
            <div className='in-skeleton-checkbox'></div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
```

##### Multi lines

```html
<div className='in-skeleton-interactive-list -density-default'>
  <ul className='_list'>
    <li className='_item'>
      <div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
          <div className='_description'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </div>
    </li>
    <li className='_item'>
      <div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
          <div className='_description'>
            <span className='_skeleton'></span>
          </div>
        </div>
        <div className='_trailing'>
          <div className='_input'>
            <div className='in-skeleton-checkbox'></div>
          </div>
        </div>
      </div>
    </li>
    <li className='_item'>
      <div>
        <div className='_leading'>
          <div className='_input'>
            <div className='in-skeleton-checkbox'></div>
          </div>
        </div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
          <div className='_description'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </div>
    </li>
    <li className='_item'>
      <div>
        <div className='_leading'>
          <div className='_avatar'>
            <div className='in-skeleton-avatar -size-m'></div>
          </div>
        </div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
          <div className='_description'>
            <span className='_skeleton'></span>
          </div>
        </div>
        <div className='_trailing'>
          <div className='_input'>
            <div className='in-skeleton-checkbox'></div>
          </div>
        </div>
      </div>
    </li>
    <li className='_item'>
      <div>
        <div className='_leading'>
          <div className='_media -size-s'>
            <div className='_thumbnail'>
              <span className='_skeleton'></span>
            </div>
          </div>
        </div>
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
          <div className='_description'>
            <span className='_skeleton'></span>
          </div>
        </div>
        <div className='_trailing'>
          <div className='_input'>
            <div className='in-skeleton-checkbox'></div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
```

#### Interactive Table

```html
<table className='in-skeleton-interactive-table'>
  <thead className='-is-sticky'>
    <tr>
      <th style={{ width: '4.5rem' }}>
        <div className='in-skeleton-checkbox'></div>
      </th>
      <th style={{ width: '5.5rem' }}></th>
      <th
        role='columnheader'
        scope='col'
        style={{ width: '6rem' }}
      >
        <span className='_skeleton'></span>
      </th>
      <th
        role='columnheader'
        scope='col'
      >
        <span className='_skeleton'></span>
      </th>
      <th
        className='-align-end'
        role='columnheader'
        scope='col'
        style={{ width: '8rem' }}
      >
        <span className='_skeleton'></span>
      </th>
      <th
        className='-align-end'
        role='columnheader'
        scope='col'
        style={{ width: '8rem' }}
      >
        <span className='_skeleton'></span>
      </th>
      <th style={{ width: '4.5rem' }}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className='in-skeleton-checkbox'></div>
      </td>
      <td>
        <div className='_media'>
          <div className='_thumbnail'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div className='in-skeleton-checkbox'></div>
      </td>
      <td>
        <div className='_media'>
          <div className='_thumbnail'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div className='in-skeleton-checkbox'></div>
      </td>
      <td>
        <div className='_media'>
          <div className='_thumbnail'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div className='in-skeleton-checkbox'></div>
      </td>
      <td>
        <div className='_media'>
          <div className='_thumbnail'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <div className='in-skeleton-checkbox'></div>
      </td>
      <td>
        <div className='_media'>
          <div className='_thumbnail'>
            <span className='_skeleton'></span>
          </div>
        </div>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>
```

#### 独自の Skeleton を作成する

対応する Skeleton が用意されていないコンポーネントには、以下のプロパティを指定して独自の Skeleton を作成できます。

<table>
  <thead>
    <tr>
      <th></th>
      <th>役割</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Width</th>
      <td>Skeleton の幅を決定する</td>
    </tr>
    <tr>
      <th>Height</th>
      <td>Skeleton の高さを決定する</td>
    </tr>
    <tr>
      <th>Radius</th>
      <td>Skeleton の角丸の大きさを決定する</td>
    </tr>
  </tbody>
</table>

### 5. ステート (States)

#### 読み込みの開始

コンテンツの読み込みを開始すると、Skeleton が表示されます。

#### 読み込み中

読み込み処理の進行中、Skeleton は継続的にアニメーションを表示します。

#### 読み込みの完了

コンテンツの読み込みが完了すると、Skeleton は非表示となり、実際のコンテンツが表示されます。

#### 読み込みの失敗

読み込みに失敗した場合は、失敗の理由をユーザーに通知し、次に実行可能なアクションを明確に提示します。

### 6. アクセシビリティ (Accessibility)

このコンポーネント固有のチェック項目です。コントラスト・フォーカス可視化など全コンポーネント共通の原則は[アクセシビリティガイドライン](https://design.pepabo.com/foundation/accessibility-guidelines/)を参照してください。

- Skeleton 自体は装飾要素として扱い、`aria-hidden="true"` を設定してスクリーンリーダーから読み上げられないようにする
- 読み込みが進行中であることはルート領域に `aria-busy="true"` を設定して伝える
- 読み込みが完了したら `aria-busy` を `false` に切り替え、実際のコンテンツに差し替える
- アニメーションが激しくなりすぎないようにし、`prefers-reduced-motion` 設定を尊重する

### 7. ライティング (Writing)

Skeleton 自体はテキストを持たないため、ライティング上の固有ルールはありません。読み込み失敗時のエラーメッセージは、Progress Indicator の[ライティング](./progress-indicator#7-ライティング-writing)に準じます。

<!-- design-doc:end -->
