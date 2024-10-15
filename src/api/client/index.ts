import axios from 'axios';

const baseURL = 'http://localhost:3333';

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
