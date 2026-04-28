import React, { FC } from 'react'
import Sticker, { Props as StickerProps } from '../sticker/Sticker'

export type Props = Pick<StickerProps, 'color' | 'size'>

const StickerDemo: FC<Props> = (props: Props) => (
  <>
    <Sticker {...props} appearance='filled'>label</Sticker>
    <Sticker {...props} appearance='outlined'>label</Sticker>
  </>
)

export default StickerDemo
