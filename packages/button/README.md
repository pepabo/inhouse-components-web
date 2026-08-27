# Inhouse Button

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/button

# or

$ yarn add @pepabo-inhouse/button
```

### Mixins

#### `style($options: null)`

ボタンのスタイルを出力します。`$options` の指定の有無で出力される内容が変わります。

- `$options` を省略した場合は、デフォルトのスタイルに加えてすべてのmodifier（`-appearance-*`, `-color-*`, `-brightness-*`, `-shape-*`, `-size-*`, `-width-*`）のスタイルを出力します。`export` が出力する `.in-button` と同じ内容です。
- `$options` を明示的に指定した場合は、指定した値（未指定の属性はデフォルト値）のスタイルだけを出力し、modifierのスタイルは出力しません。mixinベース（エイリアシング）でスタイルを固定して使う場合は、こちらの使い方をすることで不要なCSSの出力を避けられます。

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

// 指定したオプションの組み合わせのスタイルだけが出力される
.button-submit {
  @include inhouse.button-style(
    $options: (
      appearance: flat,
      color: neutral,
      shape: circle,
      size: m,
      width: auto,
    )
  );
}

// 従来どおり、デフォルトのスタイルとすべてのmodifierのスタイルが出力される
.button-legacy {
  @include inhouse.button-style;
}
```

#### `skeleton-style($options: null)`

スケルトンボタンのスタイルを出力します。`style` と同様に、`$options` を省略した場合はすべてのmodifier（`-shape-*`, `-size-*`, `-width-*`）のスタイルを、明示的に指定した場合は指定した値（未指定の属性はデフォルト値）のスタイルだけを出力します。

#### `style-with-variants($variants: (), $default-style: ...)`

デフォルトのスタイルと、`$variants` で指定した属性・値の組み合わせをmodifierとして出力します。modifierとして利用したい値を絞りたい場合に使います。

```scss
@use '@pepabo-inhouse/button' as button;

.my-button {
  @include button.style-with-variants(
    $variants: (
      appearance: (flat, solid),
      color: (primary, neutral),
      size: (m, l)
    )
  );
}
```

## デザインドキュメント (Design Documentation)

コンポーネントの使い分け・バリエーション・ステート・アクセシビリティ・ライティングの規約は、[Pepabo Design の Button コンポーネントのドキュメント](https://design.pepabo.com/inhouse/components/button/)を参照してください。
