import { AxiosError, isAxiosError } from 'axios';
import { post } from '../httpService/http.methods';

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
      customError.message = 'Problem register.';
    }
    throw customError;
  }
};

/* Problem placing order in. Please try again later. */
