import React, { FC, MouseEvent, ReactNode } from 'react'
import { Size } from '../types'

type EdgeElement = 'avatar' | 'icon' | 'input' | 'media'

export interface Props {
  activated?: boolean
  description?: ReactNode
  disabled?: boolean
  href?: string
  htmlFor?: string
  isDraggable?: boolean
  leading?: ReactNode
  leadingElement?: Extract<EdgeElement, 'avatar' | 'icon' | 'input' | 'media'>
  mediaSize?: Extract<Size, 's' | 'm' | 'l'>
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  onDrag?: (event: MouseEvent<HTMLLIElement>) => void
  onDragEnd?: (event: MouseEvent<HTMLLIElement>) => void
  onDragEnter?: (event: MouseEvent<HTMLLIElement>) => void
  onDragLeave?: (event: MouseEvent<HTMLLIElement>) => void
  onDragOver?: (event: MouseEvent<HTMLLIElement>) => void
  onDragStart?: (event: MouseEvent<HTMLLIElement>) => void
  onDrop?: (event: MouseEvent<HTMLLIElement>) => void
  selected?: boolean
  target?: '_self' | '_blank' | '_parent' | '_top'
  title: ReactNode
  trailing?: ReactNode
  trailingElement?: Extract<EdgeElement, 'icon' | 'input'>
}

const InteractiveListItem: FC<Props> = (props: Props) => {
  const {
    activated,
    description,
    disabled,
    href,
    htmlFor,
    isDraggable,
    leading,
    leadingElement,
    mediaSize,
    onClick,
    onDrag,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragStart,
    onDrop,
    selected,
    target,
    title,
    trailing,
    trailingElement,
    ...rest
  } = props;

  if (activated && selected) {
    throw new Error('activated と selected は同時に指定できません')
  }

  if (activated && isDraggable) {
    throw new Error('activated と isDraggable は同時に指定できません')
  }

  if (href && onClick) {
    throw new Error('href と onClick は同時に指定できません')
  }

  if (href && htmlFor) {
    throw new Error('href と htmlFor は同時に指定できません')
  }

  if (htmlFor && onClick) {
    throw new Error('htmlFor と onClick は同時に指定できません')
  }

  if (isDraggable && selected) {
    throw new Error('isDraggable と selected は同時に指定できません')
  }

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

  if (activated) {
    classes.push('--activated')
  }

  if (disabled) {
    classes.push('--disabled')
  }

  if (isDraggable) {
    classes.push('-is-draggable')
  }

  if (selected) {
    classes.push('--selected')
  }

  if (href) {
    return (
      <li
        className={classes.join(' ')}
        draggable={isDraggable}
        onDrag={onDrag}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        {...rest}
      >
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : ''}
        >
          <Inner
            leading={leading}
            leadingElement={leadingElement}
            mediaSize={mediaSize}
            title={title}
            description={description}
            trailing={trailing}
            trailingElement={trailingElement}
          />
        </a>
      </li>
    );
  }

  if (onClick) {
    return (
      <li
        className={classes.join(' ')}
        draggable={isDraggable}
        onDrag={onDrag}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        {...rest}
      >
        <button
          disabled={disabled}
          onClick={onClick}
        >
          <Inner
            leading={leading}
            leadingElement={leadingElement}
            mediaSize={mediaSize}
            title={title}
            description={description}
            trailing={trailing}
            trailingElement={trailingElement}
          />
        </button>
      </li>
    )
  }

  if (htmlFor) {
    return (
      <li
        className={classes.join(' ')}
        draggable={isDraggable}
        onDrag={onDrag}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        {...rest}
      >
        <label htmlFor={htmlFor}>
          <Inner
            leading={leading}
            leadingElement={leadingElement}
            mediaSize={mediaSize}
            title={title}
            description={description}
            trailing={trailing}
            trailingElement={trailingElement}
          />
        </label>
      </li>
    );
  }

  return (
    <li
      className={classes.join(' ')}
      draggable={isDraggable}
      onDrag={onDrag}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      {...rest}
    >
      <div>
        <Inner
          leading={leading}
          leadingElement={leadingElement}
          mediaSize={mediaSize}
          title={title}
          description={description}
          trailing={trailing}
          trailingElement={trailingElement}
        />
      </div>
    </li>
  );
}

type InnerProps = Pick<
  Props,
  'description' | 'leading' | 'leadingElement' | 'mediaSize' | 'title' | 'trailing' | 'trailingElement'
>

const Inner: FC<InnerProps> = (props: InnerProps) => {
  const {
    description,
    leading,
    leadingElement,
    mediaSize,
    title,
    trailing,
    trailingElement
  } = props

  const leadingElementClasses = [`_${leadingElement}`]

  if (typeof mediaSize !== 'undefined') {
    leadingElementClasses.push(`-size-${mediaSize}`)
  }

  return (
    <>
      {leading &&
        <div className='_leading'>
          <div className={leadingElementClasses.join(' ')}>
            {leading}
          </div>
        </div>
      }
      <div className='_body'>
        <div className='_title'>
          {title}
        </div>
        {description && (
          <div className='_description'>
            {description}
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
    </>
  )
}

export default InteractiveListItem
