import { Text } from '~components/index';

import LetterField from '../LetterField/LetterField';
import LetterFormComplete from '../LetterFormComplete/LetterFormComplete';
import LetterPreview from '../LetterPreview/LetterPreview';
import ReceiveDateField from '../ReceiveDateField/ReceiveDateField';
import ReceiverField from '../ReceiverField/ReceiverField';
import SenderField from '../SenderField/SenderField';

import { LetterFormContentProps } from './LetterFormContent.types';

function LetterFormContent(props: LetterFormContentProps) {
  const { activeStep = 1 } = props;

  switch (activeStep) {
    case 1:
      return <SenderField />;
    case 2:
      return <ReceiverField />;
    case 3:
      return <ReceiveDateField />;
    case 4:
      return <LetterField />;
    case 5:
      return <LetterPreview />;
    case 6:
      return <LetterFormComplete />;
    default:
      return <Text color="white">예기치 못한 문제가 발생했습니다. 관리지에게 문의 주세요.</Text>;
  }
}

export default LetterFormContent;
