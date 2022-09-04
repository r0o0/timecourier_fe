import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { useMutation } from '@tanstack/react-query';

import { letterAPI } from '~/api';

import { useValidateNameField } from './NameField/NameField.hooks';
import { letterFormState } from './LetterForm.atoms';

export const useValidateLetterForm = (activeStep: number) => {
  const validateNameField = useValidateNameField();

  return useCallback(() => {
    if (activeStep === 1) {
      return validateNameField();
    }

    if (activeStep === 2) {
      return validateNameField();
    }

    return true;
  }, [activeStep, validateNameField]);
};

export const useAddLetter = () => {
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);

  return useMutation(() => letterAPI.addLetter(letterForm), {
    onSuccess: ({ data }) => {
      if (!data) {
        return;
      }
      setLetterForm({ ...letterForm, id: data[0].id });
    },
    onError: (error) => {
      // TODO add notification toast
      console.error(error);
    },
  }).mutate;
};
