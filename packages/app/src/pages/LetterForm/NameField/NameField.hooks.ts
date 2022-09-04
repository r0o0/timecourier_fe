import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { nameFieldState } from './NameField.atoms';

export const useValidateNameField = () => {
  const [nameField, setNameField] = useRecoilState(nameFieldState);

  return useCallback(() => {
    const { name } = nameField;
    let errorMessage = '';

    if (name && name.length < 10) {
      return true;
    }
    if (!name?.trim()) {
      errorMessage = '이름을 입력해주세요';
    }
    if ((name || '').length > 10) {
      errorMessage = '이름은 10글자 이내로 적어주세요.';
    }

    setNameField({
      ...nameField,
      errorMessage,
    });
    return false;
  }, [nameField.name]);
};
