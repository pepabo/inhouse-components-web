import React, { FC, ReactNode, TableHTMLAttributes } from 'react'
import { Density, Size } from './types'

type HTMLProps = TableHTMLAttributes<HTMLTableElement>

export interface Props extends HTMLProps {
  children: ReactNode
  density?: Density
  size?: Extract<Size, 's' | 'm' | 'l'>
}

const Table: FC<Props> = (props: Props) => {
  const {
    children,
    density,
    size,
    ...rest
  } = props;

  const classes = ['in-table']

  if (typeof density !== 'undefined') {
    classes.push(`-density-${density}`)
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
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
