import axios from 'axios';
import { baseUrl } from '../api-constants';

const config = {
  baseURL: baseUrl,
  timeout: 50 * 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

const httpClient = axios.create(config);

httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      (error.response && error.response.status !== 401) ||
      (error.response && error.response.status === 401)
    ) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export { httpClient };
