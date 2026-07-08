import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Avatar, { Props } from './components/avatar/Avatar'
import SkeletonAvatar, { Props as SkeletonProps } from './components/avatar/SkeletonAvatar'
import fixture from '../assets/fixture.jpg'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <Avatar {...args} />
  </StyleComparison>
)
const SkeletonTemplate: StoryFn<SkeletonProps> = (args) => (
  <StyleComparison>
    <SkeletonAvatar {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {
  size: 'm',
  src: fixture,
  srcSet: ''
}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  size: 'm'
}
