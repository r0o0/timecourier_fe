import { useCallback } from 'react';
import moment from 'moment';
import { useRecoilValue } from 'recoil';

import { useMutation } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { letterFormState } from '~/pages/LetterForm/LetterForm.atoms';
import { useValidateReceivedDateField } from '~/pages/LetterForm/ReceiveDateField/ReceivedDateField.hooks';
import { NotificationToaster } from '~components/index';

import { useValidateNameField } from './NameField/NameField.hooks';

export const useValidateLetterForm = (activeStep: number) => {
  const letterForm = useRecoilValue(letterFormState);
  const validateNameField = useValidateNameField();
  const validateReceivedDateField = useValidateReceivedDateField();

  return useCallback(() => {
    if (activeStep === 1) {
      return validateNameField();
    }

    if (activeStep === 2) {
      return validateNameField();
    }

    if(!validateReceivedDateField(letterForm.receivedDate)) {
       NotificationToaster.show(
         '편지 시간은 최소  30분, 최대 1년 뒤인 미래 시간으로 설정해 주세요.',
       );
       return false
    }

    if (activeStep === 4) {
      if (!letterForm.content) {
        NotificationToaster.show('편지 내용을 입력해 주세요.');
      }
      return !!letterForm.content;
    }

    return true;
  }, [activeStep, validateNameField, letterForm.content, letterForm.receivedDate]);
};

export const useAddLetter = (letterForm: APISchema.Letter) =>
  useMutation(() => letterAPI.addLetter(letterForm), {
    onError: () => {
      NotificationToaster.show('편지 저장에 실패했습니다.');
    },
  }).mutateAsync;

export const useSaveDraftLetter = () =>
  useMutation(
    ({ letter, method }: APISchema.SaveDraftLetter) => letterAPI.saveDraftLetter(letter, method),
    {
      onSuccess: () => {
        NotificationToaster.show('임시저장이 되었습니다.');
      },
      onError: () => {
        NotificationToaster.show('편지 저장에 실패했습니다.');
      },
    },
  ).mutate;

export const useIsPastDate = () =>
  useCallback((newDate: string): boolean => moment(newDate).isBefore(), []);
