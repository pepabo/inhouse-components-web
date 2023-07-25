import React, { FC, ReactNode } from 'react'
import { Appearance } from '../types'

export interface Props {
  appearance: Extract<Appearance, 'white' | 'filled'>
  children: ReactNode
}

const BottomNavigation: FC<Props> = (props: Props) => {
  const {
    appearance,
    children,
    ...rest
  } = props;

  const classes = [`in-bottom-navigation`]

  if (typeof appearance !== 'undefined') {
    classes.push(`-appearance-${appearance}`)
  }

  return (
    <nav
      className={classes.join(' ')}
      {...rest}
    >
      <ul className='_list'>
        {children}
      </ul>
    </nav>
  );
}

export default BottomNavigation
