import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'http://user-service.eu-north-1.elasticbeanstalk.com:8020/';

const http: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

// Set up request interceptor
http.interceptors.request.use((request) => {
  return request;
});

// Set up response interceptor
http.interceptors.response.use(
  async (response) => {
    if (response.headers.authorization) {
      Cookies.set('accesstoken', response.headers.authorization);
      return response;
    }
    return response;
  },
  (error) => {
    // * Implement a global error alert
    return Promise.reject(error);
  }
);

export default http;
