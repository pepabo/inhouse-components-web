import React, { FC } from 'react'
import { Size } from '../types'

export interface Props {
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l'>
}

const SkeletonAvatar: FC<Props> = (props: Props) => {
  const {
    size,
    ...rest
  } = props;

  const classes = [`in-skeleton-avatar`]

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  return (
    <div
      className={classes.join(' ')}
      {...rest}
    >
    </div>
  );
}

export default SkeletonAvatar
