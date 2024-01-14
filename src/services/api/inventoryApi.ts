/* import { AxiosError, isAxiosError } from 'axios'; */
import { get } from '../httpService/http.methods';

const baseUrl = '/api/';

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
