import React, { FC, ReactNode } from 'react'
import { Density } from '../types'

export interface Props {
  children: ReactNode
  density: Density
  hasBackground?: boolean
  title?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const InteractiveList: FC<Props> = (props: Props) => {
  const {
    children,
    density,
    hasBackground,
    title,
    titleTag = 'h1',
    ...rest
  } = props;

  const classes = ['in-interactive-list']

  if (typeof density !== 'undefined') {
    classes.push(`-density-${density}`)
  }

  if (hasBackground) {
    classes.push('-has-background')
  }

  return (
    <div
      className={classes.join(' ')}
      {...rest}
    >
      {title &&
        React.createElement(titleTag, { className: '_title' }, title)
      }
      <ul className='_list'>
        {children}
      </ul>
    </div>
  );
}

export default InteractiveList
