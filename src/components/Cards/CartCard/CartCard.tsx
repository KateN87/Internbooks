import { BookInfoStyled, UserOrderCardStyled } from './CartCard.styled';
import blurImage from '/assets/blurImage.jpg';

type CartCardProps = {
  cartInfo: Book[] | [];
};

export const CartCard = ({ cartInfo }: CartCardProps) => {
  const BASE_IMAGE_URL = '/assets/';

  return (
    <UserOrderCardStyled>
      {cartInfo.map((item) => (
        <BookInfoStyled key={item.itemCode}>
          <div className="amount-book">
            <img
              src={item?.image ? `${BASE_IMAGE_URL}${item.image}` : blurImage}
            />
            {/* <p className="bold">{item.amount}</p> */}

            <div className="author-title">
              <p className="bold">{item.name}</p>
              <p>{item.author}</p>
            </div>
          </div>

          <p className="bold">a` {item.price}</p>
        </BookInfoStyled>
      ))}
      {/* <p className="bold price">Total Amount: {orderInfo.price} SEK</p> */}
    </UserOrderCardStyled>
  );
};

export default CartCard;
