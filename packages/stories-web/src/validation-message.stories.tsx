import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import ValidationMessage, { Props } from './components/ValidationMessage'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Validation Message',
  component: ValidationMessage,
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <ValidationMessage {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {
  children: '必須項目です',
  color: 'negative',
}
