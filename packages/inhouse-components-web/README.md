# Inhouse Components Web

## Installation

```bash
$ npm install @inhouse/components-web

# or

$ yarn add @inhouse/components-web
```

## Usage

### Mixin base (highly recommended)

```scss
@use '@inhouse/components-web' as inhouse;

.some-component {
  @include inhouse.button-style;
}
```

### Class base

```scss
@use '@inhouse/components-web/inhouse-components-web';

// apply .in-button etc.
```
