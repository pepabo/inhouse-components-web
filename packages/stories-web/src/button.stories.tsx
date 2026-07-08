import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import ButtonDemo, { Props } from './components/demo/ButtonDemo'
import SkeletonButton, { Props as SkeletonButtonProps } from './components/button/SkeletonButton'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Button',
  component: ButtonDemo
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <ButtonDemo {...args} />
  </StyleComparison>
)
const SkeletonTemplate: StoryFn<SkeletonButtonProps> = (args) => (
  <StyleComparison>
    <SkeletonButton {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  shape: 'square',
  size: 'm',
  width: 'full'
}
