import React, { FC, ReactNode } from 'react'
import { SemanticColor, Size, Appearance } from './types';

export interface Props {
  children: ReactNode;
  color?: Extract<
    SemanticColor,
    "informative" | "positive" | "negative" | "notice"
  >;
  size?: Extract<Size, 's' | 'm' | 'l'>;
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
