import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

import { inputStyle } from '../styles/input.css';

import { TextInputProps } from './TextInput.types';

function TextInput(props: TextInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { className, type, ...rest } = props;
  return <input ref={ref} className={classNames(inputStyle, className)} type={type} {...rest} />;
}

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
