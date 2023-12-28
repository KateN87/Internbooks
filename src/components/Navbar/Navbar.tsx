import { useNavigate } from 'react-router-dom';
import { StyledNavbar, StyledTextButton } from './Navbar.styled';
import LogoTitle from '../LogoTitle/LogoTitle';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { NavIcons } from '../NavIcons/NavIcons';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <LogoTitle />
      <div>
        {!user && (
          <StyledTextButton>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Sign up</button>
          </StyledTextButton>
        )}
        {user && <NavIcons />}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
