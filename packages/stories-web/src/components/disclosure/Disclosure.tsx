import React, { FC, ReactNode } from 'react'
import { Density, Size } from '../types'
import Icon from '../Icon'

export interface Props {
  children: ReactNode
  density?: Density
  open?: boolean
  size?: Extract<Size, 's' | 'm' | 'l'>
  summary: string
}

const Disclosure: FC<Props> = (props: Props) => {
  const {
    children,
    density,
    open,
    size,
    summary,
    ...rest
  } = props

  const classes = ['in-disclosure']

  if (typeof density !== 'undefined') {
    classes.push(`-density-${density}`)
  }

  if (typeof size !== 'undefined') {
    classes.push(`-size-${size}`)
  }

  return (
    <details
      className={classes.join(' ')}
      open={open}
      {...rest}
    >
      <summary className='_leading'>
        <Icon
          className='_icon'
          icon='chevron_right'
        />
        {summary}
      </summary>
      <div className='_body'>
        {children}
      </div>
    </details>
  )
}

export default Disclosure
