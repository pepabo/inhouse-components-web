import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Linear, { Props } from './components/progress-indicator/Linear'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/ProgressIndicator/Linear',
  component: Linear
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <Linear {...args} />
  </StyleComparison>
)

export const Determinate = Template.bind({})
Determinate.args = {
  max: 100,
  value: 50,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  max: 100,
}
