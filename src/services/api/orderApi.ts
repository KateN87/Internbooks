import { post } from '../httpService/http.methods';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const postOrder = async (
  order: UserOrderDataBase
): Promise<UserOrderDataBase> => {
  try {
    return await post(`${baseUrl}order`, order, true);
  } catch (error) {
    const customError: CustomError = {
      message: 'Problem placing order in. Please try again later.',
    };
    throw customError;
  }
};
