import axios from 'axios';

import env from '~/config';

const instance = axios.create({ baseURL: env.apiURL });

instance.interceptors.response.use((response) => response.data);

export default instance;
