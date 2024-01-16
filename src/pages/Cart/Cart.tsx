import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import DataCard from '../../components/Cards/DataCard/DataCard';

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

  return (
    <div>
      <div>
        <DataCard data={userInfo} />
        <DataCard data={paymentInfo} />
      </div>
    </div>
  );
};

export default Cart;
