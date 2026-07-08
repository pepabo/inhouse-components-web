import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Radio, { Props } from './components/radio/Radio'
import SkeletonRadio from './components/radio/SkeletonRadio'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Radio',
  component: Radio
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <Radio {...args} />
  </StyleComparison>
)
const SkeletonTemplate: StoryFn = () => (
  <StyleComparison>
    <SkeletonRadio />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
