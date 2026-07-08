import React, { FC, ReactNode } from 'react'
import { Size } from './types'
import { useStyleBase } from './styleBase'

export interface Props {
  children?: ReactNode
  isGapless?: boolean
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>
}

const Container: FC<Props> = (props: Props) => {
  const {
    children,
    isGapless,
    size,
  } = props

  const styleBase = useStyleBase()
  const classes = [`${styleBase}-container`]

  if (isGapless) {
    classes.push('-is-gapless')
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  return (
    <div
      className={classes.join(' ')}
    >{children}</div>
  )
}

export default Container
