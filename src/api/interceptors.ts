import { AxiosRequestConfig } from 'axios';

const API_KEY = '098dc9c94659f4cc27789325dbb6ae2d'; // TODO should be configured through a .env file

export const injectAPIKeyQueryParam = (request: AxiosRequestConfig) => {
  if (request.method !== 'get') {
    return request;
  }

  request.params = { appid: API_KEY, ...request.params };
  return request;
};
