import { useNavigate } from 'react-router-dom';
import { StyledLoginSignUp, StyledNavbar } from './Navbar.styled';
import LogoTitle from '../LogoTitle/LogoTitle';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
	const { user } = useContext(UserContext);

	const navigate = useNavigate();
	return (
		<StyledNavbar>
			<LogoTitle />
			<div>
				{!user && (
					<StyledLoginSignUp>
						<button onClick={() => navigate('/login')}>Login</button>
						<button onClick={() => navigate('/signup')}>Sign up</button>
					</StyledLoginSignUp>
				)}
				{user && (
					<>
						<button onClick={() => navigate('/profile')}>Profile</button>
						<button onClick={() => navigate('/book/2')}>Book</button>
					</>
				)}
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
