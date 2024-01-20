import calculateTotalPrice from '../../../Util/calculateTotalPrice';
import { BookInfoStyled, UserOrderCardStyled } from './UserOrderCard.styled';

type OrderCardProps = {
  orderInfo: UserOrdersDataBase;
};

export const UserOrderCard = ({ orderInfo }: OrderCardProps) => {
  console.log('ORDERITEMS: ', orderInfo.orderItems);
  return (
    <UserOrderCardStyled>
      {orderInfo.orderItems.map((item) => (
        <BookInfoStyled key={item.id}>
          <div className="amount-book">
            <p className="bold">{item.quantity}</p>

            <div className="author-title">
              <p className="bold">{item.productName}</p>
            </div>
          </div>

          <p className="bold">a` {item.price}</p>
        </BookInfoStyled>
      ))}
      <p className="bold price">
        Total Amount: {calculateTotalPrice({ cart: orderInfo.orderItems })} SEK
      </p>
    </UserOrderCardStyled>
  );
};

export default UserOrderCard;
