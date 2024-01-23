/* import { AxiosError, isAxiosError } from 'axios'; */
import { get, update } from '../httpService/http.methods';

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

export const putBook = async (
  itemCode: string,
  book: EditBook
): Promise<EditBook> => {
  try {
    return await update(`${baseUrl}book/${itemCode}`, book, true);
  } catch (error) {
    console.error('putBook API:', error);
    const customError: CustomError = {
      message: 'Problem updating book. Please try again later.',
    };

    throw customError;
  }
};
