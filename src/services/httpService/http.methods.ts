import { AxiosResponse, AxiosRequestConfig } from 'axios';
import http from './http.instance';
import getAuthorization from '../authService/authorization';
import { EHttpMethod } from '../../types/enums/enums';

// For now only used for authorization
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
      ...options,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject();
  }
};

// GET requests
const get = async <T>(
  url: string,
  requireAccess: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.GET, url, {
    headers: setupHeaders(requireAccess),
  });
};

// POST requests
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

// PUT requests
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

// DELETE requests
const remove = async <T>(
  url: string,
  requireAccess: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.DELETE, url, {
    headers: setupHeaders(requireAccess),
  });
};

export { get, post, update, remove };
