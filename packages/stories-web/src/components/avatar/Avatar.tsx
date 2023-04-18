import React, { FC } from 'react'
import { Size } from '../types'

export interface Props {
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l'>
  src?: string
  srcSet?: string
}

const Avatar: FC<Props> = (props: Props) => {
  const {
    size,
    src,
    srcSet,
    ...rest
  } = props;

  const classes = [`in-avatar`]

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  return (
    <div
      className={classes.join(' ')}
      {...rest}
    >
      <img
        src={src}
        srcSet={srcSet}
      />
    </div>
  );
}

export default Avatar
