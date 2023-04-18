import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Thumbnail :FC<Props> = (props: Props) => {
  const { children } = props

  return (
    <div className='_thumbnail'>
      {children}
    </div>
  )
}

export default Thumbnail
