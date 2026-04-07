import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Disclosure, { Props } from './components/disclosure/Disclosure'

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
  argTypes: {
    density: {
      control: { type: 'select' },
      options: ['dense', 'normal', 'comfort'],
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
    },
  },
} as Meta

const Template: StoryFn<Props> = (args) => <Disclosure {...args} />

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const Default = Template.bind({})
Default.args = {
  summary: 'Summary text',
  children: content,
  density: 'normal',
  size: 'm',
}

export const Open = Template.bind({})
Open.args = {
  summary: 'Summary text',
  children: content,
  density: 'normal',
  size: 'm',
  open: true,
}

export const SizeSmall = Template.bind({})
SizeSmall.args = {
  summary: 'Summary text (size: s)',
  children: content,
  density: 'normal',
  size: 's',
  open: true,
}

export const SizeLarge = Template.bind({})
SizeLarge.args = {
  summary: 'Summary text (size: l)',
  children: content,
  density: 'normal',
  size: 'l',
  open: true,
}

export const DensityDense = Template.bind({})
DensityDense.args = {
  summary: 'Summary text (density: dense)',
  children: content,
  density: 'dense',
  size: 'm',
  open: true,
}

export const DensityComfort = Template.bind({})
DensityComfort.args = {
  summary: 'Summary text (density: comfort)',
  children: content,
  density: 'comfort',
  size: 'm',
  open: true,
}

const MultipleTemplate: StoryFn = () => (
  <>
    <Disclosure
      density='normal'
      size='m'
      summary='First item'
    >
      {content}
    </Disclosure>
    <Disclosure
      density='normal'
      open
      size='m'
      summary='Second item (open)'
    >
      {content}
    </Disclosure>
    <Disclosure
      density='normal'
      size='m'
      summary='Third item'
    >
      {content}
    </Disclosure>
  </>
)

export const Multiple = MultipleTemplate.bind({})
