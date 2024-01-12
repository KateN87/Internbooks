// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError, isAxiosError } from 'axios';
import { get } from '../httpService/http.methods';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getInventoryAll = async (): Promise<InventoryItem[]> => {
  try {
    return await get(`${baseUrl}inventory/all`, true);
  } catch (error) {
    console.error('getInventoryAll API:', error);
    const customError: CustomError = {
      message: 'Problem getting inventory. Please try again later.',
    };

    throw customError;
  }
};
