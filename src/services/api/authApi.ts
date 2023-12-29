import { post } from '../httpService/http.methods';

const baseUrl = import.meta.env.VITE_APP_AUTH_URL;

const Login = async (formData: Record<string, string>): Promise<User> => {
  try {
    return await post(`${baseUrl}auth/login`, formData, false);
  } catch (error) {
    const customError: CustomError = {
      message: 'Problem logging in. Check your password and email address.',
    };
    throw customError;
  }
};

export default Login;
