import { createAppearanceStories } from './helper'
import 'inhouse-components-web/inhouse-components-web.scss'

export default { title: 'Components/Textfield' }

export const Proto = (): string => `
<span class="in-textfield">
  <input class="in-textfield__input" type="text" value="Textfield">
</span>

<span class="in-textfield">
  <textarea class="in-textfield__input">Textfield</textarea>
</span>
`

const appearanceStories = createAppearanceStories(appearance => `
<span class="in-textfield ${appearance}">
  <input class="in-textfield__input" type="text" value="Textfield">
</span>

<span class="in-textfield ${appearance}">
  <input class="in-textfield__input" type="text" value="Textfield" disabled>
</span>

<span class="in-textfield ${appearance}">
  <textarea class="in-textfield__input">Textfield</textarea>
</span>

<span class="in-textfield ${appearance}">
  <textarea class="in-textfield__input" disabled>Textfield</textarea>
</span>
`)

// no text appearance
export const { AppearanceFilled, AppearanceOutlined } = appearanceStories

const semanticsStories = createAppearanceStories(appearance => `
<div>
  <span class="in-textfield ${appearance} -neutral">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -neutral">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>
</div>

<div>
  <span class="in-textfield ${appearance} -info">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -info">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>
</div>

<div>
  <span class="in-textfield ${appearance} -positive">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -positive">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>
</div>

<div>
  <span class="in-textfield ${appearance} -notice">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -notice">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>
</div>

<div>
  <span class="in-textfield ${appearance} -negative">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -negative">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>
</div>
`, { prefix: 'Semantics' })

export const { SemanticsFilled, SemanticsOutlined } = semanticsStories

const sizeStories = createAppearanceStories(appearance => `
<div>
  <span class="in-textfield ${appearance} -s">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -m">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -l">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>
</div>

<div>
  <span class="in-textfield ${appearance} -s">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>

  <span class="in-textfield ${appearance} -m">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>

  <span class="in-textfield ${appearance} -l">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>
</div>
`, { prefix: 'Size' })

export const { SizeFilled, SizeOutlined } = sizeStories

const widthStories = createAppearanceStories(appearance => `
<div>
  <span class="in-textfield ${appearance} -width-full">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -width-half">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>

  <span class="in-textfield ${appearance} -width-third">
    <input class="in-textfield__input" type="text" value="Textfield">
  </span>
</div>

<div>
  <span class="in-textfield ${appearance} -width-full">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>

  <span class="in-textfield ${appearance} -width-half">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>

  <span class="in-textfield ${appearance} -width-third">
    <textarea class="in-textfield__input">Textfield</textarea>
  </span>
</div>
`, { prefix: 'Width' })

export const { WidthFilled, WidthOutlined } = widthStories
