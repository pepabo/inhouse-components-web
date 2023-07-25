import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import BottomNavigation, { Props } from './components/bottom-navigation/BottomNavigation'
import BottomNavigationItem from './components/bottom-navigation/BottomNavigationItem'
import Icon from './components/Icon'

export default {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: StoryFn<Props> = (args) => <BottomNavigation {...args} />

const items = () => {
  return (
    <>
      <BottomNavigationItem
        activated
        icon={
          <Icon icon='home' />
        }
        text='ホーム'
      />
      <BottomNavigationItem
        icon={
          <Icon icon='magnifying_glass' />
        }
        text='検索'
      />
      <BottomNavigationItem
        icon={
          <Icon icon='heart' />
        }
        text='お気に入り'
      />
      <BottomNavigationItem
        icon={
          <Icon icon='bell' />
        }
        text='通知'
      />
      <BottomNavigationItem
        icon={
          <Icon icon='person' />
        }
        text='あなた'
      />
    </>
  )
}

export const White = Template.bind({})
White.args = {
  appearance: 'white',
  children: items(),
}

export const Filled = Template.bind({})
Filled.args = {
  appearance: 'filled',
  children: items(),
}
