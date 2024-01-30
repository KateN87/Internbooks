import { AxiosError, isAxiosError } from 'axios';
let logoutFunction = () => {};

export const setLogoutFunction = (logout: () => Promise<void>) => {
  logoutFunction = logout;
};

export const handleAuthenticationErrors = (error: unknown | AxiosError) => {
  if (isAxiosError(error)) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      return logoutFunction();
    }
  }
  return Promise.reject(error);
};
