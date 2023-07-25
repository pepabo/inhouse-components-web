import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Radio, { Props } from './components/radio/Radio'
import SkeletonRadio from './components/radio/SkeletonRadio'

export default {
  title: 'Components/Radio',
  component: Radio
} as Meta

const Template: StoryFn<Props> = (args) => <Radio {...args} />
const SkeletonTemplate: StoryFn = () => <SkeletonRadio />

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
