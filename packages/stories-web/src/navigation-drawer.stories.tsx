import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import NavigationDrawerDemo, { Props } from './components/demo/NavigationDrawerDemo'

export default {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawerDemo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: StoryFn<Props> = (args) => <NavigationDrawerDemo {...args} />

export const Index = Template.bind({})
Index.args = {
  layer: '1'
}
