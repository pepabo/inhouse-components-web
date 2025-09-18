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

const renderButtons = (
  close: () => void,
  buttonFlow: 'row' | 'column',
  primaryButtonText: string,
  primaryButtonAction?: () => void
) => {
  const cancelButton = (
    <button
      className="in-button -appearance-outlined"
      onClick={close}
    >
      <span className="_body">キャンセル</span>
    </button>
  );

  const primaryButton = (
    <button
      className="in-button -appearance-filled -color-interactive"
      onClick={primaryButtonAction}
    >
      <span className="_body">{primaryButtonText}</span>
    </button>
  );

  // buttonFlow が column の場合は順序を逆にする
  return buttonFlow === 'column' ? (
    <>
      {primaryButton}
      {cancelButton}
    </>
  ) : (
    <>
      {cancelButton}
      {primaryButton}
    </>
  );
};

const Template: StoryFn<Props> = (args) => {
  return (
    <Dialog
      {...args}
      footer={({ close }) => renderButtons(close, args.buttonFlow || 'row', 'ゴミ箱を空にする')}
    >
      <p>
        この操作は取り消せません。
      </p>
    </Dialog>
  );
};

export const Index = Template.bind({})
Index.args = {
  title: 'ゴミ箱にある項目を完全に消去してもよろしいですか？',
  triggerLabel: 'ダイアログを開く',
  size: 's',
  buttonFlow: 'row',
  alignment: 'center',
  closeOnOverlayClick: false
}

const LongContentTemplate: StoryFn<Props> = (args) => {
  return (
    <Dialog
      {...args}
      footer={({ close }) => renderButtons(close, args.buttonFlow || 'row', '利用規約に同意する')}
    >
      <div>
        <section>
          <h4>第1条（適用）</h4>
          <p>
            本規約は、[サービス名]（以下「本サービス」といいます）の利用に関する一切の関係に適用されます。<br />
            利用者は、本規約に同意した上で本サービスを利用するものとします。
          </p>
        </section>

        <section>
          <h4>第2条（本サービスの内容）</h4>
          <p>
            本サービスは、[サービス内容の概要を簡潔に記載]を提供します。<br />
            本サービスの詳細な内容は、本ウェブサイトまたはアプリケーション内で別途定めるものとします。
          </p>
        </section>

        <section>
          <h4>第3条（利用登録）</h4>
          <p>
            本サービスの利用を希望する者は、本規約に同意の上、[当社名]が定める方法により利用登録の申請を行うものとします。<br />
            [当社名]は、利用登録の申請者に以下の事由があると判断した場合、利用登録を承認しないことがあります。
          </p>
          <ul>
            <li>利用登録の申請に際して虚偽の情報を申告した場合</li>
            <li>本規約に違反したことがある者からの申請である場合</li>
            <li>その他、[当社名]が利用登録を適当でないと判断した場合</li>
          </ul>
        </section>

        <section>
          <h4>第4条（禁止事項）</h4>
          <p>
            利用者は、本サービスの利用にあたり、以下の行為を行ってはならないものとします。
          </p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>[当社名]または他の利用者、その他の第三者の著作権、商標権、その他の知的財産権を侵害する行為</li>
            <li>[当社名]のサーバーまたはネットワーク機能を破壊したり、妨害したりする行為</li>
            <li>本サービスを商用目的で利用する行為（[当社名]が事前に書面で承諾した場合を除く）</li>
            <li>その他、[当社名]が不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h4>第5条（利用料金および支払方法）</h4>
          <p>
            本サービスは、[無料または有料のどちらかを記載]で提供します。<br />
            有料サービスの場合、利用者は、[当社名]が別途定める利用料金を、[当社名]が指定する方法により支払うものとします。
          </p>
        </section>

        <section>
          <h4>第6条（知的財産権）</h4>
          <p>
            本サービスに関する知的財産権はすべて[当社名]または[当社名]にライセンスを許諾している第三者に帰属します。
          </p>
        </section>

        <section>
          <h4>第7条（免責事項）</h4>
          <p>
            [当社名]は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。<br />
            [当社名]は、本サービスに起因して利用者に生じたあらゆる損害について一切の責任を負いません。
          </p>
        </section>

        <section>
          <h4>第8条（規約の変更）</h4>
          <p>
            [当社名]は、必要と判断した場合、利用者に事前に通知することなく本規約を変更できるものとします。変更後の規約は、本ウェブサイトに掲載された時点から効力を生じるものとします。
          </p>
        </section>

        <section>
          <h4>第9条（準拠法および管轄裁判所）</h4>
          <p>
            本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、[当社名]の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>
      </div>
    </Dialog>
  );
};

export const WithLongContent = LongContentTemplate.bind({})
WithLongContent.args = {
  title: 'サービス利用規約',
  triggerLabel: '長いコンテンツのダイアログを開く',
  size: 'm',
  buttonFlow: 'row',
  alignment: 'left',
  closeOnOverlayClick: false
}

const WithoutContentTemplate: StoryFn<Props> = (args) => {
  return (
    <Dialog
      {...args}
      footer={({ close }) => renderButtons(close, args.buttonFlow || 'row', 'ログアウト')}
    >
    </Dialog>
  );
};

export const WithoutContent = WithoutContentTemplate.bind({})
WithoutContent.args = {
  title: 'ログアウトしますか？',
  triggerLabel: 'コンテンツなしのダイアログを開く',
  size: 's',
  buttonFlow: 'row',
  alignment: 'center',
  closeOnOverlayClick: false
}
