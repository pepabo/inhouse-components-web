import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Pagination, { Props } from './components/Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    hrefTemplate: { table: { disable: true } }
  }
} as Meta

const Template: StoryFn<Props> = (args) => {
  return (
    <Pagination
      ariaLabel="検索結果"
      {...args}
    />
  )
}

export const Index = Template.bind({})
Index.args = {
  current: 5,
  max: 10
}

export const FirstPage = Template.bind({})
FirstPage.args = {
  current: 1,
  max: 10
}

export const LastPage = Template.bind({})
LastPage.args = {
  current: 10,
  max: 10
}

export const FewPages = Template.bind({})
FewPages.args = {
  current: 2,
  max: 3
}

export const Simple = Template.bind({})
Simple.args = {
  current: 5,
  max: 10,
  format: 'simple'
}
