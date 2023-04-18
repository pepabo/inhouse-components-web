import React, { FC } from 'react'
import Select, { Props as SelectProps } from '../Select'

export type Props = Pick<SelectProps, 'appearance' | 'color' | 'size' | 'width'>

const SelectDemo: FC<Props> = (props) => (
  <>
    <div>
      <SingleLineSelect {...props} />
      <SingleLineSelect {...props} state='hover' />
      <SingleLineSelect {...props} state='focused' />
      <SingleLineSelect {...props} state='disabled' disabled />
    </div>
    <div>
      <MultiLineSelect {...props} />
      <MultiLineSelect {...props} state='hover' />
      <MultiLineSelect {...props} state='focused' />
      <MultiLineSelect {...props} state='disabled' disabled />
    </div>
  </>
)

export default SelectDemo

const SingleLineSelect: FC<SelectProps> = (props) => (
  <Select {...props}>
    <option className='_option' />
    <option className='_option' selected>Select A</option>
    <option className='_option'>Select B</option>
    <option className='_option'>Select C</option>
  </Select>
)

const MultiLineSelect: FC<SelectProps> = (props) => (
  <Select {...props} htmlSize={3}>
    <option className='_option' selected>Select A</option>
    <option className='_option'>Select B</option>
    <option className='_option'>Select C</option>
  </Select>
)
