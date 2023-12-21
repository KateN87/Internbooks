import styled from 'styled-components';
import booksBackground from '../../assets/img/book-photo-cropped.jpg';

export const StyledHomeBanner = styled.div`
	background: url(${booksBackground});
	background-repeat: no-repeat;
	background-size: cover;
	height: 20vh;
	padding: 10px;
`;

export const StyledTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 50%;
	background-color: #ffffffb9;
	padding: 1rem 0.7rem;

	h2 {
		font-family: 'Gruppo';
	}

	p {
		font-size: var(--body-text-medium);
	}
`;