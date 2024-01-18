import { useContext } from 'react';
import { BookInfoStyled, CartCardStyled } from './CartCard.styled';
import blurImage from '/assets/blurImage.jpg';
import { UserContext } from '../../../context/UserContext';

type CartCardProps = {
  cartInfo: CartItem[];
};

export const CartCard = ({ cartInfo }: CartCardProps) => {
  const BASE_IMAGE_URL = '/assets/';
  const { orderSum } = useContext(UserContext);

  return (
    <CartCardStyled>
      {cartInfo.map((item) => (
        <BookInfoStyled key={item.itemCode}>
          <div className="amount-book">
            <img
              src={
                item?.imageLink
                  ? `${BASE_IMAGE_URL}${item.imageLink}`
                  : blurImage
              }
            />
            <p className="bold">{item.quantity}</p>

            <div className="author-title">
              <p className="bold">{item.name}</p>
              <p>{item.author}</p>
            </div>
          </div>

          <p className="bold">a` {item.price}</p>
        </BookInfoStyled>
      ))}
      <p className="bold price">Total Amount: {orderSum} SEK</p>
    </CartCardStyled>
  );
};

export default CartCard;
