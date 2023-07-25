import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { Appearance, SemanticColor, Size, State, Width } from './types';

type HTMLProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLInputElement>;

export interface Props extends Omit<HTMLProps, 'size'> {
  appearance?: Extract<Appearance, 'outlined' | 'filled'>;
  color?: Extract<SemanticColor, 'neutral' | 'negative'>;
  htmlSize?: number;
  size?: Extract<Size, 's' | 'm' | 'l'>;
  state?: Extract<State, 'enabled' | 'hover' | 'focused' | 'disabled'>;
  tag?: 'input' | 'textarea';
  width?: Width;
}

const TextField: FC<Props> = (props: Props) => {
  const {
    appearance,
    color,
    htmlSize,
    size,
    state,
    tag = 'input',
    value,
    width,
    ...rest
  } = props;

  const wrapperClasses = ['in-textfield'];
  const innerClasses = ['_input'];

  if (typeof appearance !== 'undefined') {
    wrapperClasses.push(`-appearance-${appearance}`);
  }

  if (typeof color !== 'undefined') {
    wrapperClasses.push(`-color-${color}`);
  }

  if (typeof size !== 'undefined') {
    wrapperClasses.push(`-size-${size}`);
  }

  if (typeof state !== 'undefined') {
    innerClasses.push(`--${state}`);
  }

  if (typeof width !== 'undefined') {
    wrapperClasses.push(`-width-${width}`);
  }

  if (tag === 'input') {
    return (
      <div className={wrapperClasses.join(' ')}>
        <input
          className={innerClasses.join(' ')}
          size={htmlSize}
          type="text"
          value={value}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      </div>
    );
  }

  return (
    <div className={wrapperClasses.join(' ')}>
      <textarea
        className={innerClasses.join(' ')}
        {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      >
        {value}
      </textarea>
    </div>
  );
};

export default TextField;
