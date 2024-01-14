import { BookInfoStyled, UserOrderCardStyled } from './UserOrderCard.styled';
import blurImage from '/assets/blurImage.jpg';

type OrderCardProps = {
  orderInfo: UserOrder;
};

export const UserOrderCard = ({ orderInfo }: OrderCardProps) => {
  const BASE_IMAGE_URL = '/assets/';

  return (
    <UserOrderCardStyled>
      {orderInfo.items.map((item) => (
        <BookInfoStyled key={item.id}>
          <div className="amount-book">
            <img
              src={item?.image ? `${BASE_IMAGE_URL}${item.image}` : blurImage}
            />
            <p className="bold">{item.amount}</p>

            <div className="author-title">
              <p className="bold">{item.title}</p>
              <p>{item.author}</p>
            </div>
          </div>

          <p className="bold">a` {item.price}</p>
        </BookInfoStyled>
      ))}
      <p className="bold price">Total Amount: {orderInfo.price} SEK</p>
    </UserOrderCardStyled>
  );
};

export default UserOrderCard;
