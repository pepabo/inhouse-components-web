import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Dialog, { Props } from './components/Dialog'

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
  const renderButtons = (close: () => void) => {
    const cancelButton = (
      <button
        className="in-button -appearance-outlined"
        onClick={close}
      >
        <span className="_body">キャンセル</span>
      </button>
    );

    const confirmButton = (
      <button
        className="in-button -appearance-filled -color-interactive"
      >
        <span className="_body">確認</span>
      </button>
    );

    // buttonFlow が column の場合は順序を逆にする
    return args.buttonFlow === 'column' ? (
      <>
        {confirmButton}
        {cancelButton}
      </>
    ) : (
      <>
        {cancelButton}
        {confirmButton}
      </>
    );
  };

  return (
    <Dialog
      {...args}
      footer={({ close }) => renderButtons(close)}
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
  buttonFlow: 'row',
  alignment: 'center',
  closeOnOverlayClick: false
}

export const Small = Template.bind({})
Small.args = {
  title: '小さなダイアログ',
  triggerLabel: '小さなダイアログを開く',
  size: 's',
  buttonFlow: 'row',
  alignment: 'center',
  closeOnOverlayClick: false
}

export const Large = Template.bind({})
Large.args = {
  title: '大きなダイアログ',
  triggerLabel: '大きなダイアログを開く',
  size: 'l',
  buttonFlow: 'row',
  alignment: 'center',
  closeOnOverlayClick: true
}

const LongContentTemplate: StoryFn<Props> = (args) => {
  const renderButtons = (close: () => void) => {
    const cancelButton = (
      <button
        className="in-button -appearance-outlined"
        onClick={close}
      >
        <span className="_body">キャンセル</span>
      </button>
    );

    const confirmButton = (
      <button
        className="in-button -appearance-filled -color-interactive"
      >
        <span className="_body">確認</span>
      </button>
    );

    // buttonFlow が column の場合は順序を逆にする
    return args.buttonFlow === 'column' ? (
      <>
        {confirmButton}
        {cancelButton}
      </>
    ) : (
      <>
        {cancelButton}
        {confirmButton}
      </>
    );
  };

  return (
    <Dialog
      {...args}
      footer={({ close }) => renderButtons(close)}
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
  buttonFlow: 'row',
  alignment: 'center',
  closeOnOverlayClick: false
}

export const ColumnButtonFlow = Template.bind({})
ColumnButtonFlow.args = {
  title: '縦並びボタンのダイアログ',
  triggerLabel: '縦並びボタンのダイアログを開く',
  size: 'm',
  buttonFlow: 'column',
  alignment: 'center',
  closeOnOverlayClick: false
}
