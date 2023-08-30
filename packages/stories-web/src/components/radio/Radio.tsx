import React, { FC, InputHTMLAttributes } from 'react'

type HTMLProps = InputHTMLAttributes<HTMLInputElement>

export interface Props extends HTMLProps {
  disabled?: boolean
  id?: string
  name?: string
  selected?: boolean
  value?: string
}

const Radio: FC<Props> = (props: Props) => {
  const {
    disabled,
    id,
    name,
    selected,
    value,
    ...rest
  } = props;

  const classes = ['in-radio']

  if (disabled) {
    classes.push('--disabled')
  }

  if (selected) {
    classes.push('--selected')
  }

  return (
    <input
      className={classes.join(' ')}
      checked={selected}
      disabled={disabled}
      id={id}
      name={name}
      type='radio'
      value={value}
      {...rest}
    />
  )
}

export default Radio
