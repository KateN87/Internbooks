import { PiUserCircleThin, PiBasketThin, PiSignOutThin } from 'react-icons/pi';
import { CartContainer, StyledNavIcons } from './NavIcons.styled';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const NavIcons = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(UserContext);

  const itemsInCart = user?.inCart;
  const totalQuantityInCart = itemsInCart?.reduce(
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
          {itemsInCart && itemsInCart.length >= 1 && (
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
