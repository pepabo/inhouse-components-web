# Inhouse Dialog

モーダルダイアログコンポーネントのSCSSライブラリ

## Usage

### Installation

```bash
$ npm install @pepabo-inhouse/dialog

# or

$ yarn add @pepabo-inhouse/dialog
```

### 基本使用法

```scss
@use "@pepabo-inhouse/dialog" as dialog;

// モーダルスタイルを適用
.my-dialog-modal {
  @include dialog.modal-style;
}

// ダイアログコンテンツスタイルを適用
.my-dialog {
  @include dialog.dialog-style;
}
```

### サイズオプション

```scss
// Sサイズのダイアログ
.my-dialog-small {
  @include dialog.dialog-style((size: s));
}

// Lサイズのダイアログ
.my-dialog-large {
  @include dialog.dialog-style((size: l));
}
```

### CSSクラス

パッケージには以下のクラスが含まれています：

- `.in-dialog-modal`: モーダルオーバーレイとコンテナ
- `.in-dialog`: ダイアログコンテンツ

### HTML構造例

```html
<div class="in-dialog-modal">
  <div class="in-dialog-modal__overlay"></div>
  <div class="in-dialog-modal__container">
    <div class="in-dialog">
      <div class="in-dialog__header">
        <h3 class="in-dialog__title">ダイアログタイトル</h3>
      </div>
      <div class="in-dialog__content">
        <p>ダイアログの内容</p>
      </div>
      <div class="in-dialog__footer">
        <button>キャンセル</button>
        <button>確認</button>
      </div>
    </div>
  </div>
</div>
```
