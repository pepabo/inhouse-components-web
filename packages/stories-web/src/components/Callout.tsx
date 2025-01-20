import React, { FC, ReactNode } from 'react'
import { SemanticColor, Size } from './types';

export interface Props {
  children: ReactNode;
  color?: Extract<
    SemanticColor,
    "informative" | "positive" | "negative" | "notice"
  >;
  size?: Extract<Size, 's' | 'm' | 'l'>;
  isActive?: boolean;
  hasCloseButton?: boolean;
}

const Callout: FC<Props> = (props: Props) => {
  const wrapperClasses = ['in-callout']
  const {
    color = "informative",
    size = "m",
    isActive = true,
    hasCloseButton = false,
    children
  } = props

  wrapperClasses.push(`-color-${color}`)
  wrapperClasses.push(`-size-${size}`)

  if (hasCloseButton === false || isActive === true) {
    wrapperClasses.push(`--active`)
  }

  return (
    <div
      className={wrapperClasses.join(' ')}
      aria-live="polite"
    >
      <span className="_leading in-icon"></span>
      <div className="_body">
        { children }
      </div>
      { hasCloseButton && (
        <div className="_trailing">
          <button className="in-button -size-s -appearance-transparent">
            <div className="_body">閉じる</div>
          </button>
        </div>
      )}
    </div>
  )
}

export default Callout
