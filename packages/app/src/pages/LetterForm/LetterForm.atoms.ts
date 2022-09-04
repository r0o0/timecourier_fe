import moment from 'moment';
import { atom } from 'recoil';

export const letterFormState = atom<APISchema.Letter>({
  key: 'letterForm',
  // TODO 달력과 시간 선택 컴포넌트 생성 후 receivedDate 기본 값은 스텝 3에서 설정
  default: { receivedDate: moment().add(1, 'd').format('YYYY-MM-DD HH:mm:ss') },
});
