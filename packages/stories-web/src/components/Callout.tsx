import React, { FC, ReactNode } from 'react'
import { SemanticColor, Size } from './types';

export interface Props {
  children: ReactNode;
  color?: Extract<
    SemanticColor,
    "informative" | "positive" | "negative" | "notice"
  >;
  size?: Extract<Size, 's' | 'm' | 'l'>;
}

const Callout: FC<Props> = (props: Props) => {
  const wrapperClasses = ['in-callout']
  const {
    color = "informative",
    size = "m",
    children
  } = props

  wrapperClasses.push(`-color-${color}`)
  wrapperClasses.push(`-size-${size}`)

  return (
    <div className={wrapperClasses.join(' ')}>
      <span className="in-icon _leading"></span>
      <div className="_content">
        { children }
      </div>
    </div>
  )
}

export default Callout