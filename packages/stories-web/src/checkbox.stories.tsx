import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Checkbox, { Props } from './components/checkbox/Checkbox'
import SkeletonCheckbox from './components/checkbox/SkeletonCheckbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta

const Template: Story<Props> = (args) => <Checkbox {...args} />
const SkeletonTemplate: Story = () => <SkeletonCheckbox />

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
