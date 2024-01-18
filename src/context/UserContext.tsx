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
import { postOrder } from '../services/api/orderApi';

type UserContextType = {
  user: User | null;
  orderSum: number;
  loginUser: (formData: Record<string, string>) => void;
  logoutUser: () => void;
  newUser: (formData: Register) => void;
  updateCart: (bookItem: Book) => void;
  placeOrder: (order: UserOrderDataBase) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  orderSum: 0,
  loginUser: () => {},
  logoutUser: () => {},
  newUser: () => {},
  updateCart: () => {},
  placeOrder: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { handleError } = useContext(ErrorContext);
  const [user, setUser] = useState<User | null>(null);
  const [orderSum, setOrderSum] = useState(0);
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

      const existingBook = prevUser.inCart.find(
        (book) => book.itemCode === bookItem.itemCode
      );

      if (existingBook) {
        // Book is already in the cart, update quantity
        const updatedCart = prevUser.inCart.map((book) =>
          book.itemCode === bookItem.itemCode
            ? { ...book, quantity: (book.quantity || 1) + 1 }
            : book
        );

        const updatedUser = { ...prevUser, inCart: updatedCart };

        localStorage.setItem('user', JSON.stringify(updatedUser));
        return updatedUser;
      } else {
        // Book is not in the cart, add with quantity 1
        const updatedUser = {
          ...prevUser,
          inCart: [...prevUser.inCart, { ...bookItem, quantity: 1 }],
        };
        setOrderSum((prev) => prev + bookItem.price);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        return updatedUser;
      }
    });
  }, []);

  const placeOrder = useCallback(
    async (order: UserOrderDataBase) => {
      try {
        await postOrder(order);
      } catch (error) {
        handleError(error as CustomError);
        throw new Error();
      }
    },
    [handleError]
  );

  const value = useMemo(
    () => ({
      user,
      orderSum,
      loginUser,
      logoutUser,
      newUser,
      setUser,
      updateCart,
      placeOrder,
    }),
    [
      user,
      orderSum,
      loginUser,
      logoutUser,
      newUser,
      setUser,
      updateCart,
      placeOrder,
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
