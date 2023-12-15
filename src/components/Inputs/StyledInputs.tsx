import styled from 'styled-components';

export const StyledWrapper = styled.div`
	position: relative;
`;

export const StyledLabel = styled.label`
	background-color: white;
	position: absolute;
	left: 10px;
	top: -12px;
	z-index: 10;
	padding: 5px;
	color: var(--dark-grey);

	&.error {
		color: var(--error);
	}
`;
export const StyledTextInput = styled.input`
	font-size: var(--body-text);
	width: 200px;
	height: 40px;
	border: 1px solid var(--medium-grey);
	border-radius: 4px;
	padding: 5px 15px;

	&.error {
		border: 1px solid var(--error);
	}
`;
