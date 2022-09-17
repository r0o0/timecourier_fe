import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { letterAPI } from '~/api';

export const useImageDataURLState = (
  fileReader: FileReader,
): [string | undefined, Dispatch<SetStateAction<string | undefined>>] => {
  const [imageDataURL, setImageDataURL] = useState<string>();

  useEffect(() => {
    const imageReaderOnLoad = () => {
      const imageResult = fileReader.result;
      if (typeof imageResult === 'string') {
        setImageDataURL(imageResult);
      }
    };

    fileReader.addEventListener('load', imageReaderOnLoad);
    return () => {
      fileReader.removeEventListener('load', imageReaderOnLoad);
    };
  }, [fileReader]);

  return [imageDataURL, setImageDataURL];
};

export const useGetImageByImageId = (imageId?: string, enabled = false) =>
  useQuery(['letterImage', imageId], () => letterAPI.getImageByImageId(imageId!), {
    enabled: !!imageId && enabled,
  });
