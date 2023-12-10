import { useNavigate } from 'react-router-dom';
import {
	StyledLogoTitle,
	StyledTitleLarge,
	StyledLogoXL,
} from './LogoTitle.styled';

const LogoTitleLarge = () => {
	const navigate = useNavigate();
	return (
		<StyledLogoTitle onClick={() => navigate('/')}>
			<StyledLogoXL />
			<StyledTitleLarge>Intern Books</StyledTitleLarge>
		</StyledLogoTitle>
	);
};

export default LogoTitleLarge;
