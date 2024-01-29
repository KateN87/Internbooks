import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { BackContainer, InfoContainers, MainContainer } from './Order.styled';
import DataCard from '../../../components/Cards/DataCard/DataCard';
import UserOrderCard from '../../../components/Cards/UserOrderCard/UserOrderCard';

const Order = () => {
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
    <MainContainer className="side">
      <BackContainer onClick={() => navigate(-1)}>
        <HiArrowLeft className="icon" size="30px" />
        <h2>Go Back</h2>
      </BackContainer>
      <h1>Order number: {order.orderNumber}</h1>
      <InfoContainers>
        <div>
          <DataCard data={userInfo} />
          <DataCard data={paymentInfo} />
        </div>

        <UserOrderCard orderInfo={order} />
      </InfoContainers>
    </MainContainer>
  );
};

export default Order;
