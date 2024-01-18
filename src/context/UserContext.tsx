import {
  createContext,
  useState,
  useMemo,
  useCallback,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { login, logout, registerUser } from '../services/api/authApi';
import { ErrorContext } from './ErrorContext';

type UserContextType = {
  user: User | null;
  orderSum: number;
  loginUser: (formData: Record<string, string>) => void;
  logoutUser: () => void;
  newUser: (formData: Register) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  orderSum: 0,
  loginUser: () => {},
  logoutUser: () => {},
  newUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { handleError } = useContext(ErrorContext);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  //automatically login user
  useEffect(() => {
    const maybeCookie = Cookies.get('accesstoken');
    const maybeUser = localStorage.getItem('user');
    if (!maybeCookie || !maybeUser) {
      return;
    }

    return setUser(JSON.parse(maybeUser));
  }, []);

  const loginUser = useCallback(
    async (formData: Record<string, string>) => {
      try {
        const userResponse: User = await login(formData);
        const newUser = { ...userResponse, inCart: [] };
        delete newUser.jwtToken;
        setUser(newUser);

        const stringUser = JSON.stringify(newUser);
        localStorage.setItem('user', stringUser);

        navigate('/');
      } catch (error) {
        handleError(error as CustomError);
      }
    },
    [navigate, handleError]
  );

  const logoutUser = useCallback(async () => {
    try {
      await logout();
      Cookies.remove('accesstoken');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      navigate('/');
      setUser(null);
    } catch (error) {
      Cookies.remove('accesstoken');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      navigate('/');
      setUser(null);
    }
  }, [navigate]);

  const newUser = useCallback(
    async (formData: Register) => {
      try {
        await registerUser(formData);
        await loginUser({ email: formData.email, password: formData.password });
      } catch (error) {
        handleError(error as CustomError);
      }
    },
    [handleError, loginUser]
  );

  const value = useMemo(
    () => ({
      user,
      loginUser,
      logoutUser,
      newUser,
      setUser,
    }),
    [user, loginUser, logoutUser, newUser, setUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
