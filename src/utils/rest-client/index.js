import axios from 'axios';
import {baseUrl} from '../api-constants';

/**
 * Axios basic configuration
 * Some general configuration can be added like timeout, headers, params etc. More details can be found on https://github.com/axios/axios
 * */
const config = {
  baseURL: baseUrl,
  timeout: 50 * 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

/**
 * Creating the instance of Axios
 * It is because, in large scale application we may need to consume APIs from more than single server,
 * So, may need to create multiple http client with different config
 * Only this client will be used rather than axios in the application
 * */
const httpClient = axios.create(config);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(`Error config - ${error.config?.url}`, error.config);
    if (error.response) {
      console.log('Error root response', error.response);
    } else {
      console.log('Error root', error);
    }

    // ||
    //   (error.response.status === 401 &&
    //     error.config?.url.startsWith('user/1.0/user/auth/broker') &&
    //     error.response.data.status === '')
    /** Do something with response error */
    if (
      (error.response && error.response.status !== 401) ||
      (error.response && error.response.status === 401)
    ) {
      console.log(`Error config - 1 ${error.config?.url}`);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export {httpClient};
