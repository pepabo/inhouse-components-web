import React, { FC, ReactNode } from 'react'
import { Layer } from '../types'
import { useStyleBase } from '../styleBase'

export interface Props {
  bodies: ReactNode[]
  headers: ReactNode[]
  isActivated?: boolean
  layer?: Layer
  scrim: ReactNode
}

const NavigationDrawer: FC<Props> = (props: Props) => {
  const {
    bodies,
    headers,
    isActivated,
    layer,
    scrim,
  } = props

  const styleBase = useStyleBase()
  const classes = [`${styleBase}-navigation-drawer`]

  if (isActivated) {
    classes.push(`--activated`)
  }

  if (typeof layer !== 'undefined') {
    classes.push(`-layer-${layer}`)
  }

  return (
    <aside className={classes.join(' ')}>
      {scrim}
      <div className='_content'>
        {headers}
        {bodies}
      </div>
    </aside>
  )
}

export default NavigationDrawer
