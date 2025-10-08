import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Circular, { Props } from './components/progress-indicator/Circular'
import Button from './components/button/Button'

export default {
  title: 'Components/ProgressIndicator/Circular',
  component: Circular
} as Meta

const Template: StoryFn<Props> = (args) => <Circular {...args} />

export const Determinate = Template.bind({})
Determinate.args = {
  max: 100,
  value: 50,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  max: 100,
}

export const ButtonWithParentColor = Template.bind({})
ButtonWithParentColor.args = {
  max: 100,
  isParentColor: true,
}
ButtonWithParentColor.decorators = [
  (Story) => (
    <div>
      <Button
        appearance="outlined"
        color="interactive"
        size="m"
        width='half'
        leading={<Story />}
      />
      <Button
        appearance="filled"
        color="interactive"
        size="m"
        width='half'
        leading={<Story />}
      />
    </div>
  ),
]
