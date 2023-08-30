import React, { FC, ReactNode } from 'react'
import { Appearance, Brightness, Position } from '../types'

export interface Props {
  appearance?: Extract<Appearance, 'white' | 'filled' | 'transparent'>
  brightness?: Brightness
  isActivated?: boolean
  leading?: ReactNode
  position?: Extract<Position, 'relative' | 'fixed'>
  title: ReactNode
  titleTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  trailing?: ReactNode[]
  trailingElement?: 'action' | 'navigation'
}

const NavigationDrawerHeader: FC<Props> = (props: Props) => {
  const {
    appearance,
    brightness,
    isActivated,
    leading,
    position,
    title,
    titleTag,
    trailing,
    trailingElement,
    ...rest
  } = props;

  if ((title && !titleTag) || (!title && titleTag)) {
    throw new Error('title と titleTag はセットで使用してください')
  }

  if ((trailing && !trailingElement) || (!trailing && trailingElement)) {
    throw new Error('trailing と trailingElement はセットで使用してください')
  }

  const classes = [`_header`]

  if (typeof appearance !== 'undefined') {
    classes.push(`-appearance-${appearance}`)
  }

  if (typeof brightness !== 'undefined') {
    classes.push(`-brightness-${brightness}`)
  }

  if (typeof position !== 'undefined') {
    classes.push(`-position-${position}`)
  }

  if (isActivated) {
    classes.push(`--activated`)
  }

  return (
    <header
      className={classes.join(' ')}
      {...rest}
    >
      <div className='_content'>
        {leading && (
          <div className='_leading'>
            {leading}
          </div>
        )}
        <div className='_body'>
          {React.createElement(titleTag, { className: '_title' }, title)}
        </div>
        <div className='_trailing'>
          <div className='_list'>
            {trailing?.map((item, index) => (
              <div className='_item' key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationDrawerHeader
