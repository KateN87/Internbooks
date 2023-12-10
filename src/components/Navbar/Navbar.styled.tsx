import { styled } from 'styled-components';

export const StyledNavbar = styled.div`
	display: flex;
	flex-direction: 'row';
	align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid var(--light-grey);
	height: 60px;
	padding: 0 10px;
	background-color: #ffffff;
`;

export const StyledLoginSignUp = styled.div`
	button {
		background-color: inherit;
		border: none;
		cursor: pointer;
		font-size: 18px;
		font-family: 'Gruppo';
		font-weight: 700;
		margin: 0 20px;

		&:active {
			color: #2424247f;
		}
	}
`;
