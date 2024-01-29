import { useNavigate } from 'react-router-dom';
import OrderTable from '../../components/Table/OrderTable';
import { useEffect, useState } from 'react';
import { getAllOrders } from '../../services/api/orderApi';
import { StyledOrderPage } from './Orders.styled';

const Orders = () => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState<UserOrdersDataBase[]>([]);

  const goToOrder = (order: UserOrdersDataBase) => {
    navigate('/orders/order', { state: order });
  };

  useEffect(() => {
    const getOrders = async () => {
      const orderResponse = await getAllOrders();
      setOrderList(orderResponse);
      return;
    };

    getOrders();
  }, [navigate]);

  return (
    <StyledOrderPage className="side">
      <h1>Orders</h1>
      <OrderTable orderList={orderList} onClick={goToOrder} />
    </StyledOrderPage>
  );
};

export default Orders;
