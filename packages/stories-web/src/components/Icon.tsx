import React, { FC } from 'react'
import { useStyleBase } from './styleBase'

export interface Props {
  className?: string
  icon: string
}

const Icon: FC<Props> = (props: Props) => {
  const { className, icon } = props

  const styleBase = useStyleBase()
  const classes = [`${styleBase}-icon`]

  if (typeof className !== 'undefined') {
    classes.push(className)
  }

  return (
    <span
      className={classes.join(' ')}
      data-icon={icon}
    />
  )
}

export default Icon
