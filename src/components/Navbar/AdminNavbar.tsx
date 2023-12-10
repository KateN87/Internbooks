import { useLocation, useNavigate } from 'react-router-dom';
import { StyledSideNavbar, StyledTextButtonSide } from './Navbar.styled';
import LogoTitleSide from '../LogoTitle/LogoTitleSide';
import { NavIcons } from '../NavIcons/NavIcons';

const AdminNavbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	console.log('LOCATION', location.pathname);
	return (
		<StyledSideNavbar>
			<LogoTitleSide />
			<StyledTextButtonSide>
				<div>
					<button
						onClick={() => navigate('/')}
						className={location.pathname === '/' ? 'current' : ''}
					>
						Inventory
					</button>
					<button
						onClick={() => navigate('/orders')}
						className={location.pathname === '/orders' ? 'current' : ''}
					>
						Orders
					</button>
				</div>
				<NavIcons />
			</StyledTextButtonSide>
		</StyledSideNavbar>
	);
};

export default AdminNavbar;
