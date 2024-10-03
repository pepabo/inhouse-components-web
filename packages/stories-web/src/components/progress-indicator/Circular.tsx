import React, { FC } from 'react'
import { Size } from '../types';

export interface Props {
  max: number
  value?: number
  size?: Extract<Size, 's' | 'm' | 'l'>
}

const Circular: FC<Props> = (props: Props) => {
  const {
    max,
    value,
    size,
    ...rest
  } = props

  const classes = ['in-circular-progress-indicator']
  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  let percentage

  if (value !== undefined) {
    percentage = Math.round(value / max * 100)
  } else {
    percentage = Math.round(max / max * 100)
  }

  return (
    <div
      aria-valuemax={max}
      aria-valuemin={0}
      aria-valuenow={value}
      className={classes.join(' ')}
      data-percentage={percentage}
      role='progressbar'
      {...rest}
    >
    </div>
  )
}

export default Circular
