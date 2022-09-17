import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { LetterStatus } from '~/const';
import { letterBoxLabelByType } from '~/pages/LetterBox/LetterBox.const';
import { observerStyle } from '~/pages/LetterBox/LetterBoxContent/LetterBoxContent.css';
import { Text } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';

import LetterBoxCard from '../LetterBoxCard/LetterBoxCard';

import { LetterBoxContentProps } from './LetterBoxContent.types';

const size = 10;

function LetterBoxContent(props: LetterBoxContentProps) {
  const { letterStatus } = props;

  const { data: lettersByPage, fetchNextPage } = useInfiniteQuery(
    ['lettersByStatus', size, letterStatus],
    ({ pageParam = 1 }) => letterAPI.getLettersByStatus({ size, page: pageParam, letterStatus }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.number === lastPage.totalPages) {
          return false;
        }
        return lastPage.number + 1;
      },
      select: (data) => ({
        pages: data.pages.map((page) => page.content),
        pageParams: data.pageParams,
      }),
    },
  );

  const { data } = useQuery(['temporaryLetters', letterStatus], () => letterAPI.getLetters());

  const draftLetters = useMemo(
    () => data?.filter((letter) => letter.letterStatus === LetterStatus.DRAFT),
    [data],
  );
  const doneLetters = useMemo(
    () => data?.filter((letter) => letter.letterStatus === LetterStatus.DONE),
    [data],
  );

  const { ref: observerRef, inView } = useInView({ delay: 200 });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const letters = useMemo(() => lettersByPage?.pages.flat(), [lettersByPage]);

  if (!letters || !draftLetters || !doneLetters) {
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
      {/* TODO 페이지네이션 api 동작 잘 되면 letters 하나로 가기 */}
      {letterStatus === LetterStatus.DRAFT &&
        (letters ?? draftLetters)?.map((letter) => <LetterBoxCard key={letter.id} {...letter} />)}
      {letterStatus === LetterStatus.DONE &&
        (letters ?? doneLetters)?.map((letter) => <LetterBoxCard key={letter.id} {...letter} />)}
      <div ref={observerRef} className={observerStyle} aria-hidden />
    </div>
  );
}

export default LetterBoxContent;
