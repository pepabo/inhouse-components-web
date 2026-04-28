import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { SemanticColor, Size } from '../types'

type HTMLProps = HTMLAttributes<HTMLSpanElement>

export interface Props extends HTMLProps {
  appearance?: 'fill-only' | 'fill-with-outlined' | 'outlined' | 'text-only'
  body?: ReactNode
  color?: SemanticColor
  leading?: ReactNode
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>
}

const Sticker: FC<Props> = (props: Props) => {
  const {
    appearance,
    body,
    color,
    leading,
    size,
    ...rest
  } = props

  const classes = ['in-sticker']

  if (typeof color !== 'undefined') {
    classes.push(`-color-${color}`)
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  if (typeof appearance !== 'undefined') {
    classes.push(`-appearance-${appearance}`)
  }

  return (
    <span
      className={classes.join(' ')}
      {...rest}
    >
      {leading && (
        <span className='_leading'>
          {leading}
        </span>
      )}
      {body && (
        <span className='_body'>
          {body}
        </span>
      )}
    </span>
  )
}

export default Sticker
