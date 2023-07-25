import React, { FC, ReactNode } from 'react'

export interface Props {
  children: ReactNode
  col?: number
  colS?: number
  colM?: number
  colL?: number
  offsetS?: number
  offsetM?: number
  offsetL?: number
}

const Col: FC<Props> = (props: Props) => {
  const {
    children,
    col = 12,
    colS,
    colM,
    colL,
    offsetS,
    offsetM,
    offsetL,
    ...rest
  } = props

  const classes = ['in-col']

  if (typeof col !== 'undefined') {
    classes.push(`-col-${col}`)
  }

  if (typeof colS !== 'undefined') {
    classes.push(`-col-s-${colS}`)
  }

  if (typeof colM !== 'undefined') {
    classes.push(`-col-m-${colM}`)
  }

  if (typeof colL !== 'undefined') {
    classes.push(`-col-l-${colL}`)
  }

  if (typeof offsetS !== 'undefined') {
    classes.push(`-offset-s-${offsetS}`)
  }

  if (typeof offsetM !== 'undefined') {
    classes.push(`-offset-m-${offsetM}`)
  }

  if (typeof offsetL !== 'undefined') {
    classes.push(`-offset-l-${offsetL}`)
  }

  return (
    <div
      className={classes.join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Col
