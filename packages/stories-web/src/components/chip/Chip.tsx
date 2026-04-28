import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { SemanticColor, Size, State } from '../types'

type HTMLProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface Props extends HTMLProps {
  body?: ReactNode
  color?: SemanticColor
  leading?: ReactNode
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>
  state?: Extract<State, 'enabled' | 'hover' | 'active' | 'focused' | 'disabled'>
  trailing?: ReactNode
}

const Chip: FC<Props> = (props: Props) => {
  const {
    body,
    color,
    leading,
    size,
    state,
    trailing,
    ...rest
  } = props

  const classes = ['in-chip']

  if (typeof color !== 'undefined') {
    classes.push(`-color-${color}`)
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  if (typeof state !== 'undefined') {
    classes.push(`--${state}`)
  }

  return (
    <button
      className={classes.join(' ')}
      disabled={state === 'disabled'}
      {...rest}
    >
      {leading && (
        <span className='_leading'>
          {leading}
        </span>
      )}
      {body && (
        <span className='_body'>
          {body}
        </span>
      )}
      {trailing && (
        <span className='_trailing'>
          {trailing}
        </span>
      )}
    </button>
  )
}

export default Chip
