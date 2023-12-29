import axios from 'axios';
import Cookies from 'js-cookie';

const http = axios.create({});

// request interceptor
http.interceptors.request.use((request) => {
  return request;
});

//response interceptor
http.interceptors.response.use(
  async (response) => {
    // Todo: change this if token is sent in another way
    if (response.data?.jwtToken) {
      Cookies.set('accesstoken', response.data?.jwtToken);
      return response;
    }
    /* if (response.headers.authorization) {
      Cookies.set('accesstoken', response.headers.authorization);
      return response;
    } */

    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default http;
