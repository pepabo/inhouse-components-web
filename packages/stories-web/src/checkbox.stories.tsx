import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Checkbox, { Props } from './components/checkbox/Checkbox'
import SkeletonCheckbox from './components/checkbox/SkeletonCheckbox'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <Checkbox {...args} />
  </StyleComparison>
)
const SkeletonTemplate: StoryFn = () => (
  <StyleComparison>
    <SkeletonCheckbox />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
