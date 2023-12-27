import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://exampleapi.com';

const http: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

// Set up request interceptor
http.interceptors.request.use((request) => {
  // * Perform an action
  // TODO: implement an NProgress
  return request;
});

// Set up response interceptor
http.interceptors.response.use(
  (response) => {
    // * Do something
    return response;
  },
  (error) => {
    // * Implement a global error alert
    return Promise.reject(error);
  }
);

export default http;
