import React, { FC, ReactNode } from 'react'
import { Density } from '../types'

export interface Props {
  children: ReactNode
  density: Density
  hasBackground?: boolean
  hasTitle?: boolean
}

const SkeletonInteractiveList: FC<Props> = (props: Props) => {
  const {
    children,
    density,
    hasBackground,
    hasTitle,
    ...rest
  } = props;

  const classes = ['in-skeleton-interactive-list']

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
      {hasTitle &&
        <div className='_title'>
          <span className='_skeleton'></span>
        </div>
      }
      <ul className='_list'>
        {children}
      </ul>
    </div>
  );
}

export default SkeletonInteractiveList
