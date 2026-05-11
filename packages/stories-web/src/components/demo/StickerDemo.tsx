import React, { FC } from 'react'
import Sticker, { Props as StickerProps } from '../sticker/Sticker'
import Icon from '../Icon'

export type Props = Pick<StickerProps, 'color' | 'size'>

const StickerDemo: FC<Props> = (props: Props) => (
  <>
    <Sticker {...props} appearance='flat' body='label' />
    <Sticker {...props} appearance='tinted' body='label' />
    <Sticker {...props} appearance='outlined' body='label' />
    <Sticker {...props} appearance='transparent' body='label' />
    <Sticker
      {...props}
      appearance='flat'
      body='label'
      leading={<Icon className='_icon' icon='person' />}
    />
    <Sticker
      {...props}
      appearance='tinted'
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
      appearance='transparent'
      body='label'
      leading={<Icon className='_icon' icon='person' />}
    />
  </>
)

export default StickerDemo
