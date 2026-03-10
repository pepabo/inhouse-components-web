import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Sticker, { Props } from './components/Sticker'

export default {
  title: 'Components/Sticker',
  component: Sticker,
} as Meta

const Template: StoryFn<Props> = (args) => <Sticker {...args} />

export const Filled = Template.bind({})
Filled.args = {
  children: 'ラベル',
  color: 'informative',
  appearance: 'filled',
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'ラベル',
  color: 'informative',
  appearance: 'outlined',
}

export const Informative = Template.bind({})
Informative.args = {
  children: 'お知らせ',
  color: 'informative',
}

export const Positive = Template.bind({})
Positive.args = {
  children: '成功',
  color: 'positive',
}

export const Notice = Template.bind({})
Notice.args = {
  children: '注意',
  color: 'notice',
}

export const Negative = Template.bind({})
Negative.args = {
  children: 'エラー',
  color: 'negative',
}

export const SizeSmall = Template.bind({})
SizeSmall.args = {
  children: 'Small',
  size: 's',
}

export const SizeMedium = Template.bind({})
SizeMedium.args = {
  children: 'Medium',
  size: 'm',
}

export const SizeLarge = Template.bind({})
SizeLarge.args = {
  children: 'Large',
  size: 'l',
}

const AllVariantsTemplate: StoryFn = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Sticker color="informative" appearance="filled">Informative</Sticker>
      <Sticker color="positive" appearance="filled">Positive</Sticker>
      <Sticker color="notice" appearance="filled">Notice</Sticker>
      <Sticker color="negative" appearance="filled">Negative</Sticker>
    </div>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Sticker color="informative" appearance="outlined">Informative</Sticker>
      <Sticker color="positive" appearance="outlined">Positive</Sticker>
      <Sticker color="notice" appearance="outlined">Notice</Sticker>
      <Sticker color="negative" appearance="outlined">Negative</Sticker>
    </div>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Sticker size="s">Small</Sticker>
      <Sticker size="m">Medium</Sticker>
      <Sticker size="l">Large</Sticker>
    </div>
  </div>
)

export const AllVariants = AllVariantsTemplate.bind({})
