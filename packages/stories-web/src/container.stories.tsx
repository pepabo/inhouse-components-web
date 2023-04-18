import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Container, { Props } from './components/Container'

export default {
  title: 'Components/Container',
  component: Container
} as Meta

const Template: Story<Props> = (args) => <Container {...args} />

export const Index = Template.bind({})
Index.args = { children: 'インターネットが好き。というより、光ファイバーが好き。人とWi-Fiが飛び交う渋谷、Bluetoothが途切れる交差点。いよいよ2020年は東京オリンピック、泣いても笑っても一発勝負。「ねぇGoogle、今夜の天気は？」降水確率が0%でも100%でも、GMOペパボ株式会社は、世界をもっとおもしろくできる。' }
