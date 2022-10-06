import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { useIsPastDate } from '../LetterForm.hooks';

import { errorState } from './ReceivedDateField.atoms';
import { errorMessage } from './ReceivedDateField.const';
import { isValidTime } from './ReceivedDateField.utils';

export const useSetErrorMessage = () => {
  const setError = useSetRecoilState(errorState);
  const isPastDate = useIsPastDate();

  return useCallback(
    (newDate: string | undefined) => {
      if (!newDate) {
        return;
      }

      if (isPastDate(newDate)) {
        setError(errorMessage.pastTime);
      } else if (!isValidTime(newDate)) {
        setError(errorMessage.invalidTime);
      } else {
        setError(undefined);
      }
    },
    [isPastDate, setError],
  );
};

export const useValidateReceivedDateField = () => {
  const isPastDate = useIsPastDate();
  const setErrorMessage = useSetErrorMessage();

  return useCallback(
    (receivedDate: string | undefined) => {
      if (!receivedDate || isPastDate(receivedDate) || !isValidTime(receivedDate)) {
        setErrorMessage(receivedDate);
        return false;
      }

      return true;
    },
    [isPastDate, setErrorMessage],
  );
};
