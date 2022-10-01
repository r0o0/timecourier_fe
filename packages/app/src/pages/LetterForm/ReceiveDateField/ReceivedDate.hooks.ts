import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { letterFormState } from '~/pages/LetterForm/LetterForm.atoms';

import { isValidTime } from './ReceiveDateField';

export const useValidateReceivedDateField = () => {
  const letterForm = useRecoilValue(letterFormState);

  return useCallback(() => {
    const { receivedDate } = letterForm;

    if (!receivedDate || !isValidTime(receivedDate)) {
      return false;
    }

    return true;
  }, [letterForm.receivedDate]);
};
