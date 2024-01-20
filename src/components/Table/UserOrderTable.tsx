import { SlArrowRight } from 'react-icons/sl';
import { StyledRow, StyledTable } from './Table.styled';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getUserOrder } from '../../services/api/orderApi';
import { UserContext } from '../../context/UserContext';
import calculateTotalPrice from '../../Util/calculateTotalPrice';

const UserOrderTable = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [orderList, setOrderList] = useState<UserOrdersDataBase[]>([]);

  const goToOrder = (order: UserOrdersDataBase) => {
    navigate('/profile/myorders', { state: order });
  };

  const calculatenumberOfItems = (orderItems: OrderItemDataBase[]) => {
    return orderItems.reduce((total, book) => {
      const bookQuantity = book.quantity || 1;

      return total + bookQuantity;
    }, 0);
  };

  useEffect(() => {
    const getOrders = async () => {
      if (user && user.email) {
        const orderResponse = await getUserOrder(user.email);
        setOrderList(orderResponse);
      }
      return;
    };

    getOrders();
  }, [user]);

  return (
    <StyledTable>
      {orderList.length === 0 && (
        <StyledRow className="row">
          <div className="left">
            <p>You have not yet made any orders</p>
          </div>
        </StyledRow>
      )}

      {orderList.length > 0 &&
        orderList.map((order) => (
          <StyledRow
            className="row"
            onClick={() => goToOrder(order)}
            key={order.orderNumber}
          >
            <div className="left">
              <p>
                <b>Order Nr: </b>
                {order.orderNumber}
              </p>
            </div>
            <div className="right">
              <p>
                <b>Number of Items: </b>
                {calculatenumberOfItems(order.orderItems)}
              </p>
              <p>
                <b>Price: </b>
                {calculateTotalPrice({ cart: order.orderItems })}
              </p>
            </div>
            <SlArrowRight />
          </StyledRow>
        ))}
    </StyledTable>
  );
};

export default UserOrderTable;
