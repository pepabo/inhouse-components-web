import React, { FC } from 'react'
import { Size } from '../types'
import { useStyleBase } from '../styleBase'

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

  const styleBase = useStyleBase()
  const classes = [`${styleBase}-avatar`]

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  return (
    <span
      className={classes.join(' ')}
      {...rest}
    >
      <img
        src={src}
        srcSet={srcSet}
      />
    </span>
  );
}

export default Avatar
