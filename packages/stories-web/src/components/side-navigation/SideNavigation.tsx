import React, { FC, ReactNode } from 'react'
import { useStyleBase } from '../styleBase'

export interface Props {
  body: ReactNode
  header?: ReactNode
  isActivated?: boolean
}

const SideNavigation: FC<Props> = (props: Props) => {
  const {
    body,
    header,
    isActivated,
  } = props

  const styleBase = useStyleBase()
  const classes = [`${styleBase}-side-navigation`]

  if (isActivated) {
    classes.push(`--activated`)
  }

  return (
    <aside className={classes.join(' ')}>
      {header && (
        <div className='_header'>
          {header}
        </div>
      )}
      <nav>
        {body}
      </nav>
    </aside>
  )
}

export default SideNavigation
