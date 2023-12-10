import { styled } from 'styled-components';
import Logo from '../../assets/logo-png.png';

export const StyledLogoTitle = styled.div`
	display: flex;
	flex-direction: 'row';
	align-items: center;
	cursor: pointer;
`;

export const StyledLogo = styled.div`
	display: flex;
	height: 40px;
	width: 60px;
	margin-left: 20px;
	background: url(${Logo});
	background-size: contain;
	background-repeat: no-repeat;
`;

export const StyledTitle = styled.h1`
	font-family: 'Gruppo';
	font-weight: 400;
	font-size: 42px;
	letter-spacing: 3px;
	padding: 0 20px;
`;

export const StyledLogoTitleSide = styled(StyledLogoTitle)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const StyledTitleSide = styled(StyledTitle)`
	font-size: 38px;
	padding-bottom: 20px;
`;

export const StyledLogoLarge = styled(StyledLogo)`
	height: 60px;
	width: 70px;
	margin: 20px;
`;

export const StyledLogoXL = styled(StyledLogo)`
	height: 90px;
	width: 120px;
`;

export const StyledTitleLarge = styled(StyledTitle)`
	font-size: 52px;
`;
