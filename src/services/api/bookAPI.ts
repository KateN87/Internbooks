/* import { AxiosError, isAxiosError } from 'axios'; */
import { get } from '../httpService/http.methods';

const baseUrl = '/api/';

export const getAllBooks = async (): Promise<Book[]> => {
  try {
    return await get(`${baseUrl}book/all`, true);
  } catch (error) {
    console.error('getBooks API:', error);
    const customError: CustomError = {
      message: 'Problem getting books. Please try again later.',
    };

    throw customError;
  }
};

/* export const logout = async () => {
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
    console.log(trysignup);
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
}; */
