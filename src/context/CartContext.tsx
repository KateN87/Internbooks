import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ErrorContext } from './ErrorContext';
import { postOrder } from '../services/api/orderApi';

type CartContextType = {
  cartList: CartItem[];
  updateCart: (bookItem: Book, type: string, amount: number) => void;
  placeOrder: (order: UserOrderDataBase) => void;
};

export const CartContext = createContext<CartContextType>({
  cartList: [],
  updateCart: () => {},
  placeOrder: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { handleError } = useContext(ErrorContext);
  const [cartList, setCartList] = useState<CartItem[]>([]);

  //automatically login user
  useEffect(() => {
    const maybeCart = localStorage.getItem('cart');
    if (!maybeCart) {
      return setCartList([]);
    }

    return setCartList(JSON.parse(maybeCart));
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

  const updateCart = useCallback(
    (bookItem: Book, type: string, amount: number) => {
      setCartList((prev) => {
        const existingBook = prev.find(
          (book) => book.itemCode === bookItem.itemCode
        );

        if (!existingBook) {
          // If book is not in cart previously
          const updatedCart = [...prev, { ...bookItem, quantity: amount }];
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return updatedCart;
        }

        if (amount === 0) {
          const updatedCart = prev.filter(
            (book) => book.itemCode !== bookItem.itemCode
          );
          setCartList(updatedCart);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return updatedCart;
        }

        // Book is already in the cart, update quantity
        const updatedCart = prev.map((book) =>
          book.itemCode === bookItem.itemCode
            ? {
                ...book,
                quantity: type === 'add' ? (book.quantity || 1) + 1 : amount,
              }
            : book
        );

        setCartList(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    []
  );

  const value = useMemo(
    () => ({
      cartList,
      updateCart,
      placeOrder,
    }),
    [cartList, updateCart, placeOrder]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
