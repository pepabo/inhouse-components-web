import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import TextFieldDemo, { Props } from './components/demo/TextFieldDemo'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/TextField',
  component: TextFieldDemo,
  args: {
    appearance: 'outlined',
    size: 'm',
    color: 'neutral',
    width: 'auto',
  }
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <TextFieldDemo {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {}
