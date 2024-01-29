import { SlArrowRight } from 'react-icons/sl';
import { StyledRow, StyledTable } from './Table.styled';
import calculateTotalPrice from '../../Util/calculateTotalPrice';

type OrderTableProps = {
  orderList: UserOrdersDataBase[];
  onClick: (order: UserOrdersDataBase) => void;
};

const OrderTable = ({ orderList, onClick }: OrderTableProps) => {
  const calculatenumberOfItems = (orderItems: OrderItemDataBase[]) => {
    return orderItems.reduce((total, book) => {
      const bookQuantity = book.quantity || 1;

      return total + bookQuantity;
    }, 0);
  };

  return (
    <StyledTable>
      {orderList.length === 0 && (
        <StyledRow className="row">
          <div className="left">
            <p>You don't have any orders yet</p>
          </div>
        </StyledRow>
      )}

      {orderList.length > 0 &&
        orderList.map((order) => (
          <StyledRow
            className="row"
            onClick={() => onClick(order)}
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
            <SlArrowRight className="icon" size={16} />
          </StyledRow>
        ))}
    </StyledTable>
  );
};

export default OrderTable;
