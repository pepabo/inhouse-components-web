import React, { FC, InputHTMLAttributes } from 'react'

type HTMLProps = InputHTMLAttributes<HTMLInputElement>

export interface Props extends HTMLProps {
  disabled?: boolean
  id?: string
  mixed?: boolean
  name?: string
  selected?: boolean
  value?: string
}

const Checkbox: FC<Props> = (props: Props) => {
  const {
    disabled,
    id,
    mixed,
    name,
    selected,
    value,
    ...rest
  } = props;

  const classes = ['in-checkbox']

  if (disabled) {
    classes.push('--disabled')
  }

  if (mixed) {
    classes.push('--mixed')
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
      type='checkbox'
      value={value}
      {...rest}
    />
  )
}

export default Checkbox
