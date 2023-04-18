import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import InteractiveList, { Props } from './components/interactive-list/InteractiveList'
import InteractiveListItem from './components/interactive-list/InteractiveListItem'
import SkeletonInteractiveList from './components/interactive-list/SkeletonInteractiveList'
import SkeletonInteractiveListItem from './components/interactive-list/SkeletonInteractiveListItem'
import SkeletonThumbnail from './components/interactive-list/SkeletonThumbnail'
import Thumbnail from './components/interactive-list/Thumbnail'
import Avatar from './components/avatar/Avatar'
import Checkbox from './components/checkbox/Checkbox'
import Icon from './components/Icon'
import Radio from './components/radio/Radio'
import SkeletonCheckbox from './components/checkbox/SkeletonCheckbox'
import SkeletonRadio from './components/radio/SkeletonRadio'
import SkeletonAvatar from './components/avatar/SkeletonAvatar'

export default {
  title: 'Components/InteractiveList',
  component: InteractiveList
} as Meta

const Template: Story<Props> = (args) => <InteractiveList {...args} />
const SkeletonTemplate: Story<Props> = (args) => <SkeletonInteractiveList {...args} />

type Line = 'single' | 'multi'

const items = (line: Line) => {
  const title = 'Lorem ipsum dolor sit amet,'
  const description = line === 'multi' ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` : ''

  return (
    <>
      <InteractiveListItem
        description={description}
        title={title}
      />
      <InteractiveListItem
        description={description}
        disabled
        title={title}
      />
      <InteractiveListItem
        activated
        description={description}
        title={title}
      />
      <InteractiveListItem
        description={description}
        href='#'
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        activated
        description={description}
        href='#'
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        onClick={(event) => event.preventDefault()}
        title={title}
      />
      <InteractiveListItem
        activated
        description={description}
        onClick={(event) => event.preventDefault()}
        title={title}
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItem'
        title={title}
        trailing={
          <Checkbox
            id='SingleLineItem'
            name='SingleLineItem'
          />
        }
        trailingElement='input'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemSelected'
        selected
        title={title}
        trailing={
          <Checkbox
            checked
            id='SingleLineItemSelected'
            name='SingleLineItemSelected'
          />
        }
        trailingElement='input'
      />
      <InteractiveListItem
        description={description}
        href='#'
        leading={
          <Icon icon='home' />
        }
        leadingElement='icon'
        title={title}
      />
      <InteractiveListItem
        activated
        description={description}
        href='#'
        leading={
          <Icon icon='home' />
        }
        leadingElement='icon'
        title={title}
      />
      <InteractiveListItem
        description={description}
        leading={
          <Icon icon='home' />
        }
        leadingElement='icon'
        onClick={(event) => event.preventDefault()}
        title={title}
      />
      <InteractiveListItem
        activated
        description={description}
        leading={
          <Icon icon='home' />
        }
        leadingElement='icon'
        onClick={(event) => event.preventDefault()}
        title={title}
      />
      <InteractiveListItem
        description={description}
        isDraggable
        leading={
          <Icon icon='drag_handle' />
        }
        leadingElement='icon'
        title={title}
      />
      <InteractiveListItem
        description={description}
        isDraggable
        leading={
          <Icon icon='drag_handle' />
        }
        leadingElement='icon'
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithCheckboxLeading'
        leading={
          <Checkbox
            id='SingleLineItemWithCheckboxLeading'
            name='SingleLineItemWithCheckboxLeading'
          />
        }
        leadingElement='input'
        title={title}
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithCheckboxLeadingTrailing'
        leading={
          <Checkbox
            id='SingleLineItemWithCheckboxLeadingTrailing'
            name='SingleLineItemWithCheckboxLeadingTrailing'
          />
        }
        leadingElement='input'
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithCheckboxLeadingTrailingSelected'
        leading={
          <Checkbox
            checked
            id='SingleLineItemWithCheckboxLeadingTrailingSelected'
            name='SingleLineItemWithCheckboxLeadingTrailingSelected'
          />
        }
        leadingElement='input'
        selected
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithRadioLeading'
        leading={
          <Radio
            id='SingleLineItemWithRadioLeading'
            name='SingleLineItemWithRadio'
            value='SingleLineItemWithRadioLeading'
          />
        }
        leadingElement='input'
        title={title}
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithRadioLeadingTrailing'
        leading={
          <Radio
            id='SingleLineItemWithRadioLeadingTrailing'
            name='SingleLineItemWithRadio'
            value='SingleLineItemWithRadioLeadingTrailing'
          />
        }
        leadingElement='input'
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithRadioLeadingTrailingSelected'
        leading={
          <Radio
            checked
            id='SingleLineItemWithRadioLeadingTrailingSelected'
            name='SingleLineItemWithRadio'
            value='SingleLineItemWithRadioLeadingTrailingSelected'
          />
        }
        leadingElement='input'
        selected
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        leading={
          <Avatar src='https://picsum.photos/id/177/200/300' />
        }
        leadingElement='avatar'
        title={title}
      />
      <InteractiveListItem
        description={description}
        href='#'
        leading={
          <Avatar src='https://picsum.photos/id/177/200/300' />
        }
        leadingElement='avatar'
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        leading={
          <Avatar src='https://picsum.photos/id/177/200/300' />
        }
        leadingElement='avatar'
        onClick={(event) => event.preventDefault()}
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithAvatar'
        leading={
          <Avatar src='https://picsum.photos/id/177/200/300' />
        }
        leadingElement='avatar'
        title={title}
        trailing={
          <Checkbox
            id='SingleLineItemWithAvatar'
            name='SingleLineItemWithAvatar'
          />
        }
        trailingElement='input'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithAvatarSelected'
        leading={
          <Avatar src='https://picsum.photos/id/177/200/300' />
        }
        leadingElement='avatar'
        selected
        title={title}
        trailing={
          <Checkbox
            checked
            id='SingleLineItemWithAvatarSelected'
            name='SingleLineItemWithAvatarSelected'
          />
        }
        trailingElement='input'
      />
      <InteractiveListItem
        activated
        description={description}
        href='#'
        leading={
          <Avatar src='https://picsum.photos/id/177/200/300' />
        }
        leadingElement='avatar'
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        leading={
          <Thumbnail>
            <img src="https://picsum.photos/id/219/200/200" />
          </Thumbnail>
        }
        leadingElement='media'
        mediaSize={line === 'multi' ? 's' : 'm'}
        title={title}
      />
      <InteractiveListItem
        description={description}
        href='#'
        leading={
          <Thumbnail>
            <img src="https://picsum.photos/id/219/200/200" />
          </Thumbnail>
        }
        leadingElement='media'
        mediaSize={line === 'multi' ? 's' : 'm'}
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        leading={
          <Thumbnail>
            <img src="https://picsum.photos/id/219/200/200" />
          </Thumbnail>
        }
        leadingElement='media'
        mediaSize={line === 'multi' ? 's' : 'm'}
        onClick={(event) => event.preventDefault()}
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithImage'
        leading={
          <Thumbnail>
            <img src="https://picsum.photos/id/219/200/200" />
          </Thumbnail>
        }
        leadingElement='media'
        mediaSize={line === 'multi' ? 's' : 'm'}
        title={title}
        trailing={
          <Checkbox
            id='SingleLineItemWithImage'
            name='SingleLineItemWithImage'
          />
        }
        trailingElement='input'
      />
      <InteractiveListItem
        description={description}
        htmlFor='SingleLineItemWithImageSelected'
        leading={
          <Thumbnail>
            <img src="https://picsum.photos/id/219/200/200" />
          </Thumbnail>
        }
        leadingElement='media'
        mediaSize={line === 'multi' ? 's' : 'm'}
        selected
        title={title}
        trailing={
          <Checkbox
            checked
            id='SingleLineItemWithImageSelected'
            name='SingleLineItemWithImageSelected'
          />
        }
        trailingElement='input'
      />
      <InteractiveListItem
        activated
        description={description}
        href='#'
        leading={
          <Thumbnail>
            <img src="https://picsum.photos/id/219/200/200" />
          </Thumbnail>
        }
        leadingElement='media'
        mediaSize={line === 'multi' ? 's' : 'm'}
        title={title}
        trailing={
          <Icon icon='chevron_right' />
        }
        trailingElement='icon'
      />
    </>
  );
};

const skeletonItems = (line: Line) => {
  return (
    <>
      <SkeletonInteractiveListItem
        hasDescription={line === 'multi'}
      />
      <SkeletonInteractiveListItem
        hasDescription={line === 'multi'}
        trailing={
          <SkeletonCheckbox />
        }
        trailingElement='input'
      />
      <SkeletonInteractiveListItem
        hasDescription={line === 'multi'}
        leading={
          <SkeletonCheckbox />
        }
        leadingElement='input'
      />
      <SkeletonInteractiveListItem
        hasDescription={line === 'multi'}
        leading={
          <SkeletonRadio />
        }
        leadingElement='input'
      />
      <SkeletonInteractiveListItem
        hasDescription={line === 'multi'}
        leading={
          <SkeletonAvatar />
        }
        leadingElement='avatar'
      />
      <SkeletonInteractiveListItem
        hasDescription={line === 'multi'}
        leading={
          <SkeletonAvatar />
        }
        leadingElement='avatar'
        trailing={
          <SkeletonCheckbox />
        }
        trailingElement='input'
      />
      <SkeletonInteractiveListItem
        hasDescription={line === 'multi'}
        leading={<SkeletonThumbnail />}
        leadingElement='media'
        mediaSize={line === 'multi' ? 's' : 'm'}
      />
      <SkeletonInteractiveListItem
        hasDescription={line === 'multi'}
        leading={<SkeletonThumbnail />}
        leadingElement='media'
        mediaSize={line === 'multi' ? 's' : 'm'}
        trailing={
          <SkeletonCheckbox />
        }
        trailingElement='input'
      />
    </>
  );
};

export const SingleLine = Template.bind({})
SingleLine.args = {
  children: items('single'),
  title: 'Single Line',
}

export const MultiLine = Template.bind({})
MultiLine.args = {
  children: items('multi'),
  title: 'Multi Line',
}

export const SkeletonSingleLine = SkeletonTemplate.bind({})
SkeletonSingleLine.args = {
  children: skeletonItems('single'),
}

export const SkeletonMultiLine = SkeletonTemplate.bind({})
SkeletonMultiLine.args = {
  children: skeletonItems('multi'),
}
