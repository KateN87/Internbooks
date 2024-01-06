import { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import mockOrder from '../../MockData/MockOrderUser.json';
import DataCard from '../../components/Cards/DataCard/DataCard';
import { UserContext } from '../../context/UserContext';
import UserOrderCard from '../../components/Cards/UserOrderCard/UserOrderCard';
import {
  BackContainer,
  InfoContainers,
  MainContainer,
} from './MyOrders.styled';

const MyOrders = () => {
  const navigate = useNavigate();
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
    setOrderInfo(order);
  }, [orderNr]);

  if (!orderInfo) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <BackContainer onClick={() => navigate(-1)}>
        <HiArrowLeft className="icon" size="30px" />
        <h2>Go Back</h2>
      </BackContainer>
      <h1>Order number: {orderNr}</h1>
      <InfoContainers>
        <div>
          <DataCard data={userInfo} />
          <DataCard data={paymentInfo} />
        </div>

        <UserOrderCard orderInfo={orderInfo} />
      </InfoContainers>
    </MainContainer>
  );
};

export default MyOrders;
