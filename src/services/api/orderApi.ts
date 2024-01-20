import { AxiosError, isAxiosError } from 'axios';
import { post, get } from '../httpService/http.methods';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const postOrder = async (
  order: UserOrderDataBase
): Promise<UserOrderDataBase> => {
  try {
    return await post(`${baseUrl}order`, order, true);
  } catch (error: unknown | AxiosError) {
    const customError: CustomError = { message: '' };

    if (isAxiosError(error)) {
      if (error?.response?.data.message.includes('Items out of stock:')) {
        customError.message =
          'Sorry, one or more items in your order is out of stock';
      }
    } else {
      customError.message = 'Problem placing order. Please try again later.';
    }
    throw customError;
  }
};

export const getUserOrder = async (
  email: string
): Promise<UserOrdersDataBase[]> => {
  try {
    return await get(`${baseUrl}order/${email}`, true);
  } catch (error) {
    console.error('getUserOrder:', error);
    const customError: CustomError = {
      message: 'Problem getting orders. Please try again later.',
    };

    throw customError;
  }
};
