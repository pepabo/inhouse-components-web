import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Linear, { Props } from './components/progress-indicator/Linear'

export default {
  title: 'Components/ProgressIndicator/Linear',
  component: Linear
} as Meta

const Template: Story<Props> = (args) => <Linear {...args} />

export const Determinate = Template.bind({})
Determinate.args = {
  max: 100,
  value: 50,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  max: 100,
}
