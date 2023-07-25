import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Checkbox, { Props } from './components/checkbox/Checkbox'
import SkeletonCheckbox from './components/checkbox/SkeletonCheckbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta

const Template: StoryFn<Props> = (args) => <Checkbox {...args} />
const SkeletonTemplate: StoryFn = () => <SkeletonCheckbox />

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
