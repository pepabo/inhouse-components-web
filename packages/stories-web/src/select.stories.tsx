import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import SelectDemo, { Props } from './components/demo/SelectDemo'

export default {
  title: 'Components/Select',
  component: SelectDemo
} as Meta

const Template: Story<Props> = (args) => <SelectDemo {...args} />

export const Index = Template.bind({})
Index.args = {}
