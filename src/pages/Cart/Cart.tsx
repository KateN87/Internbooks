import { useCallback, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import DataCard from '../../components/Cards/DataCard/DataCard';
import CartCard from '../../components/Cards/CartCard/CartCard';
import {
  ButtonContainer,
  CartStyled,
  OrderInfoStyled,
  ErrorStyled,
  StyledEmpty,
} from './Cart.styled';
import CustomButton from '../../components/Buttons/CustomButton';
import { ErrorContext } from '../../context/ErrorContext';
import ErrorContainer from '../../components/Error/ErrorContainer';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { BookContext } from '../../context/BookContext';

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { cartList, placeOrder, emptyCart } = useContext(CartContext);
  const { bookList, getBooks } = useContext(BookContext);
  const { error, handleError } = useContext(ErrorContext);
  const [outOfStock, setOutOfStock] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const userAddress = [
    `${user?.firstname} ${user?.lastname}`,
    user?.address,
    `${user?.postcode} ${user?.city}`,
  ];

  const userInfo = {
    Address: userAddress,
  };

  const paymentInfo = {
    'Card number': '123-456-789',
    'Expiration date': '11/24',
    CVV: '123',
  };

  const findBooks = useCallback(() => {
    if (error && error.data) {
      const books = error?.data
        .map((data) => {
          const foundBook = bookList.find((book) => data === book.itemCode);
          return foundBook;
        })
        .filter((book) => book !== null) as Book[];

      setOutOfStock(books);
    }
  }, [bookList, error]);

  useEffect(() => {
    if (error?.data && bookList.length === 0) {
      getBooks();
    } else if (error?.data) {
      findBooks();
    }
  }, [error?.data, bookList, findBooks, getBooks]);

  const tryPlaceOrder = async () => {
    /* clearError(); */
    if (!user) {
      return handleError({
        message: 'You need to be logged in to place order',
      });
    }

    const orderItemsDTO = cartList.map((item) => {
      setIsLoading(true);
      const { itemCode, name, price, quantity } = item;

      // Create a new object with the desired properties
      return {
        itemCode,
        productName: name,
        price,
        quantity,
        // Add more properties as needed
      };
    });
    const { firstname, lastname, email, address, city, postcode, phoneNumber } =
      user;
    const newOrder = {
      firstname,
      lastname,
      email,
      address,
      city,
      postcode,
      phoneNumber,
      orderItemsDTO,
    };

    try {
      await placeOrder(newOrder);
      emptyCart();
      navigate('/cart/success');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  if (!user || cartList.length === 0) {
    return (
      <StyledEmpty>
        <p>It seems like your cart is empty!</p>
        <p>Check out the awesome books we have in our store.</p>
        <CustomButton
          text="Browse Books"
          className="large"
          onClick={() => navigate('/')}
        />
      </StyledEmpty>
    );
  }

  return (
    <CartStyled>
      <OrderInfoStyled>
        <div>
          <DataCard data={userInfo} />
          <DataCard data={paymentInfo} />
        </div>
        <CartCard />
      </OrderInfoStyled>
      <ErrorStyled>
        {error && (
          <>
            <ErrorContainer message={error.message} />
          </>
        )}
        {outOfStock.length > 0 && (
          <div className="stock">
            <p>The following book(s) are out of stock:</p>
            <ul>
              {outOfStock.map((book) => (
                <li key={book.itemCode}>
                  <p>{book.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ErrorStyled>
      <ButtonContainer>
        <CustomButton
          text={isLoading ? 'Loading...' : 'Place order'}
          className="medium"
          onClick={tryPlaceOrder}
          disabled={isLoading}
        />
      </ButtonContainer>
    </CartStyled>
  );
};

export default Cart;
