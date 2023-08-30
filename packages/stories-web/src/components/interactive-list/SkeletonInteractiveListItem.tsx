import React, { FC, ReactNode } from 'react'
import { Size } from '../types'

type EdgeElement = 'avatar' | 'icon' | 'input' | 'media'

export interface Props {
  hasDescription?: boolean
  leading?: ReactNode
  leadingElement?: Extract<EdgeElement, 'avatar' | 'icon' | 'input' | 'media'>
  mediaSize?: Extract<Size, 's' | 'm' | 'l'>
  trailing?: ReactNode
  trailingElement?: Extract<EdgeElement, 'icon' | 'input'>
}

const SkeletonInteractiveListItem: FC<Props> = (props: Props) => {
  const {
    hasDescription,
    leading,
    leadingElement,
    mediaSize,
    trailing,
    trailingElement,
    ...rest
  } = props;

  if ((leading && !leadingElement) || (!leading && leadingElement)) {
    throw new Error('leading と leadingElement はセットで使用してください')
  }

  if (leadingElement !== 'media' && mediaSize) {
    throw new Error('leadingElement が media の場合のみ mediaSize を指定できます')
  }

  if (leadingElement === 'media' && !mediaSize) {
    throw new Error('leadingElement が media の場合は mediaSize を指定してください')
  }

  const classes = ['_item']

  const leadingElementClasses = [`_${leadingElement}`]

  if (typeof mediaSize !== 'undefined') {
    leadingElementClasses.push(`-size-${mediaSize}`)
  }

  return (
    <li
      className={classes.join(' ')}
      {...rest}
    >
      <div>
        {leading &&
          <div className='_leading'>
            <div className={leadingElementClasses.join(' ')}>
              {leading}
            </div>
          </div>
        }
        <div className='_body'>
          <div className='_title'>
            <span className='_skeleton'></span>
          </div>
          {hasDescription && (
            <div className='_description'>
              <span className='_skeleton'></span>
            </div>
          )}
        </div>
        {trailing &&
          <div className='_trailing'>
            <div className={`_${trailingElement}`}>
              {trailing}
            </div>
          </div>
        }
      </div>
    </li>
  );
}

export default SkeletonInteractiveListItem
