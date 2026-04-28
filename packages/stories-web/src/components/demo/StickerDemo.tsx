import React, { FC } from 'react'
import Sticker, { Props as StickerProps } from '../sticker/Sticker'
import Icon from '../Icon'

export type Props = Pick<StickerProps, 'color' | 'size'>

const StickerDemo: FC<Props> = (props: Props) => (
  <>
    <Sticker {...props} appearance='fill-only' body='label' />
    <Sticker {...props} appearance='fill-with-outlined' body='label' />
    <Sticker {...props} appearance='outlined' body='label' />
    <Sticker {...props} appearance='text-only' body='label' />
    <Sticker
      {...props}
      appearance='fill-only'
      body='label'
      leading={<Icon className='_icon' icon='heart' />}
    />
    <Sticker
      {...props}
      appearance='fill-with-outlined'
      body='label'
      leading={<Icon className='_icon' icon='heart' />}
    />
    <Sticker
      {...props}
      appearance='outlined'
      body='label'
      leading={<Icon className='_icon' icon='heart' />}
    />
    <Sticker
      {...props}
      appearance='text-only'
      body='label'
      leading={<Icon className='_icon' icon='heart' />}
    />
  </>
)

export default StickerDemo
