import React, { FC, MouseEvent, ReactNode } from 'react'

export interface Props {
  activated?: boolean
  href?: string
  icon: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  text?: string
}

const BottomNavigationItem: FC<Props> = (props: Props) => {
  const {
    activated,
    href,
    icon,
    onClick,
    text,
    ...rest
  } = props;

  if (href && onClick) {
    throw new Error('href と onClick は同時に指定できません')
  }

  const actionClasses = ['_action']

  if (activated) {
    actionClasses.push(`--activated`)
  }

  if (href) {
    return (
      <li
        className='_item'
        {...rest}
      >
        <a
          className={actionClasses.join(' ')}
          href={href}
        >
          <Inner
            icon={icon}
            text={text}
          />
        </a>
      </li>
    )
  }

  return (
    <li
    className='_item'
      {...rest}
    >
      <button
        className={actionClasses.join(' ')}
        onClick={onClick}
      >
        <Inner
          icon={icon}
          text={text}
        />
      </button>
    </li>
  )
}

type InnerProps = Pick<
  Props,
  'icon' | 'text'
>

const Inner: FC<InnerProps> = (props: InnerProps) => {
  const { icon, text } = props

  return (
    <>
      <div className='_icon'>
        {icon}
      </div>
      {text && (
        <div className='_text'>
          {text}
        </div>
      )}
    </>
  )
}

export default BottomNavigationItem
