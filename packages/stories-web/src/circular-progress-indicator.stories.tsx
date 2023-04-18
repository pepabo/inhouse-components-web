import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Circular, { Props } from './components/progress-indicator/Circular'

export default {
  title: 'Components/ProgressIndicator/Circular',
  component: Circular
} as Meta

const Template: Story<Props> = (args) => <Circular {...args} />

export const Determinate = Template.bind({})
Determinate.args = {
  max: 100,
  value: 50,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  max: 100,
}
