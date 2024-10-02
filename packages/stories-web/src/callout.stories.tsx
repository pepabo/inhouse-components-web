import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Callout, { Props } from './components/Callout'

export default {
  title: 'Components/Callout',
  component: Callout,
  size: 'm',
} as Meta

const Template: StoryFn<Props> = (args) => <Callout {...args} ></Callout>

export const Index = Template.bind({})
Index.args = {
  children: <>通知を確認してください</>
}

export const Multiline = Template.bind({})
Multiline.args = {
  children: <>
    <div className="_title">更新に失敗しました</div>
    以下の入力内容を確認してください。
    <ul>
      <li>郵便番号が入力されていません</li>
      <li>決済方法が選択されていません</li>
    </ul>
  </>,
  color: "negative"
}
