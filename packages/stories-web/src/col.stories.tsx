import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import Col, { Props } from './components/grid/Col'

export default {
  title: 'Components/Grid/Col',
  component: Col
} as Meta

const Template: StoryFn<Props> = (args) => <Col {...args} />

export const Index = Template.bind({})
Index.args = {
  children: (
    <div
      style={{
        backgroundColor: '#F7F8FA',
        padding: '1rem'
      }}
    >
      Col
    </div>
  )
}
