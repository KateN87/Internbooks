import styled from 'styled-components';

export const CartCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--medium-grey);
  border-radius: 2px;
  margin: 10px;
  box-shadow: 1px 2px var(--light-grey);
  width: 100%;
  height: fit-content;
  padding: 10px;
  background-color: #ffffff;

  .bold {
    font-weight: bold;
  }

  .price {
    margin-top: 20px;
    align-self: flex-end;
  }
`;

export const BookInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 0;

  & .amount-book {
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
  }

  & .author-title {
    margin-left: 6vw;
  }

  & img {
    width: 50px;
    height: 60px;
    margin-right: 10px;
  }
`;
