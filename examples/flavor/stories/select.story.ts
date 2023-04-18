import { createAppearanceStories } from './helper'
import 'inhouse-components-web/inhouse-components-web.scss'

export default { title: 'Components/Select' }

export const Proto = (): string => `
<div>
  <span class="in-select">
    <select class="in-select__listbox">
      <option class="in-select__option"></option>
      <option class="in-select__option" selected>Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>
</div>

<div>
  <span class="in-select">
    <select class="in-select__listbox" size="3">
      <option class="in-select__option">Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>
</div>
`

const appearanceStories = createAppearanceStories(appearance => `
<div>
  <span class="in-select ${appearance}">
    <select class="in-select__listbox">
      <option class="in-select__option"></option>
      <option class="in-select__option" selected>Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>

  <span class="in-select ${appearance}">
    <select class="in-select__listbox" disabled>
      <option class="in-select__option"></option>
      <option class="in-select__option" selected>Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>
</div>

<div>
  <span class="in-select ${appearance}">
    <select class="in-select__listbox" size="3">
      <option class="in-select__option">Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>

  <span class="in-select ${appearance}">
    <select class="in-select__listbox" size="3" disabled>
      <option class="in-select__option">Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>
</div>
`)

export const { AppearanceFilled, AppearanceOutlined } = appearanceStories

const semanticsStories = createAppearanceStories(appearance => `
<div>
  <span class="in-select ${appearance} -neutral">
    <select class="in-select__listbox">
      <option class="in-select__option"></option>
      <option class="in-select__option" selected>Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>

  <span class="in-select ${appearance} -info">
    <select class="in-select__listbox">
      <option class="in-select__option"></option>
      <option class="in-select__option" selected>Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>

  <span class="in-select ${appearance} -positive">
    <select class="in-select__listbox">
      <option class="in-select__option"></option>
      <option class="in-select__option" selected>Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>

  <span class="in-select ${appearance} -notice">
    <select class="in-select__listbox">
      <option class="in-select__option"></option>
      <option class="in-select__option" selected>Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>

  <span class="in-select ${appearance} -negative">
    <select class="in-select__listbox">
      <option class="in-select__option"></option>
      <option class="in-select__option" selected>Select A</option>
      <option class="in-select__option">Select B</option>
      <option class="in-select__option">Select C</option>
    </select>
    <span class="in-select__icon in-icon">arrow_drop_down</span>
  </span>
</div>
`, { prefix: 'Semantics' })

export const { SemanticsFilled, SemanticsOutlined } = semanticsStories

const sizeStories = createAppearanceStories(appearance => `
<span class="in-select ${appearance} -s">
  <select class="in-select__listbox">
    <option class="in-select__option"></option>
    <option class="in-select__option" selected>Select A</option>
    <option class="in-select__option">Select B</option>
    <option class="in-select__option">Select C</option>
  </select>
  <span class="in-select__icon in-icon">arrow_drop_down</span>
</span>

<span class="in-select ${appearance} -m">
  <select class="in-select__listbox">
    <option class="in-select__option"></option>
    <option class="in-select__option" selected>Select A</option>
    <option class="in-select__option">Select B</option>
    <option class="in-select__option">Select C</option>
  </select>
  <span class="in-select__icon in-icon">arrow_drop_down</span>
</span>

<span class="in-select ${appearance} -l">
  <select class="in-select__listbox">
    <option class="in-select__option"></option>
    <option class="in-select__option" selected>Select A</option>
    <option class="in-select__option">Select B</option>
    <option class="in-select__option">Select C</option>
  </select>
  <span class="in-select__icon in-icon">arrow_drop_down</span>
</span>
`, { prefix: 'Size' })

export const { SizeFilled, SizeOutlined } = sizeStories

const widthStories = createAppearanceStories(appearance => `
<span class="in-select ${appearance} -width-full">
  <select class="in-select__listbox">
    <option class="in-select__option"></option>
    <option class="in-select__option" selected>Select A</option>
    <option class="in-select__option">Select B</option>
    <option class="in-select__option">Select C</option>
  </select>
  <span class="in-select__icon in-icon">arrow_drop_down</span>
</span>

<span class="in-select ${appearance} -width-half">
  <select class="in-select__listbox">
    <option class="in-select__option"></option>
    <option class="in-select__option" selected>Select A</option>
    <option class="in-select__option">Select B</option>
    <option class="in-select__option">Select C</option>
  </select>
  <span class="in-select__icon in-icon">arrow_drop_down</span>
</span>

<span class="in-select ${appearance} -width-third">
  <select class="in-select__listbox">
    <option class="in-select__option"></option>
    <option class="in-select__option" selected>Select A</option>
    <option class="in-select__option">Select B</option>
    <option class="in-select__option">Select C</option>
  </select>
  <span class="in-select__icon in-icon">arrow_drop_down</span>
</span>
`, { prefix: 'Width' })

export const { WidthFilled, WidthOutlined } = widthStories
