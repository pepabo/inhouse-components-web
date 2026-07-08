import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import NavigationDrawerDemo, { Props } from './components/demo/NavigationDrawerDemo'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawerDemo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <NavigationDrawerDemo {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {
  layer: '1'
}
