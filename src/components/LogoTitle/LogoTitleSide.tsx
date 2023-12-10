import { useNavigate } from 'react-router-dom';
import {
	StyledLogoLarge,
	StyledLogoTitleSide,
	StyledTitleSide,
} from './LogoTitle.styled';

const LogoTitleSide = () => {
	const navigate = useNavigate();
	return (
		<StyledLogoTitleSide onClick={() => navigate('/')}>
			<StyledLogoLarge />
			<StyledTitleSide>Intern Books</StyledTitleSide>
		</StyledLogoTitleSide>
	);
};

export default LogoTitleSide;
