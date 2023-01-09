import axios from 'axios';

import { injectAPIKeyQueryParam } from './interceptors';

const BASE_URL = 'http://api.openweathermap.org/';

export const weatherMap = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

weatherMap.interceptors.request.use(injectAPIKeyQueryParam);
