import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import SideNavigationDemo, { Props } from './components/demo/SideNavigationDemo'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/SideNavigation',
  component: SideNavigationDemo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <SideNavigationDemo {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {}
