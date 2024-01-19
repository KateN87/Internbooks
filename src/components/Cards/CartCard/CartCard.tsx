import { ChangeEvent, useContext } from 'react';
import { PiTrashLight } from 'react-icons/pi';
import { BookInfoStyled, CartCardStyled } from './CartCard.styled';
import blurImage from '/assets/blurImage.jpg';
import { CartContext } from '../../../context/CartContext';
import calculateTotalPrice from '../../../Util/calculateTotalPrice';
import CustomListInput from '../../CustomInput/CustomListInput';

export const CartCard = () => {
  const BASE_IMAGE_URL = '/assets/';
  const { cartList, updateCart } = useContext(CartContext);

  const numberList = Array.from({ length: 99 }, (_, index) => index + 1);

  const deleteHandler = (bookItem: CartItem) => {
    updateCart(bookItem, 'null', 0);
  };

  const updateQuantity = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    bookItem: CartItem
  ) => {
    const newAmount = Number(e.target.value);

    // Clamp the new amount within the range 1 to 99
    const clampedAmount = Math.min(Math.max(newAmount, 1), 99);

    updateCart(bookItem, 'null', clampedAmount);
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

            <CustomListInput
              type="number"
              name="items"
              value={item.quantity}
              onChange={(e) => updateQuantity(e, item)}
              minInput={1}
              maxInput={99}
              numberOptions={numberList}
            />
            <PiTrashLight
              size={24}
              className="trash"
              onClick={() => deleteHandler(item)}
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
