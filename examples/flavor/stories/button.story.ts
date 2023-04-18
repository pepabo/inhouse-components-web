import { APPEARANCES, Story, createAppearanceStories, modifiersToStoryName } from './helper'
import 'inhouse-components-web/inhouse-components-web.scss'

const globalModifiers = {
  appearances: ['-text', '-filled', '-outlined'],
  semantics: ['-neutral', '-info', '-positive', '-notice', '-negative'],
  sizes: ['-s', '-m', '-l'],
  elevation: ['-level-minus1', '-level-0', '-level-1', '-level-2', '-level-3', '-level-4'],
  width: ['-width-full', '-width-half', '-width-third']
}

export default { title: 'Components/Button' }

export const Proto = (): string => '<button class="in-button">Button</button>'

const appearanceStories = createAppearanceStories(appearance => `
<button class="in-button ${appearance}">Button</button>
<button class="in-button ${appearance}" disabled>Button</button>
`)

export const { AppearanceText, AppearanceFilled, AppearanceOutlined } = appearanceStories

function createButtonStory(appearance: string, classes: string[]): Story {
  return () => {
    const wrapper = document.createElement('div');
    classes.map(klass => {
      const button = document.createElement('button')
      button.classList.add('in-button', appearance, klass)
      button.innerText = 'Button'
      return button
    }).forEach(element => wrapper.appendChild(element))
    return wrapper
  }
}

function createAppearanceBasedStories(prefix: string, classes: string[]): { [key: string]: Story } {
  return APPEARANCES.reduce<{ [key: string]: Story }>((pre, appearance) => {
    const storyName = `${prefix}${modifiersToStoryName(appearance)}`
    const story = createButtonStory(appearance, classes)
    return { ...pre, [storyName]: story }
  }, {})
}

const semanticsStories = createAppearanceBasedStories('Semantics', globalModifiers.semantics)
export const { SemanticsText, SemanticsFilled, SemanticsOutlined } = semanticsStories

const sizeStories = createAppearanceBasedStories('Size', globalModifiers.sizes)
export const { SizeText, SizeFilled, SizeOutlined } = sizeStories

const elevationStories = createAppearanceBasedStories('Elevation', globalModifiers.elevation)
export const { ElevationText, ElevationFilled, ElevationOutlined } = elevationStories

const widthStories = createAppearanceBasedStories('Width', globalModifiers.width)
export const { WidthText, WidthFilled, WidthOutlined } = widthStories

const iconStories = createAppearanceStories(appearance => `
<div>
  <button class="in-button ${appearance}"><i class="in-button__icon in-icon" aria-hidden="true">search</i><span>Button</span></button>
  <button class="in-button ${appearance}"><span>Button</span><i class="in-button__icon in-icon" aria-hidden="true">chevron_right</i></button>
</div>

<div>
  <button class="in-button ${appearance} -s"><i class="in-button__icon in-icon" aria-hidden="true">search</i><span>Button</span></button>
  <button class="in-button ${appearance} -m"><i class="in-button__icon in-icon" aria-hidden="true">search</i><span>Button</span></button>
  <button class="in-button ${appearance} -l"><i class="in-button__icon in-icon" aria-hidden="true">search</i><span>Button</span></button>
</div>

<div>
  <button class="in-button ${appearance} -s"><span>Button</span><i class="in-button__icon in-icon" aria-hidden="true">chevron_right</i></button>
  <button class="in-button ${appearance} -m"><span>Button</span><i class="in-button__icon in-icon" aria-hidden="true">chevron_right</i></button>
  <button class="in-button ${appearance} -l"><span>Button</span><i class="in-button__icon in-icon" aria-hidden="true">chevron_right</i></button>
</div>
`, { prefix: 'Icon' })

export const { IconText, IconFilled, IconOutlined } = iconStories
