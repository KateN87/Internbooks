import { useNavigate } from 'react-router-dom';
import { StyledLogo, StyledLogoTitle, StyledTitle } from './LogoTitle.styled';

const LogoTitle = () => {
	const navigate = useNavigate();
	return (
		<StyledLogoTitle onClick={() => navigate('/')}>
			<StyledLogo />
			<StyledTitle>Intern Books</StyledTitle>
		</StyledLogoTitle>
	);
};

export default LogoTitle;
