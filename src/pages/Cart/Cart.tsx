import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import DataCard from '../../components/Cards/DataCard/DataCard';
import UserOrderCard from '../../components/Cards/UserOrderCard/UserOrderCard';
import CartCard from '../../components/Cards/CartCard/CartCard';

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

  if (!user.inCart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <DataCard data={userInfo} />
        <DataCard data={paymentInfo} />
      </div>
      <CartCard cartInfo={user.inCart} />
    </div>
  );
};

export default Cart;
