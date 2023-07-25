# Inhouse Components for the web

- [Installation & Usage](packages/inhouse-components-web/README.md)
- [Storybook](https://pages.git.pepabo.com/inhouse/components-web/)

## Components

- [App Bar](packages/app-bar)
- [Bottom Navigation](packages/bottom-navigation)
- [Button](packages/button)
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
- [Table](packages/table)
- [Textfield](packages/textfield)

## Customization

components-web にはビルド済みの production ready な CSS とは別で、 Sass と NPM を使った flavor によるカスタマイズの仕組みが備わっています。

components-web では各コンポーネント Sass がインストール必須にはなっていないのですが、各コンポーネントを全てインストールすることによって Sass から CSS をビルドできるようにしています。このときに、 inhouse/flavor に相当する内容を持ったパッケージ（以降 inhouse/flavor 互換パッケージと書きます）を inhouse/flavor という名前でインストールすると解決されるようになっています。 [examples/flavor](examples/flavor) に実際動く例があります。

わかりやすい方法としては inhouse/flavor を fork して書き換えて使うのがいちばんわかりやすいかと思われます。

inhouse/flavor 互換パッケージが要件を満たしているかのチェックツールは https://git.pepabo.com/inhouse/flavor-spec （現在開発中）にあります。

## Development philosophy

この章の文責 @gyugyu

ウェブページ、ひいてはコンポーネントを設計するにあたって、既存のデザインライブラリやコンポーネントライブラリではすでに用意されたクラス名を当て込む、あるいは既存の名前のコンポーネントを組み立てることで実現できると考えられてきました。しかし、このアプローチには２つの問題点があります。

* ビルド済み css をデザインライブラリとして使う場合、捨てにくい（どこで使っているのかわからなくなる）
* それが実質何のコンポーネントであるかという実装をページ側が知る必要があり、セマンティックではなく構造が優先されてしまう

ですので、 inhouse ではこの問題を解決するためにセマンティックなコンポーネント（構造的なコンポーネントではなく）ファーストで実装するということを勧めています。どういうことかというと以下のような書き方が例です。

```html
<ul class="article-category-list">
  <li class="article-category-item">
    <a class="article-category-link" href="/categories/frontend">フロントエンド</a>
  </li>
</div>
```

```scss
@use 'inhouse-components-web';

.article-category-link {
  @include inhouse-components-web.button-style;
}
```

こうすることで、その要素がどういう意味を持ったものなのかを示しつつ、 inhouse-components-web をアンインストールすると css のビルドがぶっ壊れるので先ほど出た問題点を解決しうると考えています。

これをエイリアシング（ある構造コンポーネントに別のクラス名を当てること、エイリアシング自体は別名を当てることの総称なのでこのコンテクストにおいてのみそう呼びます）と呼ぶようにします。今のところ Sass にはエイリアシングを実現する方法は mixin か extend なのでそのようにやっています。

もちろん、これをやるとコードの量が増えますし、設計は面倒なのでクラスをそのまま当てたいという要望もあるかと思われます。しかし、「それが本当に将来の負債にならないか、そうすることがセマンティックに妥当か」は議論した上で in-xxx クラスを当てるべきであると主張します。

## Development

```bash
npm login --scope=@inhouse --registry=https://npm.git.pepabo.com
```

事前に Username と Password でのログインが必要です。  
Password は https://git.pepabo.com/settings/tokens/new から read:packages 権限にチェックして作成した Personal access token を入力します。

```bash
npm install
npm run bootstrap

# Sass を書きたい場合、 watch すると .scss の保存を検知してコンパイルできるか自動で試してくれます
npm run watch

# Storybook を開発したい場合
npm run start
```

### Testing

開発中に個別のコンポーネントをテストしたくなった場合、 `npm run test -- adapter` など（ `--` 以降にはコンポーネント名を適宜置き換える）というコマンドでテストすることができます。

### Publishing

Slack workflowの「inhouseをリリースするやつ」「[flavorをリリースするやつ](https://git.pepabo.com/inhouse/flavor-publisher)」「tokensをリリースするやつ」を使ってください。各サービスのflavorをリリースする機能も「flavorをリリースするやつ」にあります。

バージョンの粒度は [セマンティックバージョニング](https://semver.org/lang/ja/) に準拠します。 `package.json` にある `version` はworkflowで変更されるので、手動で変更する必要はありません。

## Troubleshooting

### body のウェブフォントが動かない

Next.js などを使っていて `@import url()` が複数回指定されている可能性があります。 `@include flavor.export;` や `import '@inhouse/inhouse-components-web/inhouse-components-web.scss'` を重複して記述してしまっていないかを確認してください。
