import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import TextFieldDemo, { Props } from './components/demo/TextFieldDemo'

export default {
  title: 'Components/TextField',
  component: TextFieldDemo
} as Meta

const Template: Story<Props> = (args) => <TextFieldDemo {...args} />

export const Index = Template.bind({})
Index.args = {}
