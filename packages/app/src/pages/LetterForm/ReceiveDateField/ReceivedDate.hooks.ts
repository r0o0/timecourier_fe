import { useCallback } from 'react';

import { useIsPastDate } from '../LetterForm.hooks';

import { isValidTime } from './ReceiveDateField';

export const useValidateReceivedDateField = () => {
  const isPastDate = useIsPastDate();
  return useCallback(
    (receivedDate: string | undefined) => {
      if (!receivedDate || isPastDate(receivedDate) || !isValidTime(receivedDate)) {
        return false;
      }

      return true;
    },
    [isPastDate],
  );
};
