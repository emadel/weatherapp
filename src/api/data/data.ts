import axios from 'axios';

import { injectAPIKeyQueryParam } from './interceptors';

const BASE_URL = 'http://api.openweathermap.org/';

export const data = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

data.interceptors.request.use(injectAPIKeyQueryParam);
