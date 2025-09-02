import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Dialog, { Props } from './components/Dialog'
import Row from './components/grid/Row'
import Col from './components/grid/Col'

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    title: { control: 'text' },
    children: { table: { disable: true } },
    footer: { table: { disable: true } },
    triggerLabel: { control: 'text' }
  }
} as Meta

const Template: StoryFn<Props> = (args) => {
  return (
    <Dialog
      {...args}
      footer={
        <Row justifyContent="end">
          <Col col={12} colM={4} colL={4} offsetM={4} offsetL={4}>
            <button className="in-button -appearance-outlined -width-full">
              キャンセル
            </button>
          </Col>
          <Col col={12} colM={4} colL={4}>
            <button className="in-button -appearance-filled -color-interactive -width-full">
              確認
            </button>
          </Col>
        </Row>
      }
    >
      <p>
        これはサンプルのダイアログコンテンツです。
        ユーザーに確認を求めたり、詳細情報を表示したりするために使用されます。
      </p>
      <p>
        モーダルダイアログは重要な操作やメッセージを表示する際に使用し、
        ユーザーの注意を引く必要がある場合に効果的です。
      </p>
    </Dialog>
  );
};

export const Index = Template.bind({})
Index.args = {
  title: 'サンプルダイアログ',
  triggerLabel: 'ダイアログを開く',
  size: 'm',
  closeOnOverlayClick: false
}

export const Small = Template.bind({})
Small.args = {
  title: '小さなダイアログ',
  triggerLabel: '小さなダイアログを開く',
  size: 's',
  closeOnOverlayClick: false
}

export const Large = Template.bind({})
Large.args = {
  title: '大きなダイアログ',
  triggerLabel: '大きなダイアログを開く',
  size: 'l',
  closeOnOverlayClick: true
}

const LongContentTemplate: StoryFn<Props> = (args) => {
  return (
    <Dialog
      {...args}
      footer={
        <Row justifyContent="end">
          <Col col={12} colM={4} colL={4} offsetM={4} offsetL={4}>
            <button className="in-button -appearance-outlined -width-full">
              キャンセル
            </button>
          </Col>
          <Col col={12} colM={4} colL={4}>
            <button className="in-button -appearance-filled -color-interactive -width-full">
              確認
            </button>
          </Col>
        </Row>
      }
    >
      <div>
        <p>これは長いコンテンツのサンプルです。</p>
        <p>スクロール可能な領域をテストするために、複数の段落を含めています。</p>
        <p>ダイアログは高さが制限されているため、コンテンツが長い場合は自動的にスクロール可能になります。</p>
        <p>このような長いコンテンツでも、適切にレイアウトされることを確認できます。</p>
        <p>ユーザビリティを保つため、適切な余白とスクロール動作が重要です。</p>
        <p>さらに多くのコンテンツ...</p>
        <p>テキストが続きます...</p>
        <p>まだまだ続きます...</p>
        <p>スクロールテストのためのコンテンツです。</p>
        <p>最後の段落です。</p>
      </div>
    </Dialog>
  );
};

export const WithLongContent = LongContentTemplate.bind({})
WithLongContent.args = {
  title: 'スクロール可能なダイアログ',
  triggerLabel: '長いコンテンツのダイアログを開く',
  size: 'm',
  closeOnOverlayClick: false
}
