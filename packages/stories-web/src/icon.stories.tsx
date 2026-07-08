import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Icon, { Props } from './components/Icon'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Icon',
  component: Icon
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <Icon {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {
  icon: 'heart'
}
