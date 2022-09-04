import { atom } from 'recoil';

import { NameFieldState } from './NameField.types';

export const nameFieldState = atom<NameFieldState>({
  key: 'letterForm.nameField',
  default: { name: '' },
});
