import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import ChipDemo, { Props } from './components/demo/ChipDemo'
import SkeletonChip, { Props as SkeletonChipProps } from './components/chip/SkeletonChip'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Chip',
  component: ChipDemo
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <ChipDemo {...args} />
  </StyleComparison>
)
const SkeletonTemplate: StoryFn<SkeletonChipProps> = (args) => (
  <StyleComparison>
    <SkeletonChip {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  size: 'm',
  width: '5rem'
}
