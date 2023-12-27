import { AxiosResponse, AxiosRequestConfig } from 'axios';
import http from './http.instance';
import getAuthorization from '../authService/authorization';
import { EHttpMethod } from '../../types/enums/enums';

const setupHeaders = (hasAttachment: boolean = false) => {
  return hasAttachment
    ? { 'Content-Type': 'multipart/form-data', ...getAuthorization() }
    : { 'Content-Type': 'application/json', ...getAuthorization() };
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
    return Promise.reject(error);
  }
};

const get = async <T>(
  url: string,
  params?: HttpParams,
  hasAttachment: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.GET, url, {
    params,
    headers: setupHeaders(hasAttachment),
  });
};

const post = async <T, P>(
  url: string,
  payload: P,
  params?: HttpParams,
  hasAttachment: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.POST, url, {
    params,
    data: payload,
    headers: setupHeaders(hasAttachment),
  });
};

const update = async <T, P>(
  url: string,
  payload: P,
  params?: HttpParams,
  hasAttachment: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.PUT, url, {
    params,
    data: payload,
    headers: setupHeaders(hasAttachment),
  });
};

const remove = async <T>(
  url: string,
  params?: HttpParams,
  hasAttachment: boolean = false
): Promise<T> => {
  return request<T>(EHttpMethod.DELETE, url, {
    params,
    headers: setupHeaders(hasAttachment),
  });
};

export { get, post, update, remove };
