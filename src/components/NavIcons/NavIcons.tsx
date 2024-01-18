import { PiUserCircleThin, PiBasketThin, PiSignOutThin } from 'react-icons/pi';
import { CartContainer, StyledNavIcons } from './NavIcons.styled';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

export const NavIcons = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(UserContext);
  const { cartList } = useContext(CartContext);

  const totalQuantityInCart = cartList?.reduce(
    (total, book) => (total += book.quantity),
    0
  );

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <StyledNavIcons>
      <PiUserCircleThin size={24} onClick={() => navigate('/profile')} />
      {user && user.role === 'USER' && (
        <CartContainer onClick={() => navigate('/cart')}>
          {cartList && cartList.length >= 1 && (
            <div className="items-in-cart">
              <p>{totalQuantityInCart}</p>
            </div>
          )}
          <PiBasketThin size={24} onClick={() => navigate('/cart')} />
        </CartContainer>
      )}

      <PiSignOutThin size={24} onClick={handleLogout} />
    </StyledNavIcons>
  );
};
