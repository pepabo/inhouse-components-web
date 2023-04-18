import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Radio, { Props } from './components/radio/Radio'
import SkeletonRadio from './components/radio/SkeletonRadio'

export default {
  title: 'Components/Radio',
  component: Radio
} as Meta

const Template: Story<Props> = (args) => <Radio {...args} />
const SkeletonTemplate: Story = () => <SkeletonRadio />

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
