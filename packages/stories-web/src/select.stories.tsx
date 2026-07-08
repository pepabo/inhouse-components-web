import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import SelectDemo, { Props } from './components/demo/SelectDemo'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Select',
  component: SelectDemo,
  args: {
    appearance: 'outlined',
    size: 'm',
    color: 'neutral',
    width: 'auto',
  }
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <SelectDemo {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {}
