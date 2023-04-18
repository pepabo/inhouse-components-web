import React, { FC } from 'react'
import TextField, { Props as TextFieldProps } from '../TextField'

export type Props = Pick<TextFieldProps, 'appearance' | 'color' | 'size' | 'width'>

const TextFieldDemo: FC<Props> = (props) => (
  <>
    <div>
      <TextField {...props} />
      <TextField {...props} state='hover' />
      <TextField {...props} state='focused' />
      <TextField {...props} state='disabled' disabled />
      <TextField {...props} iconPosition='before'
        icon={<span className='_icon' data-icon='camera' />}
      />
    </div>
    <div>
      <TextField {...props} tag='textarea' />
      <TextField {...props} tag='textarea' state='hover' />
      <TextField {...props} tag='textarea' state='focused' />
      <TextField {...props} tag='textarea' state='disabled' disabled />
      <TextField {...props} tag='textarea' iconPosition='before'
        icon={<span className='_icon' data-icon='copy' />}
      />
    </div>
  </>
)

export default TextFieldDemo
