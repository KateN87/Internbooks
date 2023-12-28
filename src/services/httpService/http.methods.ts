import { AxiosResponse, AxiosRequestConfig } from 'axios';
import http from './http.instance';
import getAuthorization from '../authService/authorization';
import { EHttpMethod } from '../../types/enums/enums';

const setupHeaders = (requireAccess: boolean = false) => {
  if (!requireAccess) {
    return;
  }
  const authorizationHeader = getAuthorization();

  return {
    ...authorizationHeader,
  };
};

const request = async <T>(
  method: EHttpMethod,
  url: string,
  options: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await http.request<T>({
      method,
      url,
      /* ...options, */
    });

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const get = async <T>(
  url: string,
  requireAccess: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.GET, url, {
    headers: setupHeaders(requireAccess),
  });
};

const post = async <T, P>(
  url: string,
  payload: P,
  requireAccess: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.POST, url, {
    data: payload,
    headers: setupHeaders(requireAccess),
  });
};

const update = async <T, P>(
  url: string,
  payload: P,
  requireAccess: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.PUT, url, {
    data: payload,
    headers: setupHeaders(requireAccess),
  });
};

const remove = async <T>(
  url: string,
  requireAccess: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.DELETE, url, {
    headers: setupHeaders(requireAccess),
  });
};

export { get, post, update, remove };
