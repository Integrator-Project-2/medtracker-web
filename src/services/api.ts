import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

const excludeTokenUrls = ['/register-doctor/', '/token/'];

api.interceptors.request.use(
  (config) => {
    if (config.url && !excludeTokenUrls.includes(config.url)) {
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN || localStorage.getItem('token'); 
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;
