import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useMutation } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { useIsPastDate } from '~/pages/LetterForm/LetterForm.hooks';
import { letterPreviewActionsStyle } from '~/pages/LetterForm/LetterPreview/LetterPreview.css';
import { useShareWithKakao } from '~/pages/LetterForm/LetterPreview/LetterPreview.hooks';
import LetterSendConfirm from '~/pages/LetterForm/LetterSendConfirm/LetterSendConfirm';
import { Button, LetterTemplate, NotificationToaster, Text } from '~components/index';

import { letterFormState, letterFormStepState, letterImageState } from '../LetterForm.atoms';

function LetterPreview() {
  const letterImage = useRecoilValue(letterImageState);
  const { userID, id, receivedDate, senderName, receiverName, content, imageId } =
    useRecoilValue(letterFormState);
  const setStep = useSetRecoilState(letterFormStepState);

  const saveLetter = useMutation(
    (letterPutReq: APISchema.LetterPutReq) => letterAPI.saveLetter(letterPutReq),
    {
      onError: () => {
        NotificationToaster.show('편지 저장에 실패했습니다.');
      },
    },
  ).mutateAsync;

  if (!senderName || !receiverName || !content) {
    return null;
  }

  const handlePrevClick = () => {
    setStep(4);
  };

  const shareWithKakao = useShareWithKakao();
  const sendLetter = async () => {
    if (!userID || !id || !receivedDate || !senderName || !receiverName || !content) {
      return;
    }
    await saveLetter({
      userID,
      id,
      receivedDate,
      senderName,
      receiverName,
      content,
      imageId,
      letterStatus: 'DONE',
    });
    shareWithKakao({ id, receivedDate, senderName });
  };

  const isPastDate = useIsPastDate();
  const handleSendClick = () => {
    if (receivedDate && isPastDate(receivedDate)) {
      setStep(3);
      return;
    }
    LetterSendConfirm.show({ onCancel: handlePrevClick, onConfirm: sendLetter });
  };

  return (
    <>
      <Text as="h2" color="white">
        잘못 적은 부분이 없는지 확인해 주세요.
      </Text>
      <LetterTemplate
        letterProps={{
          senderName,
          receiverName,
          content,
          imageDataURL: letterImage.image,
        }}
        style={{ marginTop: 20, paddingBottom: 32 }}
      />
      <div className={letterPreviewActionsStyle}>
        <Button label="돌아가기" variant="outline" onClick={handlePrevClick} />
        <Button label="편지 보내기" background="gradient" onClick={handleSendClick} />
      </div>
    </>
  );
}

export default LetterPreview;
