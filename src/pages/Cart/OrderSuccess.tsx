import { useLocation, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';
import { HomeContainer, InfoContainers, MainContainer } from './Cart.styled';
import DataCard from '../../components/Cards/DataCard/DataCard';
import UserOrderCard from '../../components/Cards/UserOrderCard/UserOrderCard';

export const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state;

  const userAddress = [
    `${order.firstname} ${order.lastname}`,
    order.address,
    `${order.postcode} ${order.city}`,
  ];

  const userInfo = {
    Address: userAddress,
  };

  const paymentInfo = {
    Payment: 'credit card',
    'Order placed': '2023-01-01',
  };

  if (!order) {
    return <div>Loading...</div>;
  }
  return (
    <MainContainer>
      <h1>Your order has been placed!</h1>
      <h2>Order number: {order.orderNumber}</h2>
      <InfoContainers>
        <div>
          <DataCard data={userInfo} />
          <DataCard data={paymentInfo} />
        </div>

        <UserOrderCard orderInfo={order} />
      </InfoContainers>
      <HomeContainer>
        <CustomButton
          text="Go to home"
          onClick={() => navigate('/')}
          className="large"
        />
      </HomeContainer>
    </MainContainer>
  );
};

export default OrderSuccess;
