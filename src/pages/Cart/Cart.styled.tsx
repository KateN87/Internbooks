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
  margin-right: 10px;

  & .stock {
    margin: 10px;
    & li {
      list-style-type: circle;
      color: var(--error);
    }
    & p {
      font-weight: bold;
      color: var(--error);
    }
  }
`;

export const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  width: 350px;
  background-color: #ffffff;
  padding: 40px;
  margin: 40px auto;

  & p {
    font-size: var(--body-text-medium);
    margin-bottom: 10px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  padding-left: 140px;
  margin: auto;

  & h1,
  h2 {
    align-self: flex-start;
    margin: 20px 0;
  }
`;

export const InfoContainers = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-self: flex-end;
`;
