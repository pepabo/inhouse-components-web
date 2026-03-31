import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Sticker, { Props } from './components/Sticker'

export default {
  title: 'Components/Sticker',
  component: Sticker,
} as Meta

const Template: StoryFn<Props> = (args) => <Sticker {...args} />

export const Index = Template.bind({})
Index.args = {
  children: 'label',
}
