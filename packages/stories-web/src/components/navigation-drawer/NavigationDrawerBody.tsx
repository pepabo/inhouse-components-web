import React, { FC, ReactNode } from 'react'

export interface Props {
  children: ReactNode
  isActivated?: boolean
}

const NavigationDrawerBody: FC<Props> = (props: Props) => {
  const {
    children,
    isActivated,
    ...rest
  } = props

  const classes = [`_body`]

  if (isActivated) {
    classes.push(`--activated`)
  }

  return (
    <nav
      className={classes.join(' ')}
      {...rest}
    >
      {children}
    </nav>
  );
}

export default NavigationDrawerBody
