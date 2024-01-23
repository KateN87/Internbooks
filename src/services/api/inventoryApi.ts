/* import { AxiosError, isAxiosError } from 'axios'; */
import { get, update } from '../httpService/http.methods';

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

export const putInventory = async (
  itemCode: string,
  quantity: number
): Promise<InventoryItem[]> => {
  try {
    const book = {};
    return await update(
      `${baseUrl}inventory/${itemCode}/${quantity}`,
      book,
      true
    );
  } catch (error) {
    console.error('putAll API:', error);
    const customError: CustomError = {
      message: 'Problem updating inventory. Please try again later.',
    };

    throw customError;
  }
};
