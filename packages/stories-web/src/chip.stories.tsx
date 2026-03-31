import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import ChipDemo, { Props } from './components/chip/ChipDemo'
import SkeletonChip, { Props as SkeletonChipProps } from './components/chip/SkeletonChip'

export default {
  title: 'Components/Chip',
  component: ChipDemo
} as Meta

const Template: StoryFn<Props> = (args) => <ChipDemo {...args} />
const SkeletonTemplate: StoryFn<SkeletonChipProps> = (args) => <SkeletonChip {...args} />

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  size: 'm',
  width: '5rem'
}
