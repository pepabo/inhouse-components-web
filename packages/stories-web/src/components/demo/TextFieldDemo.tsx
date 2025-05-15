import React, { FC } from 'react';
import TextField, { Props as TextFieldProps } from '../TextField';

export type Props = Pick<
  TextFieldProps,
  'appearance' | 'color' | 'size' | 'width'
>;

const TextFieldDemo: FC<Props> = (props) => (
  <>
    <div>
      <TextField {...props} isRequired />
      <TextField {...props} isRequired state="hover" />
      <TextField {...props} isRequired state="focused" />
      <TextField {...props} isRequired state="disabled" disabled />
    </div>
    <div>
      <TextField {...props} isRequired tag="textarea" />
      <TextField {...props} isRequired tag="textarea" state="hover" />
      <TextField {...props} isRequired tag="textarea" state="focused" />
      <TextField {...props} isRequired tag="textarea" state="disabled" disabled />
    </div>
  </>
);

export default TextFieldDemo;
