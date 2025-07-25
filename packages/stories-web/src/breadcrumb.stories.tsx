import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Breadcrumb, { Props, Option } from './components/Breadcrumb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    options: { table: { disable: true } }
  }
} as Meta

const options: Option[] = [
  {
    value: '/',
    label: 'エリア',
  },
  {
    value: '/',
    label: '東京都',
  },
  {
    value: '/',
    label: '渋谷区',
  },
  {
    value: '/',
    label: '桜丘町',
  },
];

const longTextOptions: Option[] = [
  {
    value: '/',
    label: 'トップページ',
  },
  {
    value: '/',
    label: '哲学・現代思想',
  },
  {
    value: '/',
    label: 'フランスの哲学',
  },
  {
    value: '/',
    label: 'ジル・ドゥルーズ',
  },
  {
    value: '/',
    label: 'L’Abécédaire de Gilles Deleuze（アベセデール）',
  },
];

const Template: StoryFn<Props> = (args) => {
  return (
      <Breadcrumb
        ariaLabel="メニュー"
        {...args}
      />
  );
};


export const Default = Template.bind({})
Default.args = {
  size: 'm',
  density: 'normal',
  overflow: 'wrap',
  options,
}

export const LongTextWrap = Template.bind({})
LongTextWrap.args = {
  size: 'm',
  density: 'normal',
  overflow: 'wrap',
  options: longTextOptions,
}

export const LongTextScroll = Template.bind({})
LongTextScroll.args = {
  size: 'm',
  density: 'normal',
  overflow: 'scroll',
  options: longTextOptions,
}
