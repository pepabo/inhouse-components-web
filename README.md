# Inhouse Components for the web

- [Installation & Usage](packages/inhouse-components-web/README.md)

## Components

- [App Bar](packages/app-bar)
- [Bottom Navigation](packages/bottom-navigation)
- [Button](packages/button)
- [Card](packages/card)
- [Checkbox](packages/checkbox)
- [Container](packages/container)
- [Description List](packages/description-list)
- [Grid](packages/grid)
- [Icon](packages/icon)
- [Interactive List](packages/interactive-list)
- [Interactive Table](packages/interactive-table)
- [List](packages/list)
- [Navigation Drawer](packages/navigation-drawer)
- [Progress Indicator](packages/progress-indicator)
- [Radio](packages/radio)
- [Select](packages/select)
- [Side Navigation](packages/side-navigation)
- [Snackbar](packages/snackbar)
- [Table](packages/table)
- [Textfield](packages/textfield)

### Storybook
[inhouse-components-web](https://pepabo.github.io/inhouse-components-web)

## Customization

components-web にはビルド済みの production ready な CSS とは別で、 Sass と NPM を使った flavor によるカスタマイズの仕組みが備わっています。

components-web では各コンポーネント Sass がインストール必須にはなっていないのですが、各コンポーネントを全てインストールすることによって Sass から CSS をビルドできるようにしています。このときに、 pepabo-inhouse/flavor に相当する内容を持ったパッケージ（以降 pepabo-inhouse/flavor 互換パッケージと表記）を pepabo-inhouse/flavor という名前でインストールすると解決されるようになっています。

それを実現するには以下のようなコマンド、あるいは package.json の設定をするとよいでしょう。

```bash
$ npm install @pepabo-inhouse/flavor@npm:@some-org/some-flavor --save
```

```jsonc
{
  // 省略
  "dependencies": {
    "@pepabo-inhouse/flavor": "npm:@some-org/some-flavor@1.0.0"
  }
  // 省略
}
```

## Development philosophy

ウェブページ、ひいてはコンポーネントを設計するにあたって、既存のデザインライブラリやコンポーネントライブラリではすでに用意されたクラス名を当て込む、あるいは既存の名前のコンポーネントを組み立てることで実現できると考えられてきました。しかし、このアプローチには2つの問題点があります。

* ビルド済み CSS をデザインライブラリとして使う場合、捨てにくい（どこで使っているのかわからなくなる）
* それが実質何のコンポーネントであるかという実装をページ側が知る必要があり、セマンティックではなく構造が優先されてしまう

この問題を解決するため、Inhouse では構造的なコンポーネントではなくセマンティックなコンポーネントファーストでの実装を勧めています。

```html
<ul class="article-category-list">
  <li class="article-category-item">
    <a class="article-category-link" href="/categories/frontend">フロントエンド</a>
  </li>
</div>
```

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.article-category-link {
  @include inhouse.button-style;
}
```

とすることで、その要素がどういう意味を持ったものなのかを示しつつ、 @pepabo-inhouse/components-web をアンインストールすると css のビルドが壊れるので先ほど出た問題点を解決しうると考えています。

これをエイリアシング（ある構造コンポーネントに別のクラス名を当てること、エイリアシング自体は別名を当てることの総称なのでこのコンテクストにおいてのみそう呼びます）と呼ぶようにします。今のところは Sass でエイリアシングを実現できる mixin か extend を活用しています。

もちろん、これをやるとコードの量が増えますし、設計は面倒なのでクラスをそのまま当てたいという要望もあるかと思われます。しかし、「本当に将来の負債にならないか」「セマンティックに妥当か」議論した上で in-xxx クラスを当てるべきでしょう。

## Development

```bash
npm install

# Sass を書きたい場合、 watch すると .scss の保存を検知してコンパイルできるか自動で試してくれます
npm run watch

# Storybook を開発したい場合
npm run start
```

### Testing

開発中に個別のコンポーネントをテストしたくなった場合、 `npm run test -- adapter` など（ `--` 以降にはコンポーネント名を適宜置き換える）というコマンドでテストすることができます。

## Troubleshooting

### body のウェブフォントが動かない

Next.js などを使っていて `@import url()` が複数回指定されている可能性があります。 `@include flavor.icon-font();` を重複して記述してしまっていないかを確認してください。
