import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { Appearance, SemanticColor, Size } from '../types'

type HTMLProps = HTMLAttributes<HTMLSpanElement>

export interface Props extends HTMLProps {
  appearance?: Extract<Appearance, 'filled' | 'outlined'>
  children: ReactNode
  color?: SemanticColor
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>
}

const Sticker: FC<Props> = (props: Props) => {
  const {
    appearance,
    children,
    color,
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
      {children}
    </span>
  )
}

export default Sticker
