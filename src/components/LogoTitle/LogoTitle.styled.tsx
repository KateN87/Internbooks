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
	flex-direction: 'row';
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
	padding: 20px;
`;
