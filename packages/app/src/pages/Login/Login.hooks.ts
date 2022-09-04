import { useCallback } from 'react';
import axios from 'axios';

import env from '~/config';

export const useGetKakaoAccessToken = () =>
  useCallback(async (code: string) => {
    if (!env.kakaoToken) {
      return;
    }
    try {
      const searchParams = new URLSearchParams({});
      searchParams.append('grant_type', 'authorization_code');
      searchParams.append('client_id', env.kakaoKey || '');
      searchParams.append('redirect_uri', `${env.localURL}/login`);
      searchParams.append('code', code);

      const { data } = await axios.post(env.kakaoToken, searchParams);

      // eslint-disable-next-line consistent-return
      return data;
    } catch (error) {
      console.error(error);
    }
  }, []);
