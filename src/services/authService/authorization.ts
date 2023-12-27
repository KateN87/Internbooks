import Cookies from 'js-cookie';

const getAuthorization = () => {
  const accessToken = Cookies.get('AccessToken') || '';
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
};

export default getAuthorization;
