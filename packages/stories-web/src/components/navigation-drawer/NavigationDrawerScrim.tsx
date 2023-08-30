import React, { ButtonHTMLAttributes, FC } from 'react'
import { Appearance } from '../types'

type HTMLProps = ButtonHTMLAttributes<HTMLDivElement>

export interface Props extends HTMLProps {
  appearance?: Extract<Appearance, 'hollow' | 'transparent'>
}

const NavigationDrawerScrim: FC<Props> = (props: Props) => {
  const {
    appearance,
    ...rest
  } = props

  const classes = [`_scrim`]

  if (typeof appearance !== 'undefined') {
    classes.push(`-appearance-${appearance}`)
  }

  return (
    <div
      className={classes.join(' ')}
      {...rest}
    >
    </div>
  );
}

export default NavigationDrawerScrim
