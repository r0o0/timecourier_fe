import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { state } from '~/store';
import { Button, ProgressBar } from '~components/index';

import LetterFormContent from './LetterFormContent/LetterFormContent';
import { letterFormState } from './LetterForm.atoms';
import {
  letterFormActionButtonStyle,
  letterFormActionsStyle,
  letterFormContentStyle,
  letterFormStyle,
} from './LetterForm.css';
import { useAddLetter, useValidateLetterForm } from './LetterForm.hooks';

const totalSteps = 5;

function LetterForm() {
  const { nickname, username, id: userID } = useRecoilValue(state.user);
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);

  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    setLetterForm((prev) => ({
      ...prev,
      userID,
      senderName: nickname ?? username,
    }));
  }, []);

  const validateLetterForm = useValidateLetterForm(step);
  const addLetter = useAddLetter();
  const handleNextClick = async () => {
    if (!validateLetterForm()) {
      return;
    }

    if (!letterForm.id) {
      await addLetter();
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className={letterFormStyle}>
      <ProgressBar steps={totalSteps} activeStep={step} />
      <div className={letterFormContentStyle}>
        <LetterFormContent activeStep={step} />
      </div>
      <div className={letterFormActionsStyle}>
        {step > 1 && (
          <Button.Prev className={letterFormActionButtonStyle} onClick={handlePrevClick} />
        )}
        <Button.Next
          className={letterFormActionButtonStyle}
          onClick={handleNextClick}
          style={{
            marginLeft: 'auto',
            alignSelf: 'flex-end',
          }}
        />
      </div>
    </div>
  );
}

export default LetterForm;
