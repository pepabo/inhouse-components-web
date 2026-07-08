import React, { FC } from 'react'
import { SemanticColor } from './types';
import { useStyleBase } from './styleBase'

export interface Props {
  children: string;
  color?: SemanticColor;
}

const ValidationMessage: FC<Props> = (props: Props) => {
  const styleBase = useStyleBase()
  const wrapperClasses = [`${styleBase}-validation-message`]
  const {
    color,
    children
  } = props

  wrapperClasses.push(`-color-${color}`)

  return (
    <span className={wrapperClasses.join(' ')}>
      {children}
    </span>
  )
}

export default ValidationMessage
