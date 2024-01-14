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
  loginUser: (formData: Record<string, string>) => void;
  logoutUser: () => void;
  newUser: (formData: Register) => void;
  updateCart: (bookItem: Book) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
  newUser: () => {},
  updateCart: () => {},
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
        console.log(newUser);
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
      navigate('/');
      setUser(null);
    } catch (error) {
      Cookies.remove('accesstoken');
      localStorage.removeItem('user');
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

  const updateCart = useCallback((bookItem: Book) => {
    setUser((prevUser) => {
      if (!prevUser) {
        return prevUser; // If prevUser is null or undefined, return as is
      }
      if (prevUser.inCart.length > 0) {
        return { ...prevUser, inCart: [...prevUser.inCart, bookItem] };
      }
      return { ...prevUser, inCart: [bookItem] };
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      loginUser,
      logoutUser,
      newUser,
      setUser,
      updateCart,
    }),
    [user, loginUser, logoutUser, newUser, setUser, updateCart]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
