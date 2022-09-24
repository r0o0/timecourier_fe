import { useSetRecoilState } from 'recoil';

import env from '~/config';
import { letterFormStepState } from '~/pages/LetterForm/LetterForm.atoms';
import { NotificationToaster } from '~components/index';

declare const window: CustomWindow;
export const useShareWithKakao = () => {
  const kakao = window.Kakao;
  const setStep = useSetRecoilState(letterFormStepState);

  return ({
    id,
    receiverName,
    receivedDate,
  }: Required<Pick<APISchema.Letter, 'id' | 'receiverName' | 'receivedDate'>>) => {
    if (!kakao.isInitialized()) {
      kakao.init(env.kakaoShareKey);
    }

    kakao.Share.sendCustom({
      templateId: 80393,
      templateArgs: {
        name: `\nFrom. ${receiverName}`,
        day: `${receivedDate}\n`,
        linkUrl: `reminder/${id}`,
      },
      success: () => {
        setStep(6);
      },
      fail: () => {
        NotificationToaster.show('카카오톡 공유가 실패했습니다. 다시 시도 해 주시요.');
      },
    });
  };
};
