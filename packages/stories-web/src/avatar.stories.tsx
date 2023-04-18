import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Avatar, { Props } from './components/avatar/Avatar'
import SkeletonAvatar, { Props as SkeletonProps } from './components/avatar/SkeletonAvatar'

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta

const Template: Story<Props> = (args) => <Avatar {...args} />
const SkeletonTemplate: Story<SkeletonProps> = (args) => <SkeletonAvatar {...args} />

export const Index = Template.bind({})
Index.args = {
  size: 'm',
  src: 'https://picsum.photos/id/177/200/300',
  srcSet: ''
}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  size: 'm'
}
