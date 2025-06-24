import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Button from './components/button/Button'

export default {
  title: 'Components/Elevation',
} as Meta

const Template: StoryFn<{}> = () => {
  return (
    <>
      <div className="major-stack-0">
        <div className="minor-stack-on">
          <Button body="ボタン"></Button>
        </div>
        <header className="minor-stack-over">
          ヘッダー
        </header>
        <div className="minor-stack-on">
          <Button body="ボタン"></Button>
        </div>
      </div>
      <div className="major-stack-1">
        <div className="minor-stack-on">
          <Button body="ボタン"></Button>
        </div>
      </div>
    </>
  )
}

export const Index = Template.bind({})
