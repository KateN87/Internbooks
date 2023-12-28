import { post } from '../services/httpService/http.methods';

const tryLogin = async (formData: Record<string, string>) => {
  const maybeSuccess = await post('auth/login', formData, false);

  console.log(maybeSuccess);
};

export default tryLogin;
