import Cookies from 'js-cookie';

const getAuthorization = () => {
  const accessToken = Cookies.get('accesstoken') || '';

  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
};

export default getAuthorization;
