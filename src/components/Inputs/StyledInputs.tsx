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
`;
export const StyledTextInput = styled.input`
	font-size: var(--body-text);
	width: 200px;
	height: 40px;
	border-radius: 4px;
	border-width: 1px;
	padding: 5px 15px;
`;
