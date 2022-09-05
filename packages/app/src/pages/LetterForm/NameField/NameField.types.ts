import { ReactElement } from 'react';

export interface NameFieldState {
  name: string;
  errorMessage?: string;
}

export interface NameFieldProps {
  children: ReactElement;
  name: string;
  placeholder?: string;
  onBlur: (name: string) => void;
}
