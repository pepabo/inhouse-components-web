# Inhouse Components Web

## Installation

```bash
$ npm install @pepabo-inhouse/components-web

# or

$ yarn add @pepabo-inhouse/components-web
```

## Usage

### Mixin base (highly recommended)

```scss
@use '@pepabo-inhouse/components-web' as inhouse;

.some-component {
  @include inhouse.button-style;
}
```

### Class base

```scss
@use '@pepabo-inhouse/components-web/inhouse-components-web';

// apply .in-button etc.
```
