import camelcase from 'camelcase'

export type Story = () => string | HTMLElement

export const APPEARANCES = ['-text', '-filled', '-outlined']

interface CreateAppearanceStoriesOption {
  prefix?: string
}

export function createAppearanceStories(template: (appearance: string) => string, option: CreateAppearanceStoriesOption = {}): { [key: string]: Story } {
  const prefix = option.prefix ?? 'Appearance'
  return APPEARANCES
    .reduce<{ [key: string]: Story }>((pre, appearance) => {
      const storyName = `${prefix}${modifiersToStoryName(appearance)}`
      const story = () => template(appearance)
      return { ...pre, [storyName]: story }
    }, {})
}

export function modifiersToStoryName(modifier: string): string {
  return camelcase(modifier.replace(/^-/, ''), {pascalCase: true})
}
