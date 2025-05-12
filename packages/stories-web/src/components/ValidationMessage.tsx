import React, { FC } from 'react'
import { SemanticColor } from './types';

export interface Props {
  children: string;
  color?: Extract<SemanticColor, "negative" | "neutral">;
}

const ValidationMessage: FC<Props> = (props: Props) => {
  const wrapperClasses = ['in-validation-message']
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
