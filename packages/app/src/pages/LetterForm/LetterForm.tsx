import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { userState } from '~/store/user.atoms';
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
  const user = useRecoilValue(userState);
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);

  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (!user) {
      return;
    }
    setLetterForm({
      ...letterForm,
      userID: user.id,
      senderName: user.name,
    });
  }, [user.name, user.id]);

  const validateLetterForm = useValidateLetterForm(step);
  const addLetter = useAddLetter(letterForm);
  const handleNextClick = async () => {
    if (!validateLetterForm()) {
      return;
    }

    if (!letterForm.id) {
      const { data } = await addLetter();
      setLetterForm({ ...letterForm, id: data[0]?.id });
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
        <Button.Next
          className={letterFormActionButtonStyle}
          style={{ marginLeft: 'auto' }}
          onClick={handleNextClick}
        />
        {step > 1 && (
          <Button.Prev className={letterFormActionButtonStyle} onClick={handlePrevClick} />
        )}
      </div>
    </div>
  );
}

export default LetterForm;
