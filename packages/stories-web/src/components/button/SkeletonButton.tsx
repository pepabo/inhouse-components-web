import React, { CSSProperties, FC } from 'react'
import { Shape, Size, Width } from '../types'

type TextUnit = 'rem'
type TextLength = `${number}${TextUnit}`

export interface Props {
  shape?: Shape
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>
  width?: Width | TextLength
}

const SkeletonButton: FC<Props> = (props: Props) => {
  const {
    shape,
    size,
    width,
    ...rest
  } = props

  const classes = ['in-skeleton-button']
  let style: CSSProperties = {}

  if (typeof shape !== 'undefined') {
    classes.push(`-shape-${shape}`)
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  if (typeof width !== 'undefined') {
    if (/^\d+rem$/.test(width)) {
      style = {
        ...style,
        width: width,
      }
    } else {
      classes.push(`-width-${width}`)
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

export default SkeletonButton
