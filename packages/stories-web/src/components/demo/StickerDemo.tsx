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
      leading={<Icon className='_icon' icon='person' />}
    />
    <Sticker
      {...props}
      appearance='fill-with-outlined'
      body='label'
      leading={<Icon className='_icon' icon='person' />}
    />
    <Sticker
      {...props}
      appearance='outlined'
      body='label'
      leading={<Icon className='_icon' icon='person' />}
    />
    <Sticker
      {...props}
      appearance='text-only'
      body='label'
      leading={<Icon className='_icon' icon='person' />}
    />
  </>
)

export default StickerDemo
