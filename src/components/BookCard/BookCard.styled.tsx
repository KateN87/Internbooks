import styled from 'styled-components';

export const StyledBookCard = styled.div`
	display: flex;
	border: 1px solid var(--medium-grey);
	border-radius: 2px;
	margin: 10px;
	box-shadow: 1px 3px var(--light-grey);
	width: 18rem;
	height: 30vh;
	justify-content: center;
	align-items: center;

	& div {
		width: 16rem;
	}
	& img {
		width: 16rem;
		height: 20vh;
	}
`;

export const StyledBookInfo = styled.div`
	position: relative;
	height: 8vh;

	.title {
		font-size: 16px;
	}
	.author {
		font-style: italic;
		font-size: 10px;
	}
	.price {
		font-size: 16px;
	}

	.price-buy {
		position: absolute;
		right: 0;
		bottom: 0;
		width: fit-content;
		text-align: right;
	}
`;
