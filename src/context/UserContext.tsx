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
import Login from '../services/api/authApi';
import { ErrorContext } from './ErrorContext';

type UserContextType = {
  user: User | null;
  loginUser: (formData: Record<string, string>) => void;
  logoutUser: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
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
        const userResponse: User = await Login(formData);
        const newUser = { ...userResponse };
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

  const logoutUser = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loginUser,
      logoutUser,
      setUser,
    }),
    [user, loginUser, logoutUser, setUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
