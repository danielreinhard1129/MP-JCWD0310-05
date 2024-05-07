
import axios, { AxiosInstance } from 'axios';
import { appConfig } from '@/utils/config';

const { baseURL } = appConfig;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});
export const axiosWithoutToken: AxiosInstance = axios.create({
  baseURL,

import { appConfig } from '@/utils/config';
import axios, { AxiosInstance } from 'axios';

const { baseUrl } = appConfig;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,

});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }


    return config;
  },
  (error) => {
    return Promise.reject(error);
  },

);

);

