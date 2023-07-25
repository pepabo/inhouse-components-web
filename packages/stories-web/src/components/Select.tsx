import React, { FC, SelectHTMLAttributes } from 'react'
import { Appearance, SemanticColor, Size, State, Width } from './types'

type HTMLProps = SelectHTMLAttributes<HTMLSelectElement>

export interface Props extends Omit<HTMLProps, 'size'> {
  appearance?: Extract<Appearance, 'outlined' | 'filled'>
  color?: Extract<SemanticColor, 'neutral' | 'negative'>
  htmlSize?: number
  size?: Extract<Size, 's' | 'm' | 'l'>
  state?: Extract<State, 'enabled' | 'hover' | 'focused' | 'disabled'>
  width?: Width
}

const Select: FC<Props> = (props: Props) => {
  const {
    appearance,
    children,
    color,
    htmlSize,
    size,
    state,
    width,
    ...rest
  } = props

  const wrapperClasses = ['in-select']
  const innerClasses = ['_select']

  if (typeof appearance !== 'undefined') {
    wrapperClasses.push(`-appearance-${appearance}`)
  }

  if (typeof color !== 'undefined') {
    wrapperClasses.push(`-color-${color}`)
  }

  if (typeof size !== 'undefined') {
    wrapperClasses.push(`-size-${size}`)
  }

  if (typeof state !== 'undefined') {
    innerClasses.push(`--${state}`)
  }

  if (typeof width !== 'undefined') {
    wrapperClasses.push(`-width-${width}`)
  }

  return (
    <span className={wrapperClasses.join(' ')}>
      <select className={innerClasses.join(' ')} size={htmlSize} {...rest}>
        {children}
      </select>
      <span className='_icon' />
    </span>
  )
}

export default Select
