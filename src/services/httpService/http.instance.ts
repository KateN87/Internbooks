import axios from 'axios';
import Cookies from 'js-cookie';
import { handleAuthenticationErrors } from '../../Util/logoutFunction';

const http = axios.create({});

// request interceptor
http.interceptors.request.use((request) => {
  return request;
});

//response interceptor
http.interceptors.response.use(
  async (response) => {
    if (response.data?.jwtToken) {
      Cookies.set('accesstoken', response.data?.jwtToken);
      return response;
    }

    return response;
  },
  async (error) => {
    handleAuthenticationErrors(error);
  }
);

export default http;
