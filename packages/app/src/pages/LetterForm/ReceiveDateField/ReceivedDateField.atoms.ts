import { atom } from 'recoil';

export const errorState = atom<string | undefined>({
  key: 'letterForm.receivedDateFieldError',
  default: undefined,
});
