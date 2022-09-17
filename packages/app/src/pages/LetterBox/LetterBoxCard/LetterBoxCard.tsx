import { useEffect, useRef } from 'react';

import { useGetImageByImageId, useImageDataURLState } from '~/hooks';
import { LetterBoxCardProps } from '~/pages/LetterBox/LetterBoxCard/LetterBoxCard.types';
import { LetterCard } from '~components/index';

function LetterBoxCard(props: LetterBoxCardProps) {
  const { id, senderName, receiverName, content, imageId, letterStatus, createdAt } = props;

  const { data: imageArrayBuffer } = useGetImageByImageId(imageId);

  const imageReaderRef = useRef(new FileReader());
  const imageRef = useRef<string>();

  useEffect(() => {
    // if (!imageArrayBuffer) {
    //   return;
    // }

    const blob = new Blob([new Uint8Array(imageArrayBuffer!).buffer]);
    imageRef.current = URL.createObjectURL(blob);
  }, [imageArrayBuffer]);
  const [image] = useImageDataURLState(imageReaderRef.current);

  return (
    <LetterCard
      key={id}
      id={id}
      content={content}
      senderName={senderName}
      receiverName={receiverName}
      letterStatus={letterStatus}
      createdAt={createdAt}
      image={image}
    />
  );
}

export default LetterBoxCard;
