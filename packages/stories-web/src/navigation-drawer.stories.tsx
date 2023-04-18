import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import NavigationDrawerDemo, { Props } from './components/demo/NavigationDrawerDemo'

export default {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawerDemo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: Story<Props> = (args) => <NavigationDrawerDemo {...args} />

export const Index = Template.bind({})
Index.args = {
  layer: '1'
}
