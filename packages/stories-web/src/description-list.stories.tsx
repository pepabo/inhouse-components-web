import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import DescriptionList, { Props } from './components/description-list/DescriptionList'
import DescriptionListItem from './components/description-list/DescriptionListItem'

export default {
  title: 'Components/DescriptionList',
  component: DescriptionList
} as Meta

const Template: Story<Props> = (args) => <DescriptionList {...args} />

export const DefaultDescriptionList = Template.bind({})
DefaultDescriptionList.args = {
  children: (
    <>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
    </>
  ),
  density: 'normal',
  hasBackground: false,
  size: 'm',
  type: 'default'
}

export const BulletDescriptionList = Template.bind({})
BulletDescriptionList.args = {
  children: (
    <>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
    </>
  ),
  density: 'normal',
  hasBackground: false,
  size: 'm',
  type: 'bullet'
}

export const TabularDescriptionList = Template.bind({})
TabularDescriptionList.args = {
  children: (
    <>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
      <DescriptionListItem>
        <dt>Lorem ipsum dolor sit amet,</dt>
        <dd>Lorem ipsum dolor sit amet,</dd>
      </DescriptionListItem>
    </>
  ),
  density: 'normal',
  hasBackground: false,
  size: 'm',
  type: 'tabular'
}
