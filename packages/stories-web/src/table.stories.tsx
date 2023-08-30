import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Table, { Props } from './components/Table'

export default {
  title: 'Components/Table',
  component: Table
} as Meta

const Template: StoryFn<Props> = (args) => <Table {...args} />

export const Index = Template.bind({})
Index.args = {
  children: (
    <tbody>
      <tr>
        <th>国</th>
        <th>首都</th>
        <th className="-align-right">人口</th>
        <th>言語</th>
      </tr>
      <tr>
        <td>アメリカ合衆国</td>
        <td>ワシントンD.C.</td>
        <td className="-align-right">390,000,000</td>
        <td>英語</td>
      </tr>
      <tr>
        <td>スウェーデン</td>
        <td>ストックホルム</td>
        <td className="-align-right">9,000,000</td>
        <td>スウェーデン語</td>
      </tr>
    </tbody>
  ),
  density: 'normal',
  size: 'm'
}
