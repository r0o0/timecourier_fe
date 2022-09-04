import { useRecoilState } from 'recoil';

import { Text } from '~components/index';

import { letterFormState } from '../LetterForm.atoms';
import NameField from '../NameField/NameField';

function SenderField() {
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);

  const handleSenderBlur = (value: string) => {
    setLetterForm({ ...letterForm, senderName: value });
  };

  return (
    <div>
      <NameField
        placeholder={letterForm.senderName}
        name={letterForm.senderName ?? ''}
        onBlur={handleSenderBlur}
      >
        <Text as="h2" color="white" size={4}>
          <Text as="span" color="secondary" size={4}>
            내 이름
          </Text>
          을
          <br />
          먼저 적어볼까요?
        </Text>
      </NameField>
    </div>
  );
}

export default SenderField;
