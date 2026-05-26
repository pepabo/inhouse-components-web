import React, { CSSProperties, FC } from 'react'
import { Size } from '../types'

type TextUnit = 'rem'
type TextLength = `${number}${TextUnit}`

export interface Props {
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>
  width?: TextLength
}

const SkeletonSticker: FC<Props> = (props: Props) => {
  const {
    size,
    width,
    ...rest
  } = props

  const classes = ['in-skeleton-sticker']
  let style: CSSProperties = {}

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  if (typeof width !== 'undefined') {
    style = {
      ...style,
      width: width,
    }
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
      {...rest}
    >
    </div>
  )
}

export default SkeletonSticker
