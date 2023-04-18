import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Icon, { Props } from './components/Icon'

export default {
  title: 'Components/Icon',
  component: Icon
} as Meta

const Template: Story<Props> = (args) => <Icon {...args} />

export const Index = Template.bind({})
Index.args = {
  icon: 'heart'
}
