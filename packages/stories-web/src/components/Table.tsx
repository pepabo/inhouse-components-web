import React, { FC, ReactNode, TableHTMLAttributes } from 'react'
import { Density, Size } from './types'

type HTMLProps = TableHTMLAttributes<HTMLTableElement>

export interface Props extends HTMLProps {
  children: ReactNode
  density?: Density
  size?: Extract<Size, 's' | 'm' | 'l'>
  hasBackground?: boolean
  hasGridBorder?: boolean
}

const Table: FC<Props> = (props: Props) => {
  const {
    children,
    density,
    size,
    hasBackground,
    hasGridBorder,
    ...rest
  } = props;

  const classes = ['in-table']

  if (typeof density !== 'undefined') {
    classes.push(`-density-${density}`)
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  if (hasBackground) {
    classes.push(`-has-background`)
  }

  if (hasGridBorder) {
    classes.push(`-has-grid-border`)
  }

  return (
    <table
      className={classes.join(' ')}
      {...rest}
    >
      {children}
    </table>
  )
}

export default Table
