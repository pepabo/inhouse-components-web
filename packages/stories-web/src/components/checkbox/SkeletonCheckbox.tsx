import React, { FC } from 'react'
import { useStyleBase } from '../styleBase'

const SkeletonCheckbox: FC = () => {
  const styleBase = useStyleBase()
  return (
    <div className={`${styleBase}-skeleton-checkbox`}></div>
  )
}

export default SkeletonCheckbox
