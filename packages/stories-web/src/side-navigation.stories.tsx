import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import SideNavigationDemo, { Props } from './components/demo/SideNavigationDemo'

export default {
  title: 'Components/SideNavigation',
  component: SideNavigationDemo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: StoryFn<Props> = (args) => <SideNavigationDemo {...args} />

export const Index = Template.bind({})
Index.args = {}
