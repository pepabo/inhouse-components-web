import React, { FC, ReactNode } from 'react'
import { Density } from '../types'
import { useStyleBase } from '../styleBase'

export interface Props {
  areaLabel: string
  children: ReactNode
  density?: Density
}

const InteractiveTable: FC<Props> = (props: Props) => {
  const {
    areaLabel,
    children,
    density,
    ...rest
  } = props;

  const styleBase = useStyleBase()
  const classes = [`${styleBase}-interactive-table`]

  if (typeof density !== 'undefined') {
    classes.push(`-density-${density}`)
  }

  return (
    <table
      aria-label={areaLabel}
      className={classes.join(' ')}
      {...rest}
    >
      {children}
    </table>
  );
}

export default InteractiveTable
