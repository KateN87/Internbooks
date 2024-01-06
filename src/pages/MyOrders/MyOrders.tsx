import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import mockOrder from '../../MockData/MockOrderUser.json';
import DataCard from '../../components/Cards/DataCard/DataCard';
import { UserContext } from '../../context/UserContext';

const MyOrders = () => {
  const [searchParams] = useSearchParams();
  const { user } = useContext(UserContext);
  const [orderInfo, setOrderInfo] = useState<UserOrder>();
  const orderNr = searchParams.get('order');

  const userAddress = [
    `${user?.firstname} ${user?.lastname}`,
    user?.address,
    `${user?.postcode} ${user?.city}`,
  ];

  const userInfo = {
    Address: userAddress,
  };

  const paymentInfo = {
    Payment: 'credit card',
    'Order placed': '2023-01-01',
  };

  useEffect(() => {
    const order = mockOrder.find((order) => order.orderNr === orderNr);
    /*     const newOrderArray = [
      {}
    ] */
    setOrderInfo(order);
  }, [orderNr]);

  if (!orderInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>MyOrders</h1>
      <DataCard data={userInfo} />
      <DataCard data={paymentInfo} />
    </div>
  );
};

export default MyOrders;
