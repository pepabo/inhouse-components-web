import React, { FC } from 'react'

export interface Props {
  max: number
  value?: number
}

const Linear: FC<Props> = (props: Props) => {
  const {
    max,
    value,
    ...rest
  } = props

  const classes = ['in-linear-progress-indicator']

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
      <div>
      </div>
    </div>
  )
}

export default Linear
