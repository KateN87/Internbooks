import { PiUserCircleThin, PiBasketThin, PiSignOutThin } from 'react-icons/pi';
import { StyledNavIcons } from './NavIcons.styled';
import { useNavigate } from 'react-router-dom';
export const NavIcons = () => {
	const navigate = useNavigate();
	return (
		<StyledNavIcons>
			<PiUserCircleThin size={24} onClick={() => navigate('/profile')} />
			<PiBasketThin size={24} onClick={() => navigate('/cart')} />
			<PiSignOutThin size={24} />
		</StyledNavIcons>
	);
};
