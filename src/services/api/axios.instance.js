import { env } from '@/configs/env.config';

import { authStore } from '@/stores/auth.store';
import axios from 'axios';

const config = {
  baseURL: env.VITE_API_URL,
};

export const publicAxiosInstance = axios.create(config);

publicAxiosInstance.interceptors.request.use(
  (config) => {
    const token = authStore.getState().token;

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// publicAxiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const isAuthPath = [ROUTES.LOGIN, ROUTES.REGISTER].includes(
//       window.location.pathname
//     );
//     if (error.response && error.response.status === 401 && !isAuthPath) {
//       authStore.getState().logout();

//       window.location.href = ROUTES.LOGIN;
//     }
//     return Promise.reject(error);
//   }
// );
