import React, { FC, ReactNode } from 'react'
import { Density, Size } from '../types'

export interface Props {
  children: ReactNode
  density?: Density
  hasBackground?: boolean
  size?: Extract<Size, 's' | 'm' | 'l'>
  type: 'default' | 'bullet' | 'tabular'
}

const DescriptionList: FC<Props> = (props: Props) => {
  const {
    children,
    density,
    hasBackground,
    size,
    type,
    ...rest
  } = props;

  const classes = [`in-description-list`]

  if (typeof density !== 'undefined') {
    classes.push(`-density-${density}`)
  }

  if (hasBackground) {
    classes.push('-has-background')
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  if (typeof type !== 'undefined') {
    classes.push(`-type-${type}`)
  }

  return (
    <dl
      className={classes.join(' ')}
      {...rest}
    >
      {children}
    </dl>
  )
}

export default DescriptionList
