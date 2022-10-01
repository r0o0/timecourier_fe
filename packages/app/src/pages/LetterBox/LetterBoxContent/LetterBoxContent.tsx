import { useEffect, useMemo, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { useQuery } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { LetterStatus } from '~/const';
import { letterBoxLabelByType } from '~/pages/LetterBox/LetterBox.const';
import { letterDraftBoxState } from '~/pages/LetterBox/LetterBoxContent/LetterBoxContent.atoms';
import { Text } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';

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
    () => letters?.filter((letter) => letter.letterStatus === LetterStatus.DONE),
    [letters],
  );
  const draftLetters = useMemo(
    () => letters?.filter((letter) => letter.letterStatus === LetterStatus.DRAFT),
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
    (letterStatus === LetterStatus.DRAFT &&
      letters?.find((it) => it.letterStatus === LetterStatus.DRAFT) &&
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
      {letterStatus === LetterStatus.DRAFT &&
        letterDraftBox.map((letter) => (
          <LetterBoxCard key={letter.id} letter={letter} draftLetterMap={draftLetterMap} />
        ))}
      {letterStatus === LetterStatus.DONE &&
        doneLetters?.map((letter) => (
          <LetterBoxCard key={letter.id} letter={letter} draftLetterMap={draftLetterMap} />
        ))}
    </div>
  );
}

export default LetterBoxContent;
