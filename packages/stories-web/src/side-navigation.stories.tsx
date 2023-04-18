import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import SideNavigationDemo, { Props } from './components/demo/SideNavigationDemo'

export default {
  title: 'Components/SideNavigation',
  component: SideNavigationDemo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: Story<Props> = (args) => <SideNavigationDemo {...args} />

export const Index = Template.bind({})
Index.args = {}
