import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import ValidationMessage, { Props } from './components/ValidationMessage'

export default {
  title: 'Components/Validation Message',
  component: ValidationMessage,
} as Meta

const Template: StoryFn<Props> = (args) => <ValidationMessage {...args} />

export const Index = Template.bind({})
Index.args = {
  children: '必須項目です',
  color: 'negative',
}
