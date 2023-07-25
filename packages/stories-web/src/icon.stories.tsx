import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Icon, { Props } from './components/Icon'

export default {
  title: 'Components/Icon',
  component: Icon
} as Meta

const Template: StoryFn<Props> = (args) => <Icon {...args} />

export const Index = Template.bind({})
Index.args = {
  icon: 'heart'
}
