import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Thumbnail :FC<Props> = (props: Props) => {
  const { children } = props

  return (
    <span className='_thumbnail'>
      {children}
    </span>
  )
}

export default Thumbnail
