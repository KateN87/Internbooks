// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError, isAxiosError } from 'axios';
import { post } from '../httpService/http.methods';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const login = async (
  formData: Record<string, string>
): Promise<User> => {
  try {
    return await post(`${baseUrl}auth/login`, formData, false);
  } catch (error) {
    const customError: CustomError = {
      message: 'Problem logging in. Check your password and email address.',
    };
    throw customError;
  }
};

export const logout = async () => {
  try {
    return await post(`${baseUrl}auth/logout`, {}, true);
  } catch (error) {
    const customError: CustomError = {
      message: 'Problem logging out, try again later',
    };
    throw customError;
  }
};

export const registerUser = async (formData: Register) => {
  try {
    const trysignup: User = await post(
      `${baseUrl}auth/register`,
      formData,
      false
    );
    return trysignup;
  } catch (error: unknown | AxiosError) {
    const customError: CustomError = { message: '' };

    if (isAxiosError(error)) {
      if (error?.response?.data.message === 'Email taken') {
        customError.message =
          'An account is already associated with this email';
      } else {
        customError.message = error?.response?.data.message[0];
      }
    } else {
      customError.message = 'Problem register.';
    }

    throw customError;
  }
};
