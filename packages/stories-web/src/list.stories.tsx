import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import List, { Props } from './components/List'

export default {
  title: 'Components/List',
  component: List
} as Meta

const Template: Story<Props> = (args) => <List {...args} />

export const UnorderedList = Template.bind({})
UnorderedList.args = {
  children: (
    <>
      <li>List Item</li>
      <li>List Item</li>
      <li>
        List Item
        <ul>
          <li>List Item</li>
          <li>List Item</li>
          <li>
            List Item
            <ul>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  ),
  density: 'normal',
  size: 'm',
  tag: 'ul'
}

export const OrderedList = Template.bind({})
OrderedList.args = {
  children: (
    <>
      <li>List Item</li>
      <li>List Item</li>
      <li>
        List Item
        <ol>
          <li>List Item</li>
          <li>List Item</li>
          <li>
            List Item
            <ol>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ol>
          </li>
        </ol>
      </li>
    </>
  ),
  density: 'normal',
  size: 'm',
  tag: 'ol'
}

export const MixedList = Template.bind({})
MixedList.args = {
  children: (
    <>
      <li>List Item</li>
      <li>List Item</li>
      <li>List Item
        <ul>
          <li>List Item</li>
          <li>List Item</li>
          <li>
            List Item
            <ol>
              <li>List Item</li>
              <li>List Item</li>
              <li>
                List Item
                <ul>
                  <li>List Item</li>
                  <li>List Item</li>
                </ul>
              </li>
            </ol>
          </li>
        </ul>
      </li>
    </>
  ),
  density: 'normal',
  size: 'm',
  tag: 'ol'
}
