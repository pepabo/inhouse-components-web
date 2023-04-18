import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import ButtonDemo, { Props } from './components/demo/ButtonDemo'
import SkeletonButton, { Props as SkeletonButtonProps } from './components/button/SkeletonButton'

export default {
  title: 'Components/Button',
  component: ButtonDemo
} as Meta

const Template: Story<Props> = (args) => <ButtonDemo {...args} />
const SkeletonTemplate: Story<SkeletonButtonProps> = (args) => <SkeletonButton {...args} />

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  shape: 'square',
  size: 'm',
  width: 'full'
}
