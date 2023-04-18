import React, { FC } from 'react'

export interface Props {
  className?: string
  icon: string
}

const Icon: FC<Props> = (props: Props) => {
  const { className, icon } = props

  const classes = ['in-icon']

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
