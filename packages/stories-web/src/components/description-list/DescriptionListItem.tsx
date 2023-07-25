import React, { FC, ReactNode } from 'react'

export interface Props {
  children: ReactNode
}

const DescriptionListItem: FC<Props> = (props: Props) => {
  const {
    children,
    ...rest
  } = props;

  const classes = [`_item`]

  return (
    <div
      className={classes.join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}

export default DescriptionListItem
