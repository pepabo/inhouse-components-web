import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Tab, { Props, TabItem } from './components/Tab'

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    tabItems: { table: { disable: true } }
  }
} as Meta

const tabItems: TabItem[] = [
  {
    id: 'tab-1',
    label: 'アルコール',
    content: (
      <p>
        クラフトビール、ワイン、日本酒など、多彩なアルコールメニューを取り揃えています。季節限定のカクテルや、ペアリングにぴったりの銘柄もご用意しています。飲み比べセットでお気に入りを見つけてください。
      </p>
    )
  },
  {
    id: 'tab-2',
    label: 'ソフトドリンク',
    content: (
      <p>
        コーヒーや紅茶のほか、自家製のフルーツソーダやハーブティーもおすすめです。お子様やアルコールが苦手な方でも楽しめる、バリエーション豊かなノンアルコールドリンクをご用意しています。
      </p>
    )
  },
  {
    id: 'tab-3',
    label: '食べ物',
    content: (
      <p>
        前菜からメイン、デザートまで幅広く用意しています。旬の食材を使った一皿や、軽めのおつまみ、しっかりしたお食事まで、お好みに合わせてお楽しみいただけます。
      </p>
    )
  }
];

const Template: StoryFn<Props> = (args) => {
  return (
    <Tab
      ariaLabel="メニュー"
      {...args}
      tabItems={tabItems}
    />
  );
};

export const Index = Template.bind({})
Index.args = {
  appearance: 'transparent',
  align: 'start',
  isGapless: true,
  density: 'normal',
  size: 'm'
}
