import styled from 'styled-components';

export const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 80%;
  max-width: 1000px;
`;

export const OrderInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /*   height: 40px; */
  margin-right: 10px;

  & .stock {
    margin: 10px;
    & li {
      list-style-type: circle;
      color: red;
    }
    & p {
      font-weight: bold;
      color: red;
    }
  }
`;
