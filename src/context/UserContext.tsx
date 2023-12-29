import {
  createContext,
  useState,
  useMemo,
  useCallback,
  ReactNode,
  useContext,
} from 'react';
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

  const loginUser = useCallback(
    async (formData: Record<string, string>) => {
      try {
        const userResponse: User = await Login(formData);
        const newUser = { ...userResponse };
        delete newUser.jwtToken;

        setUser(newUser);
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
