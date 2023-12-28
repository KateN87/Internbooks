import { post } from '../services/httpService/http.methods';

const tryLogin = async (formData: Record<string, string>) => {
  const baseUrl = import.meta.env.VITE_APP_AUTH_URL;

  const maybeSuccess = await post(`${baseUrl}auth/login`, formData, false);

  console.log('SUCCESS: ', maybeSuccess);
};

export default tryLogin;
