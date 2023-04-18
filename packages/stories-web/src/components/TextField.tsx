import React, { FC, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { Appearance, SemanticColor, Size, State, Width } from './types'

type HTMLProps = InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLInputElement>

export interface Props extends Omit<HTMLProps, 'size'> {
  appearance?: Appearance
  color?: SemanticColor
  htmlSize?: number
  icon?: ReactNode
  iconPosition?: 'before' | 'after'
  size?: Extract<Size, 's' | 'm' | 'l'>
  state?: Extract<State, 'enabled' | 'hover' | 'focused' | 'disabled'>
  tag?: 'input' | 'textarea'
  width?: Width
}

const TextField: FC<Props> = (props: Props) => {
  const {
    appearance,
    color,
    htmlSize,
    icon,
    iconPosition,
    size,
    state,
    tag = 'input',
    value,
    width,
    ...rest
  } = props

  const wrapperClasses = ['in-textfield']
  const innerClasses = ['_input']

  if (typeof appearance !== 'undefined') {
    wrapperClasses.push(`-appearance-${appearance}`)
  }

  if (typeof color !== 'undefined') {
    wrapperClasses.push(`-color-${color}`)
  }

  if (typeof iconPosition !== 'undefined') {
    wrapperClasses.push(`-icon-${iconPosition}`)
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

  if (tag === 'input') {
    return (
      <div className={wrapperClasses.join(' ')}>
        <input
          className={innerClasses.join(' ')}
          size={htmlSize}
          type='text'
          value={value}
          {...rest as InputHTMLAttributes<HTMLInputElement>}
        />
        {icon}
      </div>
    )
  }

  return (
    <div className={wrapperClasses.join(' ')}>
      <textarea
        className={innerClasses.join(' ')}
        {...rest as TextareaHTMLAttributes<HTMLTextAreaElement>}
      >
        {value}
      </textarea>
      {icon}
    </div>
  )
}

export default TextField
