import styled from 'styled-components';

export const StyledBookCard = styled.div`
  display: flex;
  border: 1px solid var(--medium-grey);
  border-radius: 2px;
  margin: 10px;
  box-shadow: 1px 3px var(--light-grey);
  width: 190px;
  height: 280px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & .inner-container {
    display: flex;
    flex-direction: column;

    width: 170px;
  }

  & img {
    width: 170px;
    height: 190px;
    margin: 0 auto;
  }
`;

export const StyledBookInfo = styled.div`
  position: relative;
  height: 70px;

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
