import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import DataCard from '../../components/Cards/DataCard/DataCard';
import CartCard from '../../components/Cards/CartCard/CartCard';
import { ButtonContainer, CartStyled, OrderInfoStyled } from './Cart.styled';
import CustomButton from '../../components/Buttons/CustomButton';

const Cart = () => {
  const { user } = useContext(UserContext);

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

  if (!user || !user.inCart) {
    return <div>Loading...</div>;
  }

  return (
    <CartStyled>
      <OrderInfoStyled>
        <div>
          <DataCard data={userInfo} />
          <DataCard data={paymentInfo} />
        </div>
        <CartCard cartInfo={user.inCart} />
      </OrderInfoStyled>
      <ButtonContainer>
        <CustomButton text="Place order" className="medium" />
      </ButtonContainer>
    </CartStyled>
  );
};

export default Cart;
