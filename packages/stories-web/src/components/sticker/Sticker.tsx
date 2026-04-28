import React, { FC, ReactNode } from 'react'
import { SemanticColor, Size, Appearance } from '../types'

export interface Props {
  children: ReactNode;
  color?: Extract<
    SemanticColor,
    "neutral" | "informative" | "positive" | "negative" | "notice" | "attention"
  >;
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>;
  appearance?: Extract<Appearance, 'filled' | 'outlined'>;
}

const Sticker: FC<Props> = (props: Props) => {
  const {
    color = "informative",
    size = "m",
    appearance = "filled",
    children
  } = props

  const classes = [
    'in-sticker',
    `-color-${color}`,
    `-size-${size}`,
    `-appearance-${appearance}`,
  ]

  return (
    <span className={classes.join(' ')}>
      {children}
    </span>
  )
}

export default Sticker
