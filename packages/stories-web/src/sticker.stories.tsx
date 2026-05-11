import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import StickerDemo, { Props } from './components/demo/StickerDemo'
import SkeletonSticker, { Props as SkeletonStickerProps } from './components/sticker/SkeletonSticker'

export default {
  title: 'Components/Sticker',
  component: StickerDemo,
} as Meta

const Template: StoryFn<Props> = (args) => <StickerDemo {...args} />
const SkeletonTemplate: StoryFn<SkeletonStickerProps> = (args) => <SkeletonSticker {...args} />

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  size: 'm',
  width: '5rem',
}
