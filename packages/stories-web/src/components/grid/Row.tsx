import React, { FC, ReactNode } from 'react'

export interface Props {
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  children: ReactNode
  justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between'
  isGapless?: boolean
}

const Row: FC<Props> = (props: Props) => {
  const {
    alignItems,
    children,
    justifyContent,
    isGapless,
    ...rest
  } = props

  const classes = ['in-row']

  if (typeof alignItems !== 'undefined') {
    classes.push(`-align-items-${alignItems}`)
  }

  if (typeof justifyContent !== 'undefined') {
    classes.push(`-justify-content-${justifyContent}`)
  }

  if (isGapless) {
    classes.push('-is-gapless')
  }

  return (
    <div
      className={classes.join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Row
