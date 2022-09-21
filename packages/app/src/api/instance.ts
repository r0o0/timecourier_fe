import axios from 'axios';

import env from '~/config';
import { getCookie } from '~utils/cookies';

export const Authorization = `Bearer ${getCookie('token')}`;

const instance = axios.create({ baseURL: env.apiURL, headers: { Authorization } });

instance.interceptors.response.use((response) => response.data);

export default instance;
