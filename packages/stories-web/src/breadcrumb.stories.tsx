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
    label: 'ホーム',
  },
  {
    value: '/',
    label: 'メニュー',
  },
  {
    value: '/',
    label: 'コーヒー',
  },
];

const Template: StoryFn<Props> = (args) => {
  return (
    <Breadcrumb
      ariaLabel="メニュー"
      {...args}
      options={options}
    />
  );
};

export const Index = Template.bind({})
Index.args = {
  size: 'm',
  density: 'normal'
}
