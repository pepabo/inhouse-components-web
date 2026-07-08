import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import StickerDemo, { Props } from './components/demo/StickerDemo'
import SkeletonSticker, { Props as SkeletonStickerProps } from './components/sticker/SkeletonSticker'
import StyleComparison from './components/demo/StyleComparison'

export default {
  title: 'Components/Sticker',
  component: StickerDemo,
} as Meta

const Template: StoryFn<Props> = (args) => (
  <StyleComparison>
    <StickerDemo {...args} />
  </StyleComparison>
)
const SkeletonTemplate: StoryFn<SkeletonStickerProps> = (args) => (
  <StyleComparison>
    <SkeletonSticker {...args} />
  </StyleComparison>
)

export const Index = Template.bind({})
Index.args = {}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  size: 'm',
  width: '5rem',
}
