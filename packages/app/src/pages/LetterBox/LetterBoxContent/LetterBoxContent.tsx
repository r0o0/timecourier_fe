import { useEffect, useMemo, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { useQuery } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { letterBoxLabelByType } from '~/pages/LetterBox/LetterBox.const';
import { letterDraftBoxState } from '~/pages/LetterBox/LetterBoxContent/LetterBoxContent.atoms';
import { Text } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';
import { isDoneLetter, isDraftLetter } from '~utils/letter';

import LetterBoxCard from '../LetterBoxCard/LetterBoxCard';

import { LetterBoxContentProps } from './LetterBoxContent.types';

function LetterBoxContent(props: LetterBoxContentProps) {
  const { letterStatus } = props;

  const {
    data: letters,
    refetch,
    isLoading,
  } = useQuery(['lettersByStatus', letterStatus], () => letterAPI.getLetters(), { cacheTime: 1 });

  const doneLetters = useMemo(
    () => letters?.filter((letter) => isDoneLetter(letter.letterStatus)),
    [letters],
  );
  const draftLetters = useMemo(
    () => letters?.filter((letter) => isDraftLetter(letter.letterStatus)),
    [letters],
  );

  const [letterDraftBox, setLetterDraftBox] = useRecoilState(letterDraftBoxState);

  useEffect(() => {
    refetch();
  }, []);

  const draftLetterMap = useRef<Map<string, APISchema.LetterTemplate>>(new Map());
  useEffect(() => {
    if (!draftLetters) {
      return;
    }
    draftLetters.forEach((item) => {
      draftLetterMap.current.set(item.id, item);
    });
    setLetterDraftBox(draftLetters);
  }, [draftLetters]);

  if (
    isLoading ||
    (isDraftLetter(letterStatus) &&
      letters?.find((it) => isDraftLetter(it.letterStatus)) &&
      draftLetterMap.current.size === 0)
  ) {
    return (
      <div
        className={layoutSprinkles({ display: 'flex', justify: 'center', items: 'center' })}
        style={{ height: '100%' }}
      >
        <Text color="white">{letterBoxLabelByType[letterStatus]}에 편지를 불러오고 있습니다.</Text>
      </div>
    );
  }

  if (!doneLetters || !draftLetters) {
    return (
      <div
        className={layoutSprinkles({ display: 'flex', justify: 'center', items: 'center' })}
        style={{ height: '100%' }}
      >
        <Text color="white">{letterBoxLabelByType[letterStatus]}에 편지가 없습니다.</Text>
      </div>
    );
  }

  return (
    <div className={layoutSprinkles({ display: 'flex', flex: 'column' })} style={{ gap: 12 }}>
      {isDraftLetter(letterStatus) &&
        letterDraftBox.map((letter) => (
          <LetterBoxCard key={letter.id} letter={letter} draftLetterMap={draftLetterMap} />
        ))}
      {isDoneLetter(letterStatus) &&
        doneLetters?.map((letter) => (
          <LetterBoxCard key={letter.id} letter={letter} draftLetterMap={draftLetterMap} />
        ))}
    </div>
  );
}

export default LetterBoxContent;
