import { Story, Meta } from '@storybook/react/types-6-0'
import React, { ReactNode } from 'react'
import Row, { Props } from './components/grid/Row'
import Col from './components/grid/Col'

export default {
  title: 'Components/Grid/Row',
  component: Row
} as Meta

const Template: Story<Props> = (args) => <Row {...args} />

const items: ReactNode[] = [];
const cols = [1, 2, 3, 4, 6, 12];

cols.forEach(col => {
  for (let i = 0; i < col; i++) {
    items.push(
      <Col col={12} colM={12 / col}>
        <div
          style={{
            backgroundColor: '#F7F8FA',
            padding: '1rem'
          }}
        >
          Col
        </div>
      </Col>
    )
  }
});

export const Index = Template.bind({})
Index.args = {
  children: items
}
