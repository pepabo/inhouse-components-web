import React, { FC } from 'react'
import Button, { Props as ButtonProps } from '../button/Button'
import Avatar from '../avatar/Avatar'
import Icon from '../Icon'

export type Props = Pick<ButtonProps, 'appearance' | 'brightness' | 'color' | 'shape' |  'size' | 'width'>

const ButtonDemo: FC<Props> = (props: Props) => (
  <>
    <Button {...props}
      body='Button'
    />
    <Button
      {...props}
      body='Button'
      state='hover'
    />
    <Button
      {...props}
      body='Button'
      state='focused'
    />
    <Button
      {...props}
      body='Button'
      state='disabled'
      disabled
    />
    <Button
      {...props}
      body='Button'
      leading={
        <Icon
          className='_icon'
          icon='heart'
        />
      }
    />
    <Button
      {...props}
      body='Button'
      trailing={
        <Icon
          className='_icon'
          icon='chevron_right'
        />
      }
    />
    <Button
      {...props}
      areaLabel='Favorite'
      leading={
        <Icon
          className='_icon'
          icon='heart'
        />
      }
    />
    <Button
      {...props}
      areaLabel='Favorite'
      leading={
        <Avatar
          size='xs'
          src='https://picsum.photos/id/177/200/300'
        />
      }
    />
  </>
)

export default ButtonDemo
