import React, { FC } from 'react'
import Chip, { Props as ChipProps } from '../chip/Chip'
import Icon from '../Icon'

export type Props = Pick<ChipProps, 'color' | 'size'>

const ChipDemo: FC<Props> = (props: Props) => (
  <>
    <Chip {...props}
      body='Chip'
    />
    <Chip
      {...props}
      body='Chip'
      state='hover'
    />
    <Chip
      {...props}
      body='Chip'
      state='active'
    />
    <Chip
      {...props}
      body='Chip'
      state='focused'
    />
    <Chip
      {...props}
      body='Chip'
      state='disabled'
    />
    <Chip
      {...props}
      body='Chip'
      leading={
        <Icon
          className='_icon'
          icon='heart'
        />
      }
    />
    <Chip
      {...props}
      body='Chip'
      trailing={
        <Icon
          className='_icon'
          icon='cross'
        />
      }
    />
  </>
)

export default ChipDemo
