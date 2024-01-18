/* import { AxiosError, isAxiosError } from 'axios'; */
import { get } from '../httpService/http.methods';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

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
