import { ChangeEvent, useContext } from 'react';
import { BookInfoStyled, CartCardStyled } from './CartCard.styled';
import blurImage from '/assets/blurImage.jpg';
import CustomTextInput from '../../CustomInput/CustomTextInput';
import { CartContext } from '../../../context/CartContext';
import calculateTotalPrice from '../../../Util/calculateTotalPrice';

export const CartCard = () => {
  const BASE_IMAGE_URL = '/assets/';
  const { cartList } = useContext(CartContext);

  const updateQuantity = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
  };

  return (
    <CartCardStyled>
      {cartList.map((item) => (
        <BookInfoStyled key={item.itemCode}>
          <div className="amount-book">
            <img
              src={
                item?.imageLink
                  ? `${BASE_IMAGE_URL}${item.imageLink}`
                  : blurImage
              }
            />

            <CustomTextInput
              type="number"
              name=""
              placeholder=""
              value={item.quantity}
              onChange={updateQuantity}
              error={null}
            />

            <div className="author-title">
              <p className="bold">{item.name}</p>
              <p>{item.author}</p>
            </div>
          </div>

          <p className="bold">a` {item.price}</p>
        </BookInfoStyled>
      ))}
      <p className="bold price">
        Total Amount: {calculateTotalPrice(cartList)} SEK
      </p>
    </CartCardStyled>
  );
};

export default CartCard;
