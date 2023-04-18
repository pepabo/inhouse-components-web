import React, { FC, ReactNode } from 'react'
import { Density } from '../types'

export interface Props {
  children: ReactNode
  density?: Density
}

const SkeletonInteractiveTable: FC<Props> = (props: Props) => {
  const {
    children,
    density,
    ...rest
  } = props;

  const classes = [`in-skeleton-interactive-table`]

  if (typeof density !== 'undefined') {
    classes.push(`-density-${density}`)
  }

  return (
    <table
      className={classes.join(' ')}
      {...rest}
    >
      {children}
    </table>
  );
}

export default SkeletonInteractiveTable
