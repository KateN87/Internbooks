import { PiUserCircleThin, PiBasketThin, PiSignOutThin } from 'react-icons/pi';
import { StyledNavIcons } from './NavIcons.styled';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const NavIcons = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	return (
		<StyledNavIcons>
			<PiUserCircleThin size={24} onClick={() => navigate('/profile')} />
			{user && user.role === 'user' && (
				<PiBasketThin size={24} onClick={() => navigate('/cart')} />
			)}

			<PiSignOutThin size={24} />
		</StyledNavIcons>
	);
};
