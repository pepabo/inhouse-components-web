import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Col, { Props } from './components/grid/Col'

export default {
  title: 'Components/Grid/Col',
  component: Col
} as Meta

const Template: Story<Props> = (args) => <Col {...args} />

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
