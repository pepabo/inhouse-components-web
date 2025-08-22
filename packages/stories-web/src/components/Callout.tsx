import React, { FC, ReactNode } from 'react'
import { SemanticColor, Size } from './types';

export interface Props {
  children: ReactNode;
  color?: Extract<
    SemanticColor,
    "informative" | "positive" | "negative" | "notice"
  >;
  size?: Extract<Size, 's' | 'm' | 'l'>;
  hasButton?: boolean;
}

const Callout: FC<Props> = (props: Props) => {
  const wrapperClasses = ['in-callout']
  const {
    color = "informative",
    size = "m",
    hasButton = false,
    children
  } = props

  wrapperClasses.push(`-color-${color}`)
  wrapperClasses.push(`-size-${size}`)

  return (
    <div className={wrapperClasses.join(' ')}>
      <span className="_leading in-icon"></span>
      <div className="_body">
        { children }
      </div>
      { hasButton && (
        <div className="_trailing">
          <button className="_action">
            <div className="_body">閉じる</div>
          </button>
        </div>
      )}
    </div>
  )
}

export default Callout
