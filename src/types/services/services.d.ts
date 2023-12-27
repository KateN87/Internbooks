/// <reference types="vite/client" />
type HttpParams = {
  [key: string]: unknown;
};

type GenericOptions = {
  url: string;
  params?: HttpParams;
};

type ErrorResponse = {
  status: string;
  message: string;
};
