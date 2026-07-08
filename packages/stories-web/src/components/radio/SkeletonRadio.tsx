import React, { FC } from 'react'
import { useStyleBase } from '../styleBase'

const SkeletonRadio: FC = () => {
  const styleBase = useStyleBase()
  return (
    <div className={`${styleBase}-skeleton-radio`}></div>
  )
}

export default SkeletonRadio
