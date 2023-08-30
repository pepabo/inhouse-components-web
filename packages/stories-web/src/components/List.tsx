import React, { FC, ReactNode } from 'react'
import { Density, Size } from './types'

export interface Props {
  children: ReactNode
  density?: Density
  hasBackground?: boolean
  size?: Extract<Size, 's' | 'm' | 'l'>
  tag: 'ol' | 'ul'
}

const List: FC<Props> = (props: Props) => {
  const {
    children,
    density,
    hasBackground,
    size,
    tag,
    ...rest
  } = props;

  const classes = [`in-${tag}`]

  if (typeof density !== 'undefined') {
    classes.push(`-density-${density}`)
  }

  if (hasBackground) {
    classes.push('-has-background')
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  return React.createElement(tag, { className: classes.join(' '), ...rest }, children)
}

export default List
