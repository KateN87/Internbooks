import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import DataCard from '../../components/Cards/DataCard/DataCard';
import CartCard from '../../components/Cards/CartCard/CartCard';
import {
  ButtonContainer,
  CartStyled,
  OrderInfoStyled,
  ErrorStyled,
} from './Cart.styled';
import CustomButton from '../../components/Buttons/CustomButton';
import { ErrorContext } from '../../context/ErrorContext';
import ErrorContainer from '../../components/Error/ErrorContainer';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { cartList, placeOrder } = useContext(CartContext);
  const { error, handleError } = useContext(ErrorContext);
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

  const tryPlaceOrder = async () => {
    handleError({ message: '' });
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

      navigate('/cart/success');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  if (!user || cartList.length === 0) {
    return <div>No items in cart</div>;
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
        {error && <ErrorContainer message={error.message} />}
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
