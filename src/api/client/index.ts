import axios from 'axios';

const baseURL = 'http://localhost:3333';

const axiosInstance = axios.create({
  baseURL: baseURL,
});
axiosInstance.interceptors.request.use((config) => {
  const localUser = localStorage.getItem('user_id');
  const sessionUser = sessionStorage.getItem('user_id');
  const userId = localUser ? localUser : sessionUser;
  if (userId && userId.length > 0) {
    config.headers.Authorization = `${userId}`;
  }
  return config;
});

export default axiosInstance;
